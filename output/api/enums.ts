
export enum SystemUnitId {
  S_UNSPECIFIED = 0,
  SYSTEM_UNIT_ID_BEGIN = 200000,
}

export enum SkuUnitId {
  SKU_UNIT_UNSPECIFIED = 0,
  SKU_UNIT_ID_BEGIN = 100,
}

export enum UnitType {
  UNIT_TYPE_UNSPECIFIED = 0,
  /** 系统单位      存在系统单位表里 */ 
  SYSTEM_UNIT = 1,
  /** 系统基准单位   系统单位表里的parent_id */ 
  SYSTEM_UNIT_ANCHOR = 2,
  /** sku基本单位    sku基本单位的id就是sku.base_unit_id, 并且这个base_unit_id被同步到了ssu.base_unit_id。 */ 
  SKU_BASE_UNIT = 3,
  /** ssu包装单位   unit存在ssu里, unit就是ssu.unit。它id 就是ssu.unit.unit_id */ 
  SSU_UNIT = 4,
  /** ssu计量单位   sku自定义基准单位的id 就是ssu.unit.parent_id。 */ 
  SSU_UNIT_ANCHOR = 5,
}

export enum Optype {
  OP_UNSPECIFIED = 0,
  CREATE = 1,
  UPDATE = 2,
  DELETE = 3,
}

export enum ModuleType {
  M_UNSPECIFIED = 0,
  SORTING = 1,
  ORDER = 2,
  DISTRIBUTE = 3,
  PURCHASE = 4,
  STOCK = 5,
}

export enum PricingFormula {
  PF_UNSPECIFIED = 0,
  /** 自定义公式 */ 
  DIY = 1,
  /** 不设置公式 */ 
  NONE = 2,
}

export enum PricingType {
  PT_UNSPECIFIED = 0,
  /** 常规定价 */ 
  NORMAL = 1,
  /** 区间定价 */ 
  INTERVAL = 2,
}

export enum CalculateMethod {
  /** 不设置计算规则，同时计算规则中的price不起作用 */ 
  CM_UNSPECIFIED = 0,
  /** 固定 */ 
  FIX = 1,
  /** 乘 */ 
  MULTI = 2,
  /** 加 */ 
  ADD = 3,
  /** 减 */ 
  SUB = 4,
  /** 自定义公式 */ 
  CUSTOMIZE = 5,
}

export enum SkuSortField {
  UNSPECIFIED = 0,
  /** 按商品名排序 */ 
  SKU_NAME = 1,
  /** 按照商品编码排序 */ 
  CUSTOMIZED_CODE = 2,
  /** 按商品类型排序 */ 
  SKU_TYPE = 3,
  /** 按商品分类排序 */ 
  CATEGORY = 4,
  /** 按销售状态排序 */ 
  ON_SALE = 5,
  /** 按sku_id排序, 按商品创建时间排序 */ 
  SKU_ID = 6,
  /** 按商品创建时间排序 */ 
  CREATE_TIME = 7,
  /** 按商品更新时间排序 */ 
  UPDATE_TIME = 8,
  /** 按商品排序字段排序 */ 
  SORT_NUM = 9,
  /** 按商品1级分类排序 */ 
  CATEGORY1_ID = 10,
  /** 按商品2级分类排序 */ 
  CATEGORY2_ID = 11,
  /** 按商品3级分类排序 */ 
  CATEGORY3_ID = 12,
}

export enum QuotationSortField {
  QUOTATION_UNSPECIFIED = 0,
  /** 按照报价单ID排序 、这个也是时间 */ 
  QUOTATION_ID = 1,
  /** 按照报价单ID排序 */ 
  QUOTATION_SERIAL_NO = 2,
  /** 对内简称排序 */ 
  INNER_NAME = 3,
  /** sku数量排序 */ 
  SKU_COUNT = 4,
  /** 客户数量排序 */ 
  CUSTOMER_COUNT = 5,
  /** 状态排序 */ 
  STATUS = 6,
  /** 根据开始时间排序 */ 
  START_TIME = 7,
  /** 根据临期状态排序 */ 
  ADVENT_STATE = 8,
  /** 排序字段排序 */ 
  CUSTOMER_SORT_NUM = 9,
}

export enum SkuBatchType {
  /** 有批次 */ 
  TYPE_UNSPECIFIED = 0,
  /** 有批次 */ 
  TYPE_MULT_BATCH = 1,
  /** 无批次 */ 
  TYPE_SINGLE_BATCH = 2,
}

