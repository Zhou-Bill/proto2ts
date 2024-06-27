
export enum Code {
    CODE_UNSPECIFIED = 0,
    /** 当前账户已绑定微信,请先解绑 */ 
    CODE_BIND_WECHAT_TO_ACCOUNT_DUPLICATE = 2002001,
    /** 当前账户正在绑定微信 */ 
    CODE_BIND_WECHAT_TO_ACCOUNT_BINDING = 2002002,
}

export enum Type {
    TYPE_UNSPECIFIED = 0,
    TYPE_PUBLIC = 1,
    TYPE_PRIVATE = 2,
}

export enum Status {
    STATUS_UNSPECIFIED = 0,
    /** 2^08，禁用账号 */ 
    STATUS_DISABLED = 256,
}

export enum Operation {
    OPERATION_UNSPECIFIED = 0,
    /** 绑定 */ 
    OPERATION_BIND = 1,
    /** 解除绑定 */ 
    OPERATION_UNBIND = 2,
}
