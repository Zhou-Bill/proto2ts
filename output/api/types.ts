import { AxiosRequestConfig } from 'axios'
import { 
  SystemUnitId,
  SkuUnitId,
  UnitType,
  Optype,
  ModuleType,
  PricingFormula,
  PricingType,
  CalculateMethod,
  SkuSortField,
  QuotationSortField,
  SkuBatchType,
  Status_Code,
  Unit_Type,
  Sku_DispatchType,
  Sku_Status,
  Sku_SkuType,
  Sku_NotPackageSubSkuType,
  Sku_PackageSubSkuType,
  Sku_SupplierCooperateModelType,
  Sku_PackageCalculateType,
  Sku_PurchaseSkuType,
  Sku_Source,
  Ssu_PackageCalculateType,
  Ssu_NutritionType,
  Ssu_SplitFlag,
  Ssu_ShippingFeeUnit,
  Ssu_Type,
  Quotation_Type,
  Quotation_CycleType,
  Quotation_Status,
  Quotation_ValidType,
  Quotation_AdventState,
  Quotation_ValidTimeType,
  Menu_Type,
  Menu_BusinessType,
  MenuDetail_State,
  MenuPeriodGroup_Type,
  BasicPrice_Source,
  BasicPrice_BpOnShelfType,
  BasicPriceItem_PRICINGFORMULA,
  BasicPriceItem_PRICINGTYPE,
  BasicPriceItem_CalculateMethod,
  MultiQuotationBasicPriceItem_PRICETYPE,
  Favorite_FavoriteType,
  Favorite_FavoriteContentType,
  RuleSet_State,
  RuleSet_Type,
  ReferencePrice_Type,
  SkuSuggestedPrice_Type,
  BulkImportBasicPriceV2LiteMiddle_ErrorCode,
  MarketData_SourcePlatform,
  MarketData_PriceType,
  ListCategoryRequest_PagingField,
  GetCategoryTreeRequest_PagingField,
  ChangeMerchandiseRankRequest_NodeType,
  ListSkuRequest_RequestData,
  ListSkuRequest_PagingField,
  BatchApprovetemporarySkuRequest_PagingField,
  BatchApprovetemporarySkuRequest_RequestData,
  ListSkuV2ForSearchRequest_PagingField,
  ListSkuV2ForSearchRequest_RequestData,
  ListSkuV2Request_PagingField,
  ListSkuV2Request_RequestData,
  ListSkuLiteRequest_RequestData,
  GetManySkuV2Request_RequestData,
  GetManySkuRequest_RequestData,
  CreateSkuV2Request_SkuSource,
  BulkImportSkuByExcelV2Request_BulkCreateCategorySkuV2Type,
  BulkCreateCategorySkuV2Request_BulkCreateCategorySkuV2Type,
  ListQuotationRequest_TimeType,
  UpdateQuotationSortNumRequest_OperationType,
  ListBasicPriceV2Request_RequestData,
  ListBasicPriceV2Request_PagingField,
  ListBasicPriceDetailRequest_RequestData,
  ListBasicPriceDetailRequest_PagingField,
  ListLiteBasicPriceRequest_RequestData,
  ListLiteBasicPriceRequest_PagingField,
  ListHistoryBasicPriceRequest_RequestData,
  ListHistoryBasicPriceByCustomerIDRequest_RequestData,
  ListBasicPriceByCustomerIDRequest_RequestData,
  ListLiteBasicPriceByCustomerIDRequest_RequestData,
  ListBasicPriceDetailByCustomerIDRequest_RequestData,
  ListBasicPriceDetailByCustomerIDForSearchRequest_RequestData,
  ListFavoriteRequest_RequestData,
  ListFavoriteSkuV2Request_RequestData,
  ListBasicPriceRequest_PagingField,
  ListBasicPriceRequest_SnapshotBasicPrice,
  GetImportQuotationBasicPriceTemplateRequest_Template,
  ListSimpleMenuRequest_PagingField,
  ListMenuRequest_PagingField,
  BatchRelatedAllSkuRequest_ShelfStatus,
  BatchRelatedAllSkuRequest_UnitType,
  MatchSkuResponse_SkuNameType,
  ListFinanceCategoryRequest_PagingField,
  ListSkuNutritionRequest_PagingField,
  ListSkuSaleInventoryRequest_PagingField,
  ListCustomerPriceOnCategoryRequest_PagingField,
  ListCustomerPriceMaskSkuRequest_PagingField,
  ListCustomerQuotationRelationRequest_PagingField,
  ListMealCalendarRequest_PagingField,
  ListFavoriteSkuRequest_PagingField,
  ListSkuAcceptanceCriteriaRequest_PagingField,
} from './enums'

export interface SkuSalePriceCache {
  axiosConfig?: AxiosRequestConfig,
   /** 订单ID */ 
  order_id?: string
   /** 订单号 */ 
  serial_no?: string
   /** 订单时间 */ 
  order_time?: string
   /** 收货人 */ 
  receive_customer_id?: string
   /** 订单详情商品备注 */ 
  remark?: string
   /** 商品ID */ 
  sku_id?: string
   /** 下单单位ID */ 
  order_unit_id?: string
   /** 下单数 */ 
  order_val?: string
   /** 定价单位ID */ 
  fee_unit_id?: string
   /** 定价 */ 
  fee_val?: string
}

export interface SkuReferencePriceCaches {
  axiosConfig?: AxiosRequestConfig,
  sku_reference_prices?: SkuReferencePriceCache[]
}

export interface SkuReferencePriceCache {
  axiosConfig?: AxiosRequestConfig,
   /** 单据来源ID */ 
  source_id?: string
   /** 快照时间 */ 
  snapshot_time?: string
   /** 商品ID */ 
  sku_id?: string
   /** 单位ID */ 
  unit_id?: string
   /** 单价 */ 
  price?: string
   /** 供应商ID */ 
  supplier_id?: string
   /** 类型 */ 
  type?: number
}

export interface SkuReferencePriceFilter {
  axiosConfig?: AxiosRequestConfig,
   /** 参考ReferencePrice.Type */ 
  type?: number
   /** 商品过滤 */ 
  sku_filters?: SkuReferencePriceFilter_SkuFilter[]
   /** 最近多少条价格，最大30条 */ 
  period?: string
   /** 开始时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  start_time?: string
   /** 结束时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  end_time?: string
}

export interface SkuReferencePriceFilter_SkuFilter {
  axiosConfig?: AxiosRequestConfig,
   /** 商品ID */ 
  sku_id?: string
   /** 供应商ID，可选，不传取最新一条 */ 
  supplier_id?: string
}

export interface SkuBasicPriceCache {
  axiosConfig?: AxiosRequestConfig,
   /** 快照时间 */ 
  snapshot_time?: string
   /** 报价单ID */ 
  quotation_id?: string
   /** 商品ID */ 
  sku_id?: string
   /** 报价集合，每次都是全量的报价集合 */ 
  basic_prices?: SkuBasicPriceCache_BasicPrice[]
   /** 报价ID */ 
  basic_price_id?: string
}

export interface SkuBasicPriceCache_BasicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 定价单位ID */ 
  fee_unit_id?: string
   /** 定价 */ 
  fee_val?: string
   /** 下单单位 */ 
  order_unit_id?: string
}

export interface SkuCache {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
   /** sku名字 */ 
  name?: string
   /** sku名 的拼音首字母 */ 
  name_pinyin_first_letter?: string
   /** sku名 的拼音 */ 
  name_pinyin_letter?: string
   /** 商品编码 */ 
  customize_code?: string
   /** 条形码 */ 
  bar_code?: string
   /** 备用条形码1 */ 
  bar_code1?: string
   /** 备用条形码2 */ 
  bar_code2?: string
   /** 商品别名 */ 
  alias_name?: string[]
   /** 商品自身的排序号 */ 
  sort_num?: string
}

export interface SkuCustomerAliasCache {
  axiosConfig?: AxiosRequestConfig,
   /** 商品ID */ 
  sku_id?: string
   /** 客户ID */ 
  customer_id?: string
   /** 客户商品别名，多个商品别名用中文逗号分隔 */ 
  alias_name?: string
   /** 商品编码 */ 
  customize_code?: string
}

export interface SkuCacheSort {
  axiosConfig?: AxiosRequestConfig,
   /** 商品ID */ 
  sku_id?: string
   /** 商品名称 */ 
  name?: string
   /** 商品别名（可能是商品自己的别名，也可能是客户商品别名） */ 
  alias_name?: string
   /** 搜索次数 */ 
  search_count?: string
   /** 下单次数 */ 
  order_count?: string
   /** 关键字索引，完全匹配index = -1 */ 
  index?: string
   /** 商品自身的排序号 */ 
  sort_num?: string
}

export interface SkuCount {
  axiosConfig?: AxiosRequestConfig,
  search_count?: string
  order_count?: string
}

export interface ImportSkuNutritionData {
  axiosConfig?: AxiosRequestConfig,
   /** 表头 */ 
  header?: ImportSkuNutritionData_Rows
   /** 表格内容 */ 
  row_map?: ImportSkuNutritionData_Rows
   /** 错误数据 */ 
  error_rows?: ImportSkuNutritionData_Rows[]
}

export interface ImportSkuNutritionData_Rows {
  axiosConfig?: AxiosRequestConfig,
  cols?: string[]
}

export interface Status {
  axiosConfig?: AxiosRequestConfig,
  sku_unit_id?: Status_SkuIdUnitId
  basic_price_id?: BasicPriceId
  conflict_quotation_serial_nos?: string[]
  conflict_ids?: string[]
}

export interface Status_SkuIdUnitId {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
  quotation_id?: string
}

