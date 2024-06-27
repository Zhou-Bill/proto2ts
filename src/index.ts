import * as protobuf from 'protobufjs';
import * as path from 'path'
import * as fs from 'fs/promises'
import { transfer } from './utils';
import PromiseQueue from './task'

const PROJECT_NAME = 'ceres'
const pool = new PromiseQueue(3)

const main = async () => {
  const filePath = path.join(__dirname, '../protos/account.proto');

  const root = new protobuf.Root();
  const res = await root.load(filePath, { keepCase: true,  alternateCommentMode: true, preferTrailingComment: true });  
  const json = res.toJSON({ keepComments: true });
  formatJson({
    json,
    sourceFilePath: filePath
  })
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

  const root = json.nested?.[PROJECT_NAME] as protobuf.INamespace
  const serviceRoot = root.nested?.['account']
 
  const result = transfer(serviceRoot!)

  const outputDir = path.join(__dirname, '../output');
  const fileName = path.basename(sourceFilePath)
  const jsonFileName = `${fileName.replace('.proto', '.json')}`
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