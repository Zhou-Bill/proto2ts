import { importTemplate, apiTemplate, getTemplate, interfaceTemplate, nameSpaceTemplate } from "./templates";
import * as protobuf from 'protobufjs';

type ResultType = {
  /** 生成的方法 */
  methods: string,
  /** 生成的类型 */
  types: string,
  /** 生成的枚举 */
  enums: string,
  methodsList: string[]
  fieldsList: string[],
  enumsList: string[]
}

export const transfer = (rootJson: protobuf.AnyNestedObject) => {
  const result: ResultType = {
    methods: '',
    types: '',
    enums: '',
    methodsList: [],
    fieldsList: [],
    enumsList: []
  }

  if (!rootJson) {
    return result
  }

  const walk = (json: protobuf.AnyNestedObject, res) => {
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
        const methodsList = Object.keys(methodsValue.methods)
        res.methods += transfer2Methods({
          service: methodsValue,
          onBeforeTransfer: () => {
            const string = getTemplate(importTemplate, {})
            return string
          }
        })
        res.methodsList = [...res.methodsList, ...methodsList]
      }
      /** 表示生成ts 类型 */
      if ('fields' in value) {
        const fieldsValue: protobuf.IType = value
        const fieldsList = Object.keys(fieldsValue.fields)
       
        res.types += transfer2Types({
          service: fieldsValue,
          fieldName: key
        })
        res.fieldsList = [...res.fieldsList, ...fieldsList]
      }

      /** 表示生成ts enum */
      if ("values" in value) {
        const enumValue: protobuf.IEnum = value
        const string = transfer2Enum({
          service: enumValue,
          fieldName: key
        })
        res.enums += string
      }

      if ("nested" in value) {
        walk(value, res)
      }
    }
  }

  walk(rootJson, result)

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
  service: protobuf.IType;
  /** 字段名 */
  fieldName: string
} & CommonParams;

type IField = protobuf.IField & {
  comment?: string
}

type FieldData = {
  name: string;
  type: string;
  comment: string;
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

  if (fieldsData.length === 0) {
    return ''
  }

  const data: FieldData[] = []

  for (const key of fieldsData) {
    const currentField: IField = service.fields[key]
    
    const fieldItem = {
      name: key,
      type: type2Map?.[currentField.type] || currentField.type,
      comment: currentField?.comment || ''
    }
    data.push(fieldItem)
  }

  res = getTemplate(interfaceTemplate, {
    items: data,
    fieldName: fieldName
  })
  res = onAfterTransfer?.(res) || res

  return res
}

type Transfer2EnumParams = {
  service: protobuf.IEnum;
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
    fieldName: fieldName
  })

  res = onAfterTransfer?.(res) || res
  return res
}