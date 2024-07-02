import { importTemplate, apiTemplate, getTemplate, interfaceTemplate, nameSpaceTemplate } from "./templates";
import * as protobuf from 'protobufjs';

export type AllDataType = {
  methods: protobuf.IService,
  types: protobuf.IType,
  enums: protobuf.IEnum,
}
const whiteList = ['common', 'enterprise', 'merchandise', 'asynctask', 'finance']


const formatString = (type: string) => {
  const typeSplit = type.replace(/ceres./g,  '').split(".");

  let tempType = ''
  typeSplit.forEach((_item) => {
    if (whiteList.includes(_item)) {
      tempType += _item + "."
    } else {
      tempType += _item + '_'
    }
  })
  return tempType.slice(0, -1)
}
const findTypeFromPath = (path: string[], type: string) => {
  if (type.includes('.')) {
    return formatString(type)
  }

  const finalPath = [...path, type].filter(Boolean)
  const length = finalPath.length

  let keyString = finalPath[length - 1]
  
  for (let i = length - 3; i >= 0; i -= 2) {
    const str = finalPath[i]
    keyString = `${str}_${keyString}`
  }

  return keyString
}



export const transfer = (rootJson: protobuf.AnyNestedObject) => {
  const result: AllDataType = {
    methods: {},
    types: {},
    enums: {},
  } as AllDataType

  if (!rootJson) {
    return result
  }

  const walk = (json: protobuf.AnyNestedObject, res: AllDataType, prefix: string) => {
    const root = json['nested']
    if (!root) {
      return
    }
    const keys = Object.keys(root)

    for (let key of keys) {
      const value = root[key]
      if (!value || typeof value !== 'object') {
        continue
      }
      /** 表示生成方法 */
      if ('methods' in value) {
        const methodsValue: protobuf.IService = value
        result.methods = { ...result.methods, ...methodsValue, }
      }
      /** 表示生成ts 类型 */
      if ('fields' in value) {
        const fieldsValue: protobuf.IType = value
        const fieldKey = prefix ? `${prefix}${key}`.replace(/\./g, '_') : `${key}`
        result.types = {...result.types, [fieldKey]: {...fieldsValue, prefix: `${prefix}`, sourceKey: key, path: [...prefix.split('.'), key], parentNode: root }}
      }

      /** 表示生成ts enum */
      if ("values" in value) {
        const enumValue: protobuf.IEnum = value
        const fieldKey = prefix ? `${prefix}${key}`.replace(/\./g, '_') : `${key}`
        result.enums = {...result.enums, [fieldKey]: {...enumValue, prefix: `${prefix}`, sourceKey: key,  path: [...prefix.split('.'), key] } }
      }

      if ("nested" in value) {
        walk(value, res, `${prefix}${key}.`)
      }
    }
  }

  walk(rootJson, result, '')

  return result
}

type CommonParams = {
  /** 转换前的操作，可能需要添加头部信息 */
  onBeforeTransfer?: () => string;
  /**
   * 转换后操作
   * @param res 
   * @returns 
   */
  onAfterTransfer?: (res: string) => string;
}

type Transfer2MethodsParams = {
  service: protobuf.IService;
} & CommonParams;

export const transfer2Methods = (options: Transfer2MethodsParams) => {
  const { service, onBeforeTransfer, onAfterTransfer } = options

  let res = onBeforeTransfer?.() || ''
  const methods = service.methods;
  for (const key in methods) {
    const method = methods[key];
    const string = getTemplate(apiTemplate, {
      Demo: key,
      DemoRequest: method.requestType,
      DemoResponse: method.responseType,
      url: method.options?.['(google.api.http).post'],
      comment: method.comment
    })
    res += `${string} \n`
  }
  res = onAfterTransfer?.(res) || res
  return res
}

type Transfer2TypesParams = {
  service: protobuf.IType & {
    prefix: string;
    sourceKey: string
    path: string[]
    parentNode: protobuf.AnyNestedObject
  };
  /** 字段名 */
  fieldName: string
  /** 根名称 */
  rootName: string,
  
  map: {
    [key: string]: string
  }
  /** 前缀 */
} & CommonParams;

type IField = protobuf.IField & {
  comment?: string
}

type FieldData = {
  name: string;
  type: string;
  comment: string;
  isRequire: boolean
  /** 是否是数组 */
  isRepeat: boolean
}

/** 
 * 非特殊类型，uint64, string, bool等类型直接使用
 * 特殊类型，enum, message, repeated等类型需要特殊处理
 */
const type2Map = {
  'uint64': 'string',
  'string': 'string',
  'bool': 'boolean',
  'uint32': 'number',
  'int32': 'number',
  'int64': 'string',
  'double': 'number',
  'float': 'number',
}

export const transfer2Types = (options: Transfer2TypesParams) => {
  const { service, fieldName, rootName, map, onBeforeTransfer, onAfterTransfer } = options
  const { path, prefix, parentNode } = service

  let res = onBeforeTransfer?.() || ''

  const fieldsData = Object.keys(service.fields)
  const nested = service.nested

  const data: FieldData[] = []

  for (const key of fieldsData) {
    const currentField: IField = service.fields[key]
    const type = type2Map?.[currentField.type] || currentField.type
    const options = Object.keys(currentField.options || {})
    const isBase = Object.keys(type2Map).includes(currentField.type)

    const nestTypeKeys = Object.keys(nested || {})

    const isInnested = nestTypeKeys.includes(type)

    let finalType = type

    /** 如果定义在子类型下，需要加上父级key */
    if (isBase) {
      finalType = type
    } else if (isInnested) {
      finalType = `${fieldName}.${type}`.replace(/\./g, '_')
    } else {
      /** 如果当前类型是 Account.Type 这样拼接，且是首字母是小写 */

      if ((key === 'menu_period_group' && type === 'MenuPeriodGroup')) {
        console.log(findTypeFromPath(path, type))
        console.log(formatString(type), path)
      }
      /** 路径反序匹配 */
      finalType = map[type] || map[findTypeFromPath(path, type)] ||  formatString(type)
    }

    const fieldItem = {
      name: key,
      /** `
       * 类型要改，一般来说是基本类型，比如 boolean， string, number类型
       * 但是有特殊的类型要处理，比如 Account,  Account.Type, account.Account
       */
      type: finalType,
      isRequire: options.includes('(validate.rules).message.required') || currentField.comment?.includes('gorm:\"primaryKey') || false,
      isRepeat: currentField.rule === 'repeated',
      comment: currentField?.comment || ''
    }
    data.push(fieldItem)
  }

  res += getTemplate(interfaceTemplate, {
    items: data,
    fieldName: fieldName,
  })

  map[service.sourceKey] = fieldName
  return onAfterTransfer?.(res) || res
}

type Transfer2EnumParams = {
  service: protobuf.IEnum & {
    prefix: string
  };
  /** 字段名 */
  fieldName: string
} & CommonParams;

export const transfer2Enum = (options: Transfer2EnumParams) => {
  const { service, fieldName, onBeforeTransfer, onAfterTransfer } = options

  let res = onBeforeTransfer?.() || ''

  const fieldsData = Object.keys(service.values)

  const data = fieldsData.map((_item) => {
    return {
      name: _item,
      value: service.values[_item],
      comment: (service as any).comments?.[_item] || ''
    }
  })

  res = getTemplate(nameSpaceTemplate, {
    items: data,
    // fieldName: service.prefix.replace(/\./g, '_')
    fieldName: fieldName,
  })

  res = onAfterTransfer?.(res) || res
  return res
}