export interface Unit {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  unit_id?: string
   /** 状态bitmap */ 
  status?: string
   /** 版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** 如有则表示是企业自定义单位 */ 
  group_id?: string
  name?: string
   /** id/parent_id 单位是「3斤/袋」的含义是 「3斤= 1袋」，所以比率（unit.rate） =「1袋/1斤 = 3」 */ 
  rate?: string
  type?: Unit_Type
   /** 基本单位 */ 
  parent_id?: string
   /** 国家编码，如有则表示该单位仅适用于该国家 */ 
  country_id?: string
   /** 是否是临时单位 */ 
  is_temporary_unit?: boolean
   /** 单位创建者ID */ 
  creator_id?: string
   /** 单位创建者名称 */ 
  creator_name?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Category {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  category_id?: string
   /** 状态bitmap */ 
  status?: string
   /** 版本 其实并没有版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id;" */ 
  group_id?: string
   /** 一级分类的parent_id 是 0 */ 
  parent_id?: string
   /** 由平台同步的分类有此字段 */ 
  source_category_id?: string
   /** 平台同步的分类有此字段,源sku的group_id */ 
  source_group_id?: string
   /** 集团化之后商品分类属于站点或集团，增加station_id */ 
  station_id?: string
  name?: string
   /** 不影响版本 */ 
  icon?: string
   /** 不影响版本 */ 
  rank?: number
   /** 层级 */ 
  level?: number
   /** 分类排序，小的在前，大的在后 */ 
  sort_num?: number
   /** 客户协议价在分类上的计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 客户协议价 区间定价 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 公式类型 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
   /** 是否设置公式 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface InternalCategory {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  internal_category_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
   /** 一级分类的parent_id 是 0 */ 
  parent_id?: string
  name?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface FinanceCategory {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  finance_category_id?: string
   /** 版本 其实并没有版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  name?: string
   /** 一级分类的parent_id 是 0 */ 
  parent_id?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Spu {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  spu_id?: string
   /** 状态bitmap */ 
  status?: string
   /** 版本 没有版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
  parent_id?: string
   /** 平台同步的spu有此字段 */ 
  source_spu_id?: string
   /** 平台同步的spu有此字段,源sku的group_id */ 
  source_group_id?: string
  name?: string
   /** 不影响版本 */ 
  icon?: string
   /** 不影响版本 默认create_time排序 */ 
  rank?: number
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface PackUnit {
  axiosConfig?: AxiosRequestConfig,
   /** 装箱单位id */ 
  pack_unit_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** 站点ID，集团化之后商品属于集团或站点 */ 
  station_id?: string
   /** 装箱名称 */ 
  pack_name?: string
   /** 装箱单位的规格，现在默认是1 */ 
  pack_rate?: string
   /** 单位id，系统可选单位的id */ 
  unit_id?: string
   /** 装箱规格 */ 
  rate?: string
   /** 是否默认 */ 
  is_default?: boolean
   /** 是否支持换算小规格 */ 
  is_switch?: boolean
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Sku {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  sku_id?: string
   /** 状态bitmap  detect；开启营养素 */ 
  status?: string
   /** 版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id_on_sale_sku_type_key;INDEX:group_id_on_sale_key;INDEX:customize_code_key;INDEX:group_id_shelf_id,priority:1" */ 
  group_id?: string
   /** 站点ID，集团化之后商品属于集团或站点 */ 
  station_id?: string
   /** sku分类的上级分类id。为了减少查询 */ 
  category_id?: string
   /** 一级分类ID */ 
  category1_id?: string
   /** 二级分类ID */ 
  category2_id?: string
   /** 三级分类ID */ 
  category3_id?: string
   /** 四级分类ID */ 
  category4_id?: string
   /** 五级分类ID */ 
  category5_id?: string
  spu_id?: string
   /** 基本单位 */ 
  base_unit_id?: string
   /** 基本单位名称 */ 
  base_unit_name?: string
   /** 辅助单位 */ 
  second_base_unit_id?: string
   /** 辅助单位/基本单位的比率 */ 
  second_base_unit_ratio?: string
   /** 自定义单位的最大单位 */ 
  max_unit_id?: string
   /** 平台同步的sku有此字段 */ 
  source_sku_id?: string
   /** 平台同步的sku有此字段,源sku的group_id */ 
  source_group_id?: string
   /** sku名字 影响版本 */ 
  name?: string
   /** sku名 的拼音首字母 */ 
  name_pinyin_first_letter?: string
   /** sku名 的拼音 */ 
  name_pinyin_letter?: string
   /** 自定义id */ 
  customize_code?: string
   /** 商品描述 */ 
  desc?: string
   /** @inject_tag: gorm:"INDEX:group_id_on_sale_sku_type_key" */ 
  sku_type: Sku_SkuType
   /** 非耗材商品必填 */ 
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
   /** 耗材商品必填 */ 
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** 保质期 */ 
  expiry_date?: number
  repeated_field?: Sku_RepeatedField
   /** 业务信息 */ 
  dispatch_type: Sku_DispatchType
   /** 排序 */ 
  rank?: number
   /** 普通商品必传 */ 
  purchaser_id?: string
   /** 普通商品必传 */ 
  supplier_id?: string
   /** 生产单位 */ 
  production_unit_id?: string
   /** 生产单位 */ 
  production_unit?: Unit
   /** 采购单位 */ 
  purchase_unit_id?: string
   /** 损耗比例 */ 
  loss_ratio?: string
   /** sku是包材，包材的货值 */ 
  package_price?: string
   /** 商品税收分类编码 */ 
  tax_category_code?: string
   /** 销项税率,output_tax */ 
  tax?: string
   /** 税率分类 */ 
  finance_category_id?: string
   /** 进项税率 */ 
  input_tax?: string
  supplier_input_taxs?: Sku_SupplierInputTaxMap
   /** 库存采购:是否手动采购 */ 
  manual_purchase?: boolean
   /** 默认货位 */ 
  shelf_id?: string
   /** sku的单位 */ 
  units?: Sku_UnitList
   /** 可售/不可售 */ 
  on_sale?: boolean
   /** 是否称重 */ 
  is_weight?: boolean
   /** 组合商品的子商品 */ 
  ingredients?: Ssu_Ingredients
  related_combine_sku_ids_map?: Sku_RelatedCombineSkuIdsMap
   /** 换算方式 */ 
  package_calculate_type?: Sku_PackageCalculateType
   /** 包材数量 */ 
  package_num?: number
   /** 包材id */ 
  package_sku_id?: string
   /** 商品成本 */ 
  cost?: string
   /** 条形码 */ 
  bar_code?: string
   /** 最小价格 */ 
  min_price?: string
   /** 最大价格 */ 
  max_price?: string
   /** 供应商协作模式 */ 
  supplier_cooperate_model_type?: Sku_SupplierCooperateModelType
   /** 商品等级 */ 
  sku_level?: Sku_SkuLevels
   /** 是否存在规则，默认false */ 
  have_purchase_rule?: common.Filters_Bool
   /** 内部分类id 用于同步客户定制化需求分类 如德保成本分类 */ 
  internal_category_id?: string
  has_set_supply_percentage?: boolean
   /** 订单id,只有sku第一次下单时会绑定，有值时删除订单相应条目会删除这个sku */ 
  order_id?: string
   /** 产地 */ 
  origin_place?: string
   /** 品牌 */ 
  brand?: string
   /** 售后标准 */ 
  after_sales_standards?: string
   /** 商品特征 */ 
  product_characteristics?: string
   /** @inject_tag: gorm:"-" */ 
  sku_hot?: string
   /** @inject_tag: gorm:"-" */ 
  sku_order_count?: string
   /** 商品验收标准 */ 
  sku_acceptance_criteria?: SkuAcceptanceCriteria
   /** 是否是临时商品 */ 
  is_temporary_product?: boolean
   /** 是否存在临时单位 */ 
  exist_temporary_unit?: boolean
   /** 是否设置销售库存 */ 
  set_sale_inventory?: boolean
   /** 默认仓库ID */ 
  warehouse_id?: string
   /** 商品创建者ID */ 
  creator_id?: string
   /** 商品创建者名称 */ 
  creator_name?: string
   /** 备用条形码1 */ 
  bar_code1?: string
   /** 备用条形码2 */ 
  bar_code2?: string
   /** 是否需要拣货 */ 
  pre_sorting?: boolean
   /** 采购侧：采购模式 */ 
  purchase_sku_type?: Sku_PurchaseSkuType
   /** 商品排序 */ 
  sort_num?: string
   /** sku创建来源 */ 
  source?: Sku_Source
   /** 参考行情价 */ 
  reference_market_price?: string
   /** 存货科目代码 */ 
  stock_code?: string
   /** 销售收入科目代码 */ 
  sale_income_code?: string
   /** 销售成本科目代码 */ 
  sale_cost_code?: string
   /** 供应站点ID */ 
  supply_station_id?: string
   /** 商品批次类型 */ 
  sku_batch_type?: SkuBatchType
   /** 修改商品批次类型的时间 */ 
  sku_batch_type_update_time?: string
   /** 批次类型变动后的生效时间 */ 
  sku_batch_type_effectuate_time?: string
   /** 存货类别编码 */ 
  stock_type_code?: string
   /** 存货类别名称 */ 
  stock_type_name?: string
   /** 商品真正选择的装箱规格，packing_unit不会和packing_units进行联动，所以就是unit_id相同，其他也会不同 */ 
  pack_unit?: PackUnit
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Sku_Extra {
  axiosConfig?: AxiosRequestConfig,
  key?: string
  val?: string
}

export interface Sku_RepeatedField {
  axiosConfig?: AxiosRequestConfig,
   /** 不影响版本 别名列表 */ 
  alias?: string[]
   /** 商品图  第一张是详情图 */ 
  images?: common.Image[]
  extras?: Sku_Extra[]
}

export interface Sku_SupplierInputTaxMap {
  axiosConfig?: AxiosRequestConfig,
   /** key 供应商:供应商特殊税率 */ 
  supplier_input_tax?: string
}

export interface Sku_UnitList {
  axiosConfig?: AxiosRequestConfig,
   /** 目前自定义单位限制十个 */ 
  units?: Unit[]
}

export interface Sku_RelatedCombineSkuIdsMap {
  axiosConfig?: AxiosRequestConfig,
   /** 组合商品关联表。 key 是unit_id, value 是这个商品对应的组合商品的id列表 */ 
  related_combine_sku_ids_map?: Uint64List
}

export interface Sku_SkuLevel {
  axiosConfig?: AxiosRequestConfig,
   /** 自增 */ 
  level_id?: string
  name?: string
  is_delete?: boolean
}

export interface Sku_SkuLevels {
  axiosConfig?: AxiosRequestConfig,
  sku_level?: Sku_SkuLevel[]
}

export interface SkuNutrition {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  sku_nutrition_id?: string
   /** 状态bitmap  detect；开启营养素 */ 
  status?: string
   /** 版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id_key" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:sku_id_key" */ 
  sku_id?: string
   /** 营养素ID */ 
  nutrition_id?: string
   /** 每100克含量 */ 
  pre_content?: string
   /** 营养素参考值百分百 */ 
  ref_value?: string
   /** 营养素在成本表的排序 */ 
  sorts?: string
   /** 营养素名称 */ 
  name?: string
   /** 单位 */ 
  unit?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface SkuNutritionCache {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
}

export interface Nutrition {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  nutrition_id?: string
   /** 状态bitmap  detect；开启营养素 */ 
  status?: string
   /** 版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id_key" */ 
  group_id?: string
   /** 营养素名称 */ 
  name?: string
   /** 单位 */ 
  unit?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface SkuRemarkCache {
  axiosConfig?: AxiosRequestConfig,
  sku_remarks?: SkuRemark[]
}

export interface SkuRemark {
  axiosConfig?: AxiosRequestConfig,
   /** 创建时间 */ 
  create_time?: string
  sku_id?: string
   /** 备注 */ 
  remark?: string
}

export interface SkuAcceptanceCriteria {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"PRIMARY_KEY" */ 
  sku_acceptance_criteria_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
   /** @inject_tag: gorm:"uniqueIndex:sku_id" */ 
  sku_id?: string
   /** 验收标准图片 */ 
  images?: common.Images
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Ingredient {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
   /** 下单单位 */ 
  order_unit_id?: string
   /** 下单单位数量（隐藏逻辑，兼容历史数据，后端字段换算） */ 
  ratio?: string
   /** 配比单位 */ 
  ingredient_unit_id?: string
   /** 配比单位数量 */ 
  ingredient_ratio?: string
   /** 定价单位（仅用于记录，不做报价使用） */ 
  fee_unit_id?: string
   /** 单价（仅用于记录，不做报价使用） */ 
  fee_price?: string
   /** 可售 */ 
  on_sale?: boolean
   /** 上下架 */ 
  on_shelf?: boolean
   /** 人均用量，打印时要显示的单位ID */ 
  printing_unit_id?: string
   /** 人均用量，打印时要显示的用量 */ 
  printing_unit_value?: string
   /** 商品名称，冗余，用于零时数据或传输 */ 
  sku_name?: string
}

export interface Ingredients {
  axiosConfig?: AxiosRequestConfig,
   /** 组合商品的成分（子商品） */ 
  ingredients?: Ingredient[]
}

export interface SkuSaleInventory {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  sku_sale_inventory_id: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
   /** @inject_tag: gorm:"uniqueIndex:sku_id_order_unit_id" */ 
  sku_id?: string
   /** 下单单位 */ 
  order_unit_id?: string
   /** 销售库存限制数量 */ 
  amount?: string
   /** 排序顺序 */ 
  sort_id?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Ssu {
  axiosConfig?: AxiosRequestConfig,
   /** 状态bitmap */ 
  status?: string
   /** 版本 */ 
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
   /** 主键 */ 
  sku_id?: string
   /** 为了减少查询 */ 
  category_id?: string
  spu_id?: string
   /** 同步sku的sku_type */ 
  sku_type?: Sku_SkuType
   /** 同步sku的not_package_sub_sku_type耗材 */ 
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
   /** 同步sku的package_sub_sku_type */ 
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** 同步sku的name */ 
  sku_name?: string
   /** 单位ID 联合主键 包装单位或系统单位。目前只有包装单位 */ 
  unit_id?: string
   /** 平台同步的ssu有此字段,源ssu的group_id */ 
  source_group_id?: string
   /** 基础信息
string        customize_code = 21 [ (validate.rules).string = {min_len : 1} ]; //自定义编码 版本 */ 
  description?: string
  repeated_field?: Ssu_RepeatedField
  has_image?: boolean
   /** 在售/停售 */ 
  on_sale?: boolean
   /** 类型是包装单位或者系统单位。 */ 
  unit_type: BatchRelatedAllSkuRequest_UnitType
   /** 包装单位。 unit_type为系统单位时，还是会生成一个包装单位。原因是当系统单改了，我们认为他还是同一个ssu，直接使用系统单位无法满足这一场景。 */ 
  unit: Unit
   /** sku基本单位 同步的sku的base_unit_id */ 
  base_unit_id?: string
   /** 采购单位 */ 
  purchase_unit_id?: string
   /** 是否称重 */ 
  is_weight?: boolean
  split_flag?: Ssu_SplitFlag
   /** 是否打包 */ 
  need_package?: boolean
   /** 是否进入打包作业流程 */ 
  need_package_work?: boolean
  package_calculate_type?: Ssu_PackageCalculateType
  package_num?: number
   /** sku是包材，包材的货值 */ 
  package_price?: string
  package_id?: Ssu_PackageId
  ingredients?: Ssu_Ingredients
   /** 在报价单之前还有一个基本价格：默认菜谱价/来自行情group商品的今日行情价/组合商品的价格 */ 
  default_price?: string
  type?: Ssu_Type
   /** 组合商品表，记录是为了当商品被删除时，组合商品也要删除 */ 
  related_combine_ssu_ids?: Ssu_RelatedCombineSsuIds
   /** 组合商品表，记录是为了当商品被删除时，组合商品也要删除 */ 
  real_related_combine_ssu_real_ssu_ids?: Ssu_RelatedCombineSsuRealSsuIds
   /** 销项税率，sku的tax同步更新 */ 
  tax?: string
   /** 进项税率，sku的input_tax同步更新 */ 
  input_tax?: string
   /** 损耗比例 */ 
  loss_ratio?: string
}

export interface Ssu_RepeatedField {
  axiosConfig?: AxiosRequestConfig,
   /** 商品图  第一张是详情图 */ 
  images?: common.Image[]
}

export interface Ssu_PackageId {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  sku_id?: string
   /** 单位ID 联合主键 */ 
  unit_id?: string
}

export interface Ssu_RepeatedPackageField {
  axiosConfig?: AxiosRequestConfig,
   /** key 是 enum NutritionType里的值 */ 
  nutrition?: string
}

export interface Ssu_Ingredients {
  axiosConfig?: AxiosRequestConfig,
   /** 组合商品成分 */ 
  ssu_ratios?: Ssu_Ingredients_SsuRatio[]
}

export interface Ssu_Ingredients_SsuRatio {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
  ratio?: string
  use_unit_id?: string
  ssu_id?: string
  on_sale?: boolean
}

export interface Ssu_RelatedCombineSsuIds {
  axiosConfig?: AxiosRequestConfig,
   /** 组合商品表，记录是为了当商品被删除时，组合商品也要删除 */ 
  related_combine_ssu_ids?: SsuId[]
}

export interface Ssu_RelatedCombineSsuRealSsuIds {
  axiosConfig?: AxiosRequestConfig,
   /** 组合商品表，记录是为了当商品被删除时，组合商品也要删除 */ 
  related_combine_ssu_ids?: string[]
}

export interface Quotation {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  quotation_id: string
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** parent quotation serial no */ 
  parent_serial_no?: string
   /** parent quotation inner name + "-" + child quotation inner name */ 
  parent_child_inner_name?: string
   /** @inject_tag: gorm:"index:type" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** 操作人 */ 
  creator_id?: string
   /** 当报价单为周期报价单时，父亲报价单不为空表示为子报价单的父报价单；当报价单为客户协议单时，父报价单不为空是为绑定在那个报价单上 */ 
  parent_id?: string
   /** 对内（也就是 GroupUser）可见的报价单可见的名字；客户协议单的协议规则名 */ 
  inner_name?: string
   /** 最外（比如说 Customer）可见的报价单可见的名字；客户协议单关联的报价单 */ 
  outer_name?: string
  description?: string
   /** 是否是默认报价单 */ 
  is_default?: boolean
   /** @inject_tag: gorm:"index:type" */ 
  type: Quotation_Type
  avail_menu_period_groups?: Quotation_AvailMenuPeriodGroups
   /** 更新生效时间 */ 
  update_valid_time?: Quotation_UpdateValidTime
   /** 商品数统计 */ 
  sku_count?: string
   /** 普通商品数统计 */ 
  normal_sku_count?: string
  customer_count?: string
   /** 关联用户类型 */ 
  customer_type?: enterprise.Customer_Type
   /** 开始时间 */ 
  start_time?: string
   /** 结束时间 */ 
  end_time?: string
   /** @inject_tag: gorm:"INDEX:status" */ 
  status?: Quotation_Status
  supplier_id?: string
   /** @inject_tag: gorm:"INDEX:serial_no" */ 
  serial_no?: string
  remark?: string
   /** 报价单所属的采购员，如果供应商为空则为采购员自采，如果不为空报价单是给供应商的 */ 
  purchase_user_id?: string
   /** 周期报价单:是否有子报价单在进行中 */ 
  child_quotation_available?: boolean
   /** 审核之前的状态 */ 
  status_before_audit?: Quotation_Status
   /** 本报价单下是否有客户协议价，包括所有的，无论是否生效 */ 
  child_customer_quotation_available?: boolean
   /** 客户协议单的生效类型，当限期生效时配合time_range表示生效的时间段 */ 
  valid_type?: Quotation_ValidType
   /** 纪录客户协议单屏蔽商品的数量，前端用 */ 
  exclude_sku_count?: string
   /** 记录客户协议单所关联的报价单的一级分类，2022.10.11目前只有客户协议单的前端用到 */ 
  category_count?: string
   /** 记录报价单在客户纬度不同时被屏蔽的商品 */ 
  exclude_sku_ids?: string[]
   /** 临期状态 */ 
  advent_state?: Quotation_AdventState
   /** 记录同一客户的协议单在页面展示时的排序 */ 
  customer_sort_num?: string
   /** 周期报价单:生效时间类型 */ 
  valid_time_type?: Quotation_ValidTimeType
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Quotation_AvailMenuPeriodGroups {
  axiosConfig?: AxiosRequestConfig,
   /** 可见餐次 */ 
  menu_period_group_ids?: string[]
}

export interface Quotation_UpdateValidTime {
  axiosConfig?: AxiosRequestConfig,
   /** 周/月 起始日。如果是周，使用 1～7 代表周一到周日；如果是月，使用 1～31 代表每月几号；其他情况下这个字段没有含义 */ 
  start_day?: string
   /** 开始时间。单位为 UTC Timestamp 毫秒数 */ 
  start_time?: string
  cycle_type?: Quotation_CycleType
}

export interface CustomerPriceOnCategory {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  customer_price_on_category_id: string
  create_time?: string
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** 客户协议单ID */ 
  quotation_id?: string
   /** @inject_tag: gorm:"INDEX:quotation_type" */ 
  quotation_type?: Quotation_Type
   /** 报价单上分类ID */ 
  category_id?: string
   /** @inject_tag: gorm:"INDEX:level" */ 
  level?: number
   /** 客户协议价在分类上的计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface DetailPriceRule {
  axiosConfig?: AxiosRequestConfig,
   /** 计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: PricingType
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: PricingFormula
}

export interface ItemPriceRule {
  axiosConfig?: AxiosRequestConfig,
   /** 客户协议价在分类上的计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
}

export interface CustomerPriceMaskSku {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  customer_price_mask_sku_id: string
  create_time?: string
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** @inject_tag: gorm:"INDEX:quotation_id" */ 
  quotation_id?: string
   /** @inject_tag: gorm:"INDEX:sku_id" */ 
  sku_id?: string
   /** @inject_tag: gorm:"INDEX:quotation_type" */ 
  quotation_type?: Quotation_Type
   /** @inject_tag: gorm:"INDEX:sku_type" */ 
  sku_type?: Sku_SkuType
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface CustomerQuotationRelation {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  customer_quotation_relation_id: string
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
  station_id?: string
  quotation_id?: string
  customer_id?: string
  quotation_type?: Quotation_Type
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Menu {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  menu_id: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:semester_id" */ 
  semester_id?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** 关联业务ID;由business_type类型决定，例如报价单ID */ 
  business_id?: string
   /** 菜谱号 */ 
  serial_no?: string
   /** 对内可见的菜谱名字 */ 
  inner_name?: string
   /** 对外可见的菜谱名字 */ 
  outer_name?: string
  description?: string
   /** 激活状态 */ 
  is_active?: common.Filters_Bool
   /** 是否是默认报价单 */ 
  is_default?: common.Filters_Bool
   /** 菜谱类型 */ 
  type?: Menu_Type
   /** 关联业务类型;例如报价单等 */ 
  business_type?: Menu_BusinessType
   /** 绑定的班级数 */ 
  class_count?: string
   /** 菜谱天数 */ 
  day_count?: string
   /** 餐次信息 */ 
  menu_period_info?: Menu_MenuPeriodInfo
   /** 用餐餐次ID */ 
  menu_meal_id?: string
   /** 菜品分类，英文逗号拼接 */ 
  menu_category_ids?: string
   /** 对应菜谱详情 */ 
  menu_details?: MenuDetail[]
   /** 餐标备注 */ 
  remark?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface Menu_MenuPeriodInfo {
  axiosConfig?: AxiosRequestConfig,
   /** 餐次餐标信息 */ 
  menu_periods?: Menu_MenuPeriodInfo_MenuPeriod[]
}

export interface Menu_MenuPeriodInfo_MenuPeriod {
  axiosConfig?: AxiosRequestConfig,
   /** 餐次 */ 
  menu_period_group?: MenuPeriodGroup
   /** 餐标 */ 
  meal_label?: string
   /** 餐次组是否必选 */ 
  is_required?: common.Filters_Bool
}

export interface CustomerMenuRelation {
  axiosConfig?: AxiosRequestConfig,
   /** 关联id */ 
  customer_menu_relation_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** 企业id */ 
  group_id?: string
   /** 菜谱id */ 
  menu_id?: string
   /** 客户id，学生餐是班级id */ 
  customer_id?: string
   /** 餐次ID，同一个班级只能有一个餐次 */ 
  menu_period_group_id?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MenuDetail {
  axiosConfig?: AxiosRequestConfig,
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** @inject_tag: gorm:"INDEX:delete_time" */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:semester_id" */ 
  semester_id?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** 餐次ID */ 
  menu_period_group_id?: string
   /** 菜谱ID */ 
  menu_id?: string
   /** BomID */ 
  bom_id?: string
   /** Bom版本 */ 
  bom_revision?: string
   /** 菜谱详情id */ 
  menu_detail_id?: string
   /** 用餐日期，yyyy-MM-dd格式时间戳 */ 
  meal_date?: string
   /** 下属 MenuDetailSku 商品数 */ 
  sku_count?: string
   /** 价格，餐标 */ 
  price?: string
   /** 是否生成订单 */ 
  generate_order?: boolean
   /** 对应菜谱详情所属商品 */ 
  detail_skus?: MenuDetailSku[]
   /** 以下字段eshop不在使用，可根据实际情况删除/////////////////////////// */ 
  state?: MenuDetail_State
  revision?: string
   /** 唯一索引quotation_id_menu_time需要删除 */ 
  quotation_id?: string
   /** 菜单时间 */ 
  menu_time?: string
   /** 是否节假日 */ 
  is_holiday?: boolean
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MenuDetailSku {
  axiosConfig?: AxiosRequestConfig,
   /** 菜谱详情商品ID */ 
  menu_detail_sku_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:semester_id" */ 
  semester_id?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** 菜谱详情ID */ 
  menu_detail_id?: string
   /** 菜谱ID */ 
  menu_id?: string
   /** 商品ID */ 
  sku_id?: string
   /** 下单单位ID */ 
  unit_id?: string
   /** BomID */ 
  bom_id?: string
   /** Bom版本 */ 
  bom_revision?: string
   /** 数量 */ 
  count?: string
   /** 盒饭类型，1：盒饭套餐，2：单品 */ 
  type?: string
   /** 菜品分类 */ 
  menu_category_id?: string
   /** 商品价格 */ 
  price?: string
   /** sku而外信息 */ 
  sku?: Sku
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MenuPeriodGroup {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  menu_period_group_id: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
  delete_time?: string
  group_id?: string
   /** 站点ID */ 
  station_id?: string
  name?: string
  icon?: string
   /** 餐次类型 */ 
  type?: MenuPeriodGroup_Type
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MenuPeriod {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group: MenuPeriodGroup
  service_period: enterprise.ServicePeriod
}

export interface BasicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  basic_price_id: string
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"uniqueIndex:basic_price_unique_key,priority:1;INDEX:group_id_station_id_delete_time_sku_id,priority:1;" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:group_id_station_id_delete_time_sku_id,priority:2;" */ 
  station_id?: string
   /** quotation_id,sku_id,unit_id确定一个价格 手动创建协议单请求没有这个参数 */ 
  quotation_id?: string
   /** @inject_tag: gorm:"uniqueIndex:basic_price_unique_key,priority:4;INDEX:group_id_station_id_delete_time_sku_id,priority:4;INDEX:sku_id;" */ 
  sku_id?: string
  spu_id?: string
   /** 询价人 */ 
  creator_id?: string
   /** 以BasicPriceItem中的formula_text为准 */ 
  formula_text?: string
   /** 可售 由sku同步过来 */ 
  on_sale?: boolean
   /** 上下架 存在一个商品上架就是上架  废弃 */ 
  on_shelf?: boolean
   /** 用于过滤部分上下架 */ 
  bp_on_shelf_type?: BasicPrice_BpOnShelfType
   /** 菜单时间 */ 
  menu_time?: string
   /** 餐次id */ 
  menu_period_group_id?: string
   /** @inject_tag: gorm:"INDEX:menu_detail_id" */ 
  menu_detail_id?: string
  remark?: string
   /** 报价单类型 */ 
  type?: Quotation_Type
   /** sku类型 */ 
  sku_type?: Sku_SkuType
   /** 来源 */ 
  source?: BasicPrice_Source
  repeated_field?: BasicPrice_RepeatedField
   /** 最小价格 */ 
  min_price?: string
   /** 最大价格 */ 
  max_price?: string
   /** （价格）商品报价 */ 
  items: BasicPriceItems
   /** （菜谱子商品价格）子商品报价 ，当 报价单是 净菜菜谱时，  ingredients  和 ingredient_items 的顺序必须完全一致，否则价格对应不上 */ 
  ingredient_items?: BasicPriceItems
   /** 组合商品的子商品 当 报价单是 净菜菜谱时，  ingredients  和 ingredient_items 的顺序必须完全一致，否则价格对应不上 */ 
  ingredients?: Ssu_Ingredients
   /** todo 合代码添加 排序 */ 
  sort_num?: string
   /** todo 合代码添加 采购协议价销项税率 */ 
  input_tax?: string
  place?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface BasicPrice_RepeatedField {
  axiosConfig?: AxiosRequestConfig,
  origin_place?: string
}

export interface BasicPriceSnapshot {
  axiosConfig?: AxiosRequestConfig,
   /** option (dao.sync_es)         = true;
@inject_tag: gorm:"INDEX:basic_price_snapshot_id" */ 
  basic_price_snapshot_id?: string
   /** 此处用该名称是因为线上已有该表，主键无法迁移 */ 
  basic_price_id?: string
   /** 原来报价单的basic_price_id */ 
  org_basic_price_id?: string
   /** 快照时的版本，系统自动快照revision = 1 */ 
  revision?: string
   /** @inject_tag: gorm:"INDEX:create_time" */ 
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** quotation_id,sku_id,unit_id确定一个价格 手动创建协议单请求没有这个参数 */ 
  quotation_id?: string
   /** @inject_tag: gorm:"index:sku_id" */ 
  sku_id?: string
  spu_id?: string
   /** 询价人 */ 
  creator_id?: string
   /** 以BasicPriceItem中的formula_text为准 */ 
  formula_text?: string
   /** 可售 由sku同步过来 */ 
  on_sale?: boolean
   /** 上下架 存在一个商品上架就是上架  废弃 */ 
  on_shelf?: boolean
   /** 用于过滤部分上下架 */ 
  bp_on_shelf_type?: BasicPrice_BpOnShelfType
   /** 菜单时间 */ 
  menu_time?: string
   /** 餐次id */ 
  menu_period_group_id?: string
  menu_detail_id?: string
  remark?: string
   /** 报价单类型 */ 
  type?: Quotation_Type
   /** sku类型 */ 
  sku_type?: Sku_SkuType
   /** 来源 */ 
  source?: BasicPrice_Source
  repeated_field?: BasicPrice_RepeatedField
   /** 最小价格 */ 
  min_price?: string
   /** 最大价格 */ 
  max_price?: string
   /** 价格 */ 
  items?: BasicPriceItems
   /** 菜谱子商品价格 */ 
  ingredient_items?: BasicPriceItems
  ingredients?: Ssu_Ingredients
   /** todo 合代码添加 排序 */ 
  sort_num?: string
   /** todo 合代码添加 采购协议价销项税率 */ 
  input_tax?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface PriceInterval {
  axiosConfig?: AxiosRequestConfig,
  begin?: string
  end?: string
   /** 区间定价公式 */ 
  formula_text?: string
}

export interface PriceIntervals {
  axiosConfig?: AxiosRequestConfig,
  price_intervals?: BasicPriceItem_PriceInterval[]
   /** 参考价格类型 格式见下方定价公式枚举 */ 
  reference_price_type?: string
}

export interface PriceCalculateRule {
  axiosConfig?: AxiosRequestConfig,
  calculate_method?: BasicPriceItem_CalculateMethod
  price?: string
}

export interface BasicPriceDetail {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  basic_price_detail_id: string
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** 关联的bp_id */ 
  basic_price_id?: string
   /** @inject_tag: gorm:"INDEX:sku_id" */ 
  sku_id?: string
   /** @inject_tag: gorm:"INDEX:quotation_id" */ 
  quotation_id?: string
   /** 下单单位 */ 
  order_unit_id?: string
   /** 定价单位，定价价格 && 客户协议价的协议单价 */ 
  fee_unit_price: UnitValue
   /** 上下架 */ 
  on_shelf?: boolean
   /** 最小下单数 */ 
  minimum_order_number?: string
   /** 启动时价 */ 
  current_price?: boolean
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 常规定价公式，此定价公式为生效公式，其他定价公式字段变化时也会改动此公式 */ 
  formula_text?: string
   /** 定价类型 */ 
  pricing_type?: PricingType
   /** 定价公式模式 */ 
  pricing_formula?: PricingFormula
   /** 最近报价，此数据受order_unit_id，fee_unit_price.unit_id */ 
  last_quote?: string
   /** 最近一次采购价 */ 
  last_purchase_price?: string
   /** 最近一次入库价 */ 
  last_instock_price?: string
   /** sku.on_sale同步 */ 
  on_sale?: boolean
   /** sku类型 */ 
  sku_type?: Sku_SkuType
   /** Quotation.Type */ 
  type?: Quotation_Type
   /** 存放组合商品子商品配比，用于计算组合商品报价 */ 
  ingredients?: Ssu_Ingredients
   /** 客户协议价的商品在原报价单中的单价 */ 
  origin_unit_price?: string
   /** 客户协议价的计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 用于记录报价单条目在对应的协议单影响下是否改变本条目的定价，会在去取值时存到缓存中，但不会在mysql中存 */ 
  is_change?: boolean
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface BasicPriceItem {
  axiosConfig?: AxiosRequestConfig,
   /** 定价单位，定价价格 && 客户协议价的协议单价 */ 
  fee_unit_price: UnitValue
   /** 下单单位 */ 
  order_unit_id?: string
   /** 上下架 */ 
  on_shelf?: boolean
   /** 最小下单数 */ 
  minimum_order_number?: string
   /** 启动时价 */ 
  current_price?: boolean
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 常规定价公式，此定价公式为生效公式，其他定价公式字段变化时也会改动此公式 */ 
  formula_text?: string
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
   /** 客户协议价的商品在原报价单中的单价 */ 
  origin_unit_price?: string
   /** 客户协议价的计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 用于记录报价单条目在对应的协议单影响下是否改变本条目的定价，会在去取值时存到缓存中，但不会在mysql中存 */ 
  is_change?: boolean
}

export interface BasicPriceItem_PriceInterval {
  axiosConfig?: AxiosRequestConfig,
  begin?: string
  end?: string
   /** 区间定价公式 */ 
  formula_text?: string
}

export interface BasicPriceItem_PriceIntervals {
  axiosConfig?: AxiosRequestConfig,
  price_intervals?: BasicPriceItem_PriceInterval[]
   /** 参考价格类型 格式见下方定价公式枚举 */ 
  reference_price_type?: string
}

export interface BasicPriceItem_PriceCalculateRule {
  axiosConfig?: AxiosRequestConfig,
  calculate_method?: BasicPriceItem_CalculateMethod
  price?: string
}

export interface BasicPriceItems {
  axiosConfig?: AxiosRequestConfig,
   /** 价格 */ 
  basic_price_items?: BasicPriceItem[]
}

export interface MultiQuotationBasicPriceItem {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
   /** 下单单位 */ 
  order_unit_id?: string
   /** 价格类型。对于前端来说不显示为0，时价=1，非时价=2。 */ 
  current_price?: MultiQuotationBasicPriceItem_PRICETYPE
   /** 定价单位，定价价格 */ 
  fee_unit_price?: UnitValue
   /** 定价公式 */ 
  formula_text?: string
   /** 此价格定价关联的报价单 */ 
  bond_quotation_ids?: string[]
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
}

export interface MealCalendar {
  axiosConfig?: AxiosRequestConfig,
   /** option (dao.sync_es)         = true;
@inject_tag: gorm:"primaryKey" */ 
  meal_calendar_id: string
   /** @inject_tag: gorm:"uniqueIndex:group_customer_meal_time" */ 
  group_id?: string
   /** @inject_tag: gorm:"uniqueIndex:group_customer_meal_time" */ 
  customer_id?: string
  quotation_id?: string
  meal_calendar_datas?: MealCalendar_MealCalendarDatas
   /** @inject_tag: gorm:"uniqueIndex:group_customer_meal_time" */ 
  meal_time?: string
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
  delete_time?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MealCalendar_MealCalendarDatas {
  axiosConfig?: AxiosRequestConfig,
   /** key:餐次id，value:用餐人数 */ 
  meal_calendar_datas?: string
}

export interface Favorite {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  favorite_id: string
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** 收藏夹关联的客户 */ 
  customer_id?: string
   /** 收藏夹关联的用户，当前登录的用户 */ 
  user_customer_id?: string
   /** 收藏夹名字 */ 
  name?: string
   /** 是否默认收藏夹 */ 
  default?: boolean
   /** 收藏夹类型 。目前只有bshop的收藏夹，类型被后台写死。 */ 
  favorite_type?: Favorite_FavoriteType
   /** 收藏内容类型。目前只收藏SSU，类型被后台写死。 */ 
  favorite_content_type?: Favorite_FavoriteContentType
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface FavoriteSku {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  favorite_sku_id: string
  revision?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
   /** @inject_tag: gorm:"uniqueIndex:favorites_id_sku_id" */ 
  favorite_id?: string
   /** @inject_tag: gorm:"uniqueIndex:favorites_id_sku_id" */ 
  sku_id?: string
   /** 下单单位 */ 
  unit_id?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface RuleSet {
  axiosConfig?: AxiosRequestConfig,
  rule_set_id?: string
  create_time?: string
   /** @inject_tag: gorm:"INDEX:update_time" */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
  group_id?: string
  station_id?: string
   /** 报价单ID */ 
  quotation_id?: string
   /** 报价单对外展示ID 根据产品策略后台生成 */ 
  rule_set_display_id?: string
   /** 状态是否有效 */ 
  state: RuleSet_State
  repeated_field?: RuleSet_RepeatedField
   /** 针对范围还是价格 */ 
  type: RuleSet_Type
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface RuleSet_RepeatedField {
  axiosConfig?: AxiosRequestConfig,
  rules?: RuleSet_Rule[]
   /** 运营时间 */ 
  service_period_ids?: string[]
}

export interface RuleSet_Rule {
  axiosConfig?: AxiosRequestConfig,
  formula_text?: string
   /** formula_text表示定价公式
参数值代表{
basic_price: 基本价
}
formula_text: "{basic_price}*2+1"  这个公式表示"基本价*2+1" */ 
  customer_ids?: string[]
  ssu_ids?: SsuId[]
}

export interface Uint64List {
  axiosConfig?: AxiosRequestConfig,
  num?: string[]
}

export interface CategoryTreeCache {
  axiosConfig?: AxiosRequestConfig,
   /** key 是CategoryId */ 
  category_link?: CategoryTreeCache_CategoryInfo
}

export interface CategoryTreeCache_CategoryInfo {
  axiosConfig?: AxiosRequestConfig,
  parent_id?: string
  name?: string
  level?: number
}

export interface QuotationCategoryIdsCache {
  axiosConfig?: AxiosRequestConfig,
   /** key 是category_id, value 是子节点数量,为了diff 更新方便 */ 
  category_id_map?: number
   /** 更新时间 */ 
  version?: string
   /** ssu的数量 */ 
  ssu_count?: number
}

export interface RuleSetCache {
  axiosConfig?: AxiosRequestConfig,
  rule_set_customer?: boolean
   /** key 是 string(SsuId.SkuId)+string(SsuId.UnitId) */ 
  rule_set_ssu?: string
  service_period_ids?: string[]
}

export interface CustomerPriceRuleCache {
  axiosConfig?: AxiosRequestConfig,
   /** key 是customer_id，将每个商户 */ 
  customer_rule?: CustomerPriceRuleCache_CustomerRuleSet
   /** 更新时间 */ 
  version?: string
}

export interface CustomerPriceRuleCache_CustomerRuleSet {
  axiosConfig?: AxiosRequestConfig,
  rule_set_ids?: string[]
}

export interface RuleSetDisableSsuCache {
  axiosConfig?: AxiosRequestConfig,
   /** key rule_set_id */ 
  rule_set_id_disable_ssu?: RuleSetDisableSsuCache_CustomerDisableSsuList
   /** 更新时间 */ 
  version?: string
}

export interface RuleSetDisableSsuCache_CustomerDisableSsuList {
  axiosConfig?: AxiosRequestConfig,
  ssu_ids?: SsuId[]
}

export interface RuleSetPriceCache {
  axiosConfig?: AxiosRequestConfig,
   /** key 假设说现在客户和3个rule_set（1，2，3）绑定 ,key就是"1-2-3",没有规则的原价，key是"" */ 
  rule_set_price?: RuleSetPriceCache_SsuPrice
}

export interface RuleSetPriceCache_SsuPrice {
  axiosConfig?: AxiosRequestConfig,
   /** key是 ssu_id，value是price */ 
  ssu_price?: string
   /** 更新时间 */ 
  version?: string
}

export interface SkuAliasCache {
  axiosConfig?: AxiosRequestConfig,
  sku_alias_cache?: SkuAliasCache_AliasCache
}

export interface SkuAliasCache_AliasCache {
  axiosConfig?: AxiosRequestConfig,
  alias?: string
  sku_id?: string[]
}

export interface CategoryImage {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  category_image_id: string
  image?: common.Image
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface ReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  sku_id: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id" */ 
  group_id?: string
   /** @inject_tag: gorm:"INDEX:station_id" */ 
  station_id?: string
  reference_price_map: ReferencePrice_ReferencePriceMap
   /** 供应商相关的参考价数据 */ 
  supplier_reference_price?: ReferencePrice_SupplierReferencePriceData
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface ReferencePrice_ReferencePriceValue {
  axiosConfig?: AxiosRequestConfig,
   /** 参考成本来源ID */ 
  source_id?: string
   /** 参考成本的时间 */ 
  time?: string
   /** 参考成本的价格,单位 */ 
  price?: UnitValue
   /** 供应商ID */ 
  supplier_id?: string
}

export interface ReferencePrice_ReferencePriceMap {
  axiosConfig?: AxiosRequestConfig,
   /** key ReferencePrice.Type */ 
  reference_price_map?: ReferencePrice_ReferencePriceValue
}

export interface ReferencePrice_SupplierReferencePriceData {
  axiosConfig?: AxiosRequestConfig,
   /** key 为供应商ID,库存均价 */ 
  supplier_agreement_price?: ReferencePrice_ReferencePriceValue
   /** key 为供应商ID,供应商最近询价 */ 
  supplier_last_inquiry_price?: ReferencePrice_ReferencePriceValue
   /** key 为供应商ID,供应商最近入库价 */ 
  supplier_last_in_stock_price?: ReferencePrice_ReferencePriceValue
   /** key 为供应商ID，供应商最近入库价（供应商直供） */ 
  supplier_last_in_stock_supplier_price?: ReferencePrice_ReferencePriceValue
   /** key 为供应商ID，供应商最近入库价（市场自采） */ 
  supplier_last_in_stock_market_price?: ReferencePrice_ReferencePriceValue
}

export interface ReferencePriceSnapshot {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: gorm:"primaryKey" */ 
  reference_price_snapshot_id: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** @inject_tag: gorm:"INDEX:group_id_sku_id_price_type,priority:1" */ 
  group_id?: string
  station_id?: string
   /** @inject_tag: gorm:"INDEX:group_id_sku_id_price_type,priority:2" */ 
  sku_id?: string
   /** ReferencePrice.ReferencePriceMap reference_price_map = 21 [(validate.rules).message = {required : true}];
以下是对ReferencePriceMap的展开
@inject_tag: gorm:"INDEX:group_id_sku_id_price_type,priority:3" */ 
  price_type?: ReferencePrice_Type
   /** 参考成本来源ID */ 
  source_id?: string
   /** 参考成本的时间 */ 
  snapshot_time?: string
   /** 价格单位id */ 
  unit_id?: string
   /** 价格 */ 
  price?: string
   /** 供应商ID */ 
  supplier_id?: string
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface SsuInfo {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
}

export interface SsuTotalInfo {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
   /** string                price          = 2; */ 
  sku?: Sku
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
   /** 多个报价单的价格 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface WarehouseStock {
  axiosConfig?: AxiosRequestConfig,
   /** 废弃 库存 */ 
  stock?: merchandise.UnitStock
   /** 仓库id */ 
  warehouse_id?: string
   /** 数量 */ 
  quantity?: string
   /** 价格 */ 
  price?: string
}

export interface SkuSuggestedPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 报价类型 */ 
  type?: SkuSuggestedPrice_Type
  price?: string
}

export interface SkuIdUnitId {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
}

export interface ExportExecuteSku {
  axiosConfig?: AxiosRequestConfig,
  customize_code?: string
  name?: string
  alias?: string
  category_name1?: string
  category_name2?: string
  category_name3?: string
  base_unit_name?: string
  not_package_sub_sku_type?: string
  min_price_max_price?: string
  sku_desc?: string
  on_sale?: string
  is_weight?: string
  second_base_unit_name?: string
  second_base_unit_ratio?: string
  production_unit_name?: string
  production_unit_ratio?: string
  customer_unit_name1?: string
  customer_unit_ratio1?: string
  customer_unit_name2?: string
  customer_unit_ratio2?: string
  customer_unit_name3?: string
  customer_unit_ratio3?: string
  customer_unit_name4?: string
  customer_unit_ratio4?: string
  customer_unit_name5?: string
  customer_unit_ratio5?: string
  customer_unit_name6?: string
  customer_unit_ratio6?: string
  customer_unit_name7?: string
  customer_unit_ratio7?: string
  customer_unit_name8?: string
  customer_unit_ratio8?: string
  customer_unit_name9?: string
  customer_unit_ratio9?: string
  customer_unit_name10?: string
  customer_unit_ratio10?: string
  purchaser_id?: string
  loss_ratio?: string
  expiry_date?: number
  origin_place?: string
  brand?: string
  after_sales_standards?: string
  product_characteristics?: string
  package_sku_name?: string
  package_calculate_type?: string
  package_num?: number
  input_tax?: string
  tax?: string
  supplier_input_tax?: string
  finance_category_name1?: string
  finance_category_name2?: string
  standard_price?: string
  cost?: string
  bar_code?: string
  bar_code1?: string
  bar_code2?: string
  purchase_sku_type?: string
  purchase_unit_name?: string
  sale_stock?: string
  stock?: string
  manual_purchase?: string
  supplier_cooperate_model_type?: string
  supplier_id?: string
  warehouse_id?: string
  station_name?: string
  reference_market_price?: string
  sku_batch_type?: string
  tax_category_code?: string
  pre_sorting?: string
}

export interface SkuSnapID {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  sku_revision?: string
}

export interface SsuSnapID {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
  ssu_revision?: string
}

export interface SsuId {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
}

export interface BasicPriceId {
  axiosConfig?: AxiosRequestConfig,
   /** quotation_id,sku_id,unit_id确定一个价格 */ 
  quotation_id?: string
  sku_id?: string
  unit_id?: string
   /** 菜谱详情 id */ 
  menu_detail_id?: string
   /** 餐次组 id */ 
  menu_period_group_id?: string
   /** 用餐时间 */ 
  menu_time?: string
  basic_price_id?: string
}

export interface Row {
  axiosConfig?: AxiosRequestConfig,
  row?: string[]
}

export interface CategoryInfo {
  axiosConfig?: AxiosRequestConfig,
  category_name?: string
  category_id?: string
}

export interface ExportSsuData {
  axiosConfig?: AxiosRequestConfig,
  ssu_infos?: ExportSsuData_SsuInfo[]
}

export interface ExportSsuData_SsuInfo {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
  price?: string
  sku?: Sku
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
  purchase_ssu_customize_code?: string
}

export interface RuleConflictData {
  axiosConfig?: AxiosRequestConfig,
  ssu_ids?: SsuId[]
  customer_ids?: string[]
  service_period_ids?: string[]
}

export interface GetUnitRateGroup {
  axiosConfig?: AxiosRequestConfig,
  unit_id_groups?: GetUnitRateGroup_UnitIdGroup[]
  unit_groups?: GetUnitRateGroup_UnitGroup[]
}

export interface GetUnitRateGroup_UnitGroup {
  axiosConfig?: AxiosRequestConfig,
  src_unit?: Unit
  dest_unit?: Unit
  sku?: Sku
}

export interface GetUnitRateGroup_UnitIdGroup {
  axiosConfig?: AxiosRequestConfig,
  src_unit_id?: string
  dest_unit_id?: string
  sku?: Sku
}

export interface GetUnitRateGroupData {
  axiosConfig?: AxiosRequestConfig,
  unit_rate_groups?: GetUnitRateGroupData_UnitRateGroup[]
}

export interface GetUnitRateGroupData_UnitRateGroup {
  axiosConfig?: AxiosRequestConfig,
  src_unit_id?: string
  dest_unit_id?: string
  rate?: string
  sku_id?: string
}

export interface FilterSkuInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  fee_unit_id?: string
  order_unit_id?: string
  price?: string
  current_price?: boolean
  origin_unit_price?: string
}

export interface CopySourceQuotationInfo {
  axiosConfig?: AxiosRequestConfig,
   /** 原报价单id */ 
  source_quotation_id?: string
   /** 报价单对应的条目数量 */ 
  basic_price_total?: string
}

export interface RelationElement {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  quotation_id?: string
  station_id?: string
  quotation_type?: Quotation_Type
   /** 标记是否删除，用在SetCustomerQuotationRelation接口相同时添加和删除关联关系时使用，本质上是调一下UnsetCustomerQuotationRelation接口 */ 
  is_remove?: boolean
}

export interface BatchPresetPricingFormulaData {
  axiosConfig?: AxiosRequestConfig,
  msg?: string[]
}

export interface BatchCalculatePricingFormulaData {
  axiosConfig?: AxiosRequestConfig,
  msg?: string[]
}

export interface ExportSpecialBasicPriceData {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  sku_infos?: ExportSpecialBasicPriceData_ExportSpecialBasicPriceSkuInfo[]
}

export interface ExportSpecialBasicPriceData_ExportSpecialBasicPriceSkuInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  name?: string
  unit_id?: string
  price?: string
}

export interface ImportSpecialBasicPriceData {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  file_url?: string
  special_basic_price_info?: ImportSpecialBasicPriceData_ImportSpecialBasicPriceInfo[]
  err_special_basic_price_info?: ImportSpecialBasicPriceData_ImportSpecialBasicPriceInfo[]
  tmp_special_basic_price_info?: ImportSpecialBasicPriceData_SetSpecialBasicPriceInfo[]
  position_index?: ImportSpecialBasicPriceData_PositionIndex[]
  file_conversion?: boolean
  import_type?: boolean
  err_sku_ids?: string[]
  default_quotation_id?: string
}

export interface ImportSpecialBasicPriceData_ImportSpecialBasicPriceInfo {
  axiosConfig?: AxiosRequestConfig,
  name?: string
  unit_id?: string
  price?: string
   /** 在数据导入时，用于为商品捆绑别名 */ 
  sku_id?: string
   /** Excel错误信息输出 和 错误条目展示的错误信息 */ 
  err_str?: string
   /** 错误条目展示用于区分错误来源 */ 
  err?: Status_Code
   /** 在设置协议价失败时，将Sku的信息写入用于错误条目处理 */ 
  err_sku?: Sku
   /** 当ErrCode，为Status.Code.SKU_NOT_EXIST时，该参数决定是否创建 */ 
  forced_create?: boolean
}

export interface ImportSpecialBasicPriceData_SetSpecialBasicPriceInfo {
  axiosConfig?: AxiosRequestConfig,
  name?: string
  sku_id?: string
  unit_id?: string
  price?: string
   /** 当ErrCode，为Status.Code.SKU_NOT_EXIST时，该参数决定是否创建 */ 
  forced_create?: boolean
}

export interface ImportSpecialBasicPriceData_PositionIndex {
  axiosConfig?: AxiosRequestConfig,
  position?: string[]
}

export interface BasicPriceList {
  axiosConfig?: AxiosRequestConfig,
  basic_price_list?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface FavoriteSkuList {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_list?: FavoriteSku[]
}

export interface UnitQuantity {
  axiosConfig?: AxiosRequestConfig,
  unit_id?: string
  amount?: string
}

export interface UnitPrice {
  axiosConfig?: AxiosRequestConfig,
  unit_id?: string
  price?: string
}

export interface UnitValue {
  axiosConfig?: AxiosRequestConfig,
   /** uint64 unit_id = 1 [ (validate.rules).uint64.gt = 0 ]; // 请在代码内校验 */ 
  unit_id?: string
   /** deprecated 因为兼容性原因暂时保留，后续不再使用，新需求请不要使用这个字段 [ (validate.rules).string = {pattern : "^-*(([0-9]+\\.[0-9]+)|[0-9]+)$"} ] */ 
  quantity?: string
   /** deprecated 因为兼容性原因暂时保留，后续不再使用，新需求请不要使用这个字段 */ 
  price?: string
   /** 数量或者价格 */ 
  val?: string
}

export interface UnitValueSet {
  axiosConfig?: AxiosRequestConfig,
   /** 用户输入，前端填写 */ 
  input?: UnitValue
   /** 用户输入2，目前只有订单中的出库数据和库存单据才会用到 */ 
  input2?: UnitValue
   /** 计价逻辑 */ 
  calculate?: UnitValue
}

export interface UnitValueSetV2 {
  axiosConfig?: AxiosRequestConfig,
   /** 前端输入数量 */ 
  quantity?: UnitValue
   /** 前端输入金额 */ 
  price?: UnitValue
}

export interface UnitStock {
  axiosConfig?: AxiosRequestConfig,
  base_unit?: UnitValue
  sku_unit?: UnitValue
   /** 多单位展示库存 形如:2袋11斤(2箱11斤) */ 
  mult_unit_stock?: string
}

export interface ErrorAsyncResult {
  axiosConfig?: AxiosRequestConfig,
  code?: string
  err?: number
  err_str?: string
}

export interface MerchandiseParam {
  axiosConfig?: AxiosRequestConfig,
  ssus?: MerchandiseParam_ElemMap[]
  skus?: MerchandiseParam_ElemMap[]
   /** 多条数据合成一个组合商 */ 
  combine_ssus?: MerchandiseParam_CombineSsu[]
  error_async_results?: ErrorAsyncResult[]
}

export interface MerchandiseParam_ElemMap {
  axiosConfig?: AxiosRequestConfig,
  elem?: string
}

export interface MerchandiseParam_CombineSsu {
  axiosConfig?: AxiosRequestConfig,
  customized_code?: string
  elems?: MerchandiseParam_ElemMap[]
}

export interface MerchandiseStructParam {
  axiosConfig?: AxiosRequestConfig,
  category1s?: Category[]
  category2s?: Category[]
  spus?: Spu[]
  skus?: Sku[]
}

export interface InitMerchandiseParam {
  axiosConfig?: AxiosRequestConfig,
  merchandise?: MerchandiseStructParam
  group_ids?: string[]
  create_time?: string
}

export interface FavoriteSkuNumStaticCache {
  axiosConfig?: AxiosRequestConfig,
   /** key 是收藏夹ID，值是收藏夹下的商品数量 */ 
  favorite_sku_num_map?: string
   /** 更新版本号 */ 
  revision?: string
}

export interface ExportQuotationMiddle {
  axiosConfig?: AxiosRequestConfig,
  quotation_ids?: string[]
  quotations?: Quotation[]
  quotation_relation_map?: ExportQuotationMiddle_QuotationRelationMap
  supplier_map?: enterprise.Supplier
}

export interface ExportQuotationMiddle_QuotationRelationMap {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice[]
  sku_map?: Sku
}

export interface FilterParams {
  axiosConfig?: AxiosRequestConfig,
   /** 分类ID。可以传一级分类ID，二级分类ID，三级分类ID，四级分类ID，五级分类ID */ 
  category_id?: string
  sku_ids?: string[]
   /** sku_id */ 
  sku_id?: string
   /** 报价单ID */ 
  quotation_id?: string
   /** quotation_ids */ 
  quotation_ids?: string[]
  sku_customize_codes?: string[]
   /** quotation自定义编码 */ 
  quotation_serial_no?: string
  sku_type?: Sku_SkuType
   /** 支持查询多类型，不为nil时sku_type无效 */ 
  sku_types?: Sku_SkuType[]
   /** 报价单类型 */ 
  quotation_type?: Quotation_Type
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** sku编码，sku名模糊搜索 */ 
  q?: string
   /** Deprecated: Sku Name 精准搜索 TODO 无效 */ 
  search_q?: string
   /** 报价单编码，报价单名模糊搜索 */ 
  quotation_q?: string
   /** 货位id */ 
  shelf_ids?: string[]
   /** 可售 */ 
  on_sale?: common.Filters_Bool
   /** 是否已删除 */ 
  is_deleted?: boolean
   /** 上下架 对应字段是BasicPrice.on_shelf，只要有一个商品上架就是上架（true），全部商品下架是下架（false)。 */ 
  on_shelf?: common.Filters_Bool
   /** 过滤部分上架，部分下架的情况 */ 
  bp_on_shelf_type_list?: BasicPrice_BpOnShelfType[]
   /** 报价状态 */ 
  quotation_status?: Quotation_Status
   /** sku名 模糊搜索 */ 
  sku_name_like?: string
   /** sku编码 模糊搜索 */ 
  sku_code_like?: string
   /** 报价状态 */ 
  quotation_statuss?: Quotation_Status[]
   /** 是否默认报价单 */ 
  is_default_quotation?: common.Filters_Bool
   /** 供应商ID，按供应商下的sku别名搜索时有用 */ 
  alias_by_supplier_id?: string
   /** 客户ID */ 
  customer_id?: string
   /** 一级分类ID, 也可以直接用「category_id」参数 */ 
  category1_id?: string
   /** 二级分类ID, 也可以直接用「category_id」参数 */ 
  category2_id?: string
   /** 三级分类ID, 也可以直接用「category_id」参数 */ 
  category3_id?: string
   /** 四级分类ID, 也可以直接用「category_id」参数 */ 
  category4_id?: string
   /** 五级分类ID, 也可以直接用「category_id」参数 */ 
  category5_id?: string
   /** sku上的默认供应商 */ 
  sku_default_supplier_id?: string
   /** 导出时过滤指定供应商的特殊税率 */ 
  tax_supplier_id?: string
  basic_price_ids?: string[]
   /** 是否查询已删除的 */ 
  need_delete?: common.Filters_Bool
   /** 条形码 */ 
  bar_codes?: string[]
   /** or条形码 */ 
  or_bar_codes?: string[]
   /** 父报价单id */ 
  parent_quotation_ids?: string[]
   /** 周期报价单时间区间节点 */ 
  periodic_time?: string
   /** 只返回可以和商品进行绑定操作的报价单 */ 
  parent_quotation_filter?: boolean
   /** 配合parent_quotation_filter，过滤待审核类型的报价单 */ 
  wait_audit_filter?: boolean
   /** quotation types */ 
  quotation_types?: Quotation_Type[]
   /** 采购协议价兼容时过滤建单时间开始时间/历史报价单的当天开始时间 */ 
  start_time?: string
   /** 采购协议价兼容时过滤建单时间结束时间/历史报价单的当天截止时价 */ 
  end_time?: string
   /** 采购协议价过滤供应商 */ 
  supplier_ids?: string[]
   /** 分类ID。可以传一级分类ID，二级分类ID，三级分类ID，四级分类ID，五级分类ID，返回该分类及其子类的sku */ 
  category_ids?: string[]
   /** 生成采购订单时，采购单价根据供应商+商品+单位取状态为生效的协议价 */ 
  unit_id?: string
   /** 获取存在采购规则的商品 */ 
  have_purchase_rule?: common.Filters_Bool
   /** 菜谱时间 */ 
  menu_time?: string
   /** 菜谱餐次 */ 
  menu_period_group_id?: string
   /** 需要被排除的报价单 exclude_quotation_ids */ 
  exclude_quotation_ids?: string[]
   /** 需要被排除的商品 exclude_sku_ids */ 
  exclude_sku_ids?: string[]
   /** 需要被排除的报价条目 */ 
  exclude_basic_price_ids?: string[]
   /** 序列号切片 */ 
  quotation_serial_nos?: string[]
  basic_price_update_begin_time?: string
   /** 客户商品属性的分类名称 */ 
  special_category_name?: string
  basic_price_update_end_time?: string
  basic_price_create_begin_time?: string
  basic_price_create_end_time?: string
  creator_id?: string
  basic_price_source?: BasicPrice_Source
   /** sku编码列表，sku名模糊搜索 */ 
  qs?: string[]
  not_package_sub_sku_types?: Sku_NotPackageSubSkuType[]
   /** 是否是临时商品 */ 
  is_temporary_product?: common.Filters_Bool
   /** 是否存在临时单位 */ 
  exist_temporary_unit?: common.Filters_Bool
   /** sku创建开始时间 */ 
  sku_create_begin_time?: string
   /** sku创建结束时间 */ 
  sku_create_end_time?: string
   /** sku更新开始时间 */ 
  sku_update_begin_time?: string
   /** sku创建结束时间 */ 
  sku_update_end_time?: string
   /** 名称、编码等模糊搜索时的数据来源，db/es，默认db */ 
  data_source?: common.DataSource
   /** 名称精确搜索 */ 
  search_qs?: string[]
   /** 针对BasicPrice生效，根据此条件对报价条目进行过滤 */ 
  sku_id_unit_ids?: SkuIdUnitId[]
   /** 批量导入订单，只搜索商品名称、编码 */ 
  batch?: boolean
  sources?: Sku_Source[]
   /** 商品指定站点 */ 
  sku_station_ids?: string[]
   /** 报价单指定站点 */ 
  quotation_station_ids?: string[]
   /** 报价指定站点 */ 
  basic_price_station_ids?: string[]
   /** 废弃，不要使用，默认和sku_station_ids一样，商品指定站点 */ 
  station_ids?: string[]
   /** 周期报价单区分为1.按下单时间生效，2.按收货时间生效
valid_time_type = proto.VALID_TIME_RECEIVE(2)时，periodic_time字段表示收货时间，用来圈定周期子报价单生效状态 */ 
  valid_time_type?: Quotation_ValidTimeType
   /** 按收货时间生效的周期报价单：指定的收货时间 */ 
  receive_time?: string
   /** 定价类型，公式类型筛选 */ 
  pricing_type?: PricingType
   /** 定价公式模式，是否预设公式筛选 */ 
  pricing_formula?: PricingFormula
   /** > quotation_id */ 
  gt_quotation_id?: string
   /** > sku_id */ 
  gt_sku_id?: string
   /** 只显示有权限的商品 */ 
  only_show_permission_sku?: boolean
   /** 是否需要拣货 */ 
  pre_sorting?: common.Flag_Bool
   /** 供应商协作模式 */ 
  supplier_cooperate_model_type?: merchandise.Sku_SupplierCooperateModelType
}

export interface SkuUnitInfo {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
  unit?: Unit
  basic_price_item?: BasicPriceItem
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface BulkImportBasicPriceV2LiteMiddle {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  is_xls?: boolean
  quotation_id?: string
  correct_row_data?: BulkImportBasicPriceV2LiteMiddle_RowData[]
  err_row_data?: BulkImportBasicPriceV2LiteMiddle_RowData[]
}

export interface BulkImportBasicPriceV2LiteMiddle_RowData {
  axiosConfig?: AxiosRequestConfig,
   /** 商品名称： 数据导入添加至已有别名时必填 */ 
  sku_name?: string
   /** 商品编码 */ 
  sku_customized_code?: string
   /** 订价单位名称 */ 
  sheet_unit_name?: string
   /** 下单单位名称 */ 
  order_unit_name?: string
   /** 下单价格： 数据导入必传 */ 
  price?: string
   /** 上架状态： 数据导入必传 */ 
  on_shelf?: boolean
   /** 商品ID： 数据导入必传 */ 
  sku_id?: string
   /** 下单单位： 数据导入必传 */ 
  order_unit_id?: string
   /** 订价单位： 数据导入必传 默认等于order_unit_id */ 
  sheet_unit_id?: string
   /** 数据订正：创建商品 */ 
  force_sku?: merchandise.Sku
   /** 数据订正：创建系统单位  商品不存在，其导入单位也不存在于系统单位中，要求创建商品必须传递此字段 */ 
  group_unit?: merchandise.Unit
   /** 错误编码 */ 
  error_code?: BulkImportBasicPriceV2LiteMiddle_ErrorCode
   /** 创建报价单错误：前端无用 */ 
  error_string?: string
}

export interface ExportExecuteBasicPrice {
  axiosConfig?: AxiosRequestConfig,
  customize_code?: string
  name?: string
  category_name1?: string
  category_name2?: string
  category_name3?: string
  current_price?: string
  order_unit_id?: string
  sheep_unit_id?: string
  unit_price?: string
  minimum_order_number?: string
  discount_rate?: string
  before_unit_price?: string
  on_shelf?: string
  quotation_price?: string
  quotation_price_rate?: string
  purchase_price?: string
  purchase_price_rate?: string
  in_stock_price?: string
  in_stock_price_rate?: string
   /** 商品描述 */ 
  sku_desc?: string
   /** 所属组织 */ 
  station_name?: string
  reference_market_price?: string
  reference_market_price_rate?: string
   /** 最近生产入库价 */ 
  last_product_in_stock_price?: string
   /** 最近生产入库价利润率 */ 
  last_product_in_stock_price_rate?: string
   /** 最近生产入库价 */ 
  last_in_stock_market_price?: string
   /** 最近生产入库价利润率 */ 
  last_in_stock_market_price_rate?: string
}

export interface MarketData {
  axiosConfig?: AxiosRequestConfig,
   /** 同步数据方维护的行情数据唯一标识 */ 
  market_data_id?: string
   /** 同步数据方维护的商品唯一标识 */ 
  third_sku_id?: string
   /** 创建时间 */ 
  create_time?: string
   /** 修改时间 */ 
  update_time?: string
   /** 删除时间，非0表示已删除 */ 
  delete_time?: string
   /** 数据来源平台 */ 
  source_platform?: MarketData_SourcePlatform
   /** 数据来源平台维护的商品编号 */ 
  customized_code?: string
   /** 商品名称 */ 
  sku_name?: string
   /** 规格 */ 
  standard?: string
   /** 产地 */ 
  producing_area?: string
   /** 行情价格时间 */ 
  time?: string
   /** 行情价格类型 */ 
  price_type?: MarketData_PriceType
   /** 市场名称 */ 
  market_name?: string
   /** 价格数值 */ 
  market_price?: string
   /** 备用字段 */ 
  remark?: string
   /** @inject_tag: gorm:"INDEX:is_latest;default:0" */ 
  is_latest?: boolean
   /** 自定义字段，系统自动添加，请勿删除，编号用冲突可人工调整 */ 
  custom_fields?: common.CustomField[]
}

export interface MatchResultDetail {
  axiosConfig?: AxiosRequestConfig,
  substring?: string
  start?: number
  end?: number
  sku_name?: string
  unit_name?: string
  quantity?: string
  price?: string
  sku_start?: number
  sku_end?: number
  quantity_start?: number
  quantity_end?: number
  unit_start?: number
  unit_end?: number
  price_start?: number
  price_end?: number
}

export interface MerchandiseApolloConfig {
  axiosConfig?: AxiosRequestConfig,
   /** 分页查询sku的数量限制(用于构建es搜索条件) */ 
  paging_sku_item_limit?: number
   /** 需要走mysql查询的group_id，多个用英文逗号分隔 */ 
  mysql_for_group_ids?: string
   /** 智能识别里，商品名的正则表达式 */ 
  match_sku_regexp_sku_name?: string
   /** 切换至报价单新表 */ 
  change_basic_price_detail?: boolean
   /** 是否启用商品内容搜索，true启用，false停用 */ 
  menory_search?: boolean
   /** 不走商品内存搜索的groupid，主要是有大量商品的groupid，多个group_id用英文逗号分隔 */ 
  not_menory_search_for_group_ids?: string
   /** 每个协程搜索的商品数，例如有20000个商品，将开启 20000 / 100 = 200 个携程 */ 
  menory_search_size?: number
   /** 客户多协议单绑定应用id(权限控制） */ 
  multi_customer_price_app_id?: string
}

export interface OutsideSku {
  axiosConfig?: AxiosRequestConfig,
   /** 自定义编码 */ 
  customize_code?: string
   /** sku名字 影响版本 */ 
  name?: string
   /** sku分类分类id */ 
  category_id?: string
   /** 基本单位 */ 
  base_unit_id?: string
   /** 辅助单位 */ 
  second_base_unit_id?: string
   /** 辅助单位/基本单位的比率 */ 
  second_base_unit_ratio?: string
   /** 生产单位 */ 
  production_unit_id?: string
   /** 采购单位 */ 
  purchase_unit_id?: string
   /** 条形码 */ 
  bar_code?: string
   /** 备用条形码1 */ 
  bar_code1?: string
   /** 备用条形码2 */ 
  bar_code2?: string
   /** 商品描述 */ 
  desc?: string
   /** 可售/不可售 */ 
  on_sale?: boolean
   /** 是否称重 */ 
  is_weight?: boolean
   /** 供应商协作模式 */ 
  supplier_cooperate_model_type?: Sku_SupplierCooperateModelType
   /** 普通商品必传 */ 
  purchaser_id?: string
   /** 普通商品必传 */ 
  supplier_id?: string
   /** 默认仓库ID */ 
  warehouse_id?: string
   /** 损耗比例 */ 
  loss_ratio?: string
   /** 保质期(天) */ 
  expiry_date?: number
   /** 产地 */ 
  origin_place?: string
   /** 品牌 */ 
  brand?: string
   /** 售后标准 */ 
  after_sales_standards?: string
   /** 商品特征 */ 
  product_characteristics?: string
   /** 耗材商品必填 */ 
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** 换算方式 */ 
  package_calculate_type?: Sku_PackageCalculateType
   /** 包材数量 */ 
  package_num?: number
   /** 销项税率,output_tax */ 
  tax?: string
   /** 进项税率 */ 
  input_tax?: string
   /** 税率分类 */ 
  finance_category_id?: string
   /** sku类型 */ 
  sku_type: Sku_SkuType
   /** 非耗材商品必填 */ 
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
   /** 库存采购:是否手动采购 */ 
  manual_purchase?: boolean
   /** 是否存在规则，默认false */ 
  have_purchase_rule?: common.Filters_Bool
   /** 是否需要拣货   库销类型 */ 
  pre_sorting?: boolean
   /** 临时单位 自定义单位限制三个 */ 
  units?: OutsideSku_UnitList[]
}

export interface OutsideSku_UnitList {
  axiosConfig?: AxiosRequestConfig,
   /** 主键 */ 
  unit_id?: string
   /** 是否是临时单位 */ 
  is_temporary_unit?: boolean
  name?: string
   /** id/parent_id 单位是「3斤/袋」的含义是 「3斤= 1袋」，所以比率（unit.rate） =「1袋/1斤 = 3」 */ 
  rate?: number
   /** 基本单位 */ 
  parent_id?: string
}

export interface OutsideQuotation {
  axiosConfig?: AxiosRequestConfig,
   /** 对内（也就是 GroupUser）可见的报价单可见的名字；客户协议单的协议规则名 */ 
  inner_name?: string
   /** 最外（比如说 Customer）可见的报价单可见的名字；客户协议单关联的报价单 */ 
  outer_name?: string
   /** 编号 */ 
  serial_no?: string
   /** 报价单父编号 */ 
  parent_serial_no?: string
   /** 描述 */ 
  description?: string
   /** 是否是默认报价单 */ 
  is_default?: boolean
  type: Quotation_Type
   /** 开始时间 */ 
  start_time?: string
   /** 结束时间 */ 
  end_time?: string
   /** 状态 */ 
  status: Quotation_Status
   /** 备注,暂时不用 */ 
  remark?: string
}

export interface GetSkuSalePricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  filters?: GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter[]
}

export interface GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter {
  axiosConfig?: AxiosRequestConfig,
   /** 收货人ID */ 
  receive_customer_id?: string
  sku_filters?: GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter_SkuFilter[]
   /** 最近多少条售价，最大30条 */ 
  period?: string
   /** 开始时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  start_time?: string
   /** 结束时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  end_time?: string
}

export interface GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter_SkuFilter {
  axiosConfig?: AxiosRequestConfig,
   /** 商品ID */ 
  sku_id?: string
   /** 定价单位ID */ 
  fee_unit_id?: string
}

export interface GetSkuSalePricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key=receive_customer_id + "_" + sku_id + "_" + fee_unit_id */ 
  sku_sale_prices_map?: GetSkuSalePricesCacheResponse_SkuSalePriceCaches
}

export interface GetSkuSalePricesCacheResponse_SkuSalePriceCaches {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_prices?: SkuSalePriceCache[]
}

export interface SetSkuSalePricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_price_caches?: SkuSalePriceCache[]
}

export interface SetSkuSalePricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetSkuPurchasePricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: SkuReferencePriceFilter
}

export interface GetSkuPurchasePricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key=supplier_id + "_" + sku_id + "_" + type */ 
  sku_reference_prices_map?: SkuReferencePriceCaches
}

export interface GetSkuInStockPricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: SkuReferencePriceFilter
}

export interface GetSkuInStockPricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key=supplier_id + "_" + sku_id + "_" + type */ 
  sku_reference_prices_map?: SkuReferencePriceCaches
}

export interface GetSkuReferencePricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: SkuReferencePriceFilter
}

export interface GetSkuReferencePricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key=supplier_id + "_" + sku_id + "_" + type */ 
  sku_reference_prices_map?: SkuReferencePriceCaches
}

export interface GetSkuBasicPricesCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  filters?: GetSkuBasicPricesCacheRequest_SkuBasicPriceFilter[]
}

export interface GetSkuBasicPricesCacheRequest_SkuBasicPriceFilter {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单ID */ 
  quotation_id?: string
   /** 商品ID */ 
  sku_ids?: string[]
   /** 最近多少条售价，最大30条 */ 
  period?: string
   /** 开始时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  start_time?: string
   /** 结束时间，按时间段，和period二选一，优先period，按时间段只会取每天最新的一条 */ 
  end_time?: string
}

export interface GetSkuBasicPricesCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key=quotation_id + "_" + sku_id */ 
  sku_basic_prices_map?: GetSkuBasicPricesCacheResponse_SkuBasicPriceCaches
}

export interface GetSkuBasicPricesCacheResponse_SkuBasicPriceCaches {
  axiosConfig?: AxiosRequestConfig,
  sku_basic_prices?: SkuBasicPriceCache[]
}

export interface SearchSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 商品名称（模糊）、编码（精确）、商品名拼音首字母（模糊）、商品名全拼（模糊）、商品别名（模糊）、客户商品别名（模糊）、商品条码（精确） */ 
  q?: string
   /** 客户ID，搜客户商品别名时毕传 */ 
  customer_id?: string
   /** 需要返回的结果数 */ 
  limit?: string
}

export interface SearchSkuResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 匹配到的sku_id，无序 */ 
  sku_ids?: string[]
   /** 已排好序，排序规则：index、order_count、search_count、sort_num */ 
  sku_cache?: SkuCacheSort[]
}

export interface OrderDetailEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  order_detail_ids?: string[]
}

export interface OrderDetailEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CustomerProductConfigEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  customer_product_config_ids?: string[]
}

export interface CustomerProductConfigEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SkuEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  sku_ids?: string[]
  old_sku_map?: Sku
}

export interface SkuEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface InitSkuCacheRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 为空时初始化全部商品 */ 
  sku_ids?: string[]
}

export interface InitSkuCacheResponse {
  axiosConfig?: AxiosRequestConfig,
  fail?: string
  success?: string
}

export interface RefreshSkuCacheDataRequest {
  axiosConfig?: AxiosRequestConfig,
  group_ids?: string[]
}

export interface RefreshSkuCacheDataResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetSkuCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
  customer_id?: string
}

export interface GetSkuCacheResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_cache_map?: SkuCache
  sku_customer_alias_cache_map?: SkuCustomerAliasCache
}

export interface InitSkuCustomerAliasCacheRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
  customer_product_config_ids?: string[]
}

export interface InitSkuCustomerAliasCacheResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SetSkuCountRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_counts?: SetSkuCountRequest_SkuCount[]
}

export interface SetSkuCountRequest_SkuCount {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  count?: string
   /** 1：order_count、2：search_count */ 
  type?: string
}

export interface SetSkuCountResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetSkuCountRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface GetSkuCountResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key = sku_id */ 
  sku_count_map?: SetSkuCountRequest_SkuCount
}

export interface ListPackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListPackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_units?: PackUnit[]
}

export interface SavePackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  pack_units?: PackUnit[]
}

export interface SavePackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_units?: PackUnit[]
}

export interface GetImportCombineSkuTemplateRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetImportCombineSkuTemplateResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 模板地址 */ 
  file_url?: string
}

export interface ImportCombineSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface ImportCombineSkuData {
  axiosConfig?: AxiosRequestConfig,
  combine_skus?: ImportCombineSkuData_CombineSku[]
   /** key = name */ 
  sku_name_map?: merchandise.Sku
   /** key = customize_code */ 
  sku_code_map?: merchandise.Sku
   /** key = unitId */ 
  unit_map?: merchandise.Unit
   /** key = quotation_id */ 
  quotation_name_map?: string
   /** 错误信息 */ 
  error_rows?: ImportCombineSkuData_Rows[]
}

export interface ImportCombineSkuData_CombineSku {
  axiosConfig?: AxiosRequestConfig,
  name?: string
  customize_code?: string
  order_unit_name?: string
  on_sale?: string
  ingredients?: ImportCombineSkuData_IngredientSku[]
}

export interface ImportCombineSkuData_IngredientSku {
  axiosConfig?: AxiosRequestConfig,
   /** 组成商品名称 */ 
  name?: string
   /** 组成商品下单单位 */ 
  order_unit_name?: string
   /** 组成商品下单单位配比，停用 */ 
  ratio?: string
   /** 组成商品定价单位 */ 
  fee_unit_name?: string
   /** 组成商品单价 */ 
  fee_price?: string
   /** 组成商品配比单位 */ 
  ingredient_unit_name?: string
   /** 组成商品配比数量 */ 
  ingredient_ratio?: string
   /** 组成商品编码 */ 
  customize_code?: string
}