export enum Status_Code {
  CODE_UNSPECIFIED = 0,
  /** 相同的父分类下不能创建相同分类名 */ 
  CATEGORY_EXISTS = 22220001,
  /** 父分类不存在，不能创建分类 */ 
  PARENT_CATEGORY_NOT_EXISTS = 22220002,
  /** 不能修改父分类 */ 
  PARENT_CATEGORY_CAN_NOT_CHANGE = 22220003,
  /** 分类不存在 */ 
  CATEGORY_NOT_EXISTS = 222200004,
  /** 异步参数错误 */ 
  PARAM_ERROR = 22220000,
  /** 默认的"未分类"不能修改 */ 
  NOT_CATEGORY_CAN_NOT_CHANGE = 22220070,
  /** 存在sku,不能删除分类 */ 
  CHILD_SKU_EXISTS = 22220005,
  /** 相同的分类下不能创建相同spu名 */ 
  SPU_EXISTS = 22220006,
  /** 分类层级限制5层 */ 
  CATEGORY_LEVEL_LIMIT_FIVE = 22220008,
  /** 分类名称禁止含有斜杠 */ 
  CATEGORY_CANT_HAVE_SLASH = 22220100,
  /** 自定义单位重复 */ 
  SKU_UNIT_DUPLICATE = 22220019,
  /** 自定义单位数量超出限制 */ 
  SKU_UNIT_NUM_LIMIT = 22220200,
  /** SKU的基本单位不可变 */ 
  BASE_UNIT_CAN_NOT_CHANGE = 22220033,
  /** SKU不存在 */ 
  SKU_NOT_EXISTS = 22220009,
  /** SKU已存在 */ 
  SKU_EXISTS = 22220010,
  /** 商品名不存在 */ 
  SKU_NAME_NOT_EXISTS = 22220086,
  /** 别名与商品名冲突 */ 
  SKU_ALIAS_AS_SHOP_NAME_NOT_EXISTS = 22220088,
  /** 商品别名已存在 */ 
  SKU_ALIAS_EXISTS = 22220084,
  /** 商品别名超出限制 */ 
  SKU_ALIAS_MORE_LIMIT = 22220090,
  /** 商品别名长度过长 */ 
  SKU_ALIAS_NAME_MORE_LIMIT = 22220097,
  /** 商品价格为空 */ 
  SKU_PRICE_IS_NONE = 22220085,
  /** 相同的父SkU下不能创建相同ssu名 */ 
  SSU_EXISTS = 22220011,
  /** 自定义编码已被占用 */ 
  CUSTOMIZE_CODE_EXISTS = 22220012,
  /** 子商品的某个自定义单位已经被组合商品引用，无法删除该自定义单位 */ 
  INGREDIENT_UNIT_CANNOT_DELETE = 22220013,
  /** 商品条形码已被占用 */ 
  BAR_CODE_EXISTS = 22220014,
  /** 商品备用条形码1已被占用 */ 
  BAR_CODE1_EXISTS = 22220034,
  /** 商品备用条形码2已被占用 */ 
  BAR_CODE2_EXISTS = 22220035,
  /** 商品条形码重复 */ 
  MULTI_BAR_CODE_EXISTS = 22220036,
  /** 子商品被组合商品引用时，无法从商品库中被删除 */ 
  INGREDIENT_CANNOT_DELETE = 22220062,
  /** 组合商品的子商品数不得小于1条，不能超过50条 */ 
  INGREDIENT_NUM_LIMIT = 22220060,
  /** 组合商品内的子商品不能重复 */ 
  INGREDIENT_DUPLICATE = 22220061,
  /** 组合商品不能做原料 */ 
  COMBINE_SSU_CAN_NOT_BE_INGREDIENT = 22220015,
  /** 包材商品不能做原料 */ 
  PACKAGE_SSU_CAN_NOT_BE_INGREDIENT = 22220016,
  /** 子商品不存在 */ 
  INGREDIENT_NOT_EXIST = 22220017,
  /** 子商品的单位不存在，请刷新重试 */ 
  INGREDIENT_UNIT_DO_NOT_EXIST = 22220079,
  /** 包材不存在 */ 
  PACKAGE_SKU_NOT_EXIST = 22220083,
  /** 商品不存在 */ 
  SSU_NOT_EXIST = 22220018,
  /** 菜谱中单品必须有默认价格 */ 
  MENU_DETAIL_SINGLE_SSU_NEED_DEFAULT_PRICE = 22220020,
  /** 这个类型的单位不可用 */ 
  UNIT_TYPE_CAN_NOT_USE = 22220021,
  /** 菜谱中的组合商品不能改变组成原料 */ 
  COMBINE_SSU_IN_MENU_CAN_NOT_CHANGE_INGREDIENT_OPTIMISE = 22220022,
  /** 组合商品里原料中的单位数量字段类型不对 */ 
  SSU_RATIO_RATE_TYPE_ERROR = 22220023,
  /** 若组合商品已经绑定了报价单A，则其子商品（包括单位）无法从报价单A中解绑 */ 
  INGREDIENT_CANT_UNBIND_QUOTATION = 22220074,
  /** 组成商品未绑定报价单 */ 
  INGREDIENT_NOT_BIND_QUOTATION = 22220071,
  /** 创建价格已存在 */ 
  CREATE_BASIC_PRICE_ERROR = 22220072,
  /** 组合商品的在售子商品数不足2条，无法启售 */ 
  INGREDIENT_SKU_ON_SALE_LESS_THAN_2 = 22220075,
  /** 组合商品的上架子商品数不足2条，无法上架 */ 
  INGREDIENT_SKU_ON_SHELF_LESS_THAN_2 = 22220076,
  /** 商品最多在同一个报价单中设置20个价格 */ 
  BASIC_PRICE_ITEMS_OVER_MAX_NUM = 22220077,
  /** 组合商品已关联报价单，且此下单单位的子商品在报价单中为时价商品，不能添加 */ 
  INGREDIENT_CANT_BIND_QUOTATION = 22220102,
  /** 此下单单位的商品存在于组合商品中，已关联报价单，不能被改为时价商品 */ 
  INGREDIENT_CANT_CHANGE_TO_CURRENT_PRICE = 22220103,
  /** 未找到采购员 */ 
  NOT_FOUND_PURCHASER = 22220024,
  /** 未找到供应商 */ 
  NOT_FOUND_SUPPLIER = 22220025,
  /** 加工商品需要加工类型 */ 
  NEED_PROCESS_TYPE = 22220026,
  /** 生产单位不能修改 */ 
  PRODUCTION_UNIT_CAN_NOT_CHANGE = 22220027,
  /** 生产单位类型错误 */ 
  PRODUCTION_UNIT_TYPE_ERROR = 22220028,
  /** 生产单位系数值错误 */ 
  PRODUCTION_RATE_VALUE_ERROR = 22220029,
  /** 客户未绑定报价单 */ 
  CUSTOMER_NOT_BAND_QUOTATION = 22220030,
  /** 报价单内部名字不能重复 */ 
  DUPLICATE_QUOTATION_NAME = 22220031,
  /** 不能删除默认报价单 */ 
  CANNOT_DELETE_DEFAULT_QUOTATION = 22220032,
  /** 周期子报价单时间冲突 */ 
  PERIODIC_QUOTATION_TIME_CONFLICT = 22220091,
  /** 无进行中的子报价单 */ 
  CHILD_QUOTATION_UNAVAILABLE = 22220092,
  /** 计算错误或者计算结果小于0，请检查定价公式 */ 
  CALCULATE_FORMULA_ERROR = 22220087,
  /** 同一父报价单下的子报价单不允许重名 */ 
  DUPLICATE_QUOTATION_NAME_BETWEEN_BROTHERS = 22220093,
  /** 父报价单之间不允许重名 */ 
  DUPLICATE_QUOTATION_NAME_BETWEEN_PARENTS = 22220089,
  /** 父子报价单之间不能重名 */ 
  DUPLICATE_QUOTATION_NAME_BETWEEN_PARENT_AND_CHILD = 22220094,
  /** 客户协议单时间冲突 */ 
  CUSTOMER_QUOTATION_TIME_CONFLICT = 22220099,
  /** 客户协议单协议规则名字不能重复 */ 
  DUPLICATE_CUSTOMER_QUOTATION_NAME = 22220104,
  /** 客户协议单时间冲突 */ 
  CONFLICT_TIME_CUSTOMER_QUOTATION = 22220105,
  /** 收藏夹已收藏过此商品 */ 
  DUPLICATE_FAVORITE_SSU = 22220040,
  /** 默认收藏夹不可以修改 */ 
  CANNOT_UPDATE_DEFAULT_FAVORITE = 22220041,
  /** 收藏夹不存在 */ 
  CANNOT_FIND_FAVORITE = 22220042,
  /** 异步参数错误 */ 
  ASYNC_TASK_PARAM_ERROR = 22220050,
  /** 报价单用户类型不匹配 */ 
  QUOTATION_CUSTOMER_TYPE_NOT_MATCH = 22220051,
  /** 报价单不存在 */ 
  QUOTATION_NOT_EXISTS = 22220052,
  /** 报价冲突,冲突的报价编码为 xxx,xxx,xxx,xxx */ 
  CONFLICT_QUOTATION = 22220053,
  /** 默认报价单必须存在 */ 
  DEFAULT_QUOTATION_NOT_EXISTS_IS_NECESSARY = 22220054,
  /** 报价单内商品重复 */ 
  CONFLICT_QUOTATION_SSU = 22220055,
  /** 删除关联 */ 
  DELETE_BASIC_PRICE_RELATION_DATA = 22220056,
  /** 数字限制整数10位，小数2位 */ 
  PRICE_DECIMAL_POINT_OVER_LIMIT = 22220057,
  /** 组合商品绑定报价单，单品的价格不完整 */ 
  COMBINE_SSU_SINGLE_PRICE_INCOMPLETE = 22220058,
  /** 餐次已经绑定了预算 */ 
  MENU_PERIOD_GROUP_ID_BIND_WITH_BUDGET = 22220059,
  /** 报价单里商品的同一个单位价格只能设置一个 */ 
  QUOTATION_SKU_UNIT_DUPLICATE = 22220073,
  /** 单位不存在, 请刷新 */ 
  UNIT_NOT_EXISTS = 22220007,
  /** 单位重复 */ 
  UNIT_DUPLICATE = 22220063,
  /** SKU主辅单位与所传单位不匹配 */ 
  SKU_ADVOCATE_COMPLEMENTARY_UNIT_NOT_MATCHING = 22220082,
  /** 系统单位不能删除 */ 
  SYS_UNIT_CANT_DELETE = 22220064,
  /** 单位已被SKU使用，不能删除 */ 
  UNIT_USED_BY_SKU_CANT_DELETE = 22220065,
  /** 系统单位不能修改 */ 
  SYS_UNIT_CANT_UPDATE = 22220066,
  /** 单位类型不一致 */ 
  UNIT_TYPE_NOT_SAME = 22220078,
  /** 客户未绑定菜谱 */ 
  CODE_NO_CUSTOMER_MENU_RELATION = 22220067,
  /** 客户ID为空 */ 
  CODE_PARAM_CUSTOMERID_ERROR = 22220068,
  /** 菜谱不存在 */ 
  CODE_MENU_NOT_EXISTS = 22220069,
  /** 餐次名称重复 */ 
  CODE_MENU_PERIOD_NAME_EXISTS = 22220080,
  /** 餐次已在菜谱中使用 */ 
  CODE_MENU_PERIOD_IS_USED_IN_MENU = 22220081,
  /** 菜谱名称重复 */ 
  CODE_MENU_INNER_NAME_EXISTS = 22220098,
  /** 商品等级名称重复 */ 
  CODE_SKU_LEVEL_EXIST = 222200100,
  /** 商品等级不能为空 */ 
  CODE_SKU_LEVEL_NAME_HAVE_BLANK_SPACE = 22220101,
  /** 导入协议价输入字段存在错误 */ 
  IMPORT_SPECIAL_BASIC_PRICE_STRING_ERR = 22220095,
  /** 商品别名匹配到多个商品 */ 
  MARCHING_ALIAS_MORE_GOODS = 22220096,
  /** 临时单位不能删除 */ 
  TEMPORARY_UNIT_CANNOT_DELETE = 22220110,
  /** 营养素名称已存在 */ 
  NUTRITION_NAME_EXIST = 22220111,
  /** 商品单价不能为负数 */ 
  FEEPRICE_NOT_LT_ZERO = 22220116,
  /** 表格读取失败 */ 
  READ_EXCEL_ERROR = 22220112,
  /** 表格内容为空 */ 
  EXCEL_NULL = 22220113,
  /** 下载表格失败 */ 
  DOWNLOAD_EXCEL_ERROR = 22220114,
  /** 打开表格失败 */ 
  OPEN_EXCEL_ERROR = 22220115,
  /** 当前绑定默认报价单，不可同步价格 */ 
  DEFAULT_QUOTATION_SYNC_NO_SUPPORT = 22220117,
  /** 自定义单位与辅助单位不能重名 */ 
  SKU_UNIT_CONFLICT = 22220118,
  /** 创建Detail价格已存在 */ 
  CREATE_BASIC_PRICE_DETAIL_ERROR = 22220119,
  /** 商品辅助单位比例为空 */ 
  SKU_SECOND_BASE_UNIT_RATION_EMPTY = 22220120,
  /** 自定义单位比例为空 */ 
  SKU_UNIT_RATION_EMPTY = 22220121,
  /** 无效参数 */ 
  INVALID_ARGUMENT = 22220122,
  /** 无法修改商品批次类型,存在未完成的仓储单据 */ 
  SKU_BATCH_TYPE_UPDATE_CHECK_ERROR = 22220123,
  /** 装箱规格名称为空 */ 
  PACK_NAME_NULL_ERROR = 22220124,
  /** 装箱规格名称重复 */ 
  PACK_NAME_DUMP_ERROR = 22220125,
  /** 装箱规格ID重复 */ 
  PACK_UNIT_ID_DUMP_ERROR = 22220126,
  /** 装箱规格单位只能是基本单位组、复制单位组 */ 
  PACK_UNIT_UNAVAIABLE_ERROR = 22220127,
  /** 只能一个默认装箱规格 */ 
  PACK_UNIT_ONLY_ONE_DEFAULT_ERROR = 22220128,
  /** 管理域商品存在单据 */ 
  SKU_MANAGE_INVENTORY_DOC_IS_EXIST = 22220130,
  /** 管理域商品存在库存 */ 
  SKU_MANAGE_INVENTORY_STOCK_IS_EXIST = 22220131,
  /** 商品在仓库系统存在库存 */ 
  SKU_INVENTORY_STOCK_IS_EXIST = 22220132,
  /** 商品存在未完成的单据 */ 
  SKU_INVENTORY_SHEET_IS_EXIST = 22220133,
}

