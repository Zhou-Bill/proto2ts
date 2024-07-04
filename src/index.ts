import * as protobuf from 'protobufjs';
import * as path from 'path'
import * as fs from 'fs/promises'
import { AllDataType, transfer, transfer2Enum, transfer2Methods, transfer2Types } from './utils';
import PromiseQueue from './task'
import { getTemplate, importTemplate, interfaceHeader } from './templates';

const PROJECT_NAME = 'ceres'
const pool = new PromiseQueue(3)

const preconditioningProto = async (filePath: string) => {
  /** 需要将 import ""; 全部删除 */
  const content = await fs.readFile(filePath, 'utf-8')
  const newContent = content.replace(/import ".*?";/g, '')
  await fs.writeFile(filePath, newContent)
}

const main = async () => {
  // const filePath = path.join(__dirname, '../protos/account.proto');
  const filePath = path.join(__dirname, '../protos/merchandise.proto');
  await preconditioningProto(filePath)
  const root = new protobuf.Root();
  const res = await root.load(filePath, { keepCase: true,  alternateCommentMode: true, preferTrailingComment: true });  
  const json = res.toJSON({ keepComments: true });
  formatJson({
    json,
    sourceFilePath: filePath
  })
}

const transferToTemplate = (params: AllDataType, options: {
  rootName: string
  map: any
}) => {
  const { methods, types, enums } = params
  const { map, rootName } = options
  const result = {
    enums: '',
    types: '',
    methods: ''
  }
  const imports = Object.keys(types)
  
  result.methods = transfer2Methods({
    service: methods,
    onBeforeTransfer: () => {
      const prefix = `/** 类型自动生成 */`
      /** 加载公共头 */
      const header = getTemplate(interfaceHeader, {
        imports: imports,
        importName: './types'
      })
      const string = getTemplate(importTemplate, {})
      return  prefix + header + string
    }
  })


  Object.keys(enums).forEach(key => {
    result.enums += transfer2Enum({
      service: enums[key],
      fieldName: key,
    })
  })

  result.types += `import { AxiosRequestConfig } from 'axios'`
  const header = getTemplate(interfaceHeader, {
    imports: Object.keys(enums).map((_item) => {
      return (_item).replace(/\./g, '_')
    }),
    importName: './enums'
  })
  result.types += header
  // const map: Record<string, any> = {}
  imports.forEach((_key) => {
    result.types += transfer2Types({
      service: types[_key],
      fieldName: _key,
      rootName: options.rootName,
      map: map,
    })
  })
  return result
}

/**
 * 格式化 proto 转化出来的json
 */
const formatJson = async (params: {
  json: protobuf.INamespace,
  sourceFilePath: string,
}) => {
  const { json, sourceFilePath } = params
  
  if (!json.nested) {
    console.log(`该文件${sourceFilePath}似乎出解析出错了`)
    return 
  }

  const outputDir = path.join(__dirname, '../output');
  const fileName = path.basename(sourceFilePath)
  const jsonFileName = `${fileName.replace('.proto', '.json')}`

  const root = json.nested?.[PROJECT_NAME] as protobuf.INamespace
  const serviceRoot = root.nested?.['account']
  
  const result1 = transfer(serviceRoot!)
  const result = transferToTemplate(result1.result, {
    rootName: 'account',
    map: result1.map
  })

  pool.addTask(() => {
    return fs.writeFile(path.join(outputDir, 'json', jsonFileName), JSON.stringify(json, null, 2))
  })
  Object.keys(result).forEach(key => {
    pool.addTask(() => {
      return fs.writeFile(path.join(outputDir, 'api', `${key}.ts`), result[key])
    })
  })
  pool.addTask(() => {
    fs.copyFile(path.join(__dirname, '../src', 'request.ts'), path.join(outputDir, 'api', 'request.ts'))
  })

  pool.start()
  return result
}


main();