export interface ImportCombineSkuData_Rows {
  axiosConfig?: AxiosRequestConfig,
  row?: string[]
}

export interface ImportCombineSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportCombineSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: ListSkuV2Request
}

export interface ExportCombineSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ListSkuByQueryForSearchRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 可搜索：商品名称(模糊)、商品拼音首字母(模糊)、别名(模糊)、编码(精确)、条码1(精确)、条码2(精确)、条码3(精确)，各字段之间是或的关系，默认只查询：商品名称、商品拼音首字母 */ 
  q?: string
   /** 需要查询编码 */ 
  need_query_customize_code?: boolean
   /** 需要查询别名 */ 
  need_query_alias_name?: boolean
   /** 需要查询条码 */ 
  need_query_bar_code?: boolean
   /** 需要查询旧的数据 */ 
  need_query_deleted?: boolean
  paging?: common.PagingParams
}

export interface ListSkuByQueryForSearchResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  paging?: common.PagingResult
}

export interface ListSimpleSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 精确查找 */ 
  names?: string[]
  customize_codes?: string[]
  sku_ids?: string[]
  need_deleted?: boolean
   /** 不过滤station_id */ 
  not_filter_station_id?: boolean
  paging?: common.PagingParams
}

export interface ListSimpleSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  paging?: common.PagingResult
}

export interface ListSimpleQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 精确查找 */ 
  inner_names?: string[]
   /** 精确查找 */ 
  outer_names?: string[]
  serial_nos?: string[]
  quotation_ids?: string[]
  need_deleted?: boolean
   /** 不过滤station_id */ 
  not_filter_station_id?: boolean
  paging?: common.PagingParams
}

export interface ListSimpleQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotations?: Quotation[]
  paging?: common.PagingResult
}

export interface ImportSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface ImportSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CleanSkuRemarkRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface CleanSkuRemarkResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetManySkuRemarkRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface GetManySkuRemarkResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_remark_cache_map?: SkuRemarkCache
}

export interface SaveSkuRemarkRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_remark?: SkuRemark
}

export interface SaveSkuRemarkResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_remark_cache?: SkuRemarkCache
}

export interface ListNutritionUnitRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListNutritionUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  units?: string[]
}

export interface GetSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface GetSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
}

export interface CleanSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface CleanSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SaveSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
}

export interface SaveSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
}

export interface ListNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutritions?: Nutrition[]
}

export interface SaveNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  nutrition?: Nutrition
}

export interface SaveNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutrition?: Nutrition
}

export interface DeleteNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  nutrition_id?: string
}

export interface DeleteNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category_id?: string
}

export interface GetCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface ListCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category_ids?: string[]
  q?: string
  paging?: common.PagingParams
  need_delete?: common.Filters_Bool
  sort?: common.SortBy[]
}

export interface ListCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: Category[]
  paging?: common.PagingResult
}

export interface ListInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  internal_category_ids?: string[]
  q?: string
  paging: common.PagingParams
}

export interface ListInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_categories?: InternalCategory[]
  paging?: common.PagingResult
}

export interface CreateCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category: Category
}

export interface CreateCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface CreateInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  internal_category: InternalCategory
}

export interface CreateInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_category?: InternalCategory
}

export interface UpdateCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category: Category
}

export interface UpdateCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface UpdateManyCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category_list?: Category[]
}

export interface UpdateManyCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category_list?: Category[]
}

export interface DeleteCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category_id?: string
}

export interface DeleteCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface GetCategoryTreeRequest {
  axiosConfig?: AxiosRequestConfig,
   /** bshop 根据报价单取获取的分类树, 没有登录的传个1 */ 
  quotation_id?: string
   /** bshop 根据客户拉取获取的分类树 必须把station_id传过来 */ 
  station_id?: string
   /** 根据sku_id拉取对应的分类树 */ 
  sku_ids?: string[]
   /** bshop 未登录客户 */ 
  group_id?: string
   /** 拉取删除的分类 用于排序 */ 
  has_delete?: boolean
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 分类名称 */ 
  category_name?: boolean
   /** 子店customer_id */ 
  customer_id?: string
   /** 是否需要查询spu，不需要传1 */ 
  not_need_spu?: string
   /** 层级 */ 
  level?: number
   /** 查询ids外的数据 */ 
  not_in_category_ids?: string[]
   /** 当客户绑定的周期报价单为收货时间生效的类型时，传入此参数，用于确认收货时间点时生效的周期子报价单 */ 
  receive_time?: string
  sort_by?: common.SortBy[]
}

export interface GetCategoryTreeResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: Category[]
  spus?: Spu[]
   /** 客户商品属性 */ 
  config_infos?: enterprise.ConfigInfo[]
}

export interface GetCategoryTreeOnCustomerPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 根据客户协议单ID获取其关联的报价单的分类树 */ 
  quotation_id?: string
   /** 是否将父分类的计算规则展示在子分类上 */ 
  on_child?: boolean
}

export interface GetCategoryTreeOnCustomerPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: Category[]
}

export interface DeltaUpdatePriceRuleOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
  category_ids?: string[]
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 区间定价 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
}

export interface DeltaUpdatePriceRuleOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface BulkUpdateCalRuleOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
  category_ids?: string[]
   /** 客户协议价更新计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 区间定价 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
}

export interface BulkUpdateCalRuleOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BatchUpdateCategorySortRequest {
  axiosConfig?: AxiosRequestConfig,
  category?: Category[]
}

export interface BatchUpdateCategorySortResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetOfficialCategoryTreeRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetOfficialCategoryTreeResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: Category[]
}

export interface ChangeMerchandiseRankRequest {
  axiosConfig?: AxiosRequestConfig,
  node_type?: ChangeMerchandiseRankRequest_NodeType
  rank?: number
  node_id?: string
}

export interface ChangeMerchandiseRankResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetManyCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 分类ID  「category_ids」和「special_parent_category_ids」只填一个，两个都填 只取 「category_ids」 */ 
  category_ids?: string[]
   /** 根据这个ID列表(可以是一级分类ID也可以是二级分类IID)获取叶子节点分类 「category_ids」和「special_parent_category_ids」只填一个，两个都填 只取 「category_ids」 */ 
  special_parent_category_ids?: string[]
   /** 是否查询已经删除的 */ 
  need_delete?: boolean
}

export interface GetManyCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category_map?: Category
}

export interface GetManyCategoryByRelationGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  category_ids?: string[]
  relation_group_ids?: string[]
}

export interface GetManyCategoryByRelationGroupResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key: group_id-category_id */ 
  category_map?: Category
}

export interface GetSpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu_id?: string
}

export interface GetSpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spu?: Spu
}

export interface InitFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface InitFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetFinanceCategoryTreeRequest {
  axiosConfig?: AxiosRequestConfig,
  finance_category_id?: string
}

export interface GetFinanceCategoryTreeResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: FinanceCategory[]
}

export interface GetManySpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu_ids?: string[]
}

export interface GetManySpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spu_map?: Spu
}

export interface ListSpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu_ids?: string[]
  name?: string
  paging?: common.PagingParams
}

export interface ListSpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spus?: Spu[]
  paging?: common.PagingResult
}

export interface CreateSpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu: Spu
}

export interface CreateSpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spu?: Spu
}

export interface UpdateSpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu: Spu
}

export interface UpdateSpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spu?: Spu
}

export interface DeleteSpuRequest {
  axiosConfig?: AxiosRequestConfig,
  spu_id?: string
}

export interface DeleteSpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spu?: Spu
}

export interface GetSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface GetSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
  ssu_infos?: ListSsuResponse_SsuInfo[]
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
}

export interface GetSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  need_delete?: boolean
   /** 商品库存 */ 
  need_sku_stock?: boolean
   /** 需要商品验收标准 */ 
  need_sku_acceptance_criteria?: boolean
}

export interface GetSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
   /** key 是分类ID, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** 组合商品的子商品 */ 
  ingredient_map?: Sku
   /** 商品销售库存 */ 
  sku_sale_inventorys?: SkuSaleInventory[]
   /** 商品库存 */ 
  sku_stocks?: WarehouseStock[]
}

export interface ListSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  category_id?: string
  spu_ids?: string[]
  sku_ids?: string[]
  customize_codes?: string[]
  sku_type?: Sku_SkuType
  q?: string
   /** enum RequestData */ 
  request_data?: number
  process?: common.Filters_Bool
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
  package_sub_sku_type?: Sku_PackageSubSkuType
  paging: common.PagingParams
   /** 货位id */ 
  shelf_ids?: string[]
  sort?: common.SortBy[]
   /** 拉取删除的sku数据 */ 
  has_delete?: boolean
   /** 过滤skuid切片 */ 
  not_sku_ids?: string[]
}

export interface ListSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_infos?: ListSkuResponse_SkuInfo[]
   /** map<uint64, string>       quotation_name_map   = 2; // key 是报价单id, value是报价单名字 */ 
  paging?: common.PagingResult
   /** key 是finance_category_id, value是finance_category_id名字 */ 
  finance_category_map?: string
}

export interface ListSkuResponse_SkuInfo {
  axiosConfig?: AxiosRequestConfig,
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
  sku?: Sku
   /** todo 待上线完成后删除 */ 
  ssu_infos?: ListSsuResponse_SsuInfo[]
}

export interface BatchApprovetemporarySkuRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** enum RequestData */ 
  request_data?: number
   /** 需要删除的数据 */ 
  need_delete_data?: boolean
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
   /** field 使用 SkuSortField */ 
  sort_by_list?: common.SortBy[]
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
}

export interface BatchApprovetemporarySkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListSkuV2ForSearchRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** enum RequestData */ 
  request_data?: number
   /** 需要删除的数据 */ 
  need_delete_data?: boolean
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
   /** field 使用 SkuSortField */ 
  sort_by_list?: common.SortBy[]
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 默认报价单的价格 */ 
  need_default_quotation_basic_price?: boolean
}

export interface ListSkuV2ForSearchResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
   /** key 是finance_category_id, value是finance_category_id名字 */ 
  finance_category_map?: string
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** 组合商品的子商品 */ 
  ingredient_map?: Sku
  paging?: common.PagingResult
   /** key 是skuId, value是客户商品属性 */ 
  config_info_map?: enterprise.ConfigInfo
   /** 商品销售库存，key 是sku_id-order_unit_id */ 
  sku_sale_inventorys?: SkuSaleInventory
   /** 商品供应商别名 */ 
  supplier_sku_alias?: string
  basic_price_map?: SyncQuotationBasicPriceRequest_BasicPrice
  sku_cache_sorts?: SkuCacheSort[]
}

export interface ListSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** enum RequestData */ 
  request_data?: number
   /** 需要删除的数据 */ 
  need_delete_data?: boolean
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
   /** field 使用 SkuSortField */ 
  sort_by_list?: common.SortBy[]
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 默认报价单的价格 */ 
  need_default_quotation_basic_price?: boolean
   /** 需要商品验收标准 */ 
  need_sku_acceptance_criteria?: boolean
   /** 是否需要科目代码信息 */ 
  need_account_code?: boolean
   /** 是否需要商品供应商信息 */ 
  need_sku_supplier?: boolean
}

export interface ListSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
   /** key 是finance_category_id, value是finance_category_id名字 */ 
  finance_category_map?: string
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** 组合商品的子商品 */ 
  ingredient_map?: Sku
  paging?: common.PagingResult
   /** key 是skuId, value是客户商品属性 */ 
  config_info_map?: enterprise.ConfigInfo
   /** 商品销售库存，key 是sku_id-order_unit_id */ 
  sku_sale_inventorys?: SkuSaleInventory
   /** 商品供应商别名 */ 
  supplier_sku_alias?: string
  basic_price_map?: SyncQuotationBasicPriceRequest_BasicPrice
   /** 科目代码列表 */ 
  account_code_map?: finance.AccountingSubject
   /** 商品供应商名称map */ 
  sku_supplier_map?: enterprise.Supplier
}

export interface ListSkuWithInquiryPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** 需要删除的数据 */ 
  need_delete_data?: boolean
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
   /** field 使用 SkuSortField */ 
  sort_by_list?: common.SortBy[]
}

export interface ListSkuWithInquiryPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  paging?: common.PagingResult
}

export interface GetSkuByNameUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  q?: string
  unit_id?: string
  unit_name?: string
}

export interface GetSkuByNameUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  exact_sku_id?: string
  possible_sku_ids?: string[]
  sku_map?: Sku
}

export interface ListSkuByNameUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  q?: string
  unit_id?: string
  unit_name?: string
  customer_id?: string
}

export interface ListSkuByNameUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
   /** key为{sku_id}-{sku_name}-{unit_name} */ 
  suggested_price_map?: SkuSuggestedPrice
   /** 精确匹配的sku_id */ 
  exact_sku_id?: string
   /** 模糊匹配的sku_ids */ 
  possible_sku_ids?: string[]
   /** 最近3天购买过匹配的sku_ids */ 
  recent_sku_ids?: string[]
}

export interface ListSkuSuggestedPriceByNameRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 非必填 */ 
  customer_id?: string
   /** 非必填 */ 
  customer_name?: string
  sku_infos?: ListSkuSuggestedPriceByNameRequest_SkuInfo[]
   /** 需要检测自动获取最近价格开关 */ 
  need_check_auto_price_config?: boolean
}

export interface ListSkuSuggestedPriceByNameRequest_SkuInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  sku_name?: string
  unit_name?: string
}

export interface ListSkuSuggestedPriceByNameResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key为{sku_id}-{sku_name}-{unit_name} */ 
  suggested_price_map?: SkuSuggestedPrice
}

export interface ListRecentSkuPricesRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
}

export interface ListRecentSkuPricesResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key为{sku_name}-{unit_name},value为price */ 
  sku_price_map?: string
}

export interface GetSkuCustomUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface GetSkuCustomUnitResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key 是unit_id */ 
  custom_unit_map?: Unit
}

export interface GetSkuBondOrderUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface GetSkuBondOrderUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  bond_order_unit_ids?: string[]
}

export interface ListSkuLiteRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** enum RequestData */ 
  request_data?: number
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
}

export interface ListSkuLiteResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
   /** key 是finance_category_id, value是finance_category_id名字 */ 
  finance_category_map?: string
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
  basic_price_map?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
}

export interface ListOfficialSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  req?: ListSkuV2Request
}

export interface ListOfficialSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  res?: ListSkuV2Response
}

export interface ListSkuForBindingQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
   /** 是否排除已经在报价单绑定的SKU */ 
  exclude_bond_sku?: boolean
}

export interface ListSkuForBindingQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  bound_sku_ids?: string[]
  paging?: common.PagingResult
}

export interface ListSkuForBindCustomerQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
}

export interface ListSkuForBindCustomerQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  paging?: common.PagingResult
}

export interface ListMaskSkuByQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging: common.PagingParams
   /** field 使用 SkuSortField */ 
  sort_by?: common.SortBy
}