export enum Unit_Type {
  T_UNSPECIFIED = 0,
  /** 长度 */ 
  LENGTH = 1,
  /** 面积 */ 
  AREA = 2,
  /** 容积|体积 */ 
  VOLUME = 3,
  /** 质量|重量 */ 
  MASS = 4,
  /** 数量repeated Ssu Ssu = 2; */ 
  COUNT = 5,
}

export enum Sku_DispatchType {
  DIS_TYPE_UNSPECIFIED = 0,
  ORDER = 1,
  DRIVER = 2,
}

export enum Sku_Status {
  S_UNSPECIFIED = 0,
  /** 是否检测:： */ 
  DETECT = 128,
  NUTRITION = 512,
}

export enum Sku_SkuType {
  ST_UNSPECIFIED = 0,
  /** 包材 */ 
  PACKAGE = 1,
  /** 非包材，普通商品 */ 
  NOT_PACKAGE = 2,
  /** 组合商品  // TODO 前端，应该在这里么 */ 
  COMBINE = 3,
}

export enum Sku_NotPackageSubSkuType {
  SNPST_UNSPECIFIED = 0,
  /** 原料 */ 
  ORIGIN = 1,
  /** 净菜 */ 
  CLEAN = 2,
  /** 熟食 */ 
  DELICATESSEN = 3,
  /** 菜品 */ 
  DISHES = 4,
  /** 套餐 */ 
  COMBO = 5,
  /** 盒饭 */ 
  BOXED_LUNCH = 6,
  /** 糕点 */ 
  CAKE = 7,
  /** 主食 */ 
  STAPLE = 8,
  /** 饮料 */ 
  DRINK = 9,
  /** 水 */ 
  WATER = 10,
  /** 配料 */ 
  INGREDIENTS = 11,
  /** 副食品 */ 
  NON_STAPLE_FOOD = 12,
  /** 外购成品 */ 
  OUTSOURCED_FINISHED_PRODUCTS = 13,
  /** 自制成品 */ 
  HOMEMADE_PRODUCTS = 14,
  /** 物料 */ 
  MATERIALS = 15,
  /** 粮油 */ 
  GRAIN_AND_OIL = 16,
  /** 预生产 */ 
  PRE_PRODUCTION = 17,
  /** 主荤 */ 
  MAIN_MEAT = 18,
  /** 小荤 */ 
  MINI_MEAT = 19,
  /** 副荤 */ 
  ACCESSORY_PRODUCTION = 20,
  /** 素菜 */ 
  VEGETABLE = 21,
  /** 水果 */ 
  FRUIT = 22,
  /** 调味品 */ 
  CONDIMENT = 23,
}

