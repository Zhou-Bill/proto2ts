
export interface Account {
     /** @inject_tag: gorm:"primaryKey;autoIncrement:false" */ 
    account_id: number
    status: number
    revision: number
    create_time: number
    update_time: number
    delete_time: number
    type: Type
     /** @inject_tag: gorm:"INDEX:group_id_user_type_username,group_id_user_type_phone,group_id_user_type_wechat_unionid" */ 
    group_id: number
     /** 子类型，目前用作区分xxUser，一个group_id下不同user_type间账号验证凭证可以重复，可以使用ModelType区分 */ 
    user_type: number
     /** 登录用户名 */ 
    username: string
     /** 登录密码, 需要客户端使用 sha256 加密一遍；后台使用bcrypt加密 */ 
    password: string
     /** @inject_tag: gorm:"INDEX:group_id_user_type_phone" */ 
    phone: string
    email: string
    wechat_openid: string
     /** @inject_tag: gorm:"INDEX:group_id_user_type_wechat_unionid" */ 
    wechat_unionid: string
    wechat_nickname: string
     /** @inject_tag: gorm:"size:200" */ 
    wechat_avatar: string
     /** 最后登录时间 */ 
    last_login_time: number
}

export interface Profile {
     /** 即account_id */ 
    profile_id: number
    status: number
    revision: number
    create_time: number
    update_time: number
    delete_time: number
     /** 名字 */ 
    nickname: string
     /** 头像 */ 
    avatar: string
}

export interface CreateAccountRequest {
    account: Account
}

export interface CreateAccountResponse {
    account: Account
}

export interface UpdateAccountRequest {
    account: Account
}

export interface UpdateAccountResponse {
    account: Account
}

export interface DeleteAccountRequest {
    account_id: number
}

export interface DeleteAccountResponse {
    account: Account
}

export interface RecoverAccountRequest {
    account_id: number
}

export interface RecoverAccountResponse {
    account: Account
}

export interface ListAccountRequest {
     /** 指定账号 */ 
    account_id: number
     /** 账号集合 */ 
    account_ids: number
     /** 类型和作用域 */ 
    type: Account.Type
    group_id: number
    user_type: number
     /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
    username: string
    phone: string
    email: string
     /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
    wechat_openid: string
     /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
    wechat_unionid: string
}

export interface ListAccountResponse {
    accounts: Account
}

export interface GetAccountRequest {
     /** 指定账号 */ 
    account_id: number
     /** 类型和作用域 */ 
    type: Account.Type
    group_id: number
    user_type: number
    username: string
    phone: string
    email: string
     /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
    wechat_openid: string
     /** wechat_openid和wechat_unionid作为一组，内部是OR */ 
    wechat_unionid: string
}

export interface GetAccountResponse {
    account: Account
}

export interface UpdateAccountLastLoginTimeRequest {
    account_id: number
    last_login_time: number
}

export interface CheckAccountPasswordRequest {
    get_account_request: GetAccountRequest
     /** 登录密码, 需要客户端使用 sha256 加密一遍；后台使用bcrypt加密 */ 
    password: string
}

export interface CreateProfileRequest {
    profile: Profile
}

export interface CreateProfileResponse {
    profile: Profile
}

export interface UpdateProfileRequest {
    profile: Profile
}

export interface UpdateProfileResponse {
    profile: Profile
}

export interface GetProfileRequest {
    profile_id: number
}

export interface GetProfileResponse {
    profile: Profile
}

export interface ListProfileRequest {
    profile_ids: number
}

export interface ListProfileResponse {
    profiles: Profile
}

export interface BindWechatToAccountRequest {
     /** 应用唯一标识，在微信开放平台提交应用审核通过后获得 */ 
    wechat_app_id: string
     /** 填写第一步获取的code参数 */ 
    wechat_code: string
     /** 必传,当前已登录账户id */ 
    account_id: number
     /** 必传,操作类型 */ 
    operation: Operation
}

export interface BindWechatToAccountResponse {
    account: account.Account
}
