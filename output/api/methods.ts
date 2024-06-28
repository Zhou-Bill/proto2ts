/** 类型自动生成 */
import { 
  Status,
  Account,
  Profile,
  CreateAccountRequest,
  CreateAccountResponse,
  UpdateAccountRequest,
  UpdateAccountResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  RecoverAccountRequest,
  RecoverAccountResponse,
  ListAccountRequest,
  ListAccountResponse,
  GetAccountRequest,
  GetAccountResponse,
  UpdateAccountLastLoginTimeRequest,
  UpdateAccountLastLoginTimeResponse,
  CheckAccountPasswordRequest,
  CheckAccountPasswordResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  GetProfileRequest,
  GetProfileResponse,
  ListProfileRequest,
  ListProfileResponse,
  BindWechatToAccountRequest,
  BindWechatToAccountResponse,
} from './types'

import instance from './request'
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenSource } from 'axios'
export type RequestFnType<Request  extends { axiosConfig?: AxiosRequestConfig }, Response> = ((params: Request) => Promise<AxiosResponse<Response>>) & {
  url: string
  autoCancel: () => (params: Request) => Promise<AxiosResponse<Response>>
  cancel?: () => void
}

export const CreateAccount = (() => {
  const url = '/ceres/account/AccountService/CreateAccount';
  const requestFn: RequestFnType<CreateAccountRequest, CreateAccountResponse> = (params) => {
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
 

export const UpdateAccount = (() => {
  const url = '/ceres/account/AccountService/UpdateAccount';
  const requestFn: RequestFnType<UpdateAccountRequest, UpdateAccountResponse> = (params) => {
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
 

export const DeleteAccount = (() => {
  const url = '/ceres/account/AccountService/DeleteAccount';
  const requestFn: RequestFnType<DeleteAccountRequest, DeleteAccountResponse> = (params) => {
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
 

export const RecoverAccount = (() => {
  const url = '/ceres/account/AccountService/RecoverAccount';
  const requestFn: RequestFnType<RecoverAccountRequest, RecoverAccountResponse> = (params) => {
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
 

export const ListAccount = (() => {
  const url = '/ceres/account/AccountService/ListAccount';
  const requestFn: RequestFnType<ListAccountRequest, ListAccountResponse> = (params) => {
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
 

export const GetAccount = (() => {
  const url = '/ceres/account/AccountService/GetAccount';
  const requestFn: RequestFnType<GetAccountRequest, GetAccountResponse> = (params) => {
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
 

export const UpdateAccountLastLoginTime = (() => {
  const url = '/ceres/account/AccountService/UpdateAccountLastLoginTime';
  const requestFn: RequestFnType<UpdateAccountLastLoginTimeRequest, UpdateAccountLastLoginTimeResponse> = (params) => {
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
 

/** 
 * 校验账号密码是否正确
 * */
export const CheckAccountPassword = (() => {
  const url = '/ceres/account/AccountService/CheckAccountPassword';
  const requestFn: RequestFnType<CheckAccountPasswordRequest, CheckAccountPasswordResponse> = (params) => {
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
 

export const CreateProfile = (() => {
  const url = '/ceres/account/AccountService/CreateProfile';
  const requestFn: RequestFnType<CreateProfileRequest, CreateProfileResponse> = (params) => {
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
 

export const UpdateProfile = (() => {
  const url = '/ceres/account/AccountService/UpdateProfile';
  const requestFn: RequestFnType<UpdateProfileRequest, UpdateProfileResponse> = (params) => {
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
 

export const GetProfile = (() => {
  const url = '/ceres/account/AccountService/GetProfile';
  const requestFn: RequestFnType<GetProfileRequest, GetProfileResponse> = (params) => {
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
 

export const ListProfile = (() => {
  const url = '/ceres/account/AccountService/ListProfile';
  const requestFn: RequestFnType<ListProfileRequest, ListProfileResponse> = (params) => {
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
 

/** 
 * 将account与微信绑定/解除绑定
 * */
export const BindWechatToAccount = (() => {
  const url = '/ceres/account/AccountService/BindWechatToAccount';
  const requestFn: RequestFnType<BindWechatToAccountRequest, BindWechatToAccountResponse> = (params) => {
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
 