export enum Sku_PackageSubSkuType {
  PSST_UNSPECIFIED = 0,
  /** 包材-周转物 */ 
  TURNOVER = 1,
  /** 包材-耗材 */ 
  ONE_TIME = 2,
}

export enum Sku_SupplierCooperateModelType {
  SCMT_UNSPECIFIED = 0,
  /** 仅供货 */ 
  SCMT_JUST_PROVIDE_GOODS = 1,
  /** 代分拣 */ 
  SCMT_WITH_SORTING = 2,
  /** 代配送 */ 
  SCMT_WITH_DELIVERY = 4,
}

export enum Sku_PackageCalculateType {
  PC_UNSPECIFIED = 0,
  FIXED = 1,
  BY_ORDER_NUM = 2,
}

export enum Sku_PurchaseSkuType {
  PST_UNSPECIFIED = 0,
  /** 常规商品 */ 
  PST_NOT_TMP = 1,
  /** 临采商品 */ 
  PST_TMP = 2,
}

export enum Sku_Source {
  SOURCE_UNSPECIFIED = 0,
  /** 标准版ERP创建 */ 
  SOURCE_ERP = 1,
  /** 轻巧版ERP创建 */ 
  SOURCE_LITE_ERP = 2,
  /** eshop接口创建 */ 
  SOURCE_ESHOP = 3,
  /** 轻巧版接口创建 */ 
  SOURCE_LITE = 4,
}