export interface ListMaskSkuByQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  paging?: common.PagingResult
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
}

export interface GetManySkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** enum RequestData */ 
  request_data?: number
}

export interface GetManySkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku_map?: Sku
   /** key 是finance_category_id, value是finance_category_id名字 */ 
  finance_category_map?: string
   /** key 是分类ID, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** 组合商品的子商品 */ 
  ingredient_map?: Sku
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
}

export interface ExportSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  category_ids?: string[]
  spu_ids?: string[]
  sku_ids?: string[]
  customize_codes?: string[]
  sku_type?: Sku_SkuType
  q?: string
   /** enum RequestData */ 
  request_data?: number
  process?: common.Filters_Bool
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** Sku.ProcessType          process_type             = 12; */ 
  shelf_ids?: string[]
  sort?: common.SortBy[]
   /** 需要导出的字段，传空表示全部 */ 
  need_fields?: string[]
  supplier_id?: string
  bar_codes?: string[]
}

export interface ExportSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_sku_v2_request?: ListSkuV2Request
   /** 需要导出的字段，传空表示全部。need_fields 会决定表头顺序 */ 
  need_fields?: string[]
  supplier_id?: string
}

export interface ExportSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportLiteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  list_sku_v2_request?: ListSkuV2Request
   /** 需要导出的字段，传空表示全部。need_fields 会决定表头顺序 */ 
  need_fields?: string[]
  supplier_id?: string
}

export interface ExportLiteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportSkuExecuteData {
  axiosConfig?: AxiosRequestConfig,
  supplier_id?: string
  export_sku_v2_request?: ExportSkuV2Request
  excel_id?: string
  sheet_name?: string
}

export interface GetManySkuRequest {
  axiosConfig?: AxiosRequestConfig,
  category_id?: string
  spu_ids?: string[]
  sku_ids?: string[]
  customize_codes?: string[]
  sku_type?: Sku_SkuType
  q?: string
   /** enum RequestData */ 
  request_data?: number
  process?: common.Filters_Bool
  not_package_sub_sku_type?: Sku_NotPackageSubSkuType
  package_sub_sku_type?: Sku_PackageSubSkuType
   /** Sku.ProcessType          process_type             = 12; */ 
  shelf_ids?: string[]
   /** 为了实现接口SkuFilter */ 
  sort?: common.SortBy[]
}

export interface GetManySkuResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是sku_id */ 
  sku_map?: GetManySkuResponse_SkuInfo
}

export interface GetManySkuResponse_SkuInfo {
  axiosConfig?: AxiosRequestConfig,
   /** [分类1, 分类2 ] */ 
  category_infos?: CategoryInfo[]
  sku?: Sku
   /** key是unit_id */ 
  ssu_map?: ListSsuResponse_SsuInfo
}

export interface GetSkuSnapRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  sku_revision?: string
}

export interface GetSkuSnapResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface GetManySkuSnapRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_snap_ids?: SkuSnapID[]
}

export interface GetManySkuSnapResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是 "{sku_id}-{sku_revision}"，例如 "1234111-1231111" */ 
  sku_snap_map?: Sku
}

export interface UpdateManySkuSnapV2Request {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
}

export interface UpdateManySkuSnapV2Response {
  axiosConfig?: AxiosRequestConfig,
   /** key是 "{sku_id}_{sku_revision}"，例如 "1234111_1231111" */ 
  sku_snap_map?: Sku
}

export interface QuerySkuSnapshotRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySkuSnapshotResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_snapshots?: Sku[]
  paging?: common.PagingResult
}

export interface GetManySkuSnapV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_snap_ids?: SkuSnapID[]
}

export interface GetManySkuSnapV2Response {
  axiosConfig?: AxiosRequestConfig,
   /** key是 "{sku_id}_{sku_revision}"，例如 "1234111_1231111" */ 
  sku_snap_map?: Sku
}

export interface CreateSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 创建SPU, 轻巧版使用的是两层分类 */ 
  create_spu?: boolean
   /** 商品来源（标准版、轻巧版） */ 
  sku_source?: CreateSkuV2Request_SkuSource
}

export interface CreateSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CreateLiteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 创建SPU, 轻巧版使用的是两层分类 */ 
  create_spu?: boolean
}

export interface CreateLiteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CheckLiteSkuNameUnitExistRequest {
  axiosConfig?: AxiosRequestConfig,
  name?: string
   /** 基本单位 */ 
  base_unit_id?: string
}

export interface CheckLiteSkuNameUnitExistResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface UpsertSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 创建SPU, 轻巧版使用的是两层分类 */ 
  create_spu?: boolean
   /** 轻巧版创建订单不需要basic_price */ 
  skip_create_basic_prise?: boolean
   /** 需要处理的目标unitId,不根据改动sku.base_unit_id识别 */ 
  upsert_target_unit_id?: string
}

export interface UpsertSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  new?: boolean
}

export interface UpsertManySkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  items?: UpsertSkuV2Request[]
}

export interface UpsertManySkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  items?: UpsertSkuV2Response[]
}

export interface BatchUpsertSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  items?: UpsertSkuV2Request[]
}

export interface BatchUpsertSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  items?: UpsertSkuV2Response[]
}

export interface CreateManySkuV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** review 复数 */ 
  create_sku_requests?: CreateSkuV2Request[]
}

export interface CreateManySkuV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateSkuByMapV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
  has_purchase_rule?: common.Filters_Bool
}

export interface UpdateSkuByMapV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateSkuLevelV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  sku_level?: Sku_SkuLevels
}

export interface UpdateSkuLevelV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface UpdateSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 组合商品的子商品绑定报价单, 使用增量更新的接口 */ 
  ingredient_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 同步更新组成商品对应的组合商品的可售状态 */ 
  sync_combine_sku_on_sale?: boolean
   /** true:不创建快照 false:创建快照 */ 
  not_create_snap?: boolean
   /** 商品销售库存 */ 
  sku_sale_inventorys?: SkuSaleInventory[]
}

export interface UpdateSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
   /** 只有轻巧版才需要传此数据 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 商品销售库存 */ 
  sku_sale_inventorys?: SkuSaleInventory[]
}

export interface GetSsuSnapRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
  ssu_revision?: string
}

export interface GetSsuSnapResponse {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
}

export interface GetManySsuSnapRequest {
  axiosConfig?: AxiosRequestConfig,
  ssu_snap_ids?: SsuSnapID[]
}

export interface GetManySsuSnapResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是 "{sku_id}_{unit_id}_{ssu_revision}"，例如 "1234111-2-1231111" */ 
  ssu_snap_map?: Ssu
}

export interface GetSkuNameCacheV2Request {
  axiosConfig?: AxiosRequestConfig,
  group_id?: string
  update_time?: string
}

export interface GetSkuNameCacheV2Response {
  axiosConfig?: AxiosRequestConfig,
  update_time?: string
  sku_names?: string
  name_and_alias?: GetSkuNameCacheV2Response_NameAndAlias
}

export interface GetSkuNameCacheV2Response_NameAndAlias {
  axiosConfig?: AxiosRequestConfig,
  sku_name?: string
  alias?: string[]
  base_unit_id?: string
}

export interface GetGroupSkuSimpleInfoCacheRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户ID */ 
  group_id?: string
   /** 客户端侧记录的最近更新时间，如果小于服务端侧的更新时间，则服务端返回最新数据 */ 
  update_time?: string
}

export interface GetGroupSkuSimpleInfoCacheResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 最近更新的时间戳 */ 
  update_time?: string
   /** sku 自定义单位名称 */ 
  sku_custom_unit_names?: string[]
   /** sku名称，包含别名 */ 
  sku_names?: string[]
}

export interface DeleteSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface DeleteSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface RecoverSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface RecoverSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface UpdateDeletedSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
}

export interface UpdateDeletedSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface RecoverBasicPriceBySkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_custom_code?: string[]
  sku_ids?: string[]
  quotation_ids?: string[]
  start_time?: string
  end_time?: string
}

export interface RecoverBasicPriceBySkuResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation_ids?: string[]
}

export interface BatchUpdateSkuSsuRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  supplier_id?: string
}

export interface BatchUpdateSkuSsuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface GetSsuRequest {
  axiosConfig?: AxiosRequestConfig,
  ssu_id?: SsuId
}

export interface GetSsuResponse {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
}

export interface BulkImportSkuByExcelV2Request {
  axiosConfig?: AxiosRequestConfig,
  type?: BulkImportSkuByExcelV2Request_BulkCreateCategorySkuV2Type
  file_url?: string
}

export interface BulkImportSkuByExcelV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkCreateCategorySkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  type?: BulkCreateCategorySkuV2Request_BulkCreateCategorySkuV2Type
  file_url?: string
}

export interface BulkCreateCategorySkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkCreateLiteCategorySkuRequest {
  axiosConfig?: AxiosRequestConfig,
  type?: BulkCreateCategorySkuV2Request_BulkCreateCategorySkuV2Type
  file_url?: string
}

export interface BulkCreateLiteCategorySkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkCreateCategorySkuV2Data {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
   /** 错误数据 */ 
  error_row_list?: Row[]
  bulk_create_category_sku_type?: BulkCreateCategorySkuV2Request_BulkCreateCategorySkuV2Type
  header?: string[]
   /** 导入商品前最大的商品排序 */ 
  last_sort_num?: string
}

export interface BulkUpdateSkuByExcelV2Request {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface BulkUpdateSkuByExcelV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateLiteSkuByExcelRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface BulkUpdateLiteSkuByExcelResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateSkuByExcelV2Data {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_sku_by_excel_v2_req?: BulkUpdateSkuByExcelV2Request
  error_row_list?: Row[]
}

export interface BulkUpdateSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** 修改分类ID */ 
  category_id?: string
   /** 上下架 */ 
  on_sale?: common.Filters_Bool
   /** 删除 */ 
  delete?: boolean
   /** 默认货位 */ 
  shelf_id?: string
   /** 供应商协作模式 */ 
  supplier_cooperate_model_type?: Sku_SupplierCooperateModelType
   /** 同步更新组成商品对应的组合商品的可售状态 */ 
  sync_combine_sku_on_sale?: boolean
   /** 存货科目代码 */ 
  stock_code?: string
   /** 销售收入科目代码 */ 
  sale_income_code?: string
   /** 销售成本科目代码 */ 
  sale_cost_code?: string
   /** 存货类别编码 */ 
  stock_type_code?: string
   /** 存货类别名称 */ 
  stock_type_name?: string
}

export interface BulkUpdateSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateSkuV2Param {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_sku_request?: BulkUpdateSkuV2Request
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的sku_id */ 
  execute_sku_id?: string
}

export interface BulkUpdateBasicPriceV2Param {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_basic_price_request?: BulkUpdateBasicPriceV2Request
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的sku_id */ 
  execute_basic_price_id?: string
}

export interface BulkUpdateCustomerBasicPriceV2Param {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_customer_basic_price_request?: BulkUpdateCustomerBasicPriceV2Request
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的sku_id */ 
  execute_basic_price_id?: string
}

export interface ListSsuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** repeated uint64 category_ids = 1;
repeated uint64 spu_ids      = 2;
repeated uint64 sku_ids      = 3;
string          q            = 4;
common.Filters.Bool       has_image                = 5; // 1：有图片，2：没有图片
common.Filters.Bool      on_sale                  = 6; // 1：在售，2：下架
Sku.SkuType              sku_type                 = 7; //
Sku.NotPackageSubSkuType not_package_sub_sku_type = 8; // 1：在售，2：下架
Sku.PackageSubSkuType    package_sub_sku_type     = 9; // 1：在售，2：下架 */ 
  ssu_ids?: SsuId[]
}

export interface ListSsuByRelationGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  list_ssu_request?: ListSsuRequest
  relation_group_id?: string
}

export interface ListSsuByRelationGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  list_ssu_response?: ListSsuResponse
}

export interface ListSsuResponse {
  axiosConfig?: AxiosRequestConfig,
  ssu_infos?: ListSsuResponse_SsuInfo[]
}

export interface ListSsuResponse_SsuInfo {
  axiosConfig?: AxiosRequestConfig,
  ssu?: Ssu
   /** repeated BasicPrice   basic_prices   = 2; */ 
  sku?: Sku
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
}

export interface CreateRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
  rule_set: RuleSet
   /** TRUE: 发生冲突时，将老规则里冲突的ssu删除，新规则生成成功；FALSE：发生冲突时，返回冲突，新规则生成失败 */ 
  ignore_conflict?: boolean
}

export interface CreateRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_set?: RuleSet
   /** 规则冲突了。ssu在当前报价单下且当前运营时间下,已经有规则。key 是rule_set_id,value 是这个rule_set下冲突的ConflictData */ 
  conflict_data_map?: RuleConflictData
}

export interface UpdateRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
  rule_set: RuleSet
   /** TRUE: 发生冲突时，将老规则里冲突的ssu删除，新规则生成成功；FALSE：发生冲突时，返回冲突，新规则生成失败 */ 
  ignore_conflict?: boolean
}

export interface UpdateRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_set?: RuleSet
   /** 规则冲突了。ssu在当前报价单下且当前运营时间下,已经有规则。key 是rule_set_id,value 是这个rule_set下冲突的ConflictData */ 
  conflict_data_map?: RuleConflictData
}

export interface DeleteRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
  rule_set_id?: string
}

export interface DeleteRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_set?: RuleSet
}

export interface GetRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
  rule_set_id?: string
}

export interface GetRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_set?: RuleSet
}

export interface ListRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 状态 */ 
  state?: RuleSet_State
   /** 搜索协议单名字 */ 
  q?: string
  paging?: common.PagingParams
}

export interface ListRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_set?: RuleSet[]
   /** 报价单map */ 
  quotation_map?: Quotation
  paging?: common.PagingResult
}

export interface CreateUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface CreateUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface UpdateUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface UpdateUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface DeleteUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  unit_id?: string
}

export interface DeleteUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface ListUnitRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 找出这个单位对应type的所有单位。比如吨的type是重量，这个字段传吨的ID，会返回所有重量相关的unit。 */ 
  related_unit_id?: string
   /** 找到此id对应的单位 */ 
  unit_ids?: string[]
}

export interface ListUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  units?: Unit[]
}

export interface ListGroupUnitRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 只返回id大于该值的数据 */ 
  min_id?: string
}

export interface ListGroupUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  units?: Unit[]
}

export interface ListUnitOfGroupRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 不返回系统预设单位 */ 
  without_preset_unit?: boolean
}

export interface ListUnitOfGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  units?: Unit[]
}

export interface InitCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 如果 testing 为 true，则不会真的上传图片，用于单元测试的场景中。 */ 
  testing?: boolean
}

export interface InitCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
  images?: CategoryImage[]
}

export interface GetFilterSkuInCustomerQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户id */ 
  customer_id?: string
   /** 商品信息 */ 
  sku_info?: FilterSkuInfo[]
   /** 收货时间 */ 
  receive_time?: string
}

export interface GetFilterSkuInCustomerQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 商品信息 */ 
  sku_info?: FilterSkuInfo[]
   /** 在当前的收货时间客户是否有正在进行中报价单 */ 
  has_valid_quotation?: boolean
}

export interface GetQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
  filter_unvet?: boolean
}

export interface GetQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  customer_ids?: string[]
  menu_periods?: MenuPeriod[]
   /** 子报价单数量 */ 
  child_quotation_quantity?: string
   /** 客户协议单的报价单数量 */ 
  customer_quotation_quantity?: string
}

export interface GetDefaultQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetDefaultQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface CreateQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation: Quotation
   /** todo 待删除 */ 
  customer_ids?: string[]
}

export interface CreateQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
   /** todo 待删除 */ 
  customer_ids?: string[]
}

export interface CreateQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  quotation: Quotation
   /** 是否是复制 */ 
  is_copy?: boolean
}

export interface CreateQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface UpdateQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation: Quotation
}

export interface UpdateQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface UpdateQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  quotation: Quotation
}

export interface UpdateQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface BulkUpdateQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  quotation_status?: Quotation_Status
  delete?: boolean
}

export interface BulkUpdateQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateQuotationV2Param {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_quotation_request?: BulkUpdateQuotationV2Request
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的报价单ID */ 
  execute_quotation_id?: string
}

export interface BulkUnsetCustomerQuotationRelationV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_customer_request?: enterprise.ListCustomerRequest
}

export interface BulkUnsetCustomerQuotationRelationV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUnsetCustomerToCustomerQuotationRelationV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_customer_request?: enterprise.ListCustomerRequest
}

export interface BulkUnsetCustomerToCustomerQuotationRelationV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  basic_price_id?: BasicPriceId[]
  on_shelf?: common.Filters_Bool
  delete?: boolean
   /** 同步更新组成商品对应的组合商品上下架状态 */ 
  sync_combine_sku_on_shelf?: boolean
}

export interface BulkUpdateBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateCustomerBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  basic_price_id?: BasicPriceId[]
  delete?: boolean
   /** 客户协议价更新计算规则 */ 
  price_calculate_rule?: BasicPriceItem_PriceCalculateRule
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
}

export interface BulkUpdateCustomerBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CopyPeriodQuotationV2Param {
  axiosConfig?: AxiosRequestConfig,
  copy_quotation_request?: CopyPeriodQuotationV2Request
   /** 需要被复制的周期报价单 */ 
  copy_quotations?: Quotation[]
   /** 当前执行到的sku_id */ 
  execute_basic_price_id?: string
   /** 当前执行到的商品类型 */ 
  sku_type?: Sku_SkuType
   /** 已经复制的basic条数 */ 
  copy_basic_price_num?: string
   /** 新的报价单id =》 需要复制的报价单信息 */ 
  source_quotation?: CopySourceQuotationInfo
}

export interface CopyPeriodQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  source_quotation_id?: string
  quotation?: Quotation
}

export interface CopyPeriodQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CopyQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  source_quotation_id?: string
  quotation?: Quotation
}

export interface CopyQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CopyQuotationV2Param {
  axiosConfig?: AxiosRequestConfig,
  copy_quotation_request?: CopyQuotationV2Request
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的sku_id */ 
  execute_basic_price_id?: string
   /** 当前执行到的商品类型 */ 
  sku_type?: Sku_SkuType
}

export interface DeleteQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
}

export interface DeleteQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface DeleteQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
}

export interface DeleteQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface DeleteLiteQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
}

export interface DeleteLiteQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface BindMaskSkuToCustomerQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
   /** 需要被屏蔽的商品Sku_id */ 
  mask_sku_ids?: string[]
}

export interface BindMaskSkuToCustomerQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UnBindMaskSkuToCustomerQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
   /** 需要解除屏蔽的商品Sku_id */ 
  unmask_sku_ids?: string[]
}

export interface UnBindMaskSkuToCustomerQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetFilterCustomerIdsRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户协议报价单 */ 
  quotation_id?: string
}

export interface GetFilterCustomerIdsResponse {
  axiosConfig?: AxiosRequestConfig,
  exclude_customer_ids?: string[]
}

export interface BulkUpdateMaskSkuToCustomerQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  unmask_sku_ids?: string[]
  delete?: boolean
}

export interface BulkUpdateMaskSkuToCustomerQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkUpdateMaskSkuToCustomerQuotationParam {
  axiosConfig?: AxiosRequestConfig,
  bulk_update_mask_sku_to_customer_quotation_request?: BulkUpdateMaskSkuToCustomerQuotationRequest
  error_async_results?: ErrorAsyncResult[]
   /** 当前执行到的sku_id */ 
  execute_sku_id?: string
}

export interface ListQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单对内名称 */ 
  inner_name?: string
   /** 是否激活 */ 
  is_active?: common.Filters_Bool
   /** bool                need_ssu_on_sale_num = 3; //需要在售商品数 */ 
  paging: common.PagingParams
  type?: Quotation_Type
  quotation_id?: string
   /** 是否默认报价单 */ 
  is_default?: common.Filters_Bool
  time_type?: ListQuotationRequest_TimeType
  serial_no?: string
  statuses?: Quotation_Status[]
  supplier_ids?: string[]
   /** 协议价格开始时间 */ 
  start_time?: string
   /** 协议价格结束时间 */ 
  end_time?: string
   /** 采购员id */ 
  purchase_user_id?: string
  quotation_ids?: string[]
}

export interface ListQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotations?: Quotation[]
   /** map<uint64, int32>                ssu_on_sale_num_map = 2; // key:quotation_id, value:在售商品数量 */ 
  paging?: common.PagingResult
  supplier_relation?: enterprise.Supplier
  group_users?: enterprise.GroupUser
}

export interface ListQuotationV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** 是否需要精确计算报价单中关联的有效客户 */ 
  filter_unvet?: boolean
  paging: common.PagingParams
   /** field 使用 QuotationSortField */ 
  sort_by?: common.SortBy[]
}

export interface ListQuotationV2Response {
  axiosConfig?: AxiosRequestConfig,
  quotations?: Quotation[]
  paging?: common.PagingResult
  supplier_relation?: enterprise.Supplier
  group_users?: enterprise.GroupUser
}

export interface GetValidQuotationByCustomerIdRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户 */ 
  customer_id?: string
   /** 生效的时刻 */ 
  period_time?: string
   /** 是否需要生效时间范围 */ 
  need_valid_time_range?: boolean
}

export interface GetValidQuotationByCustomerIdResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 客户绑定的是周期报价单还是子报价单 */ 
  quotation_type?: Quotation_Type
   /** 如果是周期报价单的话，生效时间类型 */ 
  valid_time_type?: Quotation_ValidTimeType
   /** 这个客户在那个时间点是否有生效的报价单 */ 
  has_valid_quotation?: boolean
   /** 生效报价单的quotation_id:周期子报价单/普通报价单； has_valid_quotation = true:valid_quotation_id > 0 */ 
  valid_quotation_id?: string
  valid_time_ranges?: GetValidQuotationByCustomerIdResponse_ValidTimeRange[]
}

export interface GetValidQuotationByCustomerIdResponse_ValidTimeRange {
  axiosConfig?: AxiosRequestConfig,
   /** 开始时间 */ 
  begin_time?: string
   /** 结束时间 */ 
  end_time?: string
}

export interface ListQuotationForBindingSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging: common.PagingParams
   /** field 使用 QuotationSortField */ 
  sort_by?: common.SortBy[]
}

export interface ListQuotationForBindingSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  quotations?: Quotation[]
  bound_quotation_ids?: string[]
  paging?: common.PagingResult
  parent_quotations_map?: Quotation
}

export interface ListQuotationForBatchUpdateBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging: common.PagingParams
}

export interface ListQuotationForBatchUpdateBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 返回聚合的报价单列表 */ 
  quotations?: Quotation[]
   /** 返回父报价单信息 */ 
  parent_quotations_map?: Quotation
  paging?: common.PagingResult
}

export interface ListQuotationForHistoryBasicPricesRequest {
  axiosConfig?: AxiosRequestConfig,
   /** sku_id; */ 
  sku_id?: string
   /** 下单单位与商品相关联 */ 
  order_unit_id?: string
   /** 查询 开始时间 */ 
  basic_price_start_time?: string
   /** 查询 结束时间 */ 
  basic_price_end_time?: string
}

export interface ListQuotationForHistoryBasicPricesResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 精确搜索对应的商品，返回商品信息 */ 
  sku_info?: Sku
   /** 商品历史报价使用过的下单单位 */ 
  order_unit_ids?: string[]
   /** key是order_unit_ids 中对应的order_unit_id */ 
  quotations_map?: ListQuotationForHistoryBasicPricesResponse_IvalidQuotations
}

export interface ListQuotationForHistoryBasicPricesResponse_IvalidQuotations {
  axiosConfig?: AxiosRequestConfig,
   /** 当前生效的报价单及生效的周期子报价单 */ 
  quotations?: Quotation[]
}

export interface GetManyQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_ids?: string[]
}

export interface GetManyQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation_map?: Quotation
  suppliers?: enterprise.Supplier
}

export interface GetManyQuotationByNameRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_inner_names?: string[]
}

export interface GetManyQuotationByNameResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation_ids?: string[]
}

export interface SetCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  relations?: RelationElement[]
}

export interface SetCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SetLiteDefaultQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
}

export interface SetLiteDefaultQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UnsetCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  relations?: RelationElement[]
}

export interface UnsetCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeleteCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
}

export interface DeleteCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateQuotationSortNumRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
   /** 操作类型 */ 
  operation_type?: UpdateQuotationSortNumRequest_OperationType
}

export interface UpdateQuotationSortNumResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetCustomerIdsByQuotationIdRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
}

export interface GetCustomerIdsByQuotationIdResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
}

export interface GetCustomerIdsByQuotationIdsRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_ids?: string[]
}

export interface GetCustomerIdsByQuotationIdsResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation_id_customer_ids_map?: GetCustomerIdsByQuotationIdsResponse_CustomerIds
  customer_map?: enterprise.Customer
}

export interface GetCustomerIdsByQuotationIdsResponse_CustomerIds {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
}

export interface GetQuotationByCustomerIdRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  station_id?: string
}

export interface GetQuotationByCustomerIdResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation[]
  menu_periods?: MenuPeriod[]
}

export interface GetQuotationIdsByCustomerIdsRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
}

export interface GetQuotationIdsByCustomerIdsResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key  是 CustomerId；value 是 QuotationIds */ 
  relation_map?: common.Uint64Set
   /** key 是 QuotationId */ 
  quotation_map?: Quotation
}

export interface GetCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 如果不为空，则返回和这些 ID 有关的所有关系。quotation_ids 和 customer_ids 两个参数至少传一个。 */ 
  quotation_ids?: string[]
   /** 如果不为空，则返回和这些 ID 有关的所有关系。quotation_ids 和 customer_ids 两个参数至少传一个。 */ 
  customer_ids?: string[]
  quotation_type?: Quotation_Type
  bind_quotation?: common.Filters_Bool
}

