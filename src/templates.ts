import { template } from 'lodash'
import _ from 'lodash'

export const importTemplate = `
import instance from './request'
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenSource } from 'axios'

export type RequestFnType<Request  extends { axiosConfig?: AxiosRequestConfig }, Response> = ((params: Request) => Promise<AxiosResponse<Response>>) & {
  url: string
  autoCancel: () => (params: Request) => Promise<AxiosResponse<Response>>
  cancel?: () => void
}
`

export const apiTemplate = `
<% if (comment) { %>
/** 
 * {{comment}}
 * */
<% } %>
export const {{ Demo }} = (() => {
  const url = '{{ url }}';
  const requestFn: RequestFnType<{{DemoRequest}}, {{DemoResponse}}> = (params) => {
    const { axiosConfig = {}, ...data } = params || {}
    return instance.request({
      url,
      method: 'post',
      ...axiosConfig,
      data: data,
    })
  }

  requestFn.url = url

  /** autoCancel */
  requestFn.autoCancel = () =>{
    let source: CancelTokenSource | null = null

    requestFn.cancel = () => {
      if (source) {
        source.cancel()
      }
    }
 
    return (requestParams) => {
      /** 取消上一次请求 */
      requestFn.cancel?.()

      const cancelToken = axios.CancelToken
      source = cancelToken.source()

      const { axiosConfig = {}, ...data } = requestParams || {}
      const finalAxiosConfig = {
        ...axiosConfig,
        cancelToken: source.token,
      }

      return requestFn({
        ...data,
        axiosConfig: finalAxiosConfig,
      })
    }
  } 
  
  return requestFn
})()
`

// interface Data {
//   data_id: string
// }

export const interfaceTemplate = `
export interface {{ fieldName }} {
  axiosConfig?: AxiosRequestConfig,
  <% _.forEach(items, function(item) { %>
  <% if (item.comment) { %> /** {{ item.comment }} */ <% } %>
  {{ item.name }}<% if (!item.isRequire) { %>?<% } %>: {{ item.type }}<% if (item.isRepeat) { %>[]<% } %>
  <% }); %>
}
`

export const nameSpaceTemplate = `
export enum {{ fieldName }} {
  <%  _.forEach(items, function(_enum) { %>
  <% if (_enum.comment) { %>/** {{_enum.comment}} */ <% } %>
  {{_enum.name}} = {{_enum.value}},
  <% }); %>
}
`

export const interfaceHeader = `
import { 
  <% _.forEach(imports, function(item) { %>
  {{ item }},
  <% }); %> 
} from '{{importName}}'
`

export const getTemplate = (templateString: string, data: unknown) => {
  const compiled = template(templateString, {
    interpolate: /{{([\s\S]+?)}}/g,
    imports: { _: _ }
  });
  return compiled(data).replace(/\n\s*\n/g, '\n');
}