export enum Ssu_PackageCalculateType {
  PC_UNSPECIFIED = 0,
  FIXED = 1,
  BY_ORDER_NUM = 2,
}

export enum Ssu_NutritionType {
  NT_UNSPECIFIED = 0,
  PROTEIN = 1,
  FAT = 2,
  CARBOHYDRATE = 3,
}

export enum Ssu_SplitFlag {
  /** 1表示只投框, 2表示只分切, 3表示投框+分切 */ 
  SF_UNSPECIFIED = 0,
  THROW_BASK_BET = 1,
  DIVIDE = 2,
  INVESTMENT = 3,
}

export enum Ssu_ShippingFeeUnit {
  SFU_UNSPECIFIED = 0,
  /** ssu的计量单位 */ 
  BASE = 1,
  /** ssu的包装单位 */ 
  PACKAGE = 2,
}

export enum Ssu_Type {
  TYPE_UNSPECIFIED = 0,
  /** 普通ssu */ 
  TYPE_COMMON = 1,
  /** 组合ssu */ 
  TYPE_COMBINE = 2,
}

export enum Quotation_Type {
  UNSPECIFIED = 0,
  /** 普通报价单 */ 
  WITHOUT_TIME = 1,
  /** 菜谱 */ 
  WITH_TIME = 2,
  /** 协议价格 */ 
  PROTOCOL_PRICE = 3,
  /** 采购员报价 */ 
  PURCHASE_PRICE = 4,
  /** 特殊定价  特殊定价是用于价格覆盖 */ 
  SPECIAL_PRICE = 5,
  /** 周期报价单 */ 
  PERIODIC = 6,
  /** 客户协议价，基于报价单但是在取值时优先级高于报价单中价格 */ 
  CUSTOMER_PRICE = 7,
}

export enum Quotation_CycleType {
  CYCLETYPE_UNSPECIFIED = 0,
  /** 日 */ 
  CYCLETYPE_DAILY = 1,
  /** 周 */ 
  CYCLETYPE_WEEKLY = 2,
  /** 月 */ 
  CYCLETYPE_MONTHLY = 3,
  /** 长期报价单 */ 
  CYCLETYPE_LONG = 4,
}

export enum Quotation_Status {
  STATUS_UNSPECIFIED = 0,
  /** 未生效/未激活/禁用 */ 
  STATUS_WAIT_VALID = 1,
  /** 已生效/激活/启用 */ 
  STATUS_VALID = 2,
  /** 已失效 */ 
  STATUS_INVALID = 3,
  /** 已终止 */ 
  STATUS_STOP = 4,
  /** 待审核 */ 
  STATUS_WAIT_AUDIT = 5,
  /** 未开始 */ 
  STATUS_WAIT_AVAILABLE = 6,
  /** 进行中 */ 
  STATUS_AVAILABLE = 7,
  /** 已过期 */ 
  STATUS_EXPIRED = 8,
}

export enum Quotation_ValidType {
  VALIDTYPE_UNSPECIFIED = 0,
  /** 长期生效 */ 
  VALIDTYPE_LONG = 1,
  /** 限时生效 */ 
  VALIDTYPE_TEMP = 2,
}

export enum Quotation_AdventState {
  /** 正常 */ 
  ADVENT_UNSPECIFIED = 0,
  /** 即将过期 */ 
  ADVENT_SOON = 1,
  /** 已过期 */ 
  ADVENT_OVERDUE = 2,
}

export enum Quotation_ValidTimeType {
  /** 正常 */ 
  VALID_TIME_UNSPECIFIED = 0,
  /** 按下单日期 */ 
  VALID_TIME_ORDER = 1,
  /** 按收货日期 */ 
  VALID_TIME_RECEIVE = 2,
}

export enum Menu_Type {
  TYPE_UNSPECIFIED = 0,
  /** Eshop 菜谱 */ 
  TYPE_ESHOP = 1,
}

export enum Menu_BusinessType {
  BUSINESS_TYPE_UNSPECIFIED = 0,
  /** 报价单 */ 
  BUSINESS_TYPE_QUOTATION = 1,
}

export enum MenuDetail_State {
  STATE_UNSPECIFIED = 0,
  /** 未进入生产 */ 
  STATE_PREPARE = 1,
  /** 已进入生产 */ 
  STATE_FINISHED = 2,
}

export enum MenuPeriodGroup_Type {
  UNSPECIFIED = 0,
  /** 默认餐次 */ 
  DEFAULT = 1,
  /** eshop 餐次 */ 
  ESHOP = 2,
}

export enum BasicPrice_Source {
  UNSPECIFIED = 0,
  /** 采购小程序 */ 
  PURCHASE_APP = 1,
  /** erp */ 
  STATION = 2,
}

export enum BasicPrice_BpOnShelfType {
  ON_SHELF_UNSPECIFIED = 0,
  /** BasicPrice里所有单位的价格条目(item)都上架 */ 
  ALL_ON_SHELF = 1,
  /** BasicPrice里所有单位的价格条目(item)都下架 */ 
  ALL_OUT_OF_SHELF = 2,
  /** BasicPrice里单位的价格条目(item)部分上架，部分下架 */ 
  PART_ON_SHELF = 3,
}

export enum BasicPriceItem_PRICINGFORMULA {
  PRICINGFORMULA_UNSPECIFIED = 0,
  /** 自定义公式 */ 
  PRICINGFORMULA_DIY = 1,
  /** 不设置公式 */ 
  PRICINGFORMULA_NONE = 2,
}