export interface GetCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  relations?: RelationElement[]
}

export interface SetBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  menu_detail?: MenuDetail
}

export interface SetBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface SetBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 子商品规格未绑定报价单，需要绑定报价单 */ 
  ingredient_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 同步更新组成商品对应的组合商品上下架状态 */ 
  sync_combine_sku_on_shelf?: boolean
   /** 下单时将非报价单商品反绑到报价单时的收货时间 */ 
  receive_time?: string
}

export interface SetBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeltaUpdateBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 子商品规格未绑定报价单，需要绑定报价单 */ 
  ingredient_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 同步更新组成商品对应的组合商品上下架状态 */ 
  sync_combine_sku_on_shelf?: boolean
   /** 下单时将非报价单商品的单位反绑到报价单时的收货时间 */ 
  receive_time?: string
}

export interface DeltaUpdateBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeltaDeleteBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** 此时传入的需删除的指定下单单位的item */ 
  basic_price_id?: BasicPriceId
}

export interface DeltaDeleteBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface SetSpecialBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  special_basic_price_infos?: SetSpecialBasicPriceV2Request_SpecialBasicPriceInfo[]
   /** 是否禁止默认报价单同步协议价 */ 
  is_forbid_sync_default_quotation_price?: boolean
}

export interface SetSpecialBasicPriceV2Request_SpecialBasicPriceInfo {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface SetSpecialBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateLiteBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  special_basic_price_infos?: UpdateLiteBasicPriceRequest_SpecialBasicPriceInfo[]
   /** 是否禁止默认报价单同步协议价 */ 
  is_forbid_sync_default_quotation_price?: boolean
}

export interface UpdateLiteBasicPriceRequest_SpecialBasicPriceInfo {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface UpdateLiteBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetManySkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface GetManySkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是sku_id-order_unit_id，value是销售库存 */ 
  sku_sale_inventory_map?: SkuSaleInventory
}

export interface MultiReplaceSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventorys?: SkuSaleInventory[]
  sku_info?: Sku
}

export interface MultiReplaceSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface MultiDeltaSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventorys?: SkuSaleInventory[]
  sku_info?: Sku
}

export interface MultiDeltaSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface AddUnitToBondQuotationsRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 商品ID */ 
  sku_id?: string
   /** 新增的单位们 */ 
  new_unit_ids?: string[]
}

export interface AddUnitToBondQuotationsResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CalBasicPriceV2ByPricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CalBasicPriceV2ByPricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CalculatePricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  basic_price_item?: BasicPriceItem
}

export interface CalculatePricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
  result?: string
}

export interface BatchPresetPricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
  request?: DeltaUpdateBasicPriceV2ByPricingFormulaRequest
}

export interface BatchPresetPricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BatchCalculatePricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
  request?: DeltaUpdateBasicPriceV2ByPricingFormulaRequest
}

export interface BatchCalculatePricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ListSpecialBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** 客户ID */ 
  customer_id?: string
   /** sku编码，sku名模糊搜索 */ 
  search_text?: string
  category_id?: string
  paging: common.PagingParams
}

export interface ListSpecialBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, value 是sku。有sku 和子商品 */ 
  sku_map?: Sku
   /** key 是报价单id, value 是绑定本报价单的customer_id列表 */ 
  customer_id_map?: Uint64List
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
}

export interface ListErrSpecialBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  task_id?: string
}

export interface ListErrSpecialBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  err_list?: ImportSpecialBasicPriceData_ImportSpecialBasicPriceInfo[]
}

export interface ListSimpleBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_ids?: string[]
}

export interface ListSimpleBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface ListBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging?: common.PagingParams
  request_data?: number
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 不包括此basicPriceId */ 
  without_basic_price_id?: string
  group_id?: string
  station_id?: string
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 是否需要用户的折扣率 */ 
  need_customer_rate?: boolean
  sort_by?: common.SortBy[]
}

export interface ListBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
   /** 全部报价 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, value 是sku。有sku 和子商品 */ 
  sku_map?: Sku
   /** key 是报价单id, value 是绑定本报价单的customer_id列表 */ 
  customer_id_map?: Uint64List
   /** key 是"sku_id-quotation_id", value是basic_price，子商品的报价 */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
   /** key 是供应商id, value是供应商信息 */ 
  supplier_map?: enterprise.Supplier
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
  group_user_map?: enterprise.GroupUser
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
   /** 协议单关联的报价单中的价格，用于页面上新增条目 */ 
  parent_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface ListBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging?: common.PagingParams
  request_data?: number
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 不包括此basicPriceId */ 
  without_basic_price_id?: string
  group_id?: string
  station_id?: string
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 是否需要用户的折扣率 */ 
  need_customer_rate?: boolean
  sort_by?: common.SortBy[]
}

export interface ListBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, value 是sku。有sku 和子商品 */ 
  sku_map?: Sku
   /** key 是报价单id, value 是绑定本报价单的customer_id列表 */ 
  customer_id_map?: Uint64List
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
   /** 协议单关联的报价单中的价格，用于页面上新增条目 */ 
  parent_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface ListLiteBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging?: common.PagingParams
  request_data?: number
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 不包括此basicPriceId */ 
  without_basic_price_id?: string
  group_id?: string
  station_id?: string
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 是否需要用户的折扣率 */ 
  need_customer_rate?: boolean
  sort_by?: common.SortBy[]
}

export interface ListLiteBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, value 是sku。有sku 和子商品 */ 
  sku_map?: Sku
   /** key 是报价单id, value 是绑定本报价单的customer_id列表 */ 
  customer_id_map?: Uint64List
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
   /** key 是供应商id, value是供应商信息 */ 
  supplier_map?: enterprise.Supplier
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
  group_user_map?: enterprise.GroupUser
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
   /** 协议单关联的报价单中的价格，用于页面上新增条目 */ 
  parent_basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key是quotation_id-sku_id-unit_id-order_unit_id, value是参考价 */ 
  reference_price_map?: GetSkuReferencePricesResponse_ReferencePrices
}

export interface ListHistoryBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging?: common.PagingParams
  request_data?: number
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 不包括此basicPriceId */ 
  without_basic_price_id?: string
  group_id?: string
  station_id?: string
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
}

export interface ListHistoryBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, value 是sku。有sku 和子商品 */ 
  sku_map?: Sku
   /** key 是报价单id, value 是绑定本报价单的customer_id列表 */ 
  customer_id_map?: Uint64List
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  paging?: common.PagingResult
   /** key 是供应商id, value是供应商信息 */ 
  supplier_map?: enterprise.Supplier
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
  group_user_map?: enterprise.GroupUser
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
}

export interface ListSkuHistoryBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_unit_filter?: ListSkuHistoryBasicPriceRequest_Filter[]
   /** 查询 开始时间 */ 
  start_time?: string
   /** 查询 结束时间 */ 
  end_time?: string
}

export interface ListSkuHistoryBasicPriceRequest_Filter {
  axiosConfig?: AxiosRequestConfig,
   /** 商品id */ 
  sku_id?: string
   /** 报价单位 fee_unit_id.unit_id */ 
  unit_id?: string
   /** 下单单位 order_unit_id */ 
  order_unit_id?: string
   /** 报价单id。1、普通报价单传报价单id；2、周期报价单传入周期子报价单id */ 
  quotation_id?: string
   /** 报价单类型 */ 
  quotation_type?: Quotation_Type
}

export interface ListSkuHistoryBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是quotation_id-sku_id-unit_id-order_unit_id, value是参考价 */ 
  reference_price_map?: ListSkuHistoryBasicPriceResponse_ReferencePrices
}

export interface ListSkuHistoryBasicPriceResponse_QuotationReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** 普通报价单名/周期子报价单的名字格式: xx报价单(2022-xx-xx~2022-xx-xx); */ 
  quotation_name?: string
   /** 最近报价时间 */ 
  time?: string
   /** 原始数据报价 */ 
  prices?: UnitValue
   /** 报价单id。1、普通报价单=报价单id；2、周期报价单=子报价单id */ 
  quotation_id?: string
   /** 转换为定价单位后报价 */ 
  to_fee_unit_price?: UnitValue
   /** 是否是时价 */ 
  current_price?: boolean
}

export interface ListSkuHistoryBasicPriceResponse_ReferencePrices {
  axiosConfig?: AxiosRequestConfig,
   /** 历史报价 */ 
  quotation_reference_prices?: GetSkuReferencePricesResponse_QuotationReferencePrice[]
}

export interface ListHistoryBasicPriceByCustomerIDRequest {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
  paging?: common.PagingParams
}

export interface ListHistoryBasicPriceByCustomerIDResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
}

export interface GetManyQuotationBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  supplier_skus?: GetManyQuotationBasicPriceV2Request_SupplierSku[]
}

export interface GetManyQuotationBasicPriceV2Request_SupplierSku {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商ID */ 
  supplier_id?: string
   /** 商品ID */ 
  sku_id?: string
   /** 采购需要选择的单位 */ 
  unit_id?: string
}

export interface GetManyQuotationBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
   /** key 是"supplier_id_sku_id_unit_id",三个字段的值用"_"拼接，value是basic_price */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface ListBasicPriceForBatchUpdateRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
  paging?: common.PagingParams
}

export interface ListBasicPriceForBatchUpdateResponse {
  axiosConfig?: AxiosRequestConfig,
  multi_quotation_basic_price_items?: MultiQuotationBasicPriceItem[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
  paging?: common.PagingResult
}

export interface UpdateBasicPriceBySkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 内部走增量更新的接口，对应下单单位的条目有修改则修改，无此下单单位则新增【前端暂无新增条目的需求】 */ 
  multi_quotation_basic_price_items?: MultiQuotationBasicPriceItem[]
}

export interface UpdateBasicPriceBySkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateBasicPriceItemByPricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
  multi_quotation_basic_price_items?: MultiQuotationBasicPriceItem[]
   /** 定价公式类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 为false则basicPriceitemInfo长度必不为0 */ 
  chosen_all?: boolean
   /** 定价公式 */ 
  formula?: string
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
}

export interface UpdateBasicPriceItemByPricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListBasicPriceByCustomerIDRequest {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 需要默认报价单的商品信息 */ 
  need_default_quotation_data?: boolean
   /** 只查出原报价单的条目，不叠加客户协议价的结果 */ 
  only_origin_quotation_data?: boolean
  paging?: common.PagingParams
}

export interface ListBasicPriceByCustomerIDResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** 已经被屏蔽的sku */ 
  exclude_sku_ids?: string[]
   /** customer_id-sku_name-unit_name: string */ 
  customer_price_info?: string
   /** 自动获取最近价格 */ 
  auto_get_recent_price?: boolean
}

export interface ListLiteBasicPriceByCustomerIDRequest {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 需要默认报价单的商品信息 */ 
  need_default_quotation_data?: boolean
   /** 需要检测自动获取最近价格开关 */ 
  need_check_auto_price_config?: boolean
  paging?: common.PagingParams
}

export interface ListLiteBasicPriceByCustomerIDResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** 已经被屏蔽的sku */ 
  exclude_sku_ids?: string[]
   /** customer_id-sku_name-unit_name: string */ 
  customer_price_info?: string
   /** sku_name-unit_name: string */ 
  sku_price_info?: string
   /** 自动获取最近价格 */ 
  auto_get_recent_price?: boolean
}

export interface ListBasicPriceDetailByCustomerIDRequest {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 需要默认报价单的商品信息 */ 
  need_default_quotation_data?: boolean
   /** 只刷新完整缓存 */ 
  only_refresh_cache?: boolean
   /** 只查出原报价单的条目，不叠加客户协议价的结果 */ 
  only_origin_quotation_data?: boolean
  paging?: common.PagingParams
}

export interface ListBasicPriceDetailByCustomerIDResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** 已经被屏蔽的sku */ 
  exclude_sku_ids?: string[]
}

export interface ListBasicPriceDetailByCustomerIDForSearchRequest {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 需要默认报价单的商品信息 */ 
  need_default_quotation_data?: boolean
   /** 只刷新完整缓存 */ 
  only_refresh_cache?: boolean
  paging?: common.PagingParams
}

export interface ListBasicPriceDetailByCustomerIDForSearchResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** 已经被屏蔽的sku */ 
  exclude_sku_ids?: string[]
   /** 商品排序，距离最短（index升序）、下单频次（order_count倒序）、搜索频次（search_count倒序）、商品自身排序（sort_num倒序） */ 
  sku_cache_sorts?: SkuCacheSort[]
}

export interface ListSkuAndBasicPriceDetailForSearchRequest {
  axiosConfig?: AxiosRequestConfig,
  filter_params?: FilterParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
  paging?: common.PagingParams
}

export interface ListSkuAndBasicPriceDetailForSearchResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value 是报价单 */ 
  quotation_map?: Quotation
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是报价单id, value是分类 */ 
  category_map?: CategoryTreeCache_CategoryInfo
   /** key 是sku_id, value 是客户商品属性别名 */ 
  config_info_map?: enterprise.ConfigInfo
  paging?: common.PagingResult
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** 已经被屏蔽的sku */ 
  exclude_sku_ids?: string[]
   /** 商品排序，下单频次（order_count倒序）、距离最短（index升序）、搜索频次（search_count倒序）、商品自身排序（sort_num倒序） */ 
  sku_cache_sorts?: SkuCacheSort[]
  skus?: Sku[]
}

export interface ListFormulaFromSkuBindingQuotationsRequest {
  axiosConfig?: AxiosRequestConfig,
  list_sku_v2_request?: ListSkuV2Request
}

export interface ListFormulaFromSkuBindingQuotationsResponse {
  axiosConfig?: AxiosRequestConfig,
  formula_infos?: ListFormulaFromSkuBindingQuotationsResponse_FormulaInfo[]
}

export interface ListFormulaFromSkuBindingQuotationsResponse_FormulaInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  sku_name?: string
  unit_name?: string
  formula?: string
}

export interface ExportBasicPriceByCustomerIdRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 当前前端只传「customer_id」 */ 
  filter_params?: FilterParams
}

export interface ExportBasicPriceByCustomerIdResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportSpecialBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户Id */ 
  customer_id?: string
}

export interface ExportSpecialBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ImportSpecialBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  file_url?: string
  special_basic_price_info?: ImportSpecialBasicPriceData_SetSpecialBasicPriceInfo[]
  quotation_id?: string
}

export interface ImportSpecialBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface InitMenuInfoRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface InitMenuInfoResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface AsyncDeleteManySpecialBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_special_basic_price_v2_request: ListSpecialBasicPriceV2Request
}

export interface AsyncDeleteManySpecialBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface DeleteManyBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  basic_price_ids?: BasicPriceId[]
}

export interface DeleteManyBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: BasicPriceId[]
}

export interface ListMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 多站点 */ 
  station_ids?: string[]
  paging: common.PagingParams
}

export interface ListMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period?: MenuPeriod[]
  paging?: common.PagingResult
}

export interface GetManyMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_ids?: string[]
}

export interface GetManyMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface GetManyMenuPeriodGroupByNameRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_names?: string[]
}

export interface GetManyMenuPeriodGroupByNameResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是餐次名称 */ 
  menu_period_group?: MenuPeriodGroup
}

export interface CreateMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period?: MenuPeriod[]
}

export interface CreateMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period?: MenuPeriod[]
}

export interface UpdateMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period?: MenuPeriod[]
}

export interface UpdateMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period?: MenuPeriod[]
}

export interface DeleteMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  service_period_ids?: string[]
  menu_period_group_ids?: string[]
}

export interface DeleteMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 情况1：menu_id ，menu_from_time，menu_to_time
情况2：menu_id ，menu_time
情况3：menu_id, menu_detail_ids
情况4：menu_detail_ids */ 
  quotation_id?: string
  menu_from_time?: string
  menu_to_time?: string
  menu_detail_ids?: string[]
  menu_time?: string[]
  state?: MenuDetail_State
   /** 需要参考成本价格 */ 
  need_reference_price?: boolean
}

export interface ListMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是 sku_id */ 
  sku_map?: Sku
   /** key 是子商品 sku_id */ 
  ingredient_map?: Sku
   /** key 是 unit_id */ 
  unit_map?: Unit
   /** 对应需要的参考成本 */ 
  reference_price_map?: UnitValue
}

export interface ListMenuDetailV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** 情况1：menu_id ，menu_from_time，menu_to_time
情况2：menu_id ，menu_time
情况3：menu_id, menu_detail_ids
情况4：menu_detail_ids */ 
  quotation_id?: string
  menu_from_time?: string
  menu_to_time?: string
  menu_detail_ids?: string[]
  menu_time?: string[]
  state?: MenuDetail_State
   /** 需要参考成本价格 */ 
  need_reference_price?: boolean
}

export interface ListMenuDetailV2Response {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
  quotation?: Quotation
   /** 价格 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是 */ 
  category_map?: Category
   /** key 是 sku_id，组合商品+原料 */ 
  sku_map?: Sku
   /** key 是 sku_id */ 
  reference_price_map?: UnitValue
}

export interface CreateMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface CreateMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface UpdateMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface UpdateMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface CopyBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
  copy_start_time?: string
  copy_end_time?: string
  paste_start_time?: string
  menu_period_group_ids?: string[]
}

export interface CopyBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  list_menu_detail_request?: ListMenuDetailRequest
}

export interface ExportMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ImportMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  quotation_id?: string
}

export interface ImportMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CreateFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface CreateFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface UpdateFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface UpdateFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface DeleteFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite_id?: string
  customer_id?: string
}

export interface DeleteFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface ListFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
   /** enum RequestData */ 
  request_data?: number
   /** 指门店的id */ 
  customer_id?: string
}

export interface ListFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorites?: Favorite[]
   /** key 是收藏夹ID，值是收藏夹下的商品数量 */ 
  favorite_ssu_num_map?: string
}

export interface GetFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite_id?: string
}

export interface CreateManyFavoriteSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_list?: FavoriteSku[]
  customer_id?: string
}

export interface CreateManyFavoriteSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_list?: FavoriteSku[]
}

export interface DeleteManyFavoriteSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_ids?: string[]
}

export interface DeleteManyFavoriteSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_ids?: string[]
}

export interface ListFavoriteSkuV2Request {
  axiosConfig?: AxiosRequestConfig,
  request_data?: number
  favorite_id?: string
  paging: common.PagingParams
   /** 需要客户属性数据 */ 
  need_product_config_data?: boolean
   /** 子店customer_id */ 
  customer_id?: string
}

export interface ListFavoriteSkuV2Response {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  sku_map?: Sku
   /** key 是sku_id,  value 是favorite_sku_list */ 
  favorite_sku_map?: FavoriteSkuList
  paging?: common.PagingResult
   /** key 是sku_id,  value 是客户商品属性 */ 
  config_info_map?: enterprise.ConfigInfo
   /** key 是"sku_id-order_unit_id",value是商品对应的销售库存 */ 
  sku_sale_inventory?: SkuSaleInventory
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface GetManyBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_keys?: BasicPriceId[]
  need_deleted?: boolean
}

export interface GetManyBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是request里面的字段按顺序拼起来的字符串 */ 
  basic_price_map?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface GetManyFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  finance_category_ids?: string[]
}

export interface GetManyFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_categorys?: FinanceCategory
}

export interface CreateBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** 采购商的groupid */ 
  customer_group_id?: string
   /** 采购商的 */ 
  customer_id?: string
}

export interface CreateBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface ListMarketSsuRequest {
  axiosConfig?: AxiosRequestConfig,
  ssu_ids?: SsuId[]
  paging: common.PagingParams
}

export interface ListMarketSsuResponse {
  axiosConfig?: AxiosRequestConfig,
  ssus?: merchandise.Ssu[]
  paging?: common.PagingResult
}

export interface CreateReleationCustomerAndSupplierRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 采购商的groupid */ 
  customer_group_id?: string
   /** 采购商的 */ 
  customer_id?: string
}

export interface CreateReleationCustomerAndSupplierResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ImportQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface ImportQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
}

export interface ExportQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ImportQuotationCreateBySsuRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  supplier_ids?: string[]
}

export interface ImportQuotationCreateBySsuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ImportQuotationChangeBySsuRequest {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
}

export interface ImportQuotationChangeBySsuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ExportQuotationBySsuRequest {
  axiosConfig?: AxiosRequestConfig,
  request?: ListBasicPriceRequest
}

export interface ExportQuotationBySsuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CreateQuotationBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** key格式为  供应商id:开始时间:结束时间 */ 
  sheets?: CreateQuotationBasicPriceRequest_ProtocolSheet
}

export interface CreateQuotationBasicPriceRequest_ProtocolSheet {
  axiosConfig?: AxiosRequestConfig,
  quotation: Quotation
   /** repeated BasicPrice basic_prices = 2 [ (validate.rules).repeated = {min_items : 0, max_items : 400} ]; */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CreateQuotationBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key格式为  供应商id:开始时间:结束时间 */ 
  sheets?: CreateQuotationBasicPriceRequest_ProtocolSheet
}

export interface CreateQuotationBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** key格式为  供应商id:开始时间:结束时间 */ 
  sheets?: CreateQuotationBasicPriceRequest_ProtocolSheet
}

export interface CreateQuotationBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
   /** key格式为  供应商id:开始时间:结束时间 */ 
  sheets?: CreateQuotationBasicPriceRequest_ProtocolSheet
   /** 是否存在冲突 */ 
  has_conflict?: boolean
   /** 冲突的协议单单号 */ 
  conflict_quotation_serial_nos?: string[]
   /** 冲突的sheet的行号 */ 
  conflict_ids?: string[]
}

export interface UpdateQuotationBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
   /** repeated BasicPrice basic_prices = 2 [ (validate.rules).repeated = {min_items : 0, max_items : 400} ]; */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 只会创建或修改,不会删除 */ 
  sync_update_only?: boolean
}

export interface UpdateQuotationBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface UpdateQuotationBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
   /** repeated BasicPrice basic_prices = 2 [ (validate.rules).repeated = {min_items : 0, max_items : 400} ]; */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 只会创建或修改,不会删除 */ 
  sync_update_only?: boolean
}

export interface UpdateQuotationBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 是否存在冲突 */ 
  has_conflict?: boolean
   /** 冲突的协议单单号 */ 
  conflict_quotation_serial_nos?: string[]
   /** 冲突的sheet的行号 */ 
  conflict_ids?: string[]
}

export interface ListBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单生效时间 */ 
  start_time?: string
  end_time?: string
   /** 自已定编码与商品名 */ 
  sku_q?: string
   /** 报价单状态 */ 
  statuses?: Quotation_Status[]
   /** spu id */ 
  spu_ids?: string[]
   /** 供应商 */ 
  supplier_ids?: string[]
  ssu_ids?: SsuId[]
  paging: common.PagingParams
   /** 分类id */ 
  category_id?: string
   /** 价格类型 */ 
  price_type?: Quotation_Type
   /** 协议单id */ 
  quotation_ids?: string[]
   /** 拉取报价的采购商group ID 供应商侧需要填写对应的供应商group */ 
  customer_group_id?: string
   /** 价格创建开始时间 */ 
  basic_price_start_time?: string
   /** 价格创建结束时间 */ 
  basic_price_end_time?: string
   /** 拉取历史报价 */ 
  need_snapshot_basic_price?: boolean
   /** 拉取的历史报价的key值 */ 
  snap_shot_basic_price?: ListBasicPriceRequest_SnapshotBasicPrice
   /** 过滤收藏的供应商的报价 */ 
  is_favorite_group?: boolean
   /** 统计今日报价数量 */ 
  need_count_today_offer?: boolean
   /** 拉取被删除的ssu */ 
  need_delete_ssu?: boolean
   /** 采购员拉取报价 */ 
  purchase_user?: boolean
   /** 询价来源 */ 
  source?: BasicPrice_Source
   /** todo 合代码 排序字段 */ 
  sort_by?: common.SortBy[]
}

export interface ListBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 拉取报价商品不会重复 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  skus?: Sku[]
  quotation_relation?: Quotation
  supplier_relation?: enterprise.Supplier
  category_map?: Category
  group_user_relation?: enterprise.GroupUser
   /** sku id的历史报价 拉取列表则使用sku unit 拉取单个商品则为报价单ID */ 
  basic_prices_snapshot?: ListBasicPriceResponse_Price
   /** 今日报价次数 key 为quotation_id 值为次数 */ 
  count_today_offer?: string
  paging?: common.PagingResult
}

export interface ListBasicPriceResponse_Price {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface GetBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  supplier_id?: string
  ssu_id?: SsuId
}

export interface GetBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key skuid:unitid */ 
  ssu_info_relation?: ListSsuResponse_SsuInfo
   /** sku:unit */ 
  supplier_relation?: enterprise.Supplier
}

export interface GetImportQuotationBasicPriceTemplateRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 暂时忽略 */ 
  supplier_id?: string
   /** 暂时忽略 */ 
  supplier_ids?: string[]
   /** 模版类型 */ 
  template?: GetImportQuotationBasicPriceTemplateRequest_Template
}

export interface GetImportQuotationBasicPriceTemplateResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface GetBasicPriceSnapshotRequest {
  axiosConfig?: AxiosRequestConfig,
  ssu_ids?: merchandise.SsuId[]
   /** 拉取报价的采购商group ID */ 
  customer_group_id?: string
   /** 今日有报价 */ 
  today_has_offer?: boolean
   /** 收藏 */ 
  favorite_group?: boolean
  paging: common.PagingParams
}

export interface GetBasicPriceSnapshotResponse {
  axiosConfig?: AxiosRequestConfig,
   /** ssuid的历史报价 */ 
  basic_prices_snapshot?: GetBasicPriceSnapshotResponse_Price
   /** ssu */ 
  ssus?: Ssu[]
  paging?: common.PagingResult
}

