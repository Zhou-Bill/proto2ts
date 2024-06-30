import { importTemplate, apiTemplate, getTemplate, interfaceTemplate, nameSpaceTemplate } from "./templates";
import * as protobuf from 'protobufjs';

export type AllDataType = {
  methods: protobuf.IService,
  types: protobuf.IType,
  enums: protobuf.IEnum,
}

function convertDotToSquareBrackets(input: string): string {
  return input.replace(/(\w+)(\.\w+)+/g, (match) => {
    return match.split('.').reduce((acc, curr, index) => {
      if (index === 0) return curr;
      return `${acc}['${curr}']`;
    }, '');
  });
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
        result.types = {...result.types, [key]: {...fieldsValue, prefix: `${prefix}${key}` }}
      }

      /** 表示生成ts enum */
      if ("values" in value) {
        const enumValue: protobuf.IEnum = value
        result.enums = {...result.enums, [key]: {...enumValue, prefix: `${prefix}${key}`} }
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
  };
  /** 字段名 */
  fieldName: string
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
  'uint64': 'number',
  'string': 'string',
  'bool': 'boolean',
}

export const transfer2Types = (options: Transfer2TypesParams) => {
  const { service, fieldName, onBeforeTransfer, onAfterTransfer } = options

  let res = onBeforeTransfer?.() || ''

  const fieldsData = Object.keys(service.fields)
  const nested = service.nested

  const data: FieldData[] = []

  for (const key of fieldsData) {
    const currentField: IField = service.fields[key]
    const type = type2Map?.[currentField.type] || currentField.type
    const options = Object.keys(currentField.options || {})

    const nestTypeKeys = Object.keys(nested || {})

    const fieldItem = {
      name: key,
      type: nestTypeKeys.includes(type) ? `${service.prefix}.${type}`.replace(/\./g, '_') : type.replace(/\./g, '_'),
      isRequire: options.includes('(validate.rules).message.required') || currentField.comment?.includes('gorm:\"primaryKey') || false,
      isRepeat: currentField.rule === 'repeated',
      comment: currentField?.comment || ''
    }
    data.push(fieldItem)
  }

  res += getTemplate(interfaceTemplate, {
    items: data,
    fieldName: fieldName
  })
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
    fieldName: service.prefix.replace(/\./g, '_')
  })

  res = onAfterTransfer?.(res) || res
  return res
}