export enum BasicPriceItem_PRICINGTYPE {
  PRICINGTYPE_UNSPECIFIED = 0,
  /** 常规定价 */ 
  PRICINGTYPE_NORMAL = 1,
  /** 区间定价 */ 
  PRICINGTYPE_INTERVAL = 2,
}

export enum BasicPriceItem_CalculateMethod {
  /** 不设置计算规则，同时计算规则中的price不起作用 */ 
  CALCULATEMETHOD_UNSPECIFIED = 0,
  /** 固定 */ 
  CALCULATEMETHOD_FIX = 1,
  /** 乘 */ 
  CALCULATEMETHOD_MULTI = 2,
  /** 加 */ 
  CALCULATEMETHOD_ADD = 3,
  /** 减 */ 
  CALCULATEMETHOD_SUB = 4,
  /** 自定义公式 */ 
  CALCULATEMETHOD_CUSTOMIZE = 5,
}

export enum MultiQuotationBasicPriceItem_PRICETYPE {
  PRICETYPE_UNSPECIFIED = 0,
  /** 时价 */ 
  PRICETYPE_CURRENTPRICE = 1,
  /** 非时价 */ 
  PRICETYPE_NOTCURRENTPRICE = 2,
}

export enum Favorite_FavoriteType {
  F_UNSPECIFIED = 0,
  BSHOP = 1,
}

export enum Favorite_FavoriteContentType {
  FC_UNSPECIFIED = 0,
  SSU = 1,
}

export enum RuleSet_State {
  STATE_UNSPECIFIED = 0,
  /** 有效 */ 
  ON = 1,
  /** 无效 */ 
  OFF = 2,
}

export enum RuleSet_Type {
  TYPE_UNSPECIFIED = 0,
  RANGE = 1,
  PRICE = 2,
}

export enum ReferencePrice_Type {
  REFERENCE_PRICE_UNSPECIFIED = 0,
  /** 最近入库价 */ 
  LAST_IN_STOCK_PRICE = 1,
  /** 最近采购价 */ 
  LAST_PURCHASE_PRICE = 2,
  /** 最近询价 */ 
  LAST_QUOTE_PRICE = 3,
  /** 最近采购协议价 */ 
  LAST_PURCHASE_AGREEMENT_PRICE = 4,
  /** 库存均价 */ 
  INVENTORY_AVERAGE_PRICE = 5,
  /** 供应商协议价 */ 
  SUPPLIER_AGREEMENT_PRICE = 6,
  /** 供应商最近询价 */ 
  SUPPLIER_LAST_INQUIRY_PRICE = 7,
  /** 供应商最近入库价 */ 
  SUPPLIER_LAST_IN_STOCK_PRICE = 8,
  /** 供应商最近入库价（供应商直供） */ 
  SUPPLIER_LAST_IN_STOCK_SUPPLIER_PRICE = 9,
  /** 供应商最近入库价（市场自采） */ 
  SUPPLIER_LAST_IN_STOCK_MARKET_PRICE = 10,
  /** 最近入库价（供应商直供） */ 
  LAST_IN_STOCK_SUPPLIER_PRICE = 11,
  /** 最近入库价（市场自采） */ 
  LAST_IN_STOCK_MARKET_PRICE = 12,
  /** 最近采购价（供应商直供） */ 
  LAST_PURCHASE_SUPPLIER_PRICE = 13,
  /** 最近采购价（市场自采） */ 
  LAST_PURCHASE_MARKET_PRICE = 14,
  /** 在sku身上的商品参考行情价 */ 
  MARKET_REFERENCE_PRICE = 15,
  /** 最近生产入库价 */ 
  LAST_PRODUCT_IN_STOCK_PRICE = 16,
}

export enum SkuSuggestedPrice_Type {
  TYPE_UNSPECIFIED = 0,
  /** 客户最近价 */ 
  CUSTOMER_RECENT_PRICE = 1,
  /** 客户报价单价 */ 
  CUSTOMER_BASIC_PRICE = 2,
  /** 商品最近价 */ 
  SKU_RECENT_PRICE = 3,
  /** 商品默认报价单价 */ 
  SKU_BASIC_PRICE = 4,
}

export enum BulkImportBasicPriceV2LiteMiddle_ErrorCode {
  ERROR_CODE_UNSPECIFIED = 0,
  /** 匹配到多个SKU */ 
  ERROR_CODE_MORE_SKU = 1,
  /** 商品不存在 */ 
  ERROR_CODE_SKU_NOT_EXIST = 2,
  /** 临时商品 */ 
  ERROR_CODE_SKU_IS_TMP = 3,
  /** 商品单价为空 */ 
  ERROR_CODE_SKU_PRICE_EMPTY = 5,
  /** 商品单价格式错误 */ 
  ERROR_CODE_SKU_PRICE_ERROR = 6,
  /** 商品别名过长 */ 
  ERROR_CODE_SKU_ALIAS_LENGTH = 7,
  /** 商品别名超出5个 */ 
  ERROR_CODE_SKU_ALIAS_MORE = 8,
  /** 订价单位不存在，此时会存在 error_string */ 
  ERROR_CODE_SHEET_UNIT_NOT_EXIST = 10,
  /** 下单单位未填写 */ 
  ERROR_CODE_ORDER_UNIT_EMPTY = 15,
  /** 下单单位不存在，此时会存在 error_string */ 
  ERROR_CODE_ORDER_UNIT_NOT_EXIST = 16,
  /** 创建商品、更新商品、创建BasicPrice遇到的错误，此时会存在 error_string */ 
  ERROR_CODE_OTHER = 20,
}

export enum MarketData_SourcePlatform {
  MARKETDATA_SOURCEPLATFORM_UNSPECIFIED = 0,
  /** 创价网 */ 
  MARKETDATA_SOURCEPLATFORM_CJBJ = 1,
}

