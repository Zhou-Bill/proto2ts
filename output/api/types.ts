import { AxiosRequestConfig } from 'axios'
import { 
  Status_Code,
  Account_Type,
  Account_Status,
  BindWechatToAccountRequest_Operation,
} from './enums'

export interface Status {
  axiosConfig?: AxiosRequestConfig,
}

export interface Account {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey;autoIncrement:false" */ 
  account_id: string
  status?: string
  revision?: string
  create_time?: string
  update_time?: string
  delete_time?: string
  type?: Account_Type
   /** @inject_tag: gorm:"INDEX:group_id_user_type_username,group_id_user_type_phone,group_id_user_type_wechat_unionid" */ 
  group_id?: string
   /** 子类型，目前用作区分xxUser，一个group_id下不同user_type间账号验证凭证可以重复，可以使用ModelType区分 */ 
  user_type?: string
   /** 登录用户名 */ 
  username?: string
   /** 登录密码, 需要客户端使用 sha256 加密一遍；后台使用bcrypt加密 */ 
  password?: string
   /** @inject_tag: gorm:"INDEX:group_id_user_type_phone" */ 
  phone?: string
  email?: string
  wechat_openid?: string
   /** @inject_tag: gorm:"INDEX:group_id_user_type_wechat_unionid" */ 
  wechat_unionid?: string
  wechat_nickname?: string
   /** @inject_tag: gorm:"size:200" */ 
  wechat_avatar?: string
   /** 最后登录时间 */ 
  last_login_time?: string
}

export interface Profile {
  axiosConfig?: AxiosRequestConfig,
   /** 即account_id */ 
  profile_id?: string
  status?: string
  revision?: string
  create_time?: string
  update_time?: string
  delete_time?: string
   /** 名字 */ 
  nickname?: string
   /** 头像 */ 
  avatar?: string
}

export interface CreateAccountRequest {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface CreateAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface UpdateAccountRequest {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface UpdateAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface DeleteAccountRequest {
  axiosConfig?: AxiosRequestConfig,
  account_id?: string
}

export interface DeleteAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface RecoverAccountRequest {
  axiosConfig?: AxiosRequestConfig,
  account_id?: string
}

export interface RecoverAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface ListAccountRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 指定账号 */ 
  account_id?: string
   /** 账号集合 */ 
  account_ids?: string[]
   /** 类型和作用域 */ 
  type?: Account_Type
  group_id?: string
  user_type?: string
   /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
  username?: string
  phone?: string
  email?: string
   /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
  wechat_openid?: string
   /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
  wechat_unionid?: string
}

export interface ListAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  accounts?: Account[]
}

export interface GetAccountRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 指定账号 */ 
  account_id?: string
   /** 类型和作用域 */ 
  type?: Account_Type
  group_id?: string
  user_type?: string
  username?: string
  phone?: string
  email?: string
   /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
  wechat_openid?: string
   /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
  wechat_unionid?: string
}

export interface GetAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: Account
}

export interface UpdateAccountLastLoginTimeRequest {
  axiosConfig?: AxiosRequestConfig,
  account_id?: string
  last_login_time?: string
}

export interface UpdateAccountLastLoginTimeResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CheckAccountPasswordRequest {
  axiosConfig?: AxiosRequestConfig,
  get_account_request?: GetAccountRequest
   /** 登录密码, 需要客户端使用 sha256 加密一遍；后台使用bcrypt加密 */ 
  password?: string
}

export interface CheckAccountPasswordResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CreateProfileRequest {
  axiosConfig?: AxiosRequestConfig,
  profile?: Profile
}

export interface CreateProfileResponse {
  axiosConfig?: AxiosRequestConfig,
  profile?: Profile
}

export interface UpdateProfileRequest {
  axiosConfig?: AxiosRequestConfig,
  profile?: Profile
}

export interface UpdateProfileResponse {
  axiosConfig?: AxiosRequestConfig,
  profile?: Profile
}

export interface GetProfileRequest {
  axiosConfig?: AxiosRequestConfig,
  profile_id?: string
}

export interface GetProfileResponse {
  axiosConfig?: AxiosRequestConfig,
  profile?: Profile
}

export interface ListProfileRequest {
  axiosConfig?: AxiosRequestConfig,
  profile_ids?: string[]
}

export interface ListProfileResponse {
  axiosConfig?: AxiosRequestConfig,
  profiles?: Profile[]
}

export interface BindWechatToAccountRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 应用唯一标识，在微信开放平台提交应用审核通过后获得 */ 
  wechat_app_id?: string
   /** 填写第一步获取的code参数 */ 
  wechat_code?: string
   /** 必传,当前已登录账户id */ 
  account_id?: string
   /** 必传,操作类型 */ 
  operation?: BindWechatToAccountRequest_Operation
}

export interface BindWechatToAccountResponse {
  axiosConfig?: AxiosRequestConfig,
  account?: account.Account
}