export interface GetBasicPriceSnapshotResponse_Price {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface CreateBasicPriceSnapshotRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  customer_group_id?: string
}

export interface CreateBasicPriceSnapshotResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface InitMerchandiseRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 传group_id后，会把这些group_id初始化全量同步好；不传group_id的话，后台会增量同步所有group的数据 */ 
  group_ids?: string[]
}

export interface InitMerchandiseResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface CreateManySkuSyncFromYMTRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
}

export interface CreateManySkuSyncFromYMTResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CreateMerchandiseCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 传group_id后，会把这些group_id初始化全量同步好；不传group_id的话，后台会增量同步所有group的数据 */ 
  group_ids?: string[]
}

export interface CreateMerchandiseCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSpuRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSpuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSkuRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSsuRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanSsuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
}

export interface CleanMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CreateBasicPriceByPurchaseUserRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 价格列表 */ 
  price_items?: CreateBasicPriceByPurchaseUserRequest_PriceItem[]
}

export interface CreateBasicPriceByPurchaseUserRequest_PriceItem {
  axiosConfig?: AxiosRequestConfig,
   /** 规格SSu id */ 
  ssu_id?: string
   /** sku id */ 
  sku_id?: string
   /** 规格ID */ 
  unit_id?: string
   /** 价格 todo 前端 修改 */ 
  unit_price?: UnitValue
   /** 供应商ID */ 
  supplier_id?: string
   /** 来源 */ 
  source?: BasicPrice_Source
   /** 产地 */ 
  origin_place?: string
  remark?: string
}

export interface CreateBasicPriceByPurchaseUserResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetCategoryByCategoryNameRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 一级分类的parent_id 是 0 */ 
  parent_id?: string
  name?: string
}

export interface GetCategoryByCategoryNameResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface ListCategoryByNameRequest {
  axiosConfig?: AxiosRequestConfig,
  name?: string
}

export interface ListCategoryByNameResponse {
  axiosConfig?: AxiosRequestConfig,
  categories?: Category[]
}

export interface GetSpuBySpuNameRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 一级分类的parent_id 是 0 */ 
  parent_id?: string
  name?: string
}

export interface GetSpuBySpuNameResponse {
  axiosConfig?: AxiosRequestConfig,
  spu?: Spu
}

export interface SetReferencePriceRequest {
  axiosConfig?: AxiosRequestConfig,
  reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 强制更新 */ 
  force_update?: boolean
}

export interface SetReferencePriceResponse {
  axiosConfig?: AxiosRequestConfig,
  reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
}

export interface SetReferencePriceV2Request {
  axiosConfig?: AxiosRequestConfig,
   /** 增量删除或更新的数据 */ 
  reference_prices?: SetReferencePriceV2Request_RefPriceData[]
}

export interface SetReferencePriceV2Request_RefPriceData {
  axiosConfig?: AxiosRequestConfig,
   /** sku id */ 
  sku_id?: string
   /** 要删除的参考价类型数据 */ 
  del_price_type_data?: ReferencePrice_Type[]
   /** 要更新的普通参考价数据 */ 
  upsert_normal_price_data?: ReferencePrice_ReferencePriceMap
   /** 要更新的供应商参考价数据 */ 
  upsert_supplier_price_data?: ReferencePrice_SupplierReferencePriceData
   /** 是否强制upsert，强制upsert时不比对时间 */ 
  force_upsert?: boolean
}

export interface SetReferencePriceV2Response {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetManyReferencePriceRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_ids?: string[]
  need_bom_ref?: boolean
}

export interface GetManyReferencePriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 对应需要的参考成本 */ 
  reference_price_map?: UnitValue
}

export interface GetSkuReferencePricesFromPeriodicQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 周期筛选 "3","6" */ 
  period?: number
  sku_id?: string
   /** 周期子报价单id */ 
  periodic_quotation_id?: string
}

export interface GetSkuReferencePricesFromPeriodicQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 周期报价单参考价 */ 
  periodic_quotation_reference_prices?: GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicQuotationReferencePrice[]
}

export interface GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 下单单位 */ 
  unit?: string
   /** 商品单价 元/XX */ 
  price?: string
}

export interface GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicQuotationReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** 周期子报价单名字 格式: xx报价单(2022-xx-xx~2022-xx-xx) */ 
  periodic_quotation_name?: string
  periodic_prices?: GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicPrice[]
}

export interface GetSkuReferencePricesRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_unit_filter?: GetSkuReferencePricesRequest_Filter[]
   /** 周期筛选 "3","6"；"最近" = 只需要一条数据返回时，周期取"1" */ 
  period?: number
   /** 查询 开始时间 */ 
  start_time?: string
   /** 查询 结束时间 */ 
  end_time?: string
   /** 传分享时未登录态token */ 
  shared_token?: string
   /** 需要最近报价 */ 
  no_need_quotation_reference_prices?: boolean
   /** 需要最近采购价    type = 13 */ 
  no_need_purchase_reference_prices?: boolean
   /** 需要最近采购入库价 type = 1 */ 
  no_need_in_stock_reference_prices?: boolean
   /** 需要商品参考市场价 type = 15 */ 
  no_need_reference_market_prices?: boolean
   /** 需要最近生产入库价 type = 16 */ 
  no_need_last_product_in_stock_prices?: boolean
   /** 需要最近生产入库价 type = 12 */ 
  no_need_last_in_stock_market_prices?: boolean
}

export interface GetSkuReferencePricesRequest_Filter {
  axiosConfig?: AxiosRequestConfig,
   /** 商品id */ 
  sku_id?: string
   /** 报价单位/定价单位 fee_unit_id.unit_id */ 
  unit_id?: string
   /** 下单单位 order_unit_id，最近入库价、最近采购价可以传0 */ 
  order_unit_id?: string
   /** 报价单id。1、普通报价单传报价单id；2、周期报价单传入周期子报价单id，最近入库价、最近采购价可以传0 */ 
  quotation_id?: string
   /** 报价单类型，最近入库价、最近采购价可以传0 */ 
  quotation_type?: Quotation_Type
}

export interface GetSkuReferencePricesResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是quotation_id-sku_id-unit_id-order_unit_id, value是参考价 */ 
  reference_price_map?: GetSkuReferencePricesResponse_ReferencePrices
   /** key 是sku_id, proto 是sku */ 
  sku_map?: Sku
}

export interface GetSkuReferencePricesResponse_QuotationReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** 普通报价单名/周期子报价单的名字格式: xx报价单(2022-xx-xx~2022-xx-xx); */ 
  quotation_name?: string
   /** 最近报价时间 */ 
  time?: string
   /** 原始数据报价 */ 
  prices?: UnitValue
   /** 报价单id。1、普通报价单=报价单id；2、周期报价单=子报价单id */ 
  quotation_id?: string
   /** 转换为定价单位后报价 */ 
  to_fee_unit_price?: UnitValue
}

export interface GetSkuReferencePricesResponse_ReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商名 */ 
  supplier_name?: string
   /** 供应商ID */ 
  supplier_id?: string
   /** 采购、入库等的时间 */ 
  time?: string
   /** 采购价、入库价等 */ 
  prices?: UnitValue
   /** 转换为定价单位后报价 */ 
  to_fee_unit_price?: UnitValue
   /** 单据来源ID */ 
  source_id?: string
   /** 快照时间 */ 
  snapshot_time?: string
}

export interface GetSkuReferencePricesResponse_ReferencePrices {
  axiosConfig?: AxiosRequestConfig,
   /** 历史报价 */ 
  quotation_reference_prices?: GetSkuReferencePricesResponse_QuotationReferencePrice[]
   /** 历史采购价参考价 */ 
  purchase_reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 历史入库参考价 */ 
  in_stock_reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 参考市场价 */ 
  market_reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 最近生产入库价 */ 
  last_product_in_stock_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 采购入库价（市场自采） */ 
  last_in_stock_market_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
}

export interface GetSkuReferPurAndInPricesRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_unit_filter?: GetSkuReferPurAndInPricesRequest_Filter[]
   /** 11:最近入库价（供应商直供） 13:最近采购价（供应商直供） */ 
  price_type?: ReferencePrice_Type
}

export interface GetSkuReferPurAndInPricesRequest_Filter {
  axiosConfig?: AxiosRequestConfig,
   /** 商品id */ 
  sku_id?: string
   /** 报价单位 fee_unit_id.unit_id */ 
  unit_id?: string
   /** 下单单位 order_unit_id */ 
  order_unit_id?: string
}

export interface GetSkuReferPurAndInPricesResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key是sku_id-unit_id-order_unit_id, value是参考价 */ 
  reference_price_map?: GetSkuReferPurAndInPricesResponse_ReferencePrices
}

export interface GetSkuReferPurAndInPricesResponse_ReferencePrice {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商名 */ 
  supplier_name?: string
   /** 供应商ID */ 
  supplier_id?: string
   /** 采购、入库等的时间 */ 
  time?: string
   /** 采购价、入库价等 */ 
  prices?: UnitValue
   /** 转换为定价单位后报价 */ 
  to_fee_unit_price?: UnitValue
}

export interface GetSkuReferPurAndInPricesResponse_ReferencePrices {
  axiosConfig?: AxiosRequestConfig,
   /** 商品对应的默认供应商最近采购价/入库价 */ 
  default_supplier_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 商品其他供应商最近采购价/入库价 */ 
  other_supplier_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
   /** 商品的市场参考价 */ 
  market_reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
}

export interface GetSkuReferencePricesByTypeRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 参考价类型 */ 
  price_type?: ReferencePrice_Type
   /** 供应商+skuID组合数据 */ 
  supplier_skus?: GetSkuReferencePricesByTypeRequest_SupplierSkus[]
}

export interface GetSkuReferencePricesByTypeRequest_SupplierSkus {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商id */ 
  supplier_id?: string
   /** sku id */ 
  sku_id?: string
   /** 参考价需要的单位ID */ 
  unit_id?: string
}

export interface GetSkuReferencePricesByTypeResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key为'{supplier_id}_{sku_id}' 形式字符串 */ 
  reference_prices?: GetSkuReferencePricesByTypeResponse_RefPriceValue
}

export interface GetSkuReferencePricesByTypeResponse_RefPriceValue {
  axiosConfig?: AxiosRequestConfig,
   /** 参考价值 */ 
  val?: string
   /** 参考价单位ID */ 
  unit_id?: string
   /** 进项税率，仅对'供应商协议价'有用 */ 
  input_tax?: string
}

export interface GetManyMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
  meal_from_time?: string
  meal_end_time?: string
  customer_id?: string
}

export interface GetManyMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
}

export interface CreateOrUpdateMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
}

export interface CreateOrUpdateMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
}

export interface BulkUpdateSkuSupplierCooperateRequest {
  axiosConfig?: AxiosRequestConfig,
  list_sku_request?: merchandise.ListSkuRequest
  all?: boolean
  supplier_cooperate_model_type?: number
   /** 是否加工。命名有点奇怪，sku里是这样全名的。 */ 
  process?: boolean
}

export interface BulkUpdateSkuSupplierCooperateResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface BulkUpdateSkuSupplierPercentageRequest {
  axiosConfig?: AxiosRequestConfig,
  items?: BulkUpdateSkuSupplierPercentageRequest_Item[]
}

export interface BulkUpdateSkuSupplierPercentageRequest_Item {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  set?: boolean
}

export interface BulkUpdateSkuSupplierPercentageResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UpdateSkuShelfRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 要修改的sku_id */ 
  sku_id?: string
   /** 指定的默认货位.可以为0 ,0为"未指定" 必填 */ 
  shelf_id?: string
}

export interface UpdateSkuShelfResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 勾选部分sku, 或其他sku_id已确定的情况,填写该参数 和1 二选一 已该参数为准 */ 
  sku_id?: string
   /** 指定的默认货位.可以为0 ,0为"未指定" 必填 */ 
  shelf_id?: string
}

export interface LockMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_id?: string
}

export interface LockMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface UnlockMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_id?: string
}

export interface UnlockMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface BatchUpdateSkuPackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: ListSkuV2Request
  pack_unit?: PackUnit
}

export interface BatchUpdateSkuPackUnitData {
  axiosConfig?: AxiosRequestConfig,
  results?: BatchUpdateSkuPackUnitData_Result[]
}

export interface BatchUpdateSkuPackUnitData_Result {
  axiosConfig?: AxiosRequestConfig,
  sku_name?: string
  msg?: string
}

export interface BatchUpdateSkuPackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BatchUpdateSkuSupplierRequest {
  axiosConfig?: AxiosRequestConfig,
  filter?: ListSkuV2Request
   /** 供应商id */ 
  supplier_id?: string
}

export interface BatchUpdateSkuSupplierData {
  axiosConfig?: AxiosRequestConfig,
  results?: BatchUpdateSkuSupplierData_Result[]
}

export interface BatchUpdateSkuSupplierData_Result {
  axiosConfig?: AxiosRequestConfig,
  sku_name?: string
  msg?: string
}

export interface BatchUpdateSkuSupplierResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ListBestSaleSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  quotation_id?: string
  limit?: string
   /** 特殊分类信息 */ 
  need_product_config_data?: boolean
   /** 上下架 true 查询全部 false 只查询=true的 */ 
  is_on_shelf_all?: boolean
   /** 收货时间 */ 
  receive_time?: string
}

export interface ListBestSaleSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是报价单id, value是报价单名字 */ 
  quotation_map?: Quotation
   /** key 是sku_id, proto 是sku */ 
  sku_map?: Sku
   /** key 是"sku_id-quotation_id", value是basic_price */ 
  ingredient_basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
   /** key 是"sku_id", value是特殊分类信息 */ 
  config_info_map?: enterprise.ConfigInfo
   /** customer_id-sku_name-unit_name: string */ 
  customer_price_info?: string
   /** 自动获取最近价格 */ 
  auto_get_recent_price?: boolean
}

export interface BulkImportBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  quotation_id?: string
}

export interface BulkImportBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkImportBasicPriceV2Data {
  axiosConfig?: AxiosRequestConfig,
   /** 错误数据 */ 
  error_row_list?: Row[]
  bulk_import_basic_price_req?: BulkImportBasicPriceV2Request
}

export interface BulkImportBasicPriceV2LiteRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation_id?: string
  file_url?: string
  import_date?: BulkImportBasicPriceV2LiteMiddle_RowData[]
}

export interface BulkImportBasicPriceV2LiteResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface GetBulkImportBasicPriceV2LiteErrRequest {
  axiosConfig?: AxiosRequestConfig,
  task_id?: string
}

export interface GetBulkImportBasicPriceV2LiteErrResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  err_row_data?: BulkImportBasicPriceV2LiteMiddle_RowData[]
  sku_map?: Sku
}

export interface BulkImportCustomerBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  file_url?: string
  quotation_id?: string
}

export interface BulkImportCustomerBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BulkImportCustomerBasicPriceV2Data {
  axiosConfig?: AxiosRequestConfig,
   /** 错误数据 */ 
  error_row_list?: Row[]
  bulk_import_customer_basic_price_req?: BulkImportCustomerBasicPriceV2Request
}

export interface ExportBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_basic_price_v2_request?: ListBasicPriceV2Request
  supplier_id?: string
   /** 客户列表，报价单导出= 1, 其他0 */ 
  export_template?: number
}

export interface ExportBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportBasicPriceExecuteData {
  axiosConfig?: AxiosRequestConfig,
  excel_id?: string
  sheet_name?: string
  export_basic_price_v2_request?: ExportBasicPriceV2Request
}

export interface ExportCustomerBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  list_basic_price_v2_request?: ListBasicPriceV2Request
  supplier_id?: string
}

export interface ExportCustomerBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportSkuHistoryBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  list_sku_history_basic_price_request?: ListSkuHistoryBasicPriceRequest
}

export interface ExportSkuHistoryBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface ExportHistoryBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  list_history_basic_price_request?: ListHistoryBasicPriceRequest
  supplier_id?: string
}

export interface ExportHistoryBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface GetBasicPriceV2Request {
  axiosConfig?: AxiosRequestConfig,
  basic_price_id?: string
}

export interface GetBasicPriceV2Response {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface BatchSyncPriceToOtherQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_id?: string
  to_sync_basic_price_ids?: string[]
  sku_id?: string
  quotation_id?: string
}

export interface BatchSyncPriceToOtherQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface DeltaUpdateBasicPriceV2ByPricingFormulaRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单id;必填;存在全选的情况,但因为分页的存在,前端获取不到所有数据 */ 
  quotation_id?: string
   /** 定价公式类型 */ 
  pricing_type?: BasicPriceItem_PRICINGTYPE
   /** 为false则basicPriceitemInfo长度必不为0 */ 
  chosen_all?: boolean
  basic_price_item_infos?: DeltaUpdateBasicPriceV2ByPricingFormulaRequest_BasicPriceItemInfo[]
   /** 定价公式 */ 
  formula?: string
   /** 价格区间 */ 
  price_intervals?: BasicPriceItem_PriceIntervals
   /** 定价公式模式 如果非0则走预设公式逻辑,0则走公式定价逻辑 */ 
  pricing_formula?: BasicPriceItem_PRICINGFORMULA
   /** 过滤筛选 */ 
  list_basic_price_request?: ListBasicPriceV2Request
}

export interface DeltaUpdateBasicPriceV2ByPricingFormulaRequest_BasicPriceItemInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  order_unit_id?: string
  price?: string
}

export interface DeltaUpdateBasicPriceV2ByPricingFormulaResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface GetManyEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_ids?: string[]
}

export interface GetManyEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_groups?: MenuPeriodGroup
}

export interface ListEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_period_group_id" compare:"in" */ 
  menu_period_group_ids?: string[]
  type?: MenuPeriodGroup_Type
  paging: common.PagingParams
}

export interface ListEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_groups?: MenuPeriodGroup[]
  paging?: common.PagingResult
}

export interface CreateEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface CreateEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface BatchCreateEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_groups?: MenuPeriodGroup[]
}

export interface BatchCreateEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_groups?: MenuPeriodGroup[]
}

export interface UpdateEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface UpdateEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface DeleteEshopMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_period_group_id" compare:"in" */ 
  menu_period_group_ids?: string[]
}

export interface DeleteEshopMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_id?: string
}

export interface GetMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface GetManyMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
}

export interface GetManyMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_map?: Menu
}

export interface ListSimpleMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
  menu_meal_ids?: string[]
  need_deleted?: boolean
  paging?: common.PagingParams
  sort_bys?: common.SortBy[]
}

export interface ListSimpleMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menus?: Menu[]
  paging?: common.PagingResult
}

export interface ListMenuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_id" compare:"in" */ 
  menu_ids?: string[]
   /** @inject_tag: gorm:"-" */ 
  is_default?: common.Filters_Bool
   /** 检索inner_name/serial_no */ 
  q?: string
   /** @inject_tag: gorm:"-" */ 
  is_active?: common.Filters_Bool
  need_delete?: boolean
   /** @inject_tag: field:"menu_meal_id" compare:"in" */ 
  menu_meal_ids?: string[]
  paging: common.PagingParams
   /** @inject_tag: gorm:"-" */ 
  sort_bys?: common.SortBy[]
}

export interface ListMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menus?: Menu[]
  paging?: common.PagingResult
}

export interface DeleteWideMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
  menu_meal_ids?: string[]
}

export interface DeleteWideMenuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CheckMenuCategoryForWideMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_category_ids?: string[]
}

export interface CheckMenuCategoryForWideMenuResponse {
  axiosConfig?: AxiosRequestConfig,
   /** key = menu_category_id */ 
  menu_name_map?: string
}

export interface SaveWideMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
  relation_customer_ids?: string[]
}

export interface SaveWideMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface CreateMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface CreateMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface UpdateMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface UpdateMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface BatchUpdateMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
   /** 激活状态 */ 
  is_active?: common.Filters_Bool
   /** 是否删除 */ 
  delete?: boolean
}

export interface BatchUpdateMenuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeleteMenuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_id?: string
}

export interface DeleteMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu?: Menu
}

export interface GetEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_id?: string
}

export interface GetEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface ListSimpleMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_ids?: string[]
  need_deleted?: boolean
}

export interface ListSimpleMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
}

export interface ListEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_detail_id" compare:"in" */ 
  menu_detail_ids?: string[]
   /** 菜谱开始日期 */ 
  meal_date_start?: string
   /** 菜谱结束日期 */ 
  meal_date_end?: string
  menu_id?: string
  meal_date?: string
  menu_period_group_id?: string
   /** 只返回MenuDetail */ 
  only_detail?: boolean
   /** @inject_tag: field:"menu_id" compare:"in" */ 
  menu_ids?: string[]
  paging: common.PagingParams
}

export interface ListEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
  paging?: common.PagingResult
}

export interface SaveEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface SaveEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface CreateEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface CreateEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface UpdateEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface UpdateEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface DeleteEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_id?: string
}

export interface DeleteEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface BatchSaveEshopMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
}

export interface BatchSaveEshopMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku_id?: string
}

export interface GetMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku?: MenuDetailSku
}

export interface ListMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_detail_sku_id" compare:"in" */ 
  menu_detail_sku_ids?: string[]
  menu_detail_id?: string
   /** @inject_tag: field:"menu_detail_id" compare:"in" */ 
  menu_detail_ids?: string[]
  paging: common.PagingParams
}

export interface ListMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_skus?: MenuDetailSku[]
   /** key为sku_id */ 
  sku_map?: Sku
  paging?: common.PagingResult
}

export interface CreateMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku?: MenuDetailSku
}

export interface CreateMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku?: MenuDetailSku
}

export interface UpdateMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku?: MenuDetailSku
}

export interface UpdateMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku?: MenuDetailSku
}

export interface DeleteMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_sku_ids?: string[]
}

export interface DeleteMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SaveCustomerMenuRelationForCustomersRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
  menu_id?: string
  menu_period_group_id?: string
}

export interface SaveCustomerMenuRelationForCustomersResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SaveCustomerMenuRelationForMenusRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_id?: string
  menu_period_group_menus?: SaveCustomerMenuRelationForMenusRequest_MenuPeriodGroupMenu[]
}

export interface SaveCustomerMenuRelationForMenusRequest_MenuPeriodGroupMenu {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_id?: string
  menu_id?: string
}

export interface SaveCustomerMenuRelationForMenusResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SetCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  relations?: CustomerMenuRelation[]
  menu_id?: string
}

export interface SetCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
  customer_ids?: string[]
  menu_period_group_ids?: string[]
}

export interface ListCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relations?: CustomerMenuRelation[]
}

export interface UnsetCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 菜谱id */ 
  menu_id?: string
   /** 客户id，学生餐是班级id */ 
  customer_ids?: string[]
}

export interface UnsetCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 两个参数至少传一个
@inject_tag: field:"menu_id" compare:"in" */ 
  menu_ids?: string[]
   /** @inject_tag: field:"customer_id" compare:"in" */ 
  customer_ids?: string[]
}

export interface GetCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  relations?: CustomerMenuRelation[]
}

export interface GetManyCustomerMenusRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户ID,customer_ids */ 
  customer_ids?: string[]
  need_deleted?: boolean
}

export interface GetManyCustomerMenusResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 菜谱 */ 
  menus?: Menu[]
   /** 客户菜谱关联关系，key=customer_id，value=menu_id1,menu_id2,menu_id3 */ 
  customer_menu_relation_map?: string
}

export interface GetCustomersForMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_ids?: string[]
}

export interface GetCustomersForMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_ids?: string[]
}

export interface GetCustomerMenusRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户ID,customer_id */ 
  customer_id?: string
  need_deleted?: boolean
}

export interface GetCustomerMenusResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 菜谱 */ 
  menus?: Menu[]
}

export interface ListEshopMenuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 客户ID,customer_id、menu_id二选一，同时存在优先取menu_id */ 
  menu_ids?: string[]
   /** 需要详情 */ 
  need_menu_detail?: boolean
   /** 需要详情所属商品，need_menu_detail=true时有效 */ 
  need_menu_detail_sku?: boolean
   /** 用餐开始时间，need_menu_detail=true时有效 */ 
  meal_date_start?: string
   /** 用餐结束时间，need_menu_detail=true时有效 */ 
  meal_date_end?: string
  need_deleted?: boolean
}

export interface ListEshopMenuResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 菜谱 */ 
  menus?: Menu[]
}

export interface SyncMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
  market_datas?: MarketData[]
}

export interface SyncMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface ListMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 同步数据方维护的商品唯一标识 */ 
  third_sku_id?: string
   /** 行情价格时间 */ 
  time?: string
   /** 数据来源平台名称 */ 
  source_platform?: MarketData_SourcePlatform
   /** 商品名称 编码 模糊搜索 */ 
  q?: string
   /** 行情价格类型 */ 
  price_type?: MarketData_PriceType
   /** 市场名称 */ 
  market_name?: string
  paging: common.PagingParams
   /** 行情价格起始时间 */ 
  begin_time?: string
   /** 行情价格结束时间 */ 
  end_time?: string
   /** @inject_tag: gorm:"INDEX:is_latest;default:0" */ 
  is_latest?: boolean
}

export interface ListMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_datas?: MarketData[]
  paging?: common.PagingResult
}

export interface BatchUpdateMinOrderNumberRequest {
  axiosConfig?: AxiosRequestConfig,
  min_order_numbers?: BatchUpdateMinOrderNumberRequest_MinOrderNumber[]
}

export interface BatchUpdateMinOrderNumberRequest_MinOrderNumber {
  axiosConfig?: AxiosRequestConfig,
  sku_customized_code?: string
  min_order_number?: string
}

export interface BatchUpdateMinOrderNumberResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface BatchUpdateBasicPriceItemInfoRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单id */ 
  quotation_id?: string
   /** 是否更新全部 */ 
  is_all?: boolean
   /** 过滤筛选 */ 
  list_basic_price_request?: ListBasicPriceV2Request
   /** 需要更新的列表 */ 
  basic_price_item_infos?: BatchUpdateBasicPriceItemInfoRequest_BasicPriceItemInfo[]
   /** 最小起订数 */ 
  min_order_number?: string
   /** 价格类型 */ 
  pricing_type?: MultiQuotationBasicPriceItem_PRICETYPE
}

export interface BatchUpdateBasicPriceItemInfoRequest_BasicPriceItemInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  order_unit_id?: string
}

export interface BatchUpdateBasicPriceItemInfoResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BatchRelatedAllSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单id */ 
  quotation_id?: string
   /** 上架状态 */ 
  shelf_status?: BatchRelatedAllSkuRequest_ShelfStatus[]
   /** 单位 */ 
  unit_types?: BatchRelatedAllSkuRequest_UnitType[]
}

export interface BatchRelatedAllSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface BatchCleanSkuDiyUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  group_ids?: string[]
}

export interface BatchCleanSkuDiyUnitResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface AgreementPriceCheckRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_simple_info?: AgreementPriceCheckRequest_SkuSimpleInfo[]
  customer_id?: string
}

export interface AgreementPriceCheckRequest_SkuSimpleInfo {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  unit_id?: string
  price?: string
  is_agreement_price?: boolean
}

export interface AgreementPriceCheckResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_simple_infos?: AgreementPriceCheckRequest_SkuSimpleInfo[]
}

export interface ManualSyncTemporaryProducAndUnitToOrderRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface ManualSyncTemporaryProducAndUnitToOrderResponse {
  axiosConfig?: AxiosRequestConfig,
  task?: asynctask.Task
}

export interface RepeatedSkuUnitRateRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_snap_id: SkuSnapID
  src_unit_id?: string
  target_unit_id?: string
}

export interface RepeatedSkuUnitRateResponse {
  axiosConfig?: AxiosRequestConfig,
  rate?: string
}

export interface MatchSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  input_str?: string
  customer_id?: string
   /** 收货时间 */ 
  receive_time?: string
}

export interface SameSkuUnitRateRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  src_ssu?: SameSkuUnitRateRequest_SkuSnapUnit
  target_ssu?: SameSkuUnitRateRequest_SkuSnapUnit
}

export interface SameSkuUnitRateRequest_SkuSnapUnit {
  axiosConfig?: AxiosRequestConfig,
  sku_revision?: string
  unit_id?: string
}

export interface SameSkuUnitRateResponse {
  axiosConfig?: AxiosRequestConfig,
  rate?: string
}

export interface MatchSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  match_results?: MatchSkuResponse_MatchResult[]
  basic_price_map?: SyncQuotationBasicPriceRequest_BasicPrice
  quotation_map?: Quotation
   /** key=skuId */ 
  product_config_map?: enterprise.ConfigInfo
}

export interface MatchSkuResponse_Item {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
  fee_unit_price?: UnitValue
  basic_price_id?: string
  priority?: string
   /** 匹配到的商品名称 */ 
  matched_name?: string
   /** 匹配到的商品名称的类型 */ 
  matched_name_type?: MatchSkuResponse_SkuNameType
}

export interface MatchSkuResponse_ItemGroup {
  axiosConfig?: AxiosRequestConfig,
  items?: MatchSkuResponse_Item[]
  priority?: string
}

export interface MatchSkuResponse_MatchResult {
  axiosConfig?: AxiosRequestConfig,
  input_str?: string
  groups?: MatchSkuResponse_ItemGroup[]
  detail?: MatchResultDetail
}

export interface WriteBackSkuCostRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_cost?: WriteBackSkuCostRequest_SkuCost[]
}

export interface WriteBackSkuCostRequest_SkuCost {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
  cost?: string
}

export interface WriteBackSkuCostResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface CopySkuFieldToTargetSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  source_sku_id?: string
  target_sku_ids?: string[]
  fields?: string[]
}

export interface CopySkuFieldToTargetSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
}

export interface ListSkuWithQuotationByCustomerIdRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 必传 */ 
  filter_params?: FilterParams
   /** 需要默认报价单的商品信息,客户绑定报价单价格会覆盖默认报价单价格 */ 
  need_default_quotation_data?: boolean
   /** 必传 */ 
  paging?: common.PagingParams
}

export interface ListSkuWithQuotationByCustomerIdResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** key 是sku_id,  value 是sku */ 
  sku_map?: Sku
  paging?: common.PagingResult
}

export interface SyncMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 原餐谱 */ 
  menu_id?: string
   /** 待同步餐次详细 */ 
  menu_detail_ids?: string[]
   /** 目标菜谱 */ 
  dst_menu_ids?: string[]
   /** 菜品是否合并，true 合并去重，false 覆盖 */ 
  is_merge?: boolean
}

export interface SyncMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SyncUpdateCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  category: Category
}

export interface SyncUpdateCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  category?: Category
}

export interface SyncQuotationBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  ext_quotation: SyncQuotationBasicPriceRequest_ExtQuotation
}

export interface SyncQuotationBasicPriceRequest_BasicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 商品编码(采购单位在同步商品时已创建) */ 
  sku_customized_code?: string
   /** 税率 更新是必填,存在默认值0,否则无法知道是否更新 */ 
  input_tax?: string
   /** 含税协议价 */ 
  val_amount?: string
}

export interface SyncQuotationBasicPriceRequest_ExtQuotation {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商编码 */ 
  supplier_customized_code?: string
   /** 开始时间 时间戳 */ 
  start_time?: string
   /** 结束时间 时间戳 */ 
  end_time?: string
   /** 商品项 */ 
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
   /** 编号(如果是更新则需要传) */ 
  serial_no?: string
   /** 编辑状态，已生效变更(已生效/已终止) */ 
  status?: Quotation_Status
   /** 备注 */ 
  remark?: string
}

export interface SyncQuotationBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
   /** 采购协议价 */ 
  quotation?: Quotation
}

export interface SyncCreateSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: OutsideSku
}

export interface SyncCreateSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface SyncUpdateSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: OutsideSku
}

export interface SyncUpdateSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface GetDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 自定义编码 */ 
  customize_code?: string
   /** 商品ID */ 
  sku_id?: string
}

export interface GetDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
  ssu_infos?: ListSsuResponse_SsuInfo[]
   /** [分类1, 分类2, spu] */ 
  category_infos?: CategoryInfo[]
}

export interface SyncDeleteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 自定义编码 */ 
  customize_code?: string
}

export interface SyncDeleteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface SyncCreateQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation: OutsideQuotation
}

export interface SyncCreateQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface SyncUpdateQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  quotation: OutsideQuotation
}

export interface SyncUpdateQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
}

export interface SyncDeleteQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 自定义编码 */ 
  serial_no?: string
}

export interface SyncDeleteQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetDetailQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
  serial_no?: string
}

export interface GetDetailQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  customer_ids?: string[]
  menu_periods?: MenuPeriod[]
   /** 子报价单数量 */ 
  child_quotation_quantity?: string
}

export interface BindQuotationBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 绑定报价单商品 */ 
  basic_price: BindQuotationBasicPriceRequest_QuotationBasicPrice
}

export interface BindQuotationBasicPriceRequest_QuotationBasicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单编号 */ 
  quotation_serial_no?: string
   /** 商品报价信息 */ 
  sku?: BindQuotationBasicPriceRequest_QuotationBasicPriceSku[]
}

export interface BindQuotationBasicPriceRequest_QuotationBasicPriceSku {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单编号 */ 
  sku_customize_code?: string
   /** 商品行价格 */ 
  basic_price_items?: BasicPriceItem[]
}

export interface BindQuotationBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeleteBindQuotationBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单商品 */ 
  basic_price: DeleteBindQuotationBasicPriceRequest_DeleteQuotationBasicPrice
}

export interface DeleteBindQuotationBasicPriceRequest_DeleteQuotationBasicPrice {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单编号 */ 
  quotation_serial_no?: string
   /** 商品 */ 
  sku?: DeleteBindQuotationBasicPriceRequest_DeleteSku[]
}

export interface DeleteBindQuotationBasicPriceRequest_DeleteSku {
  axiosConfig?: AxiosRequestConfig,
   /** 商品Code */ 
  sku_customize_code?: string
   /** 下单单位ID */ 
  unit_id?: string
}

export interface DeleteBindQuotationBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface BindQuotationCustomerRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 绑定报价单商品 */ 
  relation: BindQuotationCustomerRequest_QuotationCustomer
}

export interface BindQuotationCustomerRequest_QuotationCustomer {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单编号 */ 
  quotation_serial_no?: string
   /** 商品报价信息 */ 
  customer_customized_code?: string[]
}

export interface BindQuotationCustomerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface DeleteBindQuotationCustomerRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单商品 */ 
  relation: DeleteBindQuotationCustomerRequest_DeleteQuotationCustomer
}

export interface DeleteBindQuotationCustomerRequest_DeleteQuotationCustomer {
  axiosConfig?: AxiosRequestConfig,
   /** 报价单编号 */ 
  quotation_serial_no?: string
   /** 商品 */ 
  customer_customized_code?: string[]
}

export interface DeleteBindQuotationCustomerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface GetUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  unit_id?: string
}

export interface GetUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  unit?: Unit
}

export interface QueryUnitRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  units?: Unit[]
  paging?: common.PagingResult
}

export interface QueryCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  categorys?: Category[]
  paging?: common.PagingResult
}

export interface GetInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  internal_category_id?: string
}

export interface GetInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_category?: InternalCategory
}

export interface QueryInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_categorys?: InternalCategory[]
  paging?: common.PagingResult
}

export interface UpdateInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  internal_category: InternalCategory
}

export interface UpdateInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_category?: InternalCategory
}

export interface DeleteInternalCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"internal_category_id" compare:"in" */ 
  internal_category_ids?: string[]
}

export interface DeleteInternalCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  internal_categorys?: InternalCategory[]
}

export interface GetFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  finance_category_id?: string
}

export interface GetFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_category?: FinanceCategory
}

export interface ListFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"finance_category_id" compare:"in" */ 
  finance_category_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_categorys?: FinanceCategory[]
  paging?: common.PagingResult
}

export interface QueryFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_categorys?: FinanceCategory[]
  paging?: common.PagingResult
}

export interface CreateFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  finance_category: FinanceCategory
}

export interface CreateFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_category?: FinanceCategory
}

export interface UpdateFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  finance_category: FinanceCategory
}

export interface UpdateFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_category?: FinanceCategory
}

export interface DeleteFinanceCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"finance_category_id" compare:"in" */ 
  finance_category_ids?: string[]
}

export interface DeleteFinanceCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  finance_categorys?: FinanceCategory[]
}

export interface QuerySpuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySpuResponse {
  axiosConfig?: AxiosRequestConfig,
  spus?: Spu[]
  paging?: common.PagingResult
}

export interface QuerySkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySkuResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
  paging?: common.PagingResult
}

export interface CreateSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
}

export interface CreateSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface UpdateSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  sku: Sku
}

export interface UpdateSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  sku?: Sku
}

export interface DeleteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_id" compare:"in" */ 
  sku_ids?: string[]
}

export interface DeleteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  skus?: Sku[]
}

export interface ListSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_nutrition_id" compare:"in" */ 
  sku_nutrition_ids?: string[]
   /** @inject_tag: field:"sku_id" compare:"in" */ 
  sku_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
  paging?: common.PagingResult
}

export interface QuerySkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
  paging?: common.PagingResult
}

export interface CreateSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_nutrition: SkuNutrition
}

export interface CreateSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutrition?: SkuNutrition
}

export interface UpdateSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_nutrition: SkuNutrition
}

export interface UpdateSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutrition?: SkuNutrition
}

export interface DeleteSkuNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_nutrition_id" compare:"in" */ 
  sku_nutrition_ids?: string[]
}

export interface DeleteSkuNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_nutritions?: SkuNutrition[]
}

export interface GetNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  nutrition_id?: string
}

export interface GetNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutrition?: Nutrition
}

export interface QueryNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutritions?: Nutrition[]
  paging?: common.PagingResult
}

export interface CreateNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  nutrition: Nutrition
}

export interface CreateNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutrition?: Nutrition
}

export interface UpdateNutritionRequest {
  axiosConfig?: AxiosRequestConfig,
  nutrition: Nutrition
}

export interface UpdateNutritionResponse {
  axiosConfig?: AxiosRequestConfig,
  nutrition?: Nutrition
}

export interface GetSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory_id?: string
}

export interface GetSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory?: SkuSaleInventory
}

export interface ListSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_sale_inventory_id" compare:"in" */ 
  sku_sale_inventory_ids?: string[]
   /** @inject_tag: field:"sku_id" compare:"in" */ 
  sku_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventorys?: SkuSaleInventory[]
  paging?: common.PagingResult
}

export interface QuerySkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventorys?: SkuSaleInventory[]
  paging?: common.PagingResult
}

export interface CreateSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory: SkuSaleInventory
}

export interface CreateSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory?: SkuSaleInventory
}

export interface UpdateSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory: SkuSaleInventory
}

export interface UpdateSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventory?: SkuSaleInventory
}

export interface DeleteSkuSaleInventoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_sale_inventory_id" compare:"in" */ 
  sku_sale_inventory_ids?: string[]
}

export interface DeleteSkuSaleInventoryResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_sale_inventorys?: SkuSaleInventory[]
}

export interface QueryQuotationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryQuotationResponse {
  axiosConfig?: AxiosRequestConfig,
  quotations?: Quotation[]
  paging?: common.PagingResult
}

export interface GetCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category_id?: string
}

export interface GetCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category?: CustomerPriceOnCategory
}

export interface ListCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_price_on_category_id" compare:"in" */ 
  customer_price_on_category_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_categorys?: CustomerPriceOnCategory[]
  paging?: common.PagingResult
}

export interface QueryCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_categorys?: CustomerPriceOnCategory[]
  paging?: common.PagingResult
}

export interface CreateCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category: CustomerPriceOnCategory
}

export interface CreateCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category?: CustomerPriceOnCategory
}

export interface UpdateCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category: CustomerPriceOnCategory
}

export interface UpdateCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_category?: CustomerPriceOnCategory
}

export interface DeleteCustomerPriceOnCategoryRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_price_on_category_id" compare:"in" */ 
  customer_price_on_category_ids?: string[]
}

export interface DeleteCustomerPriceOnCategoryResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_on_categorys?: CustomerPriceOnCategory[]
}

export interface GetCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku_id?: string
}

export interface GetCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku?: CustomerPriceMaskSku
}

export interface ListCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_price_mask_sku_id" compare:"in" */ 
  customer_price_mask_sku_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_skus?: CustomerPriceMaskSku[]
  paging?: common.PagingResult
}

export interface QueryCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_skus?: CustomerPriceMaskSku[]
  paging?: common.PagingResult
}

export interface CreateCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku: CustomerPriceMaskSku
}

export interface CreateCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku?: CustomerPriceMaskSku
}

export interface UpdateCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku: CustomerPriceMaskSku
}

export interface UpdateCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_sku?: CustomerPriceMaskSku
}

export interface DeleteCustomerPriceMaskSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_price_mask_sku_id" compare:"in" */ 
  customer_price_mask_sku_ids?: string[]
}

export interface DeleteCustomerPriceMaskSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_price_mask_skus?: CustomerPriceMaskSku[]
}

export interface ListCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_quotation_relation_id" compare:"in" */ 
  customer_quotation_relation_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relations?: CustomerQuotationRelation[]
  paging?: common.PagingResult
}

export interface QueryCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relations?: CustomerQuotationRelation[]
  paging?: common.PagingResult
}

export interface CreateCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relation: CustomerQuotationRelation
}

export interface CreateCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relation?: CustomerQuotationRelation
}

export interface UpdateCustomerQuotationRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relation: CustomerQuotationRelation
}

export interface UpdateCustomerQuotationRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_quotation_relation?: CustomerQuotationRelation
}

export interface QueryMenuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMenuResponse {
  axiosConfig?: AxiosRequestConfig,
  menus?: Menu[]
  paging?: common.PagingResult
}

export interface QueryCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relations?: CustomerMenuRelation[]
  paging?: common.PagingResult
}

export interface CreateCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relation: CustomerMenuRelation
}

export interface CreateCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relation?: CustomerMenuRelation
}

export interface UpdateCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relation: CustomerMenuRelation
}

export interface UpdateCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relation?: CustomerMenuRelation
}

export interface DeleteCustomerMenuRelationRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"customer_menu_relation_id" compare:"in" */ 
  customer_menu_relation_ids?: string[]
}

export interface DeleteCustomerMenuRelationResponse {
  axiosConfig?: AxiosRequestConfig,
  customer_menu_relations?: CustomerMenuRelation[]
}

export interface GetMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_id?: string
}

export interface GetMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail?: MenuDetail
}

export interface QueryMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
  paging?: common.PagingResult
}

export interface DeleteMenuDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"menu_detail_id" compare:"in" */ 
  menu_detail_ids?: string[]
}

export interface DeleteMenuDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_details?: MenuDetail[]
}

export interface QueryMenuDetailSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMenuDetailSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_detail_skus?: MenuDetailSku[]
  paging?: common.PagingResult
}

export interface GetMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group_id?: string
}

export interface GetMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_group?: MenuPeriodGroup
}

export interface QueryMenuPeriodGroupRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMenuPeriodGroupResponse {
  axiosConfig?: AxiosRequestConfig,
  menu_period_groups?: MenuPeriodGroup[]
  paging?: common.PagingResult
}

export interface QueryBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
  paging?: common.PagingResult
}

export interface UpdateBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface UpdateBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface DeleteBasicPriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"basic_price_id" compare:"in" */ 
  basic_price_ids?: string[]
}

export interface DeleteBasicPriceResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_prices?: SyncQuotationBasicPriceRequest_BasicPrice[]
}

export interface GetBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail_id?: string
}

export interface GetBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail?: BasicPriceDetail
}

export interface QueryBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price_details?: BasicPriceDetail[]
  paging?: common.PagingResult
}

export interface CreateBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail: BasicPriceDetail
}

export interface CreateBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail?: BasicPriceDetail
}

export interface UpdateBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail: BasicPriceDetail
}

export interface UpdateBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price_detail?: BasicPriceDetail
}

export interface DeleteBasicPriceDetailRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"basic_price_detail_id" compare:"in" */ 
  basic_price_detail_ids?: string[]
}

export interface DeleteBasicPriceDetailResponse {
  axiosConfig?: AxiosRequestConfig,
  basic_price_details?: BasicPriceDetail[]
}

export interface GetMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar_id?: string
}

export interface GetMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar?: MealCalendar
}

export interface ListMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"meal_calendar_id" compare:"in" */ 
  meal_calendar_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
  paging?: common.PagingResult
}

export interface QueryMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
  paging?: common.PagingResult
}

export interface CreateMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar: MealCalendar
}

export interface CreateMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar?: MealCalendar
}

export interface UpdateMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar: MealCalendar
}

export interface UpdateMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendar?: MealCalendar
}

export interface DeleteMealCalendarRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"meal_calendar_id" compare:"in" */ 
  meal_calendar_ids?: string[]
}

export interface DeleteMealCalendarResponse {
  axiosConfig?: AxiosRequestConfig,
  meal_calendars?: MealCalendar[]
}

export interface GetFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite?: Favorite
}

export interface QueryFavoriteRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryFavoriteResponse {
  axiosConfig?: AxiosRequestConfig,
  favorites?: Favorite[]
  paging?: common.PagingResult
}

export interface GetFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku_id?: string
}

export interface GetFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku?: FavoriteSku
}

export interface ListFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"favorite_sku_id" compare:"in" */ 
  favorite_sku_ids?: string[]
   /** 是否查询已删除的 */ 
  need_deleted?: boolean
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_skus?: FavoriteSku[]
  paging?: common.PagingResult
}

export interface QueryFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_skus?: FavoriteSku[]
  paging?: common.PagingResult
}

export interface CreateFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku: FavoriteSku
}

export interface CreateFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku?: FavoriteSku
}

export interface UpdateFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku: FavoriteSku
}

export interface UpdateFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_sku?: FavoriteSku
}

export interface DeleteFavoriteSkuRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"favorite_sku_id" compare:"in" */ 
  favorite_sku_ids?: string[]
}

export interface DeleteFavoriteSkuResponse {
  axiosConfig?: AxiosRequestConfig,
  favorite_skus?: FavoriteSku[]
}

export interface QueryRuleSetRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryRuleSetResponse {
  axiosConfig?: AxiosRequestConfig,
  rule_sets?: RuleSet[]
  paging?: common.PagingResult
}

export interface GetCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
  category_image_id?: string
}

export interface GetCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
  category_image?: CategoryImage
}

export interface QueryCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
  category_images?: CategoryImage[]
  paging?: common.PagingResult
}

export interface CreateCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
  category_image: CategoryImage
}

export interface CreateCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
  category_image?: CategoryImage
}

export interface UpdateCategoryImageRequest {
  axiosConfig?: AxiosRequestConfig,
  category_image: CategoryImage
}

export interface UpdateCategoryImageResponse {
  axiosConfig?: AxiosRequestConfig,
  category_image?: CategoryImage
}

export interface QueryReferencePriceRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryReferencePriceResponse {
  axiosConfig?: AxiosRequestConfig,
  reference_prices?: GetSkuReferPurAndInPricesResponse_ReferencePrice[]
  paging?: common.PagingResult
}

export interface CreateReferencePriceRequest {
  axiosConfig?: AxiosRequestConfig,
  reference_price: GetSkuReferPurAndInPricesResponse_ReferencePrice
}

export interface CreateReferencePriceResponse {
  axiosConfig?: AxiosRequestConfig,
  reference_price?: GetSkuReferPurAndInPricesResponse_ReferencePrice
}

export interface GetMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
  market_data_id?: string
}

export interface GetMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_data?: MarketData
}

export interface QueryMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_datas?: MarketData[]
  paging?: common.PagingResult
}

export interface CreateMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
  market_data: MarketData
}

export interface CreateMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_data?: MarketData
}

export interface UpdateMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
  market_data: MarketData
}

export interface UpdateMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_data?: MarketData
}

export interface DeleteMarketDataRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"market_data_id" compare:"in" */ 
  market_data_ids?: string[]
}

export interface DeleteMarketDataResponse {
  axiosConfig?: AxiosRequestConfig,
  market_datas?: MarketData[]
}

export interface GetSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_id?: string
}

export interface GetSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria?: SkuAcceptanceCriteria
}

export interface ListSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_acceptance_criteria_id" compare:"in" */ 
  sku_acceptance_criteria_ids?: string[]
   /** @inject_tag: field:"sku_id" compare:"in" */ 
  sku_ids?: string[]
  paging?: common.PagingParams
  sortby?: common.SortBy[]
}

export interface ListSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criterias?: SkuAcceptanceCriteria[]
  paging?: common.PagingResult
}

export interface QuerySkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QuerySkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criterias?: SkuAcceptanceCriteria[]
  paging?: common.PagingResult
}

export interface CreateSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria: SkuAcceptanceCriteria
}

export interface CreateSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria?: SkuAcceptanceCriteria
}

export interface UpdateSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria: SkuAcceptanceCriteria
}

export interface UpdateSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria?: SkuAcceptanceCriteria
}

export interface SaveSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria: SkuAcceptanceCriteria
}

export interface SaveSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criteria?: SkuAcceptanceCriteria
}

export interface DeleteSkuAcceptanceCriteriaRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"sku_acceptance_criteria_id" compare:"in" */ 
  sku_acceptance_criteria_ids?: string[]
}

export interface DeleteSkuAcceptanceCriteriaResponse {
  axiosConfig?: AxiosRequestConfig,
  sku_acceptance_criterias?: SkuAcceptanceCriteria[]
}

export interface SyncQuotationBasicPriceByImportRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 供应商 */ 
  supplier_id?: string
  start_time?: string
  end_time?: string
   /** 只支持一条详情,如果要创建多个详情,需多次调用 */ 
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface SyncQuotationBasicPriceByImportResponse {
  axiosConfig?: AxiosRequestConfig,
  quotation?: Quotation
  basic_price?: SyncQuotationBasicPriceRequest_BasicPrice
}

export interface GetPackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  pack_unit_id?: string
}

export interface GetPackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_unit?: PackUnit
}

export interface QueryPackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
   /** 查询条件 */ 
  query: common.QueryCriteriaGroup
   /** 分页条件 */ 
  paging?: common.PagingParams
   /** 排序条件 */ 
  sort_by?: common.SortBy[]
}

export interface QueryPackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_units?: PackUnit[]
  paging?: common.PagingResult
}

export interface CreatePackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  pack_unit: PackUnit
}

export interface CreatePackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_unit?: PackUnit
}

export interface UpdatePackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
  pack_unit: PackUnit
}

export interface UpdatePackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_unit?: PackUnit
}

export interface DeletePackUnitRequest {
  axiosConfig?: AxiosRequestConfig,
   /** @inject_tag: field:"pack_unit_id" compare:"in" */ 
  pack_unit_ids?: string[]
}

export interface DeletePackUnitResponse {
  axiosConfig?: AxiosRequestConfig,
  pack_units?: PackUnit[]
}

export interface AsyncManagebaseSkuEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  sku_ids?: string[]
  old_sku_map?: Sku
}

export interface AsyncManagebaseSkuEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface AsyncManagebaseSkuCategoryEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  sku_category_ids?: string[]
  old_sku_map?: Sku
}

export interface AsyncManagebaseSkuCategoryEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}

export interface AsyncManagebaseSkuUnitEventListenerRequest {
  axiosConfig?: AxiosRequestConfig,
  event_type?: string
  sku_unit_ids?: string[]
}

export interface AsyncManagebaseSkuUnitEventListenerResponse {
  axiosConfig?: AxiosRequestConfig,
}