export enum MarketData_PriceType {
  MARKETDATA_PRICE_TYPE_UNSPECIFIED = 0,
  /** 批发 */ 
  MARKETDATA_PRICE_TYPE_WHOLESALE = 1,
  /** 零售 */ 
  MARKETDATA_PRICE_TYPE_RETAIL = 2,
}

export enum ListCategoryRequest_PagingField {
  UNSPECIFIED = 0,
  /** 分类名 */ 
  CATEGORY_NAME = 1,
  /** 分类ID */ 
  CATEGORY_ID = 2,
}

export enum GetCategoryTreeRequest_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按排序字段 */ 
  SORT_NUM = 1,
}

export enum ChangeMerchandiseRankRequest_NodeType {
  NT_UNSPECIFIED = 0,
  CATEGORY = 1,
  SPU = 2,
  SKU = 3,
}

export enum ListSkuRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SSU */ 
  SSU = 256,
  /** 2^9 是否返回价格 */ 
  PRICE = 512,
  /** 2^10 是否返回分类 */ 
  CATEGORY = 1024,
  /** 2^11 是否返回报价单 */ 
  QUOTATION = 2048,
}

export enum ListSkuRequest_PagingField {
  UNSPECIFIED = 0,
  /** 按照spu id的顺序排列 会拉出来 */ 
  SPU_IDS = 1,
}

export enum BatchApprovetemporarySkuRequest_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按排序字段排序 */ 
  SORT_NUM = 1,
  /** 按创建时间排序 */ 
  CREATE_TIME = 2,
}

export enum BatchApprovetemporarySkuRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^9 是否返回分类 */ 
  CATEGORY = 512,
  /** 2^10 是否返回财务分类 */ 
  FINANCE_CATEGORY = 1024,
  /** 2^11 是否返回最大价格最小价格 */ 
  NEED_MIN_MAX_PRICE = 2048,
}

export enum ListSkuV2ForSearchRequest_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按排序字段排序 */ 
  SORT_NUM = 1,
  /** 按创建时间排序 */ 
  CREATE_TIME = 2,
}

export enum ListSkuV2ForSearchRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^9 是否返回分类 */ 
  CATEGORY = 512,
  /** 2^10 是否返回财务分类 */ 
  FINANCE_CATEGORY = 1024,
  /** 2^11 是否返回最大价格最小价格 */ 
  NEED_MIN_MAX_PRICE = 2048,
}

export enum ListSkuV2Request_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按排序字段排序 */ 
  SORT_NUM = 1,
  /** 按创建时间排序 */ 
  CREATE_TIME = 2,
}

export enum ListSkuV2Request_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^9 是否返回分类 */ 
  CATEGORY = 512,
  /** 2^10 是否返回财务分类 */ 
  FINANCE_CATEGORY = 1024,
  /** 2^11 是否返回最大价格最小价格 */ 
  NEED_MIN_MAX_PRICE = 2048,
}

export enum ListSkuLiteRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^9 是否返回分类 */ 
  CATEGORY = 512,
  /** 2^10 是否返回分类 */ 
  FINANCE_CATEGORY = 1024,
}

export enum GetManySkuV2Request_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^9 是否返回分类 */ 
  CATEGORY = 512,
  /** 2^10 是否返回分类 */ 
  FINANCE_CATEGORY = 1024,
}

export enum GetManySkuRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SSU */ 
  SSU = 256,
  /** 2^9 是否返回价格 */ 
  PRICE = 512,
  /** 2^10 是否返回分类 */ 
  CATEGORY = 1024,
}

export enum CreateSkuV2Request_SkuSource {
  SKU_SOURCE_UNSPECIFIED = 0,
  /** 标准版 */ 
  SKU_SOURCE_STANDARD = 1,
  /** 轻巧版 */ 
  SKU_SOURCE_LITE = 2,
}

export enum BulkImportSkuByExcelV2Request_BulkCreateCategorySkuV2Type {
  TIME_TYPE_UNSPECIFIED = 0,
  /** 标准版 */ 
  BULK_CREATE_CATEGORY_SKU_TYPE_DEFAULT = 1,
  /** 轻巧版 */ 
  BULK_CREATE_CATEGORY_SKU_TYPE_LITE = 2,
}

export enum BulkCreateCategorySkuV2Request_BulkCreateCategorySkuV2Type {
  TIME_TYPE_UNSPECIFIED = 0,
  /** 标准版 */ 
  BULK_CREATE_CATEGORY_SKU_TYPE_DEFAULT = 1,
  /** 轻巧版 */ 
  BULK_CREATE_CATEGORY_SKU_TYPE_LITE = 2,
}

export enum ListQuotationRequest_TimeType {
  TIME_TYPE_UNSPECIFIED = 0,
  /** 建单时间 */ 
  TIME_TYPE_CREATE_QUOTATION = 1,
  /** 协议价开始时间 */ 
  TIME_TYPE_AGREEMENT = 2,
}

export enum UpdateQuotationSortNumRequest_OperationType {
  OPERATION_TYPE_UNSPECIFIED = 0,
  /** 置顶 */ 
  OPERATION_TYPE_TOP = 1,
  /** 上移 */ 
  OPERATION_TYPE_MOVE_UP = 2,
  /** 下移 */ 
  OPERATION_TYPE_MOVE_DOWN = 3,
}

export enum ListBasicPriceV2Request_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SKU */ 
  SKU = 256,
  /** 2^9 是否返回价格 */ 
  QUOTATION = 512,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  QUOTATION_CUSTOMER_RELATION = 1024,
}

export enum ListBasicPriceV2Request_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按价格创建时间排序 */ 
  BASIC_PRICE_ID = 1,
  /** 按照商品名称排序 */ 
  NAME = 2,
  /** 按照商品排序字段排序 */ 
  SORT_NUM = 3,
  /** 按照一级分类排序 */ 
  CATEGORY_FIRST = 4,
  /** 按照二级分类排序 */ 
  CATEGORY_SECOND = 5,
}

export enum ListBasicPriceDetailRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SKU */ 
  SKU = 256,
  /** 2^9 是否返回价格 */ 
  QUOTATION = 512,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  QUOTATION_CUSTOMER_RELATION = 1024,
}

export enum ListBasicPriceDetailRequest_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按价格创建时间排序 */ 
  BASIC_PRICE_ID = 1,
  /** 按照商品名称排序 */ 
  NAME = 2,
  /** 按照商品排序字段排序 */ 
  SORT_NUM = 3,
  /** 按照一级分类排序 */ 
  CATEGORY_FIRST = 4,
  /** 按照二级分类排序 */ 
  CATEGORY_SECOND = 5,
}

export enum ListLiteBasicPriceRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SKU */ 
  SKU = 256,
  /** 2^9 是否返回价格 */ 
  QUOTATION = 512,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  QUOTATION_CUSTOMER_RELATION = 1024,
}

export enum ListLiteBasicPriceRequest_PagingField {
  /** 部分语言中枚举值有默认值 0，为了防止意料之外的情况，所以我们认为 0 没有含义 */ 
  UNSPECIFIED = 0,
  /** 按价格创建时间排序 */ 
  BASIC_PRICE_ID = 1,
  /** 按照商品名称排序 */ 
  NAME = 2,
  /** 按照商品排序字段排序 */ 
  SORT_NUM = 3,
}

export enum ListHistoryBasicPriceRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SKU */ 
  SKU = 256,
  /** 2^9 是否返回价格 */ 
  QUOTATION = 512,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  QUOTATION_CUSTOMER_RELATION = 1024,
}

export enum ListHistoryBasicPriceByCustomerIDRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListBasicPriceByCustomerIDRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListLiteBasicPriceByCustomerIDRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListBasicPriceDetailByCustomerIDRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListBasicPriceDetailByCustomerIDForSearchRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListFavoriteRequest_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^8 是否返回SSU */ 
  FAVORITE_SSU = 256,
}

export enum ListFavoriteSkuV2Request_RequestData {
  RD_UNSPECIFIED = 0,
  /** 2^10 是否返回报价单对应的CUSTOMER_IDS */ 
  FAVORITE_SKU = 256,
}

export enum ListBasicPriceRequest_PagingField {
  SORT_UNSPECIFIED = 0,
  SORT_NUM = 1,
}

export enum ListBasicPriceRequest_SnapshotBasicPrice {
  UNSPECIFIED = 0,
  /** 按照报价单 */ 
  SNAPSHOT_BASIC_PRICE_BY_QUOTATION = 1,
  /** 按照ssu */ 
  SNAPSHOT_BASIC_PRICE_BY_SSU = 2,
}

export enum GetImportQuotationBasicPriceTemplateRequest_Template {
  UNSPECIFIED = 0,
  /** 下载按供应商导入模版 */ 
  TMP_BY_QUOTATION = 1,
  /** 下载按ssu导入模版 */ 
  TMP_BY_SSU = 2,
}

export enum ListSimpleMenuRequest_PagingField {
  UNSPECIFIED = 0,
  /** 菜谱名称 */ 
  INNER_NAME = 1,
  /** 菜谱号 */ 
  SERIAL_NO = 2,
  /** 班级数 */ 
  CLASS_COUNT = 3,
  /** 天数 */ 
  DAY_COUNT = 4,
  /** 状态 */ 
  IS_ACTIVE = 5,
  /** 创建时间 */ 
  CREATE_TIME = 6,
}

export enum ListMenuRequest_PagingField {
  UNSPECIFIED = 0,
  /** 菜谱名称 */ 
  INNER_NAME = 1,
  /** 菜谱号 */ 
  SERIAL_NO = 2,
  /** 班级数 */ 
  CLASS_COUNT = 3,
  /** 天数 */ 
  DAY_COUNT = 4,
  /** 状态 */ 
  IS_ACTIVE = 5,
  /** 创建时间 */ 
  CREATE_TIME = 6,
}

export enum BatchRelatedAllSkuRequest_ShelfStatus {
  SHELF_STATUS_UNSPECIFIED = 0,
  /** 上架 */ 
  SHELF_STATUS_TOP = 1,
  /** 下架 */ 
  SHELF_STATUS_DOWN = 2,
}

export enum BatchRelatedAllSkuRequest_UnitType {
  UNIT_TYPE_UNSPECIFIED = 0,
  /** 基本单位 */ 
  UNIT_TYPE_BASE = 1,
  /** 辅助单位 */ 
  UNIT_TYPE_ASSIST = 2,
  /** 自定义单位 */ 
  UNIT_TYPE_CUSTOM = 3,
}

export enum MatchSkuResponse_SkuNameType {
  SKU_NAME_TYPE_UNSPECIFIED = 0,
  /** 商品本身的名字 */ 
  SKU_NAME_TYPE_NAME = 1,
  /** 商品别名 */ 
  SKU_NAME_TYPE_ALIAS = 2,
  /** 客户配置名 */ 
  SKU_NAME_TYPE_CUSTOMER_CONFIG = 3,
}

export enum ListFinanceCategoryRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListSkuNutritionRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListSkuSaleInventoryRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListCustomerPriceOnCategoryRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListCustomerPriceMaskSkuRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListCustomerQuotationRelationRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListMealCalendarRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListFavoriteSkuRequest_PagingField {
  UNSPECIFIED = 0,
}

export enum ListSkuAcceptanceCriteriaRequest_PagingField {
  UNSPECIFIED = 0,
}
