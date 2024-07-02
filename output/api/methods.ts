/** 类型自动生成 */
import { 
  SkuSalePriceCache,
  SkuReferencePriceCaches,
  SkuReferencePriceCache,
  SkuReferencePriceFilter,
  SkuReferencePriceFilter_SkuFilter,
  SkuBasicPriceCache,
  SkuBasicPriceCache_BasicPrice,
  SkuCache,
  SkuCustomerAliasCache,
  SkuCacheSort,
  SkuCount,
  ImportSkuNutritionData,
  ImportSkuNutritionData_Rows,
  Status,
  Status_SkuIdUnitId,
  Unit,
  Category,
  InternalCategory,
  FinanceCategory,
  Spu,
  PackUnit,
  Sku,
  Sku_Extra,
  Sku_RepeatedField,
  Sku_SupplierInputTaxMap,
  Sku_UnitList,
  Sku_RelatedCombineSkuIdsMap,
  Sku_SkuLevel,
  Sku_SkuLevels,
  SkuNutrition,
  SkuNutritionCache,
  Nutrition,
  SkuRemarkCache,
  SkuRemark,
  SkuAcceptanceCriteria,
  Ingredient,
  Ingredients,
  SkuSaleInventory,
  Ssu,
  Ssu_RepeatedField,
  Ssu_PackageId,
  Ssu_RepeatedPackageField,
  Ssu_Ingredients,
  Ssu_Ingredients_SsuRatio,
  Ssu_RelatedCombineSsuIds,
  Ssu_RelatedCombineSsuRealSsuIds,
  Quotation,
  Quotation_AvailMenuPeriodGroups,
  Quotation_UpdateValidTime,
  CustomerPriceOnCategory,
  DetailPriceRule,
  ItemPriceRule,
  CustomerPriceMaskSku,
  CustomerQuotationRelation,
  Menu,
  Menu_MenuPeriodInfo,
  Menu_MenuPeriodInfo_MenuPeriod,
  CustomerMenuRelation,
  MenuDetail,
  MenuDetailSku,
  MenuPeriodGroup,
  MenuPeriod,
  BasicPrice,
  BasicPrice_RepeatedField,
  BasicPriceSnapshot,
  PriceInterval,
  PriceIntervals,
  PriceCalculateRule,
  BasicPriceDetail,
  BasicPriceItem,
  BasicPriceItem_PriceInterval,
  BasicPriceItem_PriceIntervals,
  BasicPriceItem_PriceCalculateRule,
  BasicPriceItems,
  MultiQuotationBasicPriceItem,
  MealCalendar,
  MealCalendar_MealCalendarDatas,
  Favorite,
  FavoriteSku,
  RuleSet,
  RuleSet_RepeatedField,
  RuleSet_Rule,
  Uint64List,
  CategoryTreeCache,
  CategoryTreeCache_CategoryInfo,
  QuotationCategoryIdsCache,
  RuleSetCache,
  CustomerPriceRuleCache,
  CustomerPriceRuleCache_CustomerRuleSet,
  RuleSetDisableSsuCache,
  RuleSetDisableSsuCache_CustomerDisableSsuList,
  RuleSetPriceCache,
  RuleSetPriceCache_SsuPrice,
  SkuAliasCache,
  SkuAliasCache_AliasCache,
  CategoryImage,
  ReferencePrice,
  ReferencePrice_ReferencePriceValue,
  ReferencePrice_ReferencePriceMap,
  ReferencePrice_SupplierReferencePriceData,
  ReferencePriceSnapshot,
  SsuInfo,
  SsuTotalInfo,
  WarehouseStock,
  SkuSuggestedPrice,
  SkuIdUnitId,
  ExportExecuteSku,
  SkuSnapID,
  SsuSnapID,
  SsuId,
  BasicPriceId,
  Row,
  CategoryInfo,
  ExportSsuData,
  ExportSsuData_SsuInfo,
  RuleConflictData,
  GetUnitRateGroup,
  GetUnitRateGroup_UnitGroup,
  GetUnitRateGroup_UnitIdGroup,
  GetUnitRateGroupData,
  GetUnitRateGroupData_UnitRateGroup,
  FilterSkuInfo,
  CopySourceQuotationInfo,
  RelationElement,
  BatchPresetPricingFormulaData,
  BatchCalculatePricingFormulaData,
  ExportSpecialBasicPriceData,
  ExportSpecialBasicPriceData_ExportSpecialBasicPriceSkuInfo,
  ImportSpecialBasicPriceData,
  ImportSpecialBasicPriceData_ImportSpecialBasicPriceInfo,
  ImportSpecialBasicPriceData_SetSpecialBasicPriceInfo,
  ImportSpecialBasicPriceData_PositionIndex,
  BasicPriceList,
  FavoriteSkuList,
  UnitQuantity,
  UnitPrice,
  UnitValue,
  UnitValueSet,
  UnitValueSetV2,
  UnitStock,
  ErrorAsyncResult,
  MerchandiseParam,
  MerchandiseParam_ElemMap,
  MerchandiseParam_CombineSsu,
  MerchandiseStructParam,
  InitMerchandiseParam,
  FavoriteSkuNumStaticCache,
  ExportQuotationMiddle,
  ExportQuotationMiddle_QuotationRelationMap,
  FilterParams,
  SkuUnitInfo,
  BulkImportBasicPriceV2LiteMiddle,
  BulkImportBasicPriceV2LiteMiddle_RowData,
  ExportExecuteBasicPrice,
  MarketData,
  MatchResultDetail,
  MerchandiseApolloConfig,
  OutsideSku,
  OutsideSku_UnitList,
  OutsideQuotation,
  GetSkuSalePricesCacheRequest,
  GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter,
  GetSkuSalePricesCacheRequest_CustomerSkuSalePriceFilter_SkuFilter,
  GetSkuSalePricesCacheResponse,
  GetSkuSalePricesCacheResponse_SkuSalePriceCaches,
  SetSkuSalePricesCacheRequest,
  SetSkuSalePricesCacheResponse,
  GetSkuPurchasePricesCacheRequest,
  GetSkuPurchasePricesCacheResponse,
  GetSkuInStockPricesCacheRequest,
  GetSkuInStockPricesCacheResponse,
  GetSkuReferencePricesCacheRequest,
  GetSkuReferencePricesCacheResponse,
  GetSkuBasicPricesCacheRequest,
  GetSkuBasicPricesCacheRequest_SkuBasicPriceFilter,
  GetSkuBasicPricesCacheResponse,
  GetSkuBasicPricesCacheResponse_SkuBasicPriceCaches,
  SearchSkuRequest,
  SearchSkuResponse,
  OrderDetailEventListenerRequest,
  OrderDetailEventListenerResponse,
  CustomerProductConfigEventListenerRequest,
  CustomerProductConfigEventListenerResponse,
  SkuEventListenerRequest,
  SkuEventListenerResponse,
  InitSkuCacheRequest,
  InitSkuCacheResponse,
  RefreshSkuCacheDataRequest,
  RefreshSkuCacheDataResponse,
  GetSkuCacheRequest,
  GetSkuCacheResponse,
  InitSkuCustomerAliasCacheRequest,
  InitSkuCustomerAliasCacheResponse,
  SetSkuCountRequest,
  SetSkuCountRequest_SkuCount,
  SetSkuCountResponse,
  GetSkuCountRequest,
  GetSkuCountResponse,
  ListPackUnitRequest,
  ListPackUnitResponse,
  SavePackUnitRequest,
  SavePackUnitResponse,
  GetImportCombineSkuTemplateRequest,
  GetImportCombineSkuTemplateResponse,
  ImportCombineSkuRequest,
  ImportCombineSkuData,
  ImportCombineSkuData_CombineSku,
  ImportCombineSkuData_IngredientSku,
  ImportCombineSkuData_Rows,
  ImportCombineSkuResponse,
  ExportCombineSkuRequest,
  ExportCombineSkuResponse,
  ListSkuByQueryForSearchRequest,
  ListSkuByQueryForSearchResponse,
  ListSimpleSkuRequest,
  ListSimpleSkuResponse,
  ListSimpleQuotationRequest,
  ListSimpleQuotationResponse,
  ImportSkuNutritionRequest,
  ImportSkuNutritionResponse,
  CleanSkuRemarkRequest,
  CleanSkuRemarkResponse,
  GetManySkuRemarkRequest,
  GetManySkuRemarkResponse,
  SaveSkuRemarkRequest,
  SaveSkuRemarkResponse,
  ListNutritionUnitRequest,
  ListNutritionUnitResponse,
  GetSkuNutritionRequest,
  GetSkuNutritionResponse,
  CleanSkuNutritionRequest,
  CleanSkuNutritionResponse,
  SaveSkuNutritionRequest,
  SaveSkuNutritionResponse,
  ListNutritionRequest,
  ListNutritionResponse,
  SaveNutritionRequest,
  SaveNutritionResponse,
  DeleteNutritionRequest,
  DeleteNutritionResponse,
  GetCategoryRequest,
  GetCategoryResponse,
  ListCategoryRequest,
  ListCategoryResponse,
  ListInternalCategoryRequest,
  ListInternalCategoryResponse,
  CreateCategoryRequest,
  CreateCategoryResponse,
  CreateInternalCategoryRequest,
  CreateInternalCategoryResponse,
  UpdateCategoryRequest,
  UpdateCategoryResponse,
  UpdateManyCategoryRequest,
  UpdateManyCategoryResponse,
  DeleteCategoryRequest,
  DeleteCategoryResponse,
  GetCategoryTreeRequest,
  GetCategoryTreeResponse,
  GetCategoryTreeOnCustomerPriceRequest,
  GetCategoryTreeOnCustomerPriceResponse,
  DeltaUpdatePriceRuleOnCategoryRequest,
  DeltaUpdatePriceRuleOnCategoryResponse,
  BulkUpdateCalRuleOnCategoryRequest,
  BulkUpdateCalRuleOnCategoryResponse,
  BatchUpdateCategorySortRequest,
  BatchUpdateCategorySortResponse,
  GetOfficialCategoryTreeRequest,
  GetOfficialCategoryTreeResponse,
  ChangeMerchandiseRankRequest,
  ChangeMerchandiseRankResponse,
  GetManyCategoryRequest,
  GetManyCategoryResponse,
  GetManyCategoryByRelationGroupRequest,
  GetManyCategoryByRelationGroupResponse,
  GetSpuRequest,
  GetSpuResponse,
  InitFinanceCategoryRequest,
  InitFinanceCategoryResponse,
  GetFinanceCategoryTreeRequest,
  GetFinanceCategoryTreeResponse,
  GetManySpuRequest,
  GetManySpuResponse,
  ListSpuRequest,
  ListSpuResponse,
  CreateSpuRequest,
  CreateSpuResponse,
  UpdateSpuRequest,
  UpdateSpuResponse,
  DeleteSpuRequest,
  DeleteSpuResponse,
  GetSkuRequest,
  GetSkuResponse,
  GetSkuV2Request,
  GetSkuV2Response,
  ListSkuRequest,
  ListSkuResponse,
  ListSkuResponse_SkuInfo,
  BatchApprovetemporarySkuRequest,
  BatchApprovetemporarySkuResponse,
  ListSkuV2ForSearchRequest,
  ListSkuV2ForSearchResponse,
  ListSkuV2Request,
  ListSkuV2Response,
  ListSkuWithInquiryPriceRequest,
  ListSkuWithInquiryPriceResponse,
  GetSkuByNameUnitRequest,
  GetSkuByNameUnitResponse,
  ListSkuByNameUnitRequest,
  ListSkuByNameUnitResponse,
  ListSkuSuggestedPriceByNameRequest,
  ListSkuSuggestedPriceByNameRequest_SkuInfo,
  ListSkuSuggestedPriceByNameResponse,
  ListRecentSkuPricesRequest,
  ListRecentSkuPricesResponse,
  GetSkuCustomUnitRequest,
  GetSkuCustomUnitResponse,
  GetSkuBondOrderUnitRequest,
  GetSkuBondOrderUnitResponse,
  ListSkuLiteRequest,
  ListSkuLiteResponse,
  ListOfficialSkuRequest,
  ListOfficialSkuResponse,
  ListSkuForBindingQuotationRequest,
  ListSkuForBindingQuotationResponse,
  ListSkuForBindCustomerQuotationRequest,
  ListSkuForBindCustomerQuotationResponse,
  ListMaskSkuByQuotationRequest,
  ListMaskSkuByQuotationResponse,
  GetManySkuV2Request,
  GetManySkuV2Response,
  ExportSkuRequest,
  ExportSkuResponse,
  ExportSkuV2Request,
  ExportSkuV2Response,
  ExportLiteSkuRequest,
  ExportLiteSkuResponse,
  ExportSkuExecuteData,
  GetManySkuRequest,
  GetManySkuResponse,
  GetManySkuResponse_SkuInfo,
  GetSkuSnapRequest,
  GetSkuSnapResponse,
  GetManySkuSnapRequest,
  GetManySkuSnapResponse,
  UpdateManySkuSnapV2Request,
  UpdateManySkuSnapV2Response,
  QuerySkuSnapshotRequest,
  QuerySkuSnapshotResponse,
  GetManySkuSnapV2Request,
  GetManySkuSnapV2Response,
  CreateSkuV2Request,
  CreateSkuV2Response,
  CreateLiteSkuRequest,
  CreateLiteSkuResponse,
  CheckLiteSkuNameUnitExistRequest,
  CheckLiteSkuNameUnitExistResponse,
  UpsertSkuV2Request,
  UpsertSkuV2Response,
  UpsertManySkuV2Request,
  UpsertManySkuV2Response,
  BatchUpsertSkuV2Request,
  BatchUpsertSkuV2Response,
  CreateManySkuV2Request,
  CreateManySkuV2Response,
  UpdateSkuByMapV2Request,
  UpdateSkuByMapV2Response,
  UpdateSkuLevelV2Request,
  UpdateSkuLevelV2Response,
  UpdateSkuV2Request,
  UpdateSkuV2Response,
  GetSsuSnapRequest,
  GetSsuSnapResponse,
  GetManySsuSnapRequest,
  GetManySsuSnapResponse,
  GetSkuNameCacheV2Request,
  GetSkuNameCacheV2Response,
  GetSkuNameCacheV2Response_NameAndAlias,
  GetGroupSkuSimpleInfoCacheRequest,
  GetGroupSkuSimpleInfoCacheResponse,
  DeleteSkuV2Request,
  DeleteSkuV2Response,
  RecoverSkuV2Request,
  RecoverSkuV2Response,
  UpdateDeletedSkuRequest,
  UpdateDeletedSkuResponse,
  RecoverBasicPriceBySkuRequest,
  RecoverBasicPriceBySkuResponse,
  BatchUpdateSkuSsuRequest,
  BatchUpdateSkuSsuResponse,
  GetSsuRequest,
  GetSsuResponse,
  BulkImportSkuByExcelV2Request,
  BulkImportSkuByExcelV2Response,
  BulkCreateCategorySkuV2Request,
  BulkCreateCategorySkuV2Response,
  BulkCreateLiteCategorySkuRequest,
  BulkCreateLiteCategorySkuResponse,
  BulkCreateCategorySkuV2Data,
  BulkUpdateSkuByExcelV2Request,
  BulkUpdateSkuByExcelV2Response,
  BulkUpdateLiteSkuByExcelRequest,
  BulkUpdateLiteSkuByExcelResponse,
  BulkUpdateSkuByExcelV2Data,
  BulkUpdateSkuV2Request,
  BulkUpdateSkuV2Response,
  BulkUpdateSkuV2Param,
  BulkUpdateBasicPriceV2Param,
  BulkUpdateCustomerBasicPriceV2Param,
  ListSsuRequest,
  ListSsuByRelationGroupRequest,
  ListSsuByRelationGroupResponse,
  ListSsuResponse,
  ListSsuResponse_SsuInfo,
  CreateRuleSetRequest,
  CreateRuleSetResponse,
  UpdateRuleSetRequest,
  UpdateRuleSetResponse,
  DeleteRuleSetRequest,
  DeleteRuleSetResponse,
  GetRuleSetRequest,
  GetRuleSetResponse,
  ListRuleSetRequest,
  ListRuleSetResponse,
  CreateUnitRequest,
  CreateUnitResponse,
  UpdateUnitRequest,
  UpdateUnitResponse,
  DeleteUnitRequest,
  DeleteUnitResponse,
  ListUnitRequest,
  ListUnitResponse,
  ListGroupUnitRequest,
  ListGroupUnitResponse,
  ListUnitOfGroupRequest,
  ListUnitOfGroupResponse,
  InitCategoryImageRequest,
  InitCategoryImageResponse,
  ListCategoryImageRequest,
  ListCategoryImageResponse,
  GetFilterSkuInCustomerQuotationRequest,
  GetFilterSkuInCustomerQuotationResponse,
  GetQuotationRequest,
  GetQuotationResponse,
  GetDefaultQuotationRequest,
  GetDefaultQuotationResponse,
  CreateQuotationRequest,
  CreateQuotationResponse,
  CreateQuotationV2Request,
  CreateQuotationV2Response,
  UpdateQuotationRequest,
  UpdateQuotationResponse,
  UpdateQuotationV2Request,
  UpdateQuotationV2Response,
  BulkUpdateQuotationV2Request,
  BulkUpdateQuotationV2Response,
  BulkUpdateQuotationV2Param,
  BulkUnsetCustomerQuotationRelationV2Request,
  BulkUnsetCustomerQuotationRelationV2Response,
  BulkUnsetCustomerToCustomerQuotationRelationV2Request,
  BulkUnsetCustomerToCustomerQuotationRelationV2Response,
  BulkUpdateBasicPriceV2Request,
  BulkUpdateBasicPriceV2Response,
  BulkUpdateCustomerBasicPriceV2Request,
  BulkUpdateCustomerBasicPriceV2Response,
  CopyPeriodQuotationV2Param,
  CopyPeriodQuotationV2Request,
  CopyPeriodQuotationV2Response,
  CopyQuotationV2Request,
  CopyQuotationV2Response,
  CopyQuotationV2Param,
  DeleteQuotationRequest,
  DeleteQuotationResponse,
  DeleteQuotationV2Request,
  DeleteQuotationV2Response,
  DeleteLiteQuotationRequest,
  DeleteLiteQuotationResponse,
  BindMaskSkuToCustomerQuotationRequest,
  BindMaskSkuToCustomerQuotationResponse,
  UnBindMaskSkuToCustomerQuotationRequest,
  UnBindMaskSkuToCustomerQuotationResponse,
  GetFilterCustomerIdsRequest,
  GetFilterCustomerIdsResponse,
  BulkUpdateMaskSkuToCustomerQuotationRequest,
  BulkUpdateMaskSkuToCustomerQuotationResponse,
  BulkUpdateMaskSkuToCustomerQuotationParam,
  ListQuotationRequest,
  ListQuotationResponse,
  ListQuotationV2Request,
  ListQuotationV2Response,
  GetValidQuotationByCustomerIdRequest,
  GetValidQuotationByCustomerIdResponse,
  GetValidQuotationByCustomerIdResponse_ValidTimeRange,
  ListQuotationForBindingSkuRequest,
  ListQuotationForBindingSkuResponse,
  ListQuotationForBatchUpdateBasicPriceRequest,
  ListQuotationForBatchUpdateBasicPriceResponse,
  ListQuotationForHistoryBasicPricesRequest,
  ListQuotationForHistoryBasicPricesResponse,
  ListQuotationForHistoryBasicPricesResponse_IvalidQuotations,
  GetManyQuotationRequest,
  GetManyQuotationResponse,
  GetManyQuotationByNameRequest,
  GetManyQuotationByNameResponse,
  SetCustomerQuotationRelationRequest,
  SetCustomerQuotationRelationResponse,
  SetLiteDefaultQuotationRequest,
  SetLiteDefaultQuotationResponse,
  UnsetCustomerQuotationRelationRequest,
  UnsetCustomerQuotationRelationResponse,
  DeleteCustomerQuotationRelationRequest,
  DeleteCustomerQuotationRelationResponse,
  UpdateQuotationSortNumRequest,
  UpdateQuotationSortNumResponse,
  GetCustomerIdsByQuotationIdRequest,
  GetCustomerIdsByQuotationIdResponse,
  GetCustomerIdsByQuotationIdsRequest,
  GetCustomerIdsByQuotationIdsResponse,
  GetCustomerIdsByQuotationIdsResponse_CustomerIds,
  GetQuotationByCustomerIdRequest,
  GetQuotationByCustomerIdResponse,
  GetQuotationIdsByCustomerIdsRequest,
  GetQuotationIdsByCustomerIdsResponse,
  GetCustomerQuotationRelationRequest,
  GetCustomerQuotationRelationResponse,
  SetBasicPriceRequest,
  SetBasicPriceResponse,
  SetBasicPriceV2Request,
  SetBasicPriceV2Response,
  DeltaUpdateBasicPriceV2Request,
  DeltaUpdateBasicPriceV2Response,
  DeltaDeleteBasicPriceV2Request,
  DeltaDeleteBasicPriceV2Response,
  SetSpecialBasicPriceV2Request,
  SetSpecialBasicPriceV2Request_SpecialBasicPriceInfo,
  SetSpecialBasicPriceV2Response,
  UpdateLiteBasicPriceRequest,
  UpdateLiteBasicPriceRequest_SpecialBasicPriceInfo,
  UpdateLiteBasicPriceResponse,
  GetManySkuSaleInventoryRequest,
  GetManySkuSaleInventoryResponse,
  MultiReplaceSkuSaleInventoryRequest,
  MultiReplaceSkuSaleInventoryResponse,
  MultiDeltaSkuSaleInventoryRequest,
  MultiDeltaSkuSaleInventoryResponse,
  AddUnitToBondQuotationsRequest,
  AddUnitToBondQuotationsResponse,
  CalBasicPriceV2ByPricingFormulaRequest,
  CalBasicPriceV2ByPricingFormulaResponse,
  CalculatePricingFormulaRequest,
  CalculatePricingFormulaResponse,
  BatchPresetPricingFormulaRequest,
  BatchPresetPricingFormulaResponse,
  BatchCalculatePricingFormulaRequest,
  BatchCalculatePricingFormulaResponse,
  ListSpecialBasicPriceV2Request,
  ListSpecialBasicPriceV2Response,
  ListErrSpecialBasicPriceV2Request,
  ListErrSpecialBasicPriceV2Response,
  ListSimpleBasicPriceRequest,
  ListSimpleBasicPriceResponse,
  ListBasicPriceV2Request,
  ListBasicPriceV2Response,
  ListBasicPriceDetailRequest,
  ListBasicPriceDetailResponse,
  ListLiteBasicPriceRequest,
  ListLiteBasicPriceResponse,
  ListHistoryBasicPriceRequest,
  ListHistoryBasicPriceResponse,
  ListSkuHistoryBasicPriceRequest,
  ListSkuHistoryBasicPriceRequest_Filter,
  ListSkuHistoryBasicPriceResponse,
  ListSkuHistoryBasicPriceResponse_QuotationReferencePrice,
  ListSkuHistoryBasicPriceResponse_ReferencePrices,
  ListHistoryBasicPriceByCustomerIDRequest,
  ListHistoryBasicPriceByCustomerIDResponse,
  GetManyQuotationBasicPriceV2Request,
  GetManyQuotationBasicPriceV2Request_SupplierSku,
  GetManyQuotationBasicPriceV2Response,
  ListBasicPriceForBatchUpdateRequest,
  ListBasicPriceForBatchUpdateResponse,
  UpdateBasicPriceBySkuRequest,
  UpdateBasicPriceBySkuResponse,
  UpdateBasicPriceItemByPricingFormulaRequest,
  UpdateBasicPriceItemByPricingFormulaResponse,
  ListBasicPriceByCustomerIDRequest,
  ListBasicPriceByCustomerIDResponse,
  ListLiteBasicPriceByCustomerIDRequest,
  ListLiteBasicPriceByCustomerIDResponse,
  ListBasicPriceDetailByCustomerIDRequest,
  ListBasicPriceDetailByCustomerIDResponse,
  ListBasicPriceDetailByCustomerIDForSearchRequest,
  ListBasicPriceDetailByCustomerIDForSearchResponse,
  ListSkuAndBasicPriceDetailForSearchRequest,
  ListSkuAndBasicPriceDetailForSearchResponse,
  ListFormulaFromSkuBindingQuotationsRequest,
  ListFormulaFromSkuBindingQuotationsResponse,
  ListFormulaFromSkuBindingQuotationsResponse_FormulaInfo,
  ExportBasicPriceByCustomerIdRequest,
  ExportBasicPriceByCustomerIdResponse,
  ExportSpecialBasicPriceRequest,
  ExportSpecialBasicPriceResponse,
  ImportSpecialBasicPriceRequest,
  ImportSpecialBasicPriceResponse,
  AsyncDeleteManySpecialBasicPriceV2Request,
  AsyncDeleteManySpecialBasicPriceV2Response,
  DeleteManyBasicPriceV2Request,
  DeleteManyBasicPriceV2Response,
  ListMenuPeriodGroupRequest,
  ListMenuPeriodGroupResponse,
  GetManyMenuPeriodGroupRequest,
  GetManyMenuPeriodGroupResponse,
  GetManyMenuPeriodGroupByNameRequest,
  GetManyMenuPeriodGroupByNameResponse,
  CreateMenuPeriodGroupRequest,
  CreateMenuPeriodGroupResponse,
  UpdateMenuPeriodGroupRequest,
  UpdateMenuPeriodGroupResponse,
  DeleteMenuPeriodGroupRequest,
  DeleteMenuPeriodGroupResponse,
  ListMenuDetailRequest,
  ListMenuDetailResponse,
  ListMenuDetailV2Request,
  ListMenuDetailV2Response,
  CreateMenuDetailRequest,
  CreateMenuDetailResponse,
  UpdateMenuDetailRequest,
  UpdateMenuDetailResponse,
  CopyBasicPriceRequest,
  CopyBasicPriceResponse,
  ExportMenuDetailRequest,
  ExportMenuDetailResponse,
  ImportMenuDetailRequest,
  ImportMenuDetailResponse,
  CreateFavoriteRequest,
  CreateFavoriteResponse,
  UpdateFavoriteRequest,
  UpdateFavoriteResponse,
  DeleteFavoriteRequest,
  DeleteFavoriteResponse,
  ListFavoriteRequest,
  ListFavoriteResponse,
  GetFavoriteRequest,
  CreateManyFavoriteSkuV2Request,
  CreateManyFavoriteSkuV2Response,
  DeleteManyFavoriteSkuV2Request,
  DeleteManyFavoriteSkuV2Response,
  ListFavoriteSkuV2Request,
  ListFavoriteSkuV2Response,
  GetManyBasicPriceRequest,
  GetManyBasicPriceResponse,
  GetManyFinanceCategoryRequest,
  GetManyFinanceCategoryResponse,
  CreateBasicPriceRequest,
  CreateBasicPriceResponse,
  ListMarketSsuRequest,
  ListMarketSsuResponse,
  CreateReleationCustomerAndSupplierRequest,
  CreateReleationCustomerAndSupplierResponse,
  ImportQuotationRequest,
  ImportQuotationResponse,
  ExportQuotationRequest,
  ExportQuotationResponse,
  ImportQuotationCreateBySsuRequest,
  ImportQuotationCreateBySsuResponse,
  ImportQuotationChangeBySsuRequest,
  ImportQuotationChangeBySsuResponse,
  ExportQuotationBySsuRequest,
  ExportQuotationBySsuResponse,
  CreateQuotationBasicPriceRequest,
  CreateQuotationBasicPriceRequest_ProtocolSheet,
  CreateQuotationBasicPriceResponse,
  CreateQuotationBasicPriceV2Request,
  CreateQuotationBasicPriceV2Response,
  UpdateQuotationBasicPriceRequest,
  UpdateQuotationBasicPriceResponse,
  UpdateQuotationBasicPriceV2Request,
  UpdateQuotationBasicPriceV2Response,
  ListBasicPriceRequest,
  ListBasicPriceResponse,
  ListBasicPriceResponse_Price,
  GetBasicPriceRequest,
  GetBasicPriceResponse,
  GetImportQuotationBasicPriceTemplateRequest,
  GetImportQuotationBasicPriceTemplateResponse,
  GetBasicPriceSnapshotRequest,
  GetBasicPriceSnapshotResponse,
  GetBasicPriceSnapshotResponse_Price,
  CreateBasicPriceSnapshotRequest,
  CreateBasicPriceSnapshotResponse,
  InitMerchandiseRequest,
  InitMerchandiseResponse,
  CreateManySkuSyncFromYMTRequest,
  CreateManySkuSyncFromYMTResponse,
  CreateMerchandiseCategoryRequest,
  CreateMerchandiseCategoryResponse,
  CleanCategoryRequest,
  CleanCategoryResponse,
  CleanSpuRequest,
  CleanSpuResponse,
  CleanSkuRequest,
  CleanSkuResponse,
  CleanQuotationRequest,
  CleanQuotationResponse,
  CleanSsuRequest,
  CleanSsuResponse,
  CleanCustomerQuotationRelationRequest,
  CleanCustomerQuotationRelationResponse,
  CleanBasicPriceRequest,
  CleanBasicPriceResponse,
  CleanFavoriteRequest,
  CleanFavoriteResponse,
  CleanFavoriteSkuRequest,
  CleanFavoriteSkuResponse,
  CleanMenuPeriodGroupRequest,
  CleanMenuPeriodGroupResponse,
  CleanMenuDetailRequest,
  CleanMenuDetailResponse,
  CreateBasicPriceByPurchaseUserRequest,
  CreateBasicPriceByPurchaseUserRequest_PriceItem,
  CreateBasicPriceByPurchaseUserResponse,
  GetCategoryByCategoryNameRequest,
  GetCategoryByCategoryNameResponse,
  ListCategoryByNameRequest,
  ListCategoryByNameResponse,
  GetSpuBySpuNameRequest,
  GetSpuBySpuNameResponse,
  SetReferencePriceRequest,
  SetReferencePriceResponse,
  SetReferencePriceV2Request,
  SetReferencePriceV2Request_RefPriceData,
  SetReferencePriceV2Response,
  GetManyReferencePriceRequest,
  GetManyReferencePriceResponse,
  GetSkuReferencePricesFromPeriodicQuotationRequest,
  GetSkuReferencePricesFromPeriodicQuotationResponse,
  GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicPrice,
  GetSkuReferencePricesFromPeriodicQuotationResponse_PeriodicQuotationReferencePrice,
  GetSkuReferencePricesRequest,
  GetSkuReferencePricesRequest_Filter,
  GetSkuReferencePricesResponse,
  GetSkuReferencePricesResponse_QuotationReferencePrice,
  GetSkuReferencePricesResponse_ReferencePrice,
  GetSkuReferencePricesResponse_ReferencePrices,
  GetSkuReferPurAndInPricesRequest,
  GetSkuReferPurAndInPricesRequest_Filter,
  GetSkuReferPurAndInPricesResponse,
  GetSkuReferPurAndInPricesResponse_ReferencePrice,
  GetSkuReferPurAndInPricesResponse_ReferencePrices,
  GetSkuReferencePricesByTypeRequest,
  GetSkuReferencePricesByTypeRequest_SupplierSkus,
  GetSkuReferencePricesByTypeResponse,
  GetSkuReferencePricesByTypeResponse_RefPriceValue,
  GetManyMealCalendarRequest,
  GetManyMealCalendarResponse,
  CreateOrUpdateMealCalendarRequest,
  CreateOrUpdateMealCalendarResponse,
  BulkUpdateSkuSupplierCooperateRequest,
  BulkUpdateSkuSupplierCooperateResponse,
  BulkUpdateSkuSupplierPercentageRequest,
  BulkUpdateSkuSupplierPercentageRequest_Item,
  BulkUpdateSkuSupplierPercentageResponse,
  UpdateSkuShelfRequest,
  UpdateSkuShelfResponse,
  LockMenuPeriodGroupRequest,
  LockMenuPeriodGroupResponse,
  UnlockMenuPeriodGroupRequest,
  UnlockMenuPeriodGroupResponse,
  BatchUpdateSkuPackUnitRequest,
  BatchUpdateSkuPackUnitData,
  BatchUpdateSkuPackUnitData_Result,
  BatchUpdateSkuPackUnitResponse,
  BatchUpdateSkuSupplierRequest,
  BatchUpdateSkuSupplierData,
  BatchUpdateSkuSupplierData_Result,
  BatchUpdateSkuSupplierResponse,
  ListBestSaleSkuRequest,
  ListBestSaleSkuResponse,
  BulkImportBasicPriceV2Request,
  BulkImportBasicPriceV2Response,
  BulkImportBasicPriceV2Data,
  BulkImportBasicPriceV2LiteRequest,
  BulkImportBasicPriceV2LiteResponse,
  GetBulkImportBasicPriceV2LiteErrRequest,
  GetBulkImportBasicPriceV2LiteErrResponse,
  BulkImportCustomerBasicPriceV2Request,
  BulkImportCustomerBasicPriceV2Response,
  BulkImportCustomerBasicPriceV2Data,
  ExportBasicPriceV2Request,
  ExportBasicPriceV2Response,
  ExportBasicPriceExecuteData,
  ExportCustomerBasicPriceV2Request,
  ExportCustomerBasicPriceV2Response,
  ExportSkuHistoryBasicPriceRequest,
  ExportSkuHistoryBasicPriceResponse,
  ExportHistoryBasicPriceRequest,
  ExportHistoryBasicPriceResponse,
  GetBasicPriceV2Request,
  GetBasicPriceV2Response,
  BatchSyncPriceToOtherQuotationRequest,
  BatchSyncPriceToOtherQuotationResponse,
  DeltaUpdateBasicPriceV2ByPricingFormulaRequest,
  DeltaUpdateBasicPriceV2ByPricingFormulaRequest_BasicPriceItemInfo,
  DeltaUpdateBasicPriceV2ByPricingFormulaResponse,
  GetManyEshopMenuPeriodGroupRequest,
  GetManyEshopMenuPeriodGroupResponse,
  ListEshopMenuPeriodGroupRequest,
  ListEshopMenuPeriodGroupResponse,
  CreateEshopMenuPeriodGroupRequest,
  CreateEshopMenuPeriodGroupResponse,
  BatchCreateEshopMenuPeriodGroupRequest,
  BatchCreateEshopMenuPeriodGroupResponse,
  UpdateEshopMenuPeriodGroupRequest,
  UpdateEshopMenuPeriodGroupResponse,
  DeleteEshopMenuPeriodGroupRequest,
  DeleteEshopMenuPeriodGroupResponse,
  GetMenuRequest,
  GetMenuResponse,
  GetManyMenuRequest,
  GetManyMenuResponse,
  ListSimpleMenuRequest,
  ListSimpleMenuResponse,
  ListMenuRequest,
  ListMenuResponse,
  DeleteWideMenuRequest,
  DeleteWideMenuResponse,
  CheckMenuCategoryForWideMenuRequest,
  CheckMenuCategoryForWideMenuResponse,
  SaveWideMenuRequest,
  SaveWideMenuResponse,
  CreateMenuRequest,
  CreateMenuResponse,
  UpdateMenuRequest,
  UpdateMenuResponse,
  BatchUpdateMenuRequest,
  BatchUpdateMenuResponse,
  DeleteMenuRequest,
  DeleteMenuResponse,
  GetEshopMenuDetailRequest,
  GetEshopMenuDetailResponse,
  ListSimpleMenuDetailRequest,
  ListSimpleMenuDetailResponse,
  ListEshopMenuDetailRequest,
  ListEshopMenuDetailResponse,
  SaveEshopMenuDetailRequest,
  SaveEshopMenuDetailResponse,
  CreateEshopMenuDetailRequest,
  CreateEshopMenuDetailResponse,
  UpdateEshopMenuDetailRequest,
  UpdateEshopMenuDetailResponse,
  DeleteEshopMenuDetailRequest,
  DeleteEshopMenuDetailResponse,
  BatchSaveEshopMenuDetailRequest,
  BatchSaveEshopMenuDetailResponse,
  GetMenuDetailSkuRequest,
  GetMenuDetailSkuResponse,
  ListMenuDetailSkuRequest,
  ListMenuDetailSkuResponse,
  CreateMenuDetailSkuRequest,
  CreateMenuDetailSkuResponse,
  UpdateMenuDetailSkuRequest,
  UpdateMenuDetailSkuResponse,
  DeleteMenuDetailSkuRequest,
  DeleteMenuDetailSkuResponse,
  SaveCustomerMenuRelationForCustomersRequest,
  SaveCustomerMenuRelationForCustomersResponse,
  SaveCustomerMenuRelationForMenusRequest,
  SaveCustomerMenuRelationForMenusRequest_MenuPeriodGroupMenu,
  SaveCustomerMenuRelationForMenusResponse,
  SetCustomerMenuRelationRequest,
  SetCustomerMenuRelationResponse,
  ListCustomerMenuRelationRequest,
  ListCustomerMenuRelationResponse,
  UnsetCustomerMenuRelationRequest,
  UnsetCustomerMenuRelationResponse,
  GetCustomerMenuRelationRequest,
  GetCustomerMenuRelationResponse,
  GetManyCustomerMenusRequest,
  GetManyCustomerMenusResponse,
  GetCustomersForMenuRelationRequest,
  GetCustomersForMenuRelationResponse,
  GetCustomerMenusRequest,
  GetCustomerMenusResponse,
  ListEshopMenuRequest,
  ListEshopMenuResponse,
  SyncMarketDataRequest,
  SyncMarketDataResponse,
  ListMarketDataRequest,
  ListMarketDataResponse,
  BatchUpdateMinOrderNumberRequest,
  BatchUpdateMinOrderNumberRequest_MinOrderNumber,
  BatchUpdateMinOrderNumberResponse,
  BatchUpdateBasicPriceItemInfoRequest,
  BatchUpdateBasicPriceItemInfoRequest_BasicPriceItemInfo,
  BatchUpdateBasicPriceItemInfoResponse,
  BatchRelatedAllSkuRequest,
  BatchRelatedAllSkuResponse,
  BatchCleanSkuDiyUnitRequest,
  BatchCleanSkuDiyUnitResponse,
  AgreementPriceCheckRequest,
  AgreementPriceCheckRequest_SkuSimpleInfo,
  AgreementPriceCheckResponse,
  ManualSyncTemporaryProducAndUnitToOrderRequest,
  ManualSyncTemporaryProducAndUnitToOrderResponse,
  RepeatedSkuUnitRateRequest,
  RepeatedSkuUnitRateResponse,
  MatchSkuRequest,
  SameSkuUnitRateRequest,
  SameSkuUnitRateRequest_SkuSnapUnit,
  SameSkuUnitRateResponse,
  MatchSkuResponse,
  MatchSkuResponse_Item,
  MatchSkuResponse_ItemGroup,
  MatchSkuResponse_MatchResult,
  WriteBackSkuCostRequest,
  WriteBackSkuCostRequest_SkuCost,
  WriteBackSkuCostResponse,
  CopySkuFieldToTargetSkuRequest,
  CopySkuFieldToTargetSkuResponse,
  ListSkuWithQuotationByCustomerIdRequest,
  ListSkuWithQuotationByCustomerIdResponse,
  SyncMenuDetailRequest,
  SyncMenuDetailResponse,
  SyncUpdateCategoryRequest,
  SyncUpdateCategoryResponse,
  SyncQuotationBasicPriceRequest,
  SyncQuotationBasicPriceRequest_BasicPrice,
  SyncQuotationBasicPriceRequest_ExtQuotation,
  SyncQuotationBasicPriceResponse,
  SyncCreateSkuRequest,
  SyncCreateSkuResponse,
  SyncUpdateSkuRequest,
  SyncUpdateSkuResponse,
  GetDetailSkuRequest,
  GetDetailSkuResponse,
  SyncDeleteSkuRequest,
  SyncDeleteSkuResponse,
  SyncCreateQuotationRequest,
  SyncCreateQuotationResponse,
  SyncUpdateQuotationRequest,
  SyncUpdateQuotationResponse,
  SyncDeleteQuotationRequest,
  SyncDeleteQuotationResponse,
  GetDetailQuotationRequest,
  GetDetailQuotationResponse,
  BindQuotationBasicPriceRequest,
  BindQuotationBasicPriceRequest_QuotationBasicPrice,
  BindQuotationBasicPriceRequest_QuotationBasicPriceSku,
  BindQuotationBasicPriceResponse,
  DeleteBindQuotationBasicPriceRequest,
  DeleteBindQuotationBasicPriceRequest_DeleteQuotationBasicPrice,
  DeleteBindQuotationBasicPriceRequest_DeleteSku,
  DeleteBindQuotationBasicPriceResponse,
  BindQuotationCustomerRequest,
  BindQuotationCustomerRequest_QuotationCustomer,
  BindQuotationCustomerResponse,
  DeleteBindQuotationCustomerRequest,
  DeleteBindQuotationCustomerRequest_DeleteQuotationCustomer,
  DeleteBindQuotationCustomerResponse,
  GetUnitRequest,
  GetUnitResponse,
  QueryUnitRequest,
  QueryUnitResponse,
  QueryCategoryRequest,
  QueryCategoryResponse,
  GetInternalCategoryRequest,
  GetInternalCategoryResponse,
  QueryInternalCategoryRequest,
  QueryInternalCategoryResponse,
  UpdateInternalCategoryRequest,
  UpdateInternalCategoryResponse,
  DeleteInternalCategoryRequest,
  DeleteInternalCategoryResponse,
  GetFinanceCategoryRequest,
  GetFinanceCategoryResponse,
  ListFinanceCategoryRequest,
  ListFinanceCategoryResponse,
  QueryFinanceCategoryRequest,
  QueryFinanceCategoryResponse,
  CreateFinanceCategoryRequest,
  CreateFinanceCategoryResponse,
  UpdateFinanceCategoryRequest,
  UpdateFinanceCategoryResponse,
  DeleteFinanceCategoryRequest,
  DeleteFinanceCategoryResponse,
  QuerySpuRequest,
  QuerySpuResponse,
  QuerySkuRequest,
  QuerySkuResponse,
  CreateSkuRequest,
  CreateSkuResponse,
  UpdateSkuRequest,
  UpdateSkuResponse,
  DeleteSkuRequest,
  DeleteSkuResponse,
  ListSkuNutritionRequest,
  ListSkuNutritionResponse,
  QuerySkuNutritionRequest,
  QuerySkuNutritionResponse,
  CreateSkuNutritionRequest,
  CreateSkuNutritionResponse,
  UpdateSkuNutritionRequest,
  UpdateSkuNutritionResponse,
  DeleteSkuNutritionRequest,
  DeleteSkuNutritionResponse,
  GetNutritionRequest,
  GetNutritionResponse,
  QueryNutritionRequest,
  QueryNutritionResponse,
  CreateNutritionRequest,
  CreateNutritionResponse,
  UpdateNutritionRequest,
  UpdateNutritionResponse,
  GetSkuSaleInventoryRequest,
  GetSkuSaleInventoryResponse,
  ListSkuSaleInventoryRequest,
  ListSkuSaleInventoryResponse,
  QuerySkuSaleInventoryRequest,
  QuerySkuSaleInventoryResponse,
  CreateSkuSaleInventoryRequest,
  CreateSkuSaleInventoryResponse,
  UpdateSkuSaleInventoryRequest,
  UpdateSkuSaleInventoryResponse,
  DeleteSkuSaleInventoryRequest,
  DeleteSkuSaleInventoryResponse,
  QueryQuotationRequest,
  QueryQuotationResponse,
  GetCustomerPriceOnCategoryRequest,
  GetCustomerPriceOnCategoryResponse,
  ListCustomerPriceOnCategoryRequest,
  ListCustomerPriceOnCategoryResponse,
  QueryCustomerPriceOnCategoryRequest,
  QueryCustomerPriceOnCategoryResponse,
  CreateCustomerPriceOnCategoryRequest,
  CreateCustomerPriceOnCategoryResponse,
  UpdateCustomerPriceOnCategoryRequest,
  UpdateCustomerPriceOnCategoryResponse,
  DeleteCustomerPriceOnCategoryRequest,
  DeleteCustomerPriceOnCategoryResponse,
  GetCustomerPriceMaskSkuRequest,
  GetCustomerPriceMaskSkuResponse,
  ListCustomerPriceMaskSkuRequest,
  ListCustomerPriceMaskSkuResponse,
  QueryCustomerPriceMaskSkuRequest,
  QueryCustomerPriceMaskSkuResponse,
  CreateCustomerPriceMaskSkuRequest,
  CreateCustomerPriceMaskSkuResponse,
  UpdateCustomerPriceMaskSkuRequest,
  UpdateCustomerPriceMaskSkuResponse,
  DeleteCustomerPriceMaskSkuRequest,
  DeleteCustomerPriceMaskSkuResponse,
  ListCustomerQuotationRelationRequest,
  ListCustomerQuotationRelationResponse,
  QueryCustomerQuotationRelationRequest,
  QueryCustomerQuotationRelationResponse,
  CreateCustomerQuotationRelationRequest,
  CreateCustomerQuotationRelationResponse,
  UpdateCustomerQuotationRelationRequest,
  UpdateCustomerQuotationRelationResponse,
  QueryMenuRequest,
  QueryMenuResponse,
  QueryCustomerMenuRelationRequest,
  QueryCustomerMenuRelationResponse,
  CreateCustomerMenuRelationRequest,
  CreateCustomerMenuRelationResponse,
  UpdateCustomerMenuRelationRequest,
  UpdateCustomerMenuRelationResponse,
  DeleteCustomerMenuRelationRequest,
  DeleteCustomerMenuRelationResponse,
  GetMenuDetailRequest,
  GetMenuDetailResponse,
  QueryMenuDetailRequest,
  QueryMenuDetailResponse,
  DeleteMenuDetailRequest,
  DeleteMenuDetailResponse,
  QueryMenuDetailSkuRequest,
  QueryMenuDetailSkuResponse,
  GetMenuPeriodGroupRequest,
  GetMenuPeriodGroupResponse,
  QueryMenuPeriodGroupRequest,
  QueryMenuPeriodGroupResponse,
  QueryBasicPriceRequest,
  QueryBasicPriceResponse,
  UpdateBasicPriceRequest,
  UpdateBasicPriceResponse,
  DeleteBasicPriceRequest,
  DeleteBasicPriceResponse,
  GetBasicPriceDetailRequest,
  GetBasicPriceDetailResponse,
  QueryBasicPriceDetailRequest,
  QueryBasicPriceDetailResponse,
  CreateBasicPriceDetailRequest,
  CreateBasicPriceDetailResponse,
  UpdateBasicPriceDetailRequest,
  UpdateBasicPriceDetailResponse,
  DeleteBasicPriceDetailRequest,
  DeleteBasicPriceDetailResponse,
  GetMealCalendarRequest,
  GetMealCalendarResponse,
  ListMealCalendarRequest,
  ListMealCalendarResponse,
  QueryMealCalendarRequest,
  QueryMealCalendarResponse,
  CreateMealCalendarRequest,
  CreateMealCalendarResponse,
  UpdateMealCalendarRequest,
  UpdateMealCalendarResponse,
  DeleteMealCalendarRequest,
  DeleteMealCalendarResponse,
  GetFavoriteResponse,
  QueryFavoriteRequest,
  QueryFavoriteResponse,
  GetFavoriteSkuRequest,
  GetFavoriteSkuResponse,
  ListFavoriteSkuRequest,
  ListFavoriteSkuResponse,
  QueryFavoriteSkuRequest,
  QueryFavoriteSkuResponse,
  CreateFavoriteSkuRequest,
  CreateFavoriteSkuResponse,
  UpdateFavoriteSkuRequest,
  UpdateFavoriteSkuResponse,
  DeleteFavoriteSkuRequest,
  DeleteFavoriteSkuResponse,
  QueryRuleSetRequest,
  QueryRuleSetResponse,
  GetCategoryImageRequest,
  GetCategoryImageResponse,
  QueryCategoryImageRequest,
  QueryCategoryImageResponse,
  CreateCategoryImageRequest,
  CreateCategoryImageResponse,
  UpdateCategoryImageRequest,
  UpdateCategoryImageResponse,
  QueryReferencePriceRequest,
  QueryReferencePriceResponse,
  CreateReferencePriceRequest,
  CreateReferencePriceResponse,
  GetMarketDataRequest,
  GetMarketDataResponse,
  QueryMarketDataRequest,
  QueryMarketDataResponse,
  CreateMarketDataRequest,
  CreateMarketDataResponse,
  UpdateMarketDataRequest,
  UpdateMarketDataResponse,
  DeleteMarketDataRequest,
  DeleteMarketDataResponse,
  GetSkuAcceptanceCriteriaRequest,
  GetSkuAcceptanceCriteriaResponse,
  ListSkuAcceptanceCriteriaRequest,
  ListSkuAcceptanceCriteriaResponse,
  QuerySkuAcceptanceCriteriaRequest,
  QuerySkuAcceptanceCriteriaResponse,
  CreateSkuAcceptanceCriteriaRequest,
  CreateSkuAcceptanceCriteriaResponse,
  UpdateSkuAcceptanceCriteriaRequest,
  UpdateSkuAcceptanceCriteriaResponse,
  SaveSkuAcceptanceCriteriaRequest,
  SaveSkuAcceptanceCriteriaResponse,
  DeleteSkuAcceptanceCriteriaRequest,
  DeleteSkuAcceptanceCriteriaResponse,
  SyncQuotationBasicPriceByImportRequest,
  SyncQuotationBasicPriceByImportResponse,
  GetPackUnitRequest,
  GetPackUnitResponse,
  QueryPackUnitRequest,
  QueryPackUnitResponse,
  CreatePackUnitRequest,
  CreatePackUnitResponse,
  UpdatePackUnitRequest,
  UpdatePackUnitResponse,
  DeletePackUnitRequest,
  DeletePackUnitResponse,
  AsyncManagebaseSkuEventListenerRequest,
  AsyncManagebaseSkuEventListenerResponse,
  AsyncManagebaseSkuCategoryEventListenerRequest,
  AsyncManagebaseSkuCategoryEventListenerResponse,
  AsyncManagebaseSkuUnitEventListenerRequest,
  AsyncManagebaseSkuUnitEventListenerResponse,
} from './types'

import instance from './request'
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenSource } from 'axios'
export type RequestFnType<Request  extends { axiosConfig?: AxiosRequestConfig }, Response> = ((params: Request) => Promise<AxiosResponse<Response>>) & {
  url: string
  autoCancel: () => (params: Request) => Promise<AxiosResponse<Response>>
  cancel?: () => void
}

/** 
 * 系统自动添加，请勿删除
 * */
export const DeletePackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeletePackUnit';
  const requestFn: RequestFnType<DeletePackUnitRequest, DeletePackUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdatePackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdatePackUnit';
  const requestFn: RequestFnType<UpdatePackUnitRequest, UpdatePackUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreatePackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreatePackUnit';
  const requestFn: RequestFnType<CreatePackUnitRequest, CreatePackUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryPackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryPackUnit';
  const requestFn: RequestFnType<QueryPackUnitRequest, QueryPackUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetPackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetPackUnit';
  const requestFn: RequestFnType<GetPackUnitRequest, GetPackUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSkuAcceptanceCriteria';
  const requestFn: RequestFnType<DeleteSkuAcceptanceCriteriaRequest, DeleteSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuAcceptanceCriteria';
  const requestFn: RequestFnType<UpdateSkuAcceptanceCriteriaRequest, UpdateSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 保存商品验收标准
 * */
export const SaveSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveSkuAcceptanceCriteria';
  const requestFn: RequestFnType<SaveSkuAcceptanceCriteriaRequest, SaveSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSkuAcceptanceCriteria';
  const requestFn: RequestFnType<CreateSkuAcceptanceCriteriaRequest, CreateSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QuerySkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySkuAcceptanceCriteria';
  const requestFn: RequestFnType<QuerySkuAcceptanceCriteriaRequest, QuerySkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuAcceptanceCriteria';
  const requestFn: RequestFnType<ListSkuAcceptanceCriteriaRequest, ListSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetSkuAcceptanceCriteria = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuAcceptanceCriteria';
  const requestFn: RequestFnType<GetSkuAcceptanceCriteriaRequest, GetSkuAcceptanceCriteriaResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMarketData';
  const requestFn: RequestFnType<DeleteMarketDataRequest, DeleteMarketDataResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMarketData';
  const requestFn: RequestFnType<UpdateMarketDataRequest, UpdateMarketDataResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMarketData';
  const requestFn: RequestFnType<CreateMarketDataRequest, CreateMarketDataResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMarketData';
  const requestFn: RequestFnType<QueryMarketDataRequest, QueryMarketDataResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMarketData';
  const requestFn: RequestFnType<GetMarketDataRequest, GetMarketDataResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateReferencePrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateReferencePrice';
  const requestFn: RequestFnType<CreateReferencePriceRequest, CreateReferencePriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryReferencePrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryReferencePrice';
  const requestFn: RequestFnType<QueryReferencePriceRequest, QueryReferencePriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCategoryImage';
  const requestFn: RequestFnType<UpdateCategoryImageRequest, UpdateCategoryImageResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCategoryImage';
  const requestFn: RequestFnType<CreateCategoryImageRequest, CreateCategoryImageResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCategoryImage';
  const requestFn: RequestFnType<QueryCategoryImageRequest, QueryCategoryImageResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCategoryImage';
  const requestFn: RequestFnType<GetCategoryImageRequest, GetCategoryImageResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryRuleSet';
  const requestFn: RequestFnType<QueryRuleSetRequest, QueryRuleSetResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteFavoriteSku';
  const requestFn: RequestFnType<DeleteFavoriteSkuRequest, DeleteFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateFavoriteSku';
  const requestFn: RequestFnType<UpdateFavoriteSkuRequest, UpdateFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateFavoriteSku';
  const requestFn: RequestFnType<CreateFavoriteSkuRequest, CreateFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryFavoriteSku';
  const requestFn: RequestFnType<QueryFavoriteSkuRequest, QueryFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListFavoriteSku';
  const requestFn: RequestFnType<ListFavoriteSkuRequest, ListFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFavoriteSku';
  const requestFn: RequestFnType<GetFavoriteSkuRequest, GetFavoriteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryFavorite';
  const requestFn: RequestFnType<QueryFavoriteRequest, QueryFavoriteResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFavorite';
  const requestFn: RequestFnType<GetFavoriteRequest, GetFavoriteResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMealCalendar';
  const requestFn: RequestFnType<DeleteMealCalendarRequest, DeleteMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMealCalendar';
  const requestFn: RequestFnType<UpdateMealCalendarRequest, UpdateMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMealCalendar';
  const requestFn: RequestFnType<CreateMealCalendarRequest, CreateMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMealCalendar';
  const requestFn: RequestFnType<QueryMealCalendarRequest, QueryMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMealCalendar';
  const requestFn: RequestFnType<ListMealCalendarRequest, ListMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMealCalendar';
  const requestFn: RequestFnType<GetMealCalendarRequest, GetMealCalendarResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteBasicPriceDetail';
  const requestFn: RequestFnType<DeleteBasicPriceDetailRequest, DeleteBasicPriceDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateBasicPriceDetail';
  const requestFn: RequestFnType<UpdateBasicPriceDetailRequest, UpdateBasicPriceDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateBasicPriceDetail';
  const requestFn: RequestFnType<CreateBasicPriceDetailRequest, CreateBasicPriceDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryBasicPriceDetail';
  const requestFn: RequestFnType<QueryBasicPriceDetailRequest, QueryBasicPriceDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetBasicPriceDetail';
  const requestFn: RequestFnType<GetBasicPriceDetailRequest, GetBasicPriceDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteBasicPrice';
  const requestFn: RequestFnType<DeleteBasicPriceRequest, DeleteBasicPriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateBasicPrice';
  const requestFn: RequestFnType<UpdateBasicPriceRequest, UpdateBasicPriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateBasicPrice';
  const requestFn: RequestFnType<CreateBasicPriceRequest, CreateBasicPriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryBasicPrice';
  const requestFn: RequestFnType<QueryBasicPriceRequest, QueryBasicPriceResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMenuPeriodGroup';
  const requestFn: RequestFnType<QueryMenuPeriodGroupRequest, QueryMenuPeriodGroupResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMenuPeriodGroup';
  const requestFn: RequestFnType<GetMenuPeriodGroupRequest, GetMenuPeriodGroupResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMenuDetailSku';
  const requestFn: RequestFnType<QueryMenuDetailSkuRequest, QueryMenuDetailSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMenuDetail';
  const requestFn: RequestFnType<DeleteMenuDetailRequest, DeleteMenuDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMenuDetail';
  const requestFn: RequestFnType<QueryMenuDetailRequest, QueryMenuDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMenuDetail';
  const requestFn: RequestFnType<GetMenuDetailRequest, GetMenuDetailResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteCustomerMenuRelation';
  const requestFn: RequestFnType<DeleteCustomerMenuRelationRequest, DeleteCustomerMenuRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCustomerMenuRelation';
  const requestFn: RequestFnType<UpdateCustomerMenuRelationRequest, UpdateCustomerMenuRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCustomerMenuRelation';
  const requestFn: RequestFnType<CreateCustomerMenuRelationRequest, CreateCustomerMenuRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCustomerMenuRelation';
  const requestFn: RequestFnType<QueryCustomerMenuRelationRequest, QueryCustomerMenuRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryMenu';
  const requestFn: RequestFnType<QueryMenuRequest, QueryMenuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCustomerQuotationRelation';
  const requestFn: RequestFnType<UpdateCustomerQuotationRelationRequest, UpdateCustomerQuotationRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCustomerQuotationRelation';
  const requestFn: RequestFnType<CreateCustomerQuotationRelationRequest, CreateCustomerQuotationRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCustomerQuotationRelation';
  const requestFn: RequestFnType<QueryCustomerQuotationRelationRequest, QueryCustomerQuotationRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCustomerQuotationRelation';
  const requestFn: RequestFnType<ListCustomerQuotationRelationRequest, ListCustomerQuotationRelationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteCustomerPriceMaskSku';
  const requestFn: RequestFnType<DeleteCustomerPriceMaskSkuRequest, DeleteCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCustomerPriceMaskSku';
  const requestFn: RequestFnType<UpdateCustomerPriceMaskSkuRequest, UpdateCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCustomerPriceMaskSku';
  const requestFn: RequestFnType<CreateCustomerPriceMaskSkuRequest, CreateCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCustomerPriceMaskSku';
  const requestFn: RequestFnType<QueryCustomerPriceMaskSkuRequest, QueryCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCustomerPriceMaskSku';
  const requestFn: RequestFnType<ListCustomerPriceMaskSkuRequest, ListCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetCustomerPriceMaskSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerPriceMaskSku';
  const requestFn: RequestFnType<GetCustomerPriceMaskSkuRequest, GetCustomerPriceMaskSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteCustomerPriceOnCategory';
  const requestFn: RequestFnType<DeleteCustomerPriceOnCategoryRequest, DeleteCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCustomerPriceOnCategory';
  const requestFn: RequestFnType<UpdateCustomerPriceOnCategoryRequest, UpdateCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCustomerPriceOnCategory';
  const requestFn: RequestFnType<CreateCustomerPriceOnCategoryRequest, CreateCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCustomerPriceOnCategory';
  const requestFn: RequestFnType<QueryCustomerPriceOnCategoryRequest, QueryCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCustomerPriceOnCategory';
  const requestFn: RequestFnType<ListCustomerPriceOnCategoryRequest, ListCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetCustomerPriceOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerPriceOnCategory';
  const requestFn: RequestFnType<GetCustomerPriceOnCategoryRequest, GetCustomerPriceOnCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryQuotation';
  const requestFn: RequestFnType<QueryQuotationRequest, QueryQuotationResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSkuSaleInventory';
  const requestFn: RequestFnType<DeleteSkuSaleInventoryRequest, DeleteSkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuSaleInventory';
  const requestFn: RequestFnType<UpdateSkuSaleInventoryRequest, UpdateSkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSkuSaleInventory';
  const requestFn: RequestFnType<CreateSkuSaleInventoryRequest, CreateSkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QuerySkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySkuSaleInventory';
  const requestFn: RequestFnType<QuerySkuSaleInventoryRequest, QuerySkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuSaleInventory';
  const requestFn: RequestFnType<ListSkuSaleInventoryRequest, ListSkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuSaleInventory';
  const requestFn: RequestFnType<GetSkuSaleInventoryRequest, GetSkuSaleInventoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateNutrition';
  const requestFn: RequestFnType<UpdateNutritionRequest, UpdateNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateNutrition';
  const requestFn: RequestFnType<CreateNutritionRequest, CreateNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryNutrition';
  const requestFn: RequestFnType<QueryNutritionRequest, QueryNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetNutrition';
  const requestFn: RequestFnType<GetNutritionRequest, GetNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSkuNutrition';
  const requestFn: RequestFnType<DeleteSkuNutritionRequest, DeleteSkuNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuNutrition';
  const requestFn: RequestFnType<UpdateSkuNutritionRequest, UpdateSkuNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSkuNutrition';
  const requestFn: RequestFnType<CreateSkuNutritionRequest, CreateSkuNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QuerySkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySkuNutrition';
  const requestFn: RequestFnType<QuerySkuNutritionRequest, QuerySkuNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuNutrition';
  const requestFn: RequestFnType<ListSkuNutritionRequest, ListSkuNutritionResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSku';
  const requestFn: RequestFnType<DeleteSkuRequest, DeleteSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSku';
  const requestFn: RequestFnType<UpdateSkuRequest, UpdateSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSku';
  const requestFn: RequestFnType<CreateSkuRequest, CreateSkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QuerySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySku';
  const requestFn: RequestFnType<QuerySkuRequest, QuerySkuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QuerySpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySpu';
  const requestFn: RequestFnType<QuerySpuRequest, QuerySpuResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteFinanceCategory';
  const requestFn: RequestFnType<DeleteFinanceCategoryRequest, DeleteFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateFinanceCategory';
  const requestFn: RequestFnType<UpdateFinanceCategoryRequest, UpdateFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const CreateFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateFinanceCategory';
  const requestFn: RequestFnType<CreateFinanceCategoryRequest, CreateFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryFinanceCategory';
  const requestFn: RequestFnType<QueryFinanceCategoryRequest, QueryFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const ListFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListFinanceCategory';
  const requestFn: RequestFnType<ListFinanceCategoryRequest, ListFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFinanceCategory';
  const requestFn: RequestFnType<GetFinanceCategoryRequest, GetFinanceCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const DeleteInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteInternalCategory';
  const requestFn: RequestFnType<DeleteInternalCategoryRequest, DeleteInternalCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const UpdateInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateInternalCategory';
  const requestFn: RequestFnType<UpdateInternalCategoryRequest, UpdateInternalCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryInternalCategory';
  const requestFn: RequestFnType<QueryInternalCategoryRequest, QueryInternalCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetInternalCategory';
  const requestFn: RequestFnType<GetInternalCategoryRequest, GetInternalCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryCategory';
  const requestFn: RequestFnType<QueryCategoryRequest, QueryCategoryResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const QueryUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QueryUnit';
  const requestFn: RequestFnType<QueryUnitRequest, QueryUnitResponse> = (params) => {
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
 * 系统自动添加，请勿删除
 * */
export const GetUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetUnit';
  const requestFn: RequestFnType<GetUnitRequest, GetUnitResponse> = (params) => {
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
 * *************** 单位相关 *****************
 * */
export const CreateUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateUnit';
  const requestFn: RequestFnType<CreateUnitRequest, CreateUnitResponse> = (params) => {
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
 

export const UpdateUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateUnit';
  const requestFn: RequestFnType<UpdateUnitRequest, UpdateUnitResponse> = (params) => {
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
 

export const DeleteUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteUnit';
  const requestFn: RequestFnType<DeleteUnitRequest, DeleteUnitResponse> = (params) => {
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
 

export const ListUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListUnit';
  const requestFn: RequestFnType<ListUnitRequest, ListUnitResponse> = (params) => {
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
 * 获取全部企业单位
 * */
export const ListGroupUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListGroupUnit';
  const requestFn: RequestFnType<ListGroupUnitRequest, ListGroupUnitResponse> = (params) => {
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
 * rpc GetSetUnitByName(GetSetUnitByNameRequest) returns (GetSetUnitByNameResponse) {
option (google.api.http) = {
post : "/ceres/merchandise/MerchandiseService/GetSetUnitByNameRequest"
};
};
 * */
export const ListUnitOfGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListUnitOfGroup';
  const requestFn: RequestFnType<ListUnitOfGroupRequest, ListUnitOfGroupResponse> = (params) => {
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
 * 根据分类ID获取
 * */
export const GetCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCategory';
  const requestFn: RequestFnType<GetCategoryRequest, GetCategoryResponse> = (params) => {
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
 * 创建单个分类
 * */
export const CreateCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateCategory';
  const requestFn: RequestFnType<CreateCategoryRequest, CreateCategoryResponse> = (params) => {
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
 * 修改单个分类
 * */
export const UpdateCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateCategory';
  const requestFn: RequestFnType<UpdateCategoryRequest, UpdateCategoryResponse> = (params) => {
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
 * 修改多个分类
 * */
export const UpdateManyCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateManyCategory';
  const requestFn: RequestFnType<UpdateManyCategoryRequest, UpdateManyCategoryResponse> = (params) => {
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
 * 删除单个分类
 * */
export const DeleteCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteCategory';
  const requestFn: RequestFnType<DeleteCategoryRequest, DeleteCategoryResponse> = (params) => {
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
 * 获取分类列表
 * */
export const ListCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCategory';
  const requestFn: RequestFnType<ListCategoryRequest, ListCategoryResponse> = (params) => {
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
 * 修改单个分类-开放平台
 * */
export const SyncUpdateCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SyncUpdateCategory';
  const requestFn: RequestFnType<SyncUpdateCategoryRequest, SyncUpdateCategoryResponse> = (params) => {
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
 * 获取内部分类列表
 * */
export const ListInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListInternalCategory';
  const requestFn: RequestFnType<ListInternalCategoryRequest, ListInternalCategoryResponse> = (params) => {
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
 * 创建内部分类
 * */
export const CreateInternalCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateInternalCategory';
  const requestFn: RequestFnType<CreateInternalCategoryRequest, CreateInternalCategoryResponse> = (params) => {
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
 * 获取分类树
 * */
export const GetCategoryTree = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCategoryTree';
  const requestFn: RequestFnType<GetCategoryTreeRequest, GetCategoryTreeResponse> = (params) => {
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
 * 获取客户协议价关联的报价单的分类树
 * */
export const GetCategoryTreeOnCustomerPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCategoryTreeOnCustomerPrice';
  const requestFn: RequestFnType<GetCategoryTreeOnCustomerPriceRequest, GetCategoryTreeOnCustomerPriceResponse> = (params) => {
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
 * 修改客户分类协议价
 * */
export const DeltaUpdatePriceRuleOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeltaUpdatePriceRuleOnCategory';
  const requestFn: RequestFnType<DeltaUpdatePriceRuleOnCategoryRequest, DeltaUpdatePriceRuleOnCategoryResponse> = (params) => {
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
 * 批量修改分类排序
 * */
export const BatchUpdateCategorySort = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateCategorySort';
  const requestFn: RequestFnType<BatchUpdateCategorySortRequest, BatchUpdateCategorySortResponse> = (params) => {
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
 * 观麦维护了一个标准的商品库。这个标准库作用是方便客户快速初始化商品数据，这是获取标准商品库的分类树的接口
 * */
export const GetOfficialCategoryTree = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetOfficialCategoryTree';
  const requestFn: RequestFnType<GetOfficialCategoryTreeRequest, GetOfficialCategoryTreeResponse> = (params) => {
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
 * 根据ID列表获取多个分类
 * */
export const GetManyCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyCategory';
  const requestFn: RequestFnType<GetManyCategoryRequest, GetManyCategoryResponse> = (params) => {
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
 * 根据ID列表获取多个分类
 * */
export const GetManyCategoryByRelationGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyCategoryByRelationGroup';
  const requestFn: RequestFnType<GetManyCategoryByRelationGroupRequest, GetManyCategoryByRelationGroupResponse> = (params) => {
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
 * 初始化系统预设的分类图片
 * */
export const InitCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/InitCategoryImage';
  const requestFn: RequestFnType<InitCategoryImageRequest, InitCategoryImageResponse> = (params) => {
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
 * 获取系统预设的分类图片
 * */
export const ListCategoryImage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCategoryImage';
  const requestFn: RequestFnType<ListCategoryImageRequest, ListCategoryImageResponse> = (params) => {
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
 * 从标准库初始化数据到其他group
 * */
export const CreateMerchandiseCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMerchandiseCategory';
  const requestFn: RequestFnType<CreateMerchandiseCategoryRequest, CreateMerchandiseCategoryResponse> = (params) => {
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
 * for sap linx@2021.6.1
 * */
export const GetCategoryByCategoryName = (() => {
  const url = '';
  const requestFn: RequestFnType<GetCategoryByCategoryNameRequest, GetCategoryByCategoryNameResponse> = (params) => {
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
 * 通过分类名称获取分类
 * */
export const ListCategoryByName = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCategoryByName';
  const requestFn: RequestFnType<ListCategoryByNameRequest, ListCategoryByNameResponse> = (params) => {
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
 * 获取税收分类数
 * */
export const GetFinanceCategoryTree = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFinanceCategoryTree';
  const requestFn: RequestFnType<GetFinanceCategoryTreeRequest, GetFinanceCategoryTreeResponse> = (params) => {
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
 * 通过税收分类ID列表获取税收分类
 * */
export const GetManyFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyFinanceCategory';
  const requestFn: RequestFnType<GetManyFinanceCategoryRequest, GetManyFinanceCategoryResponse> = (params) => {
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
 * 由于税收分类是固定的
 * */
export const InitFinanceCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/InitFinanceCategory';
  const requestFn: RequestFnType<InitFinanceCategoryRequest, InitFinanceCategoryResponse> = (params) => {
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
 * 我们的系统的业务逻辑里其实已经不存在spu了，但是为了保证和其他系统对接的能力。我们依然保留了spu。
 * */
export const GetSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSpu';
  const requestFn: RequestFnType<GetSpuRequest, GetSpuResponse> = (params) => {
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
 

export const GetManySpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySpu';
  const requestFn: RequestFnType<GetManySpuRequest, GetManySpuResponse> = (params) => {
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
 

export const CreateSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSpu';
  const requestFn: RequestFnType<CreateSpuRequest, CreateSpuResponse> = (params) => {
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
 

export const UpdateSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSpu';
  const requestFn: RequestFnType<UpdateSpuRequest, UpdateSpuResponse> = (params) => {
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
 

export const DeleteSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSpu';
  const requestFn: RequestFnType<DeleteSpuRequest, DeleteSpuResponse> = (params) => {
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
 

export const ListSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSpu';
  const requestFn: RequestFnType<ListSpuRequest, ListSpuResponse> = (params) => {
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
 

export const GetSpuBySpuName = (() => {
  const url = '';
  const requestFn: RequestFnType<GetSpuBySpuNameRequest, GetSpuBySpuNameResponse> = (params) => {
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
 * *************** sku相关 *****************
 * */
export const GetSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSku';
  const requestFn: RequestFnType<GetSkuRequest, GetSkuResponse> = (params) => {
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
 

export const GetSkuNameCacheV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuNameCacheV2';
  const requestFn: RequestFnType<GetSkuNameCacheV2Request, GetSkuNameCacheV2Response> = (params) => {
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
 * 查询group下sku简单信息缓存，目前只有名称、别名、自定义单位名称
 * */
export const GetGroupSkuSimpleInfoCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetGroupSkuSimpleInfoCache';
  const requestFn: RequestFnType<GetGroupSkuSimpleInfoCacheRequest, GetGroupSkuSimpleInfoCacheResponse> = (params) => {
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
 

export const DeleteSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteSkuV2';
  const requestFn: RequestFnType<DeleteSkuV2Request, DeleteSkuV2Response> = (params) => {
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
 * 恢复一个已删除的商品
 * */
export const RecoverSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/RecoverSkuV2';
  const requestFn: RequestFnType<RecoverSkuV2Request, RecoverSkuV2Response> = (params) => {
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
 * 更新一个已删除的商品，目前只支持商品名称、商品编码以及商品分类的修改
目的是为了恢复商品的时候，可以避免出现名称、编码冲突，以及分类未恢复的问题
 * */
export const UpdateDeletedSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateDeletedSku';
  const requestFn: RequestFnType<UpdateDeletedSkuRequest, UpdateDeletedSkuResponse> = (params) => {
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
 * 根据商品恢复该商品在某一段时间内的报价，可以指定报价单，默认恢复当时的所有报价单
 * */
export const RecoverBasicPriceBySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/RecoverBasicPriceBySku';
  const requestFn: RequestFnType<RecoverBasicPriceBySkuRequest, RecoverBasicPriceBySkuResponse> = (params) => {
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
 

export const ListSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSku';
  const requestFn: RequestFnType<ListSkuRequest, ListSkuResponse> = (params) => {
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
 

export const ExportSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportSku';
  const requestFn: RequestFnType<ExportSkuRequest, ExportSkuResponse> = (params) => {
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
 

export const ExportSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportSkuV2';
  const requestFn: RequestFnType<ExportSkuV2Request, ExportSkuV2Response> = (params) => {
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
 

export const ExportLiteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportLiteSku';
  const requestFn: RequestFnType<ExportLiteSkuRequest, ExportLiteSkuResponse> = (params) => {
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
 

export const GetManySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySku';
  const requestFn: RequestFnType<GetManySkuRequest, GetManySkuResponse> = (params) => {
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
 

export const GetSkuSnap = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuSnap';
  const requestFn: RequestFnType<GetSkuSnapRequest, GetSkuSnapResponse> = (params) => {
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
 

export const GetManySkuSnap = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySkuSnap';
  const requestFn: RequestFnType<GetManySkuSnapRequest, GetManySkuSnapResponse> = (params) => {
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
 

export const GetManySkuSnapV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySkuSnapV2';
  const requestFn: RequestFnType<GetManySkuSnapV2Request, GetManySkuSnapV2Response> = (params) => {
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
 

export const UpdateManySkuSnapV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateManySkuSnapV2';
  const requestFn: RequestFnType<UpdateManySkuSnapV2Request, UpdateManySkuSnapV2Response> = (params) => {
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
 

export const QuerySkuSnapshot = (() => {
  const url = '/ceres/merchandise/MerchandiseService/QuerySkuSnapshot';
  const requestFn: RequestFnType<QuerySkuSnapshotRequest, QuerySkuSnapshotResponse> = (params) => {
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
 

export const CreateSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateSkuV2';
  const requestFn: RequestFnType<CreateSkuV2Request, CreateSkuV2Response> = (params) => {
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
 

export const CreateLiteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateLiteSku';
  const requestFn: RequestFnType<CreateLiteSkuRequest, CreateLiteSkuResponse> = (params) => {
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
 

export const CheckLiteSkuNameUnitExist = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CheckLiteSkuNameUnitExist';
  const requestFn: RequestFnType<CheckLiteSkuNameUnitExistRequest, CheckLiteSkuNameUnitExistResponse> = (params) => {
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
 

export const UpsertSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpsertSkuV2';
  const requestFn: RequestFnType<UpsertSkuV2Request, UpsertSkuV2Response> = (params) => {
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
 

export const UpsertManySkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpsertManySkuV2';
  const requestFn: RequestFnType<UpsertManySkuV2Request, UpsertManySkuV2Response> = (params) => {
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
 

export const BatchUpsertSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpsertSkuV2';
  const requestFn: RequestFnType<BatchUpsertSkuV2Request, BatchUpsertSkuV2Response> = (params) => {
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
 * review如果这个接口不是异步的，那就不需要CreateSkuV2了，创建单个也可以用这个
 * */
export const CreateManySkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateManySkuV2';
  const requestFn: RequestFnType<CreateManySkuV2Request, CreateManySkuV2Response> = (params) => {
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
 

export const UpdateSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuV2';
  const requestFn: RequestFnType<UpdateSkuV2Request, UpdateSkuV2Response> = (params) => {
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
 

export const UpdateSkuByMapV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuByMapV2';
  const requestFn: RequestFnType<UpdateSkuByMapV2Request, UpdateSkuByMapV2Response> = (params) => {
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
 

export const UpdateSkuLevelV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuLevelV2';
  const requestFn: RequestFnType<UpdateSkuLevelV2Request, UpdateSkuLevelV2Response> = (params) => {
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
 

export const GetSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuV2';
  const requestFn: RequestFnType<GetSkuV2Request, GetSkuV2Response> = (params) => {
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
 * 商品重构新接口
 * */
export const ListSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuV2';
  const requestFn: RequestFnType<ListSkuV2Request, ListSkuV2Response> = (params) => {
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
 * 废弃
 * */
export const ListSkuV2ForSearch = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuV2ForSearch';
  const requestFn: RequestFnType<ListSkuV2ForSearchRequest, ListSkuV2ForSearchResponse> = (params) => {
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
 * 批量审核skuSearch
 * */
export const BatchApprovetemporarySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchApprovetemporarySku';
  const requestFn: RequestFnType<BatchApprovetemporarySkuRequest, BatchApprovetemporarySkuResponse> = (params) => {
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
 

export const ListSkuWithInquiryPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuWithInquiryPrice';
  const requestFn: RequestFnType<ListSkuWithInquiryPriceRequest, ListSkuWithInquiryPriceResponse> = (params) => {
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
 * 商品重构新接口
 * */
export const GetSkuByNameUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuByNameUnit';
  const requestFn: RequestFnType<GetSkuByNameUnitRequest, GetSkuByNameUnitResponse> = (params) => {
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
 * 根据商品/单位/客户名称，获取商品和报价单建议价接口
 * */
export const ListSkuByNameUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuByNameUnit';
  const requestFn: RequestFnType<ListSkuByNameUnitRequest, ListSkuByNameUnitResponse> = (params) => {
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
 * 根据商品/单位/客户名称，获取报价单建议价接口，统合订单单价和BasicPrice
 * */
export const ListSkuSuggestedPriceByName = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuSuggestedPriceByName';
  const requestFn: RequestFnType<ListSkuSuggestedPriceByNameRequest, ListSkuSuggestedPriceByNameResponse> = (params) => {
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
 * 最近购买过商品价格缓存
 * */
export const ListRecentSkuPrices = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListRecentSkuPrices';
  const requestFn: RequestFnType<ListRecentSkuPricesRequest, ListRecentSkuPricesResponse> = (params) => {
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
 * 获取商品曾用的自定义单位数据
 * */
export const GetSkuCustomUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuCustomUnit';
  const requestFn: RequestFnType<GetSkuCustomUnitRequest, GetSkuCustomUnitResponse> = (params) => {
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
 * 获取商品当前在报价单中绑定的所有下单单位
 * */
export const GetSkuBondOrderUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuBondOrderUnit';
  const requestFn: RequestFnType<GetSkuBondOrderUnitRequest, GetSkuBondOrderUnitResponse> = (params) => {
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
 * 获取云商品库数据
 * */
export const ListOfficialSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListOfficialSku';
  const requestFn: RequestFnType<ListOfficialSkuRequest, ListOfficialSkuResponse> = (params) => {
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
 

export const ListSkuForBindingQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuForBindingQuotation';
  const requestFn: RequestFnType<ListSkuForBindingQuotationRequest, ListSkuForBindingQuotationResponse> = (params) => {
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
 

export const ListSkuForBindCustomerQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuForBindCustomerQuotation';
  const requestFn: RequestFnType<ListSkuForBindCustomerQuotationRequest, ListSkuForBindCustomerQuotationResponse> = (params) => {
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
 

export const ListMaskSkuByQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMaskSkuByQuotation';
  const requestFn: RequestFnType<ListMaskSkuByQuotationRequest, ListMaskSkuByQuotationResponse> = (params) => {
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
 

export const ListSkuLite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuLite';
  const requestFn: RequestFnType<ListSkuLiteRequest, ListSkuLiteResponse> = (params) => {
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
 

export const GetManySkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySkuV2';
  const requestFn: RequestFnType<GetManySkuV2Request, GetManySkuV2Response> = (params) => {
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
 * 批量修改供应商协作模式
 * */
export const BulkUpdateSkuSupplierCooperate = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateSkuSupplierCooperate';
  const requestFn: RequestFnType<BulkUpdateSkuSupplierCooperateRequest, BulkUpdateSkuSupplierCooperateResponse> = (params) => {
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
 * 修改是否设置供货比例
 * */
export const BulkUpdateSkuSupplierPercentage = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateSkuSupplierPercentage';
  const requestFn: RequestFnType<BulkUpdateSkuSupplierPercentageRequest, BulkUpdateSkuSupplierPercentageResponse> = (params) => {
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
 * 修改单个sku默认货位
 * */
export const UpdateSkuShelf = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateSkuShelf';
  const requestFn: RequestFnType<UpdateSkuShelfRequest, UpdateSkuShelfResponse> = (params) => {
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
 * 批量导入商品
 * */
export const BulkCreateCategorySkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkCreateCategorySkuV2';
  const requestFn: RequestFnType<BulkCreateCategorySkuV2Request, BulkCreateCategorySkuV2Response> = (params) => {
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
 * 批量导入轻巧版商品
 * */
export const BulkCreateLiteCategorySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkCreateLiteCategorySku';
  const requestFn: RequestFnType<BulkCreateLiteCategorySkuRequest, BulkCreateLiteCategorySkuResponse> = (params) => {
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
 * 批量修改商品
 * */
export const BulkUpdateSkuByExcelV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateSkuByExcelV2';
  const requestFn: RequestFnType<BulkUpdateSkuByExcelV2Request, BulkUpdateSkuByExcelV2Response> = (params) => {
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
 * 批量轻巧版修改商品
 * */
export const BulkUpdateLiteSkuByExcel = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateLiteSkuByExcel';
  const requestFn: RequestFnType<BulkUpdateLiteSkuByExcelRequest, BulkUpdateLiteSkuByExcelResponse> = (params) => {
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
 * 批量导入商品（新增/修改）
 * */
export const BulkImportSkuByExcelV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkImportSkuByExcelV2';
  const requestFn: RequestFnType<BulkImportSkuByExcelV2Request, BulkImportSkuByExcelV2Response> = (params) => {
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
 * 页面上修改sku的属性
 * */
export const BulkUpdateSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateSkuV2';
  const requestFn: RequestFnType<BulkUpdateSkuV2Request, BulkUpdateSkuV2Response> = (params) => {
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
 * 客户所绑定报价单中的商品列表
 * */
export const ListSkuWithQuotationByCustomerId = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuWithQuotationByCustomerId';
  const requestFn: RequestFnType<ListSkuWithQuotationByCustomerIdRequest, ListSkuWithQuotationByCustomerIdResponse> = (params) => {
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
 * *************** ssu相关 *****************
 * */
export const GetSsuSnap = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSsuSnap';
  const requestFn: RequestFnType<GetSsuSnapRequest, GetSsuSnapResponse> = (params) => {
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
 

export const GetManySsuSnap = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySsuSnap';
  const requestFn: RequestFnType<GetManySsuSnapRequest, GetManySsuSnapResponse> = (params) => {
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
 

export const GetSsu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSsu';
  const requestFn: RequestFnType<GetSsuRequest, GetSsuResponse> = (params) => {
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
 

export const ListSsu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSsu';
  const requestFn: RequestFnType<ListSsuRequest, ListSsuResponse> = (params) => {
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
 

export const ListSsuByRelationGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSsuByRelationGroup';
  const requestFn: RequestFnType<ListSsuByRelationGroupRequest, ListSsuByRelationGroupResponse> = (params) => {
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
 

export const ListMarketSsu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMarketSsu';
  const requestFn: RequestFnType<ListMarketSsuRequest, ListMarketSsuResponse> = (params) => {
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
 * *************** 商品库其他 *****************
 * */
export const ChangeMerchandiseRank = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ChangeMerchandiseRank';
  const requestFn: RequestFnType<ChangeMerchandiseRankRequest, ChangeMerchandiseRankResponse> = (params) => {
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
 

export const InitMerchandise = (() => {
  const url = '/ceres/merchandise/MerchandiseService/InitMerchandise';
  const requestFn: RequestFnType<InitMerchandiseRequest, InitMerchandiseResponse> = (params) => {
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
 

export const CreateManySkuSyncFromYMT = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateManySkuSyncFromYMT';
  const requestFn: RequestFnType<CreateManySkuSyncFromYMTRequest, CreateManySkuSyncFromYMTResponse> = (params) => {
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
 * 废弃
 * */
export const CreateReleationCustomerAndSupplier = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateReleationCustomerAndSupplier';
  const requestFn: RequestFnType<CreateReleationCustomerAndSupplierRequest, CreateReleationCustomerAndSupplierResponse> = (params) => {
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
 

export const GetFilterSkuInCustomerQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFilterSkuInCustomerQuotation';
  const requestFn: RequestFnType<GetFilterSkuInCustomerQuotationRequest, GetFilterSkuInCustomerQuotationResponse> = (params) => {
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
 * Quotation 报价单
 * */
export const GetQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetQuotation';
  const requestFn: RequestFnType<GetQuotationRequest, GetQuotationResponse> = (params) => {
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
 

export const GetDefaultQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetDefaultQuotation';
  const requestFn: RequestFnType<GetDefaultQuotationRequest, GetDefaultQuotationResponse> = (params) => {
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
 

export const ListQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListQuotation';
  const requestFn: RequestFnType<ListQuotationRequest, ListQuotationResponse> = (params) => {
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
 

export const ListQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListQuotationV2';
  const requestFn: RequestFnType<ListQuotationV2Request, ListQuotationV2Response> = (params) => {
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
 

export const GetValidQuotationByCustomerId = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetValidQuotationByCustomerId';
  const requestFn: RequestFnType<GetValidQuotationByCustomerIdRequest, GetValidQuotationByCustomerIdResponse> = (params) => {
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
 

export const ListQuotationForBindingSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListQuotationForBindingSku';
  const requestFn: RequestFnType<ListQuotationForBindingSkuRequest, ListQuotationForBindingSkuResponse> = (params) => {
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
 

export const ListQuotationForBatchUpdateBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListQuotationForBatchUpdateBasicPrice';
  const requestFn: RequestFnType<ListQuotationForBatchUpdateBasicPriceRequest, ListQuotationForBatchUpdateBasicPriceResponse> = (params) => {
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
 * 获取历史报价改动最为频繁的商品
 * */
export const ListQuotationForHistoryBasicPrices = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListQuotationForHistoryBasicPrices';
  const requestFn: RequestFnType<ListQuotationForHistoryBasicPricesRequest, ListQuotationForHistoryBasicPricesResponse> = (params) => {
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
 

export const GetManyQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyQuotation';
  const requestFn: RequestFnType<GetManyQuotationRequest, GetManyQuotationResponse> = (params) => {
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
 * 根据报价单名称搜索报价单的 ID，用于导入商户时候根据报价单名称修改报价单。
注意两点：
1. 报价单目前（2021-02-23）是允许重名的，所以这个接口的提供的数据并不一定准确。
2. 名字只支持完全匹配，不支持模糊匹配。
 * */
export const GetManyQuotationByName = (() => {
  const url = '';
  const requestFn: RequestFnType<GetManyQuotationByNameRequest, GetManyQuotationByNameResponse> = (params) => {
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
 

export const CreateQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateQuotation';
  const requestFn: RequestFnType<CreateQuotationRequest, CreateQuotationResponse> = (params) => {
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
 

export const CreateQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateQuotationV2';
  const requestFn: RequestFnType<CreateQuotationV2Request, CreateQuotationV2Response> = (params) => {
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
 

export const UpdateQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateQuotation';
  const requestFn: RequestFnType<UpdateQuotationRequest, UpdateQuotationResponse> = (params) => {
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
 

export const UpdateQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateQuotationV2';
  const requestFn: RequestFnType<UpdateQuotationV2Request, UpdateQuotationV2Response> = (params) => {
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
 

export const BulkUpdateQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateQuotationV2';
  const requestFn: RequestFnType<BulkUpdateQuotationV2Request, BulkUpdateQuotationV2Response> = (params) => {
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
 * 批量同步当前选中价格至该商品绑定的其他报价单
 * */
export const BatchSyncPriceToOtherQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchSyncPriceToOtherQuotation';
  const requestFn: RequestFnType<BatchSyncPriceToOtherQuotationRequest, BatchSyncPriceToOtherQuotationResponse> = (params) => {
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
 

export const BulkUpdateBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateBasicPriceV2';
  const requestFn: RequestFnType<BulkUpdateBasicPriceV2Request, BulkUpdateBasicPriceV2Response> = (params) => {
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
 

export const BulkUpdateCustomerBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateCustomerBasicPriceV2';
  const requestFn: RequestFnType<BulkUpdateCustomerBasicPriceV2Request, BulkUpdateCustomerBasicPriceV2Response> = (params) => {
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
 

export const BulkUpdateMaskSkuToCustomerQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateMaskSkuToCustomerQuotation';
  const requestFn: RequestFnType<BulkUpdateMaskSkuToCustomerQuotationRequest, BulkUpdateMaskSkuToCustomerQuotationResponse> = (params) => {
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
 

export const BulkUpdateCalRuleOnCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUpdateCalRuleOnCategory';
  const requestFn: RequestFnType<BulkUpdateCalRuleOnCategoryRequest, BulkUpdateCalRuleOnCategoryResponse> = (params) => {
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
 

export const CopyQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CopyQuotationV2';
  const requestFn: RequestFnType<CopyQuotationV2Request, CopyQuotationV2Response> = (params) => {
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
 * 复制整个周期报价单
 * */
export const CopyPeriodQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CopyPeriodQuotationV2';
  const requestFn: RequestFnType<CopyPeriodQuotationV2Request, CopyPeriodQuotationV2Response> = (params) => {
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
 * todo 删除报价单逻辑
 * */
export const DeleteQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteQuotation';
  const requestFn: RequestFnType<DeleteQuotationRequest, DeleteQuotationResponse> = (params) => {
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
 

export const DeleteQuotationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteQuotationv2';
  const requestFn: RequestFnType<DeleteQuotationV2Request, DeleteQuotationV2Response> = (params) => {
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
 

export const DeleteLiteQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteLiteQuotation';
  const requestFn: RequestFnType<DeleteLiteQuotationRequest, DeleteLiteQuotationResponse> = (params) => {
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
 

export const BindMaskSkuToCustomerQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BindMaskSkuToCustomerQuotation';
  const requestFn: RequestFnType<BindMaskSkuToCustomerQuotationRequest, BindMaskSkuToCustomerQuotationResponse> = (params) => {
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
 

export const UnBindMaskSkuToCustomerQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UnBindMaskSkuToCustomerQuotation';
  const requestFn: RequestFnType<UnBindMaskSkuToCustomerQuotationRequest, UnBindMaskSkuToCustomerQuotationResponse> = (params) => {
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
 * rpc GetCustomerPriceQuotation(GetCustomerPriceQuotationRequest) returns (GetCustomerPriceQuotationResponse) {
option (google.api.http) = {
post : "/ceres/merchandise/MerchandiseService/GetCustomerPriceQuotation"
};
}
 * */
export const GetFilterCustomerIds = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetFilterCustomerIds';
  const requestFn: RequestFnType<GetFilterCustomerIdsRequest, GetFilterCustomerIdsResponse> = (params) => {
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
 * 报价条目相关
 * */
export const SetBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetBasicPrice';
  const requestFn: RequestFnType<SetBasicPriceRequest, SetBasicPriceResponse> = (params) => {
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
 

export const ListBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPrice';
  const requestFn: RequestFnType<ListBasicPriceRequest, ListBasicPriceResponse> = (params) => {
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
 

export const GetBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetBasicPrice';
  const requestFn: RequestFnType<GetBasicPriceRequest, GetBasicPriceResponse> = (params) => {
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
 

export const GetManyBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyBasicPrice';
  const requestFn: RequestFnType<GetManyBasicPriceRequest, GetManyBasicPriceResponse> = (params) => {
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
 

export const GetRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetRuleSet';
  const requestFn: RequestFnType<GetRuleSetRequest, GetRuleSetResponse> = (params) => {
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
 

export const CreateRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateRuleSet';
  const requestFn: RequestFnType<CreateRuleSetRequest, CreateRuleSetResponse> = (params) => {
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
 

export const UpdateRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateRuleSet';
  const requestFn: RequestFnType<UpdateRuleSetRequest, UpdateRuleSetResponse> = (params) => {
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
 

export const DeleteRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteRuleSet';
  const requestFn: RequestFnType<DeleteRuleSetRequest, DeleteRuleSetResponse> = (params) => {
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
 

export const ListRuleSet = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListRuleSet';
  const requestFn: RequestFnType<ListRuleSetRequest, ListRuleSetResponse> = (params) => {
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
 * 全量更新价格
 * */
export const SetBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetBasicPriceV2';
  const requestFn: RequestFnType<SetBasicPriceV2Request, SetBasicPriceV2Response> = (params) => {
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
 * 增量更新价格
 * */
export const DeltaUpdateBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeltaUpdateBasicPriceV2';
  const requestFn: RequestFnType<DeltaUpdateBasicPriceV2Request, DeltaUpdateBasicPriceV2Response> = (params) => {
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
 * 指定删除价格条目
 * */
export const DeltaDeleteBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeltaDeleteBasicPriceV2';
  const requestFn: RequestFnType<DeltaDeleteBasicPriceV2Request, DeltaDeleteBasicPriceV2Response> = (params) => {
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
 * 用户新增辅助单位和自定义单位时根据设置要求自动将此新增单位绑定至该商品已绑定的的报价单上
 * */
export const AddUnitToBondQuotations = (() => {
  const url = '/ceres/merchandise/MerchandiseService/AddUnitToBondQuotations';
  const requestFn: RequestFnType<AddUnitToBondQuotationsRequest, AddUnitToBondQuotationsResponse> = (params) => {
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
 * 设置客户特殊价
 * */
export const SetSpecialBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetSpecialBasicPriceV2';
  const requestFn: RequestFnType<SetSpecialBasicPriceV2Request, SetSpecialBasicPriceV2Response> = (params) => {
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
 * 设置轻巧版报价单
 * */
export const UpdateLiteBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateLiteBasicPrice';
  const requestFn: RequestFnType<UpdateLiteBasicPriceRequest, UpdateLiteBasicPriceResponse> = (params) => {
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
 * 获取商品销售库存
 * */
export const GetManySkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySkuSaleInventory';
  const requestFn: RequestFnType<GetManySkuSaleInventoryRequest, GetManySkuSaleInventoryResponse> = (params) => {
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
 * 设置商品销售库存
 * */
export const MultiReplaceSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/MultiReplaceSkuSaleInventory';
  const requestFn: RequestFnType<MultiReplaceSkuSaleInventoryRequest, MultiReplaceSkuSaleInventoryResponse> = (params) => {
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
 * 修改商品销售库存
 * */
export const MultiDeltaSkuSaleInventory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/MultiDeltaSkuSaleInventory';
  const requestFn: RequestFnType<MultiDeltaSkuSaleInventoryRequest, MultiDeltaSkuSaleInventoryResponse> = (params) => {
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
 * 通过定价公式计算价格(不落库)
 * */
export const CalBasicPriceV2ByPricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CalBasicPriceV2ByPricingFormula';
  const requestFn: RequestFnType<CalBasicPriceV2ByPricingFormulaRequest, CalBasicPriceV2ByPricingFormulaResponse> = (params) => {
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
 * 计算当前定价公式
 * */
export const CalculatePricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CalculatePricingFormula';
  const requestFn: RequestFnType<CalculatePricingFormulaRequest, CalculatePricingFormulaResponse> = (params) => {
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
 * 获取一个商品绑定的所有报价单中的公式
 * */
export const ListFormulaFromSkuBindingQuotations = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListFormulaFromSkuBindingQuotations';
  const requestFn: RequestFnType<ListFormulaFromSkuBindingQuotationsRequest, ListFormulaFromSkuBindingQuotationsResponse> = (params) => {
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
 * 预设定价公式/通过预设的定价公式增量更新价格
 * */
export const DeltaUpdateBasicPriceV2ByPricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeltaUpdateBasicPriceV2ByPricingFormula';
  const requestFn: RequestFnType<DeltaUpdateBasicPriceV2ByPricingFormulaRequest, DeltaUpdateBasicPriceV2ByPricingFormulaResponse> = (params) => {
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
 * 批量预设定价公式
 * */
export const BatchPresetPricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchPresetPricingFormula';
  const requestFn: RequestFnType<BatchPresetPricingFormulaRequest, BatchPresetPricingFormulaResponse> = (params) => {
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
 * 批量计算定价公式
 * */
export const BatchCalculatePricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchCalculatePricingFormula';
  const requestFn: RequestFnType<BatchCalculatePricingFormulaRequest, BatchCalculatePricingFormulaResponse> = (params) => {
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
 

export const ListBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceV2';
  const requestFn: RequestFnType<ListBasicPriceV2Request, ListBasicPriceV2Response> = (params) => {
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
 

export const ListSimpleBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSimpleBasicPrice';
  const requestFn: RequestFnType<ListSimpleBasicPriceRequest, ListSimpleBasicPriceResponse> = (params) => {
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
 

export const ListLiteBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListLiteBasicPrice';
  const requestFn: RequestFnType<ListLiteBasicPriceRequest, ListLiteBasicPriceResponse> = (params) => {
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
 

export const ListBasicPriceDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceDetail';
  const requestFn: RequestFnType<ListBasicPriceDetailRequest, ListBasicPriceDetailResponse> = (params) => {
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
 

export const ListBasicPriceByCustomerID = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceByCustomerID';
  const requestFn: RequestFnType<ListBasicPriceByCustomerIDRequest, ListBasicPriceByCustomerIDResponse> = (params) => {
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
 

export const ListLiteBasicPriceByCustomerID = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListLiteBasicPriceByCustomerID';
  const requestFn: RequestFnType<ListLiteBasicPriceByCustomerIDRequest, ListLiteBasicPriceByCustomerIDResponse> = (params) => {
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
 

export const ListBasicPriceDetailByCustomerID = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceDetailByCustomerID';
  const requestFn: RequestFnType<ListBasicPriceDetailByCustomerIDRequest, ListBasicPriceDetailByCustomerIDResponse> = (params) => {
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
 * 废弃
 * */
export const ListBasicPriceDetailByCustomerIDForSearch = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceDetailByCustomerIDForSearch';
  const requestFn: RequestFnType<ListBasicPriceDetailByCustomerIDForSearchRequest, ListBasicPriceDetailByCustomerIDForSearchResponse> = (params) => {
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
 * 搜索sku及其报价，带排序规则功能
 * */
export const ListSkuAndBasicPriceDetailForSearch = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuAndBasicPriceDetailForSearch';
  const requestFn: RequestFnType<ListSkuAndBasicPriceDetailForSearchRequest, ListSkuAndBasicPriceDetailForSearchResponse> = (params) => {
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
 

export const ListHistoryBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListHistoryBasicPrice';
  const requestFn: RequestFnType<ListHistoryBasicPriceRequest, ListHistoryBasicPriceResponse> = (params) => {
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
 

export const ListSkuHistoryBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuHistoryBasicPrice';
  const requestFn: RequestFnType<ListSkuHistoryBasicPriceRequest, ListSkuHistoryBasicPriceResponse> = (params) => {
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
 

export const ListHistoryBasicPriceByCustomerID = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListHistoryBasicPriceByCustomerID';
  const requestFn: RequestFnType<ListHistoryBasicPriceByCustomerIDRequest, ListHistoryBasicPriceByCustomerIDResponse> = (params) => {
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
 * 获取客户的协议价商品
 * */
export const ListSpecialBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSpecialBasicPriceV2';
  const requestFn: RequestFnType<ListSpecialBasicPriceV2Request, ListSpecialBasicPriceV2Response> = (params) => {
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
 * 批量查询，生成采购订单时，采购单价根据供应商+商品+单位取状态为生效的协议价
 * */
export const GetManyQuotationBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyQuotationBasicPriceV2';
  const requestFn: RequestFnType<GetManyQuotationBasicPriceV2Request, GetManyQuotationBasicPriceV2Response> = (params) => {
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
 * 按商品+下单单位聚合所选商品在所选报价单内条目展示，可以批量选择进行公式定价，可编辑所有条目，保存后同步到报价单
 * */
export const ListBasicPriceForBatchUpdate = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBasicPriceForBatchUpdate';
  const requestFn: RequestFnType<ListBasicPriceForBatchUpdateRequest, ListBasicPriceForBatchUpdateResponse> = (params) => {
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
 * 根据选中的商品更新报价
 * */
export const UpdateBasicPriceBySku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateBasicPriceBySku';
  const requestFn: RequestFnType<UpdateBasicPriceBySkuRequest, UpdateBasicPriceBySkuResponse> = (params) => {
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
 * 根据选中的商品报价条目批量进行预设公式操作
 * */
export const UpdateBasicPriceItemByPricingFormula = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateBasicPriceItemByPricingFormula';
  const requestFn: RequestFnType<UpdateBasicPriceItemByPricingFormulaRequest, UpdateBasicPriceItemByPricingFormulaResponse> = (params) => {
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
 * 获取批量导入客户协议价错误数据
 * */
export const ListErrSpecialBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListErrSpecialBasicPriceV2';
  const requestFn: RequestFnType<ListErrSpecialBasicPriceV2Request, ListErrSpecialBasicPriceV2Response> = (params) => {
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
 

export const CreateBasicPriceSnapshot = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateBasicPriceSnapshot';
  const requestFn: RequestFnType<CreateBasicPriceSnapshotRequest, CreateBasicPriceSnapshotResponse> = (params) => {
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
 

export const GetBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetBasicPriceV2';
  const requestFn: RequestFnType<GetBasicPriceV2Request, GetBasicPriceV2Response> = (params) => {
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
 * 客户报价单关系
 * */
export const SetCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetCustomerQuotationRelation';
  const requestFn: RequestFnType<SetCustomerQuotationRelationRequest, SetCustomerQuotationRelationResponse> = (params) => {
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
 * 绑定默认报价单
 * */
export const SetLiteDefaultQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetLiteDefaultQuotation';
  const requestFn: RequestFnType<SetLiteDefaultQuotationRequest, SetLiteDefaultQuotationResponse> = (params) => {
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
 

export const UnsetCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UnsetCustomerQuotationRelation';
  const requestFn: RequestFnType<UnsetCustomerQuotationRelationRequest, UnsetCustomerQuotationRelationResponse> = (params) => {
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
 

export const BulkUnsetCustomerQuotationRelationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUnsetCustomerQuotationRelationV2';
  const requestFn: RequestFnType<BulkUnsetCustomerQuotationRelationV2Request, BulkUnsetCustomerQuotationRelationV2Response> = (params) => {
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
 

export const BulkUnsetCustomerToCustomerQuotationRelationV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BulkUnsetCustomerToCustomerQuotationRelationV2';
  const requestFn: RequestFnType<BulkUnsetCustomerToCustomerQuotationRelationV2Request, BulkUnsetCustomerToCustomerQuotationRelationV2Response> = (params) => {
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
 

export const GetCustomerIdsByQuotationId = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerIdsByQuotationId';
  const requestFn: RequestFnType<GetCustomerIdsByQuotationIdRequest, GetCustomerIdsByQuotationIdResponse> = (params) => {
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
 

export const GetCustomerIdsByQuotationIds = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerIdsByQuotationIds';
  const requestFn: RequestFnType<GetCustomerIdsByQuotationIdsRequest, GetCustomerIdsByQuotationIdsResponse> = (params) => {
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
 

export const GetQuotationByCustomerId = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetQuotationByCustomerId';
  const requestFn: RequestFnType<GetQuotationByCustomerIdRequest, GetQuotationByCustomerIdResponse> = (params) => {
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
 

export const GetQuotationIdsByCustomerIds = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetQuotationIdsByCustomerIds';
  const requestFn: RequestFnType<GetQuotationIdsByCustomerIdsRequest, GetQuotationIdsByCustomerIdsResponse> = (params) => {
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
 

export const GetCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerQuotationRelation';
  const requestFn: RequestFnType<GetCustomerQuotationRelationRequest, GetCustomerQuotationRelationResponse> = (params) => {
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
 

export const DeleteCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteCustomerQuotationRelation';
  const requestFn: RequestFnType<DeleteCustomerQuotationRelationRequest, DeleteCustomerQuotationRelationResponse> = (params) => {
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
 * 更新协议单排序
 * */
export const UpdateQuotationSortNum = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateQuotationSortNum';
  const requestFn: RequestFnType<UpdateQuotationSortNumRequest, UpdateQuotationSortNumResponse> = (params) => {
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
 

export const AsyncDeleteManySpecialBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/AsyncDeleteManySpecialBasicPriceV2';
  const requestFn: RequestFnType<AsyncDeleteManySpecialBasicPriceV2Request, AsyncDeleteManySpecialBasicPriceV2Response> = (params) => {
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
 

export const CopyBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CopyBasicPrice';
  const requestFn: RequestFnType<CopyBasicPriceRequest, CopyBasicPriceResponse> = (params) => {
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
 

export const ExportQuotationBySsu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportQuotationBySsu';
  const requestFn: RequestFnType<ExportQuotationBySsuRequest, ExportQuotationBySsuResponse> = (params) => {
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
 * 采购协议价
 * */
export const ImportQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ImportQuotation';
  const requestFn: RequestFnType<ImportQuotationRequest, ImportQuotationResponse> = (params) => {
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
 

export const ExportQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportQuotation';
  const requestFn: RequestFnType<ExportQuotationRequest, ExportQuotationResponse> = (params) => {
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
 

export const ExportBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportBasicPriceV2';
  const requestFn: RequestFnType<ExportBasicPriceV2Request, ExportBasicPriceV2Response> = (params) => {
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
 

export const ExportCustomerBasicPriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportCustomerBasicPriceV2';
  const requestFn: RequestFnType<ExportCustomerBasicPriceV2Request, ExportCustomerBasicPriceV2Response> = (params) => {
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
 

export const ExportHistoryBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportHistoryBasicPrice';
  const requestFn: RequestFnType<ExportHistoryBasicPriceRequest, ExportHistoryBasicPriceResponse> = (params) => {
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
 

export const ExportSkuHistoryBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportSkuHistoryBasicPrice';
  const requestFn: RequestFnType<ExportSkuHistoryBasicPriceRequest, ExportSkuHistoryBasicPriceResponse> = (params) => {
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
 

export const SetReferencePrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetReferencePrice';
  const requestFn: RequestFnType<SetReferencePriceRequest, SetReferencePriceResponse> = (params) => {
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
 

export const SetReferencePriceV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetReferencePriceV2';
  const requestFn: RequestFnType<SetReferencePriceV2Request, SetReferencePriceV2Response> = (params) => {
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
 

export const GetManyReferencePrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyReferencePrice';
  const requestFn: RequestFnType<GetManyReferencePriceRequest, GetManyReferencePriceResponse> = (params) => {
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
 * 根据skuId和quotationId获取周期报价单上各子报价单的报价作为参考
 * */
export const GetSkuReferencePricesFromPeriodicQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuReferencePricesFromPeriodicQuotation';
  const requestFn: RequestFnType<GetSkuReferencePricesFromPeriodicQuotationRequest, GetSkuReferencePricesFromPeriodicQuotationResponse> = (params) => {
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
 * 根据商品和报价单位获取相关报价/报价单位作为参考
 * */
export const GetSkuReferencePrices = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuReferencePrices';
  const requestFn: RequestFnType<GetSkuReferencePricesRequest, GetSkuReferencePricesResponse> = (params) => {
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
 * 根据商品和报价单位获取相关报价/报价单位作为参考
 * */
export const GetSkuReferPurAndInPrices = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuReferPurAndInPrices';
  const requestFn: RequestFnType<GetSkuReferPurAndInPricesRequest, GetSkuReferPurAndInPricesResponse> = (params) => {
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
 * 根据sku、供应商、参考价类型，获取参考价
 * */
export const GetSkuReferencePricesByType = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuReferencePricesByType';
  const requestFn: RequestFnType<GetSkuReferencePricesByTypeRequest, GetSkuReferencePricesByTypeResponse> = (params) => {
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
 * 餐次时间配置
 * */
export const ListMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMenuPeriodGroup';
  const requestFn: RequestFnType<ListMenuPeriodGroupRequest, ListMenuPeriodGroupResponse> = (params) => {
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
 

export const CreateMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMenuPeriodGroup';
  const requestFn: RequestFnType<CreateMenuPeriodGroupRequest, CreateMenuPeriodGroupResponse> = (params) => {
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
 

export const UpdateMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMenuPeriodGroup';
  const requestFn: RequestFnType<UpdateMenuPeriodGroupRequest, UpdateMenuPeriodGroupResponse> = (params) => {
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
 

export const DeleteMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMenuPeriodGroup';
  const requestFn: RequestFnType<DeleteMenuPeriodGroupRequest, DeleteMenuPeriodGroupResponse> = (params) => {
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
 

export const GetManyMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyMenuPeriodGroup';
  const requestFn: RequestFnType<GetManyMenuPeriodGroupRequest, GetManyMenuPeriodGroupResponse> = (params) => {
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
 

export const GetManyMenuPeriodGroupByName = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyMenuPeriodGroupByName';
  const requestFn: RequestFnType<GetManyMenuPeriodGroupByNameRequest, GetManyMenuPeriodGroupByNameResponse> = (params) => {
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
 

export const ListMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMenuDetail';
  const requestFn: RequestFnType<ListMenuDetailRequest, ListMenuDetailResponse> = (params) => {
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
 

export const CreateMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMenuDetail';
  const requestFn: RequestFnType<CreateMenuDetailRequest, CreateMenuDetailResponse> = (params) => {
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
 

export const UpdateMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMenuDetail';
  const requestFn: RequestFnType<UpdateMenuDetailRequest, UpdateMenuDetailResponse> = (params) => {
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
 

export const ExportMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportMenuDetail';
  const requestFn: RequestFnType<ExportMenuDetailRequest, ExportMenuDetailResponse> = (params) => {
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
 

export const ImportMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ImportMenuDetail';
  const requestFn: RequestFnType<ImportMenuDetailRequest, ImportMenuDetailResponse> = (params) => {
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
 

export const LockMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/LockMenuPeriodGroup';
  const requestFn: RequestFnType<LockMenuPeriodGroupRequest, LockMenuPeriodGroupResponse> = (params) => {
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
 

export const UnlockMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UnlockMenuPeriodGroup';
  const requestFn: RequestFnType<UnlockMenuPeriodGroupRequest, UnlockMenuPeriodGroupResponse> = (params) => {
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
 * eshop 餐次
 * */
export const GetManyEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyEshopMenuPeriodGroup';
  const requestFn: RequestFnType<GetManyEshopMenuPeriodGroupRequest, GetManyEshopMenuPeriodGroupResponse> = (params) => {
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
 

export const ListEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListEshopMenuPeriodGroup';
  const requestFn: RequestFnType<ListEshopMenuPeriodGroupRequest, ListEshopMenuPeriodGroupResponse> = (params) => {
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
 

export const CreateEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateEshopMenuPeriodGroup';
  const requestFn: RequestFnType<CreateEshopMenuPeriodGroupRequest, CreateEshopMenuPeriodGroupResponse> = (params) => {
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
 

export const UpdateEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateEshopMenuPeriodGroup';
  const requestFn: RequestFnType<UpdateEshopMenuPeriodGroupRequest, UpdateEshopMenuPeriodGroupResponse> = (params) => {
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
 

export const DeleteEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteEshopMenuPeriodGroup';
  const requestFn: RequestFnType<DeleteEshopMenuPeriodGroupRequest, DeleteEshopMenuPeriodGroupResponse> = (params) => {
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
 

export const BatchCreateEshopMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchCreateEshopMenuPeriodGroup';
  const requestFn: RequestFnType<BatchCreateEshopMenuPeriodGroupRequest, BatchCreateEshopMenuPeriodGroupResponse> = (params) => {
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
 * eshop获取班级绑定的菜谱，1对多
 * */
export const GetCustomerMenus = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerMenus';
  const requestFn: RequestFnType<GetCustomerMenusRequest, GetCustomerMenusResponse> = (params) => {
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
 * eshop获取班级绑定的菜谱，1对多
 * */
export const GetManyCustomerMenus = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyCustomerMenus';
  const requestFn: RequestFnType<GetManyCustomerMenusRequest, GetManyCustomerMenusResponse> = (params) => {
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
 * 查询绑定了同菜谱的班级
 * */
export const GetCustomersForMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomersForMenuRelation';
  const requestFn: RequestFnType<GetCustomersForMenuRelationRequest, GetCustomersForMenuRelationResponse> = (params) => {
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
 * 查询学生餐餐谱
 * */
export const ListEshopMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListEshopMenu';
  const requestFn: RequestFnType<ListEshopMenuRequest, ListEshopMenuResponse> = (params) => {
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
 * rpc GetManyCustomerMenu(GetManyCustomerMenuRequest) returns (GetManyCustomerMenuResponse) {
option (google.api.http) = {
post : "/ceres/merchandise/MerchandiseService/GetManyCustomerMenu"
};
}
 * */
export const GetMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMenu';
  const requestFn: RequestFnType<GetMenuRequest, GetMenuResponse> = (params) => {
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
 

export const GetManyMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyMenu';
  const requestFn: RequestFnType<GetManyMenuRequest, GetManyMenuResponse> = (params) => {
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
 

export const ListMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMenu';
  const requestFn: RequestFnType<ListMenuRequest, ListMenuResponse> = (params) => {
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
 * 查询菜谱基本信息
 * */
export const ListSimpleMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSimpleMenu';
  const requestFn: RequestFnType<ListSimpleMenuRequest, ListSimpleMenuResponse> = (params) => {
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
 * 零时使用，后面迁移到eshop项目
 * */
export const SaveWideMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveWideMenu';
  const requestFn: RequestFnType<SaveWideMenuRequest, SaveWideMenuResponse> = (params) => {
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
 * 零时使用，后面迁移到eshop项目
 * */
export const CheckMenuCategoryForWideMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CheckMenuCategoryForWideMenu';
  const requestFn: RequestFnType<CheckMenuCategoryForWideMenuRequest, CheckMenuCategoryForWideMenuResponse> = (params) => {
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
 * 零时使用，后面迁移到eshop项目
 * */
export const DeleteWideMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteWideMenu';
  const requestFn: RequestFnType<DeleteWideMenuRequest, DeleteWideMenuResponse> = (params) => {
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
 

export const CreateMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMenu';
  const requestFn: RequestFnType<CreateMenuRequest, CreateMenuResponse> = (params) => {
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
 

export const UpdateMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMenu';
  const requestFn: RequestFnType<UpdateMenuRequest, UpdateMenuResponse> = (params) => {
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
 

export const DeleteMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMenu';
  const requestFn: RequestFnType<DeleteMenuRequest, DeleteMenuResponse> = (params) => {
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
 * 批量启用/禁用/删除菜谱
 * */
export const BatchUpdateMenu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateMenu';
  const requestFn: RequestFnType<BatchUpdateMenuRequest, BatchUpdateMenuResponse> = (params) => {
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
 

export const GetEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetEshopMenuDetail';
  const requestFn: RequestFnType<GetEshopMenuDetailRequest, GetEshopMenuDetailResponse> = (params) => {
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
 * 查询菜谱详情,暂时使用，后面迁移到eshop项目
 * */
export const ListEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListEshopMenuDetail';
  const requestFn: RequestFnType<ListEshopMenuDetailRequest, ListEshopMenuDetailResponse> = (params) => {
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
 * 保存菜谱详情,暂时使用，后面迁移到eshop项目
 * */
export const ListSimpleMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSimpleMenuDetail';
  const requestFn: RequestFnType<ListSimpleMenuDetailRequest, ListSimpleMenuDetailResponse> = (params) => {
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
 * 保存菜谱详情,暂时使用，后面迁移到eshop项目
 * */
export const SaveEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveEshopMenuDetail';
  const requestFn: RequestFnType<SaveEshopMenuDetailRequest, SaveEshopMenuDetailResponse> = (params) => {
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
 

export const CreateEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateEshopMenuDetail';
  const requestFn: RequestFnType<CreateEshopMenuDetailRequest, CreateEshopMenuDetailResponse> = (params) => {
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
 

export const UpdateEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateEshopMenuDetail';
  const requestFn: RequestFnType<UpdateEshopMenuDetailRequest, UpdateEshopMenuDetailResponse> = (params) => {
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
 

export const DeleteEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteEshopMenuDetail';
  const requestFn: RequestFnType<DeleteEshopMenuDetailRequest, DeleteEshopMenuDetailResponse> = (params) => {
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
 

export const BatchSaveEshopMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchSaveEshopMenuDetail';
  const requestFn: RequestFnType<BatchSaveEshopMenuDetailRequest, BatchSaveEshopMenuDetailResponse> = (params) => {
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
 

export const GetMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetMenuDetailSku';
  const requestFn: RequestFnType<GetMenuDetailSkuRequest, GetMenuDetailSkuResponse> = (params) => {
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
 

export const ListMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMenuDetailSku';
  const requestFn: RequestFnType<ListMenuDetailSkuRequest, ListMenuDetailSkuResponse> = (params) => {
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
 

export const CreateMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateMenuDetailSku';
  const requestFn: RequestFnType<CreateMenuDetailSkuRequest, CreateMenuDetailSkuResponse> = (params) => {
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
 

export const UpdateMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateMenuDetailSku';
  const requestFn: RequestFnType<UpdateMenuDetailSkuRequest, UpdateMenuDetailSkuResponse> = (params) => {
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
 

export const DeleteMenuDetailSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteMenuDetailSku';
  const requestFn: RequestFnType<DeleteMenuDetailSkuRequest, DeleteMenuDetailSkuResponse> = (params) => {
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
 * 废弃，请勿使用，请使用SaveCustomerMenuRelation代替
 * */
export const SetCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetCustomerMenuRelation';
  const requestFn: RequestFnType<SetCustomerMenuRelationRequest, SetCustomerMenuRelationResponse> = (params) => {
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
 * 废弃，请勿使用，请使用SaveCustomerMenuRelationForCustomers代替
 * */
export const UnsetCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UnsetCustomerMenuRelation';
  const requestFn: RequestFnType<UnsetCustomerMenuRelationRequest, UnsetCustomerMenuRelationResponse> = (params) => {
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
 * 多个班级和一个菜谱的绑定关系
 * */
export const SaveCustomerMenuRelationForCustomers = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveCustomerMenuRelationForCustomers';
  const requestFn: RequestFnType<SaveCustomerMenuRelationForCustomersRequest, SaveCustomerMenuRelationForCustomersResponse> = (params) => {
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
 * 一个班级和多个菜谱的绑定关系
 * */
export const SaveCustomerMenuRelationForMenus = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveCustomerMenuRelationForMenus';
  const requestFn: RequestFnType<SaveCustomerMenuRelationForMenusRequest, SaveCustomerMenuRelationForMenusResponse> = (params) => {
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
 

export const ListCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListCustomerMenuRelation';
  const requestFn: RequestFnType<ListCustomerMenuRelationRequest, ListCustomerMenuRelationResponse> = (params) => {
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
 

export const GetCustomerMenuRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetCustomerMenuRelation';
  const requestFn: RequestFnType<GetCustomerMenuRelationRequest, GetCustomerMenuRelationResponse> = (params) => {
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
 * 同步菜谱菜谱
 * */
export const SyncMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SyncMenuDetail';
  const requestFn: RequestFnType<SyncMenuDetailRequest, SyncMenuDetailResponse> = (params) => {
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
 

export const CreateFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateFavorite';
  const requestFn: RequestFnType<CreateFavoriteRequest, CreateFavoriteResponse> = (params) => {
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
 

export const UpdateFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/UpdateFavorite';
  const requestFn: RequestFnType<UpdateFavoriteRequest, UpdateFavoriteResponse> = (params) => {
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
 

export const DeleteFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteFavorite';
  const requestFn: RequestFnType<DeleteFavoriteRequest, DeleteFavoriteResponse> = (params) => {
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
 

export const ListFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListFavorite';
  const requestFn: RequestFnType<ListFavoriteRequest, ListFavoriteResponse> = (params) => {
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
 

export const CreateManyFavoriteSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateManyFavoriteSkuV2';
  const requestFn: RequestFnType<CreateManyFavoriteSkuV2Request, CreateManyFavoriteSkuV2Response> = (params) => {
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
 

export const DeleteManyFavoriteSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteManyFavoriteSkuV2';
  const requestFn: RequestFnType<DeleteManyFavoriteSkuV2Request, DeleteManyFavoriteSkuV2Response> = (params) => {
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
 

export const ListFavoriteSkuV2 = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListFavoriteSkuV2';
  const requestFn: RequestFnType<ListFavoriteSkuV2Request, ListFavoriteSkuV2Response> = (params) => {
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
 * 查询就餐日历
 * */
export const GetManyMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManyMealCalendar';
  const requestFn: RequestFnType<GetManyMealCalendarRequest, GetManyMealCalendarResponse> = (params) => {
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
 * 新增或更新就餐日历
 * */
export const CreateOrUpdateMealCalendar = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CreateOrUpdateMealCalendar';
  const requestFn: RequestFnType<CreateOrUpdateMealCalendarRequest, CreateOrUpdateMealCalendarResponse> = (params) => {
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
 * 导入组合商品
 * */
export const ImportCombineSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ImportCombineSku';
  const requestFn: RequestFnType<ImportCombineSkuRequest, ImportCombineSkuResponse> = (params) => {
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
 * 获取导入组合商品的模板
 * */
export const GetImportCombineSkuTemplate = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetImportCombineSkuTemplate';
  const requestFn: RequestFnType<GetImportCombineSkuTemplateRequest, GetImportCombineSkuTemplateResponse> = (params) => {
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
 * 导出组合商品
 * */
export const ExportCombineSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ExportCombineSku';
  const requestFn: RequestFnType<ExportCombineSkuRequest, ExportCombineSkuResponse> = (params) => {
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
 

export const ListBestSaleSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListBestSaleSku';
  const requestFn: RequestFnType<ListBestSaleSkuRequest, ListBestSaleSkuResponse> = (params) => {
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
 * 批量更新商品装箱规格
 * */
export const BatchUpdateSkuPackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateSkuPackUnit';
  const requestFn: RequestFnType<BatchUpdateSkuPackUnitRequest, BatchUpdateSkuPackUnitResponse> = (params) => {
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
 * 批量更新供应商
 * */
export const BatchUpdateSkuSupplier = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateSkuSupplier';
  const requestFn: RequestFnType<BatchUpdateSkuSupplierRequest, BatchUpdateSkuSupplierResponse> = (params) => {
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
 * *************** 行情数据相关 *****************
 * */
export const SyncMarketData = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncMarketDataRequest, SyncMarketDataResponse> = (params) => {
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
 

export const ListMarketData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListMarketData';
  const requestFn: RequestFnType<ListMarketDataRequest, ListMarketDataResponse> = (params) => {
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
 * **************** 刷数据脚本 ********************
 * */
export const BatchUpdateMinOrderNumber = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateMinOrderNumber';
  const requestFn: RequestFnType<BatchUpdateMinOrderNumberRequest, BatchUpdateMinOrderNumberResponse> = (params) => {
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
 * 报价单批量关联全部商品
 * */
export const BatchRelatedAllSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchRelatedAllSku';
  const requestFn: RequestFnType<BatchRelatedAllSkuRequest, BatchRelatedAllSkuResponse> = (params) => {
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
 * 批量更新报价单信息
 * */
export const BatchUpdateBasicPriceItemInfo = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchUpdateBasicPriceItemInfo';
  const requestFn: RequestFnType<BatchUpdateBasicPriceItemInfoRequest, BatchUpdateBasicPriceItemInfoResponse> = (params) => {
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
 * **************** 批量去掉sku的自定义单位和价格的定价下单单位 ********************
 * */
export const BatchCleanSkuDiyUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/BatchCleanSkuDiyUnit';
  const requestFn: RequestFnType<BatchCleanSkuDiyUnitRequest, BatchCleanSkuDiyUnitResponse> = (params) => {
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
 

export const AgreementPriceCheck = (() => {
  const url = '/ceres/merchandise/MerchandiseService/AgreementPriceCheck';
  const requestFn: RequestFnType<AgreementPriceCheckRequest, AgreementPriceCheckResponse> = (params) => {
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
 

export const ManualSyncTemporaryProducAndUnitToOrder = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ManualSyncTemporaryProducAndUnitToOrder';
  const requestFn: RequestFnType<ManualSyncTemporaryProducAndUnitToOrderRequest, ManualSyncTemporaryProducAndUnitToOrderResponse> = (params) => {
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
 

export const CleanCategory = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanCategory';
  const requestFn: RequestFnType<CleanCategoryRequest, CleanCategoryResponse> = (params) => {
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
 

export const CleanSpu = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanSpu';
  const requestFn: RequestFnType<CleanSpuRequest, CleanSpuResponse> = (params) => {
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
 

export const CleanSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanSku';
  const requestFn: RequestFnType<CleanSkuRequest, CleanSkuResponse> = (params) => {
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
 

export const CleanQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanQuotation';
  const requestFn: RequestFnType<CleanQuotationRequest, CleanQuotationResponse> = (params) => {
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
 

export const CleanBasicPrice = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanBasicPrice';
  const requestFn: RequestFnType<CleanBasicPriceRequest, CleanBasicPriceResponse> = (params) => {
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
 

export const CleanFavorite = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanFavorite';
  const requestFn: RequestFnType<CleanFavoriteRequest, CleanFavoriteResponse> = (params) => {
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
 

export const CleanFavoriteSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanFavoriteSku';
  const requestFn: RequestFnType<CleanFavoriteSkuRequest, CleanFavoriteSkuResponse> = (params) => {
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
 

export const CleanMenuPeriodGroup = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanMenuPeriodGroup';
  const requestFn: RequestFnType<CleanMenuPeriodGroupRequest, CleanMenuPeriodGroupResponse> = (params) => {
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
 

export const CleanMenuDetail = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanMenuDetail';
  const requestFn: RequestFnType<CleanMenuDetailRequest, CleanMenuDetailResponse> = (params) => {
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
 

export const CleanCustomerQuotationRelation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanCustomerQuotationRelation';
  const requestFn: RequestFnType<CleanCustomerQuotationRelationRequest, CleanCustomerQuotationRelationResponse> = (params) => {
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
 

export const RepeatedSkuUnitRate = (() => {
  const url = '/ceres/merchandise/MerchandiseService/RepeatedSkuUnitRate';
  const requestFn: RequestFnType<RepeatedSkuUnitRateRequest, RepeatedSkuUnitRateResponse> = (params) => {
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
 

export const MatchSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/MatchSku';
  const requestFn: RequestFnType<MatchSkuRequest, MatchSkuResponse> = (params) => {
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
 * 同一个sku，不同版本之间的单位转换率
 * */
export const SameSkuUnitRate = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SameSkuUnitRate';
  const requestFn: RequestFnType<SameSkuUnitRateRequest, SameSkuUnitRateResponse> = (params) => {
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
 * 获取营养成本表
 * */
export const GetSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuNutrition';
  const requestFn: RequestFnType<GetSkuNutritionRequest, GetSkuNutritionResponse> = (params) => {
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
 * 保存营养成分表
 * */
export const SaveSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveSkuNutrition';
  const requestFn: RequestFnType<SaveSkuNutritionRequest, SaveSkuNutritionResponse> = (params) => {
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
 * 清空营养成分表缓存
 * */
export const CleanSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanSkuNutrition';
  const requestFn: RequestFnType<CleanSkuNutritionRequest, CleanSkuNutritionResponse> = (params) => {
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
 * 营养素列表
 * */
export const ListNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListNutrition';
  const requestFn: RequestFnType<ListNutritionRequest, ListNutritionResponse> = (params) => {
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
 * 添加营养素
 * */
export const SaveNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveNutrition';
  const requestFn: RequestFnType<SaveNutritionRequest, SaveNutritionResponse> = (params) => {
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
 * 删除营养素
 * */
export const DeleteNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/DeleteNutrition';
  const requestFn: RequestFnType<DeleteNutritionRequest, DeleteNutritionResponse> = (params) => {
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
 * 营养素单位
 * */
export const ListNutritionUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListNutritionUnit';
  const requestFn: RequestFnType<ListNutritionUnitRequest, ListNutritionUnitResponse> = (params) => {
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
 * 导入营养成分表
 * */
export const ImportSkuNutrition = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ImportSkuNutrition';
  const requestFn: RequestFnType<ImportSkuNutritionRequest, ImportSkuNutritionResponse> = (params) => {
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
 * 商品备注列表
 * */
export const GetManySkuRemark = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetManySkuRemark';
  const requestFn: RequestFnType<GetManySkuRemarkRequest, GetManySkuRemarkResponse> = (params) => {
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
 * 保存商品备注
 * */
export const SaveSkuRemark = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SaveSkuRemark';
  const requestFn: RequestFnType<SaveSkuRemarkRequest, SaveSkuRemarkResponse> = (params) => {
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
 * 清空商品备注
 * */
export const CleanSkuRemark = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CleanSkuRemark';
  const requestFn: RequestFnType<CleanSkuRemarkRequest, CleanSkuRemarkResponse> = (params) => {
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
 

export const WriteBackSkuCost = (() => {
  const url = '/ceres/merchandise/MerchandiseService/WriteBackSkuCost';
  const requestFn: RequestFnType<WriteBackSkuCostRequest, WriteBackSkuCostResponse> = (params) => {
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
 * 查找Sku，返回基本信息，仅限用于输入框的搜索，不要在此方法加任何其他关联逻辑，无搜索条件返回空，优先查询ES，当ES查询异常时转入查询MYSQL
 * */
export const ListSkuByQueryForSearch = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSkuByQueryForSearch';
  const requestFn: RequestFnType<ListSkuByQueryForSearchRequest, ListSkuByQueryForSearchResponse> = (params) => {
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
 * 精确查找sku，返回基础sku信息
 * */
export const ListSimpleSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSimpleSku';
  const requestFn: RequestFnType<ListSimpleSkuRequest, ListSimpleSkuResponse> = (params) => {
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
 

export const CopySkuFieldToTargetSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/CopySkuFieldToTargetSku';
  const requestFn: RequestFnType<CopySkuFieldToTargetSkuRequest, CopySkuFieldToTargetSkuResponse> = (params) => {
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
 

export const ListSimpleQuotation = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListSimpleQuotation';
  const requestFn: RequestFnType<ListSimpleQuotationRequest, ListSimpleQuotationResponse> = (params) => {
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
 

export const ListPackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/ListPackUnit';
  const requestFn: RequestFnType<ListPackUnitRequest, ListPackUnitResponse> = (params) => {
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
 

export const SavePackUnit = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SavePackUnit';
  const requestFn: RequestFnType<SavePackUnitRequest, SavePackUnitResponse> = (params) => {
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
 * 第三方同步采购协议价
 * */
export const SyncQuotationBasicPrice = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncQuotationBasicPriceRequest, SyncQuotationBasicPriceResponse> = (params) => {
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
 * 同步创建商品
 * */
export const SyncCreateSku = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncCreateSkuRequest, SyncCreateSkuResponse> = (params) => {
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
 * 同步更新商品
 * */
export const SyncUpdateSku = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncUpdateSkuRequest, SyncUpdateSkuResponse> = (params) => {
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
 * 同步删除商品
 * */
export const SyncDeleteSku = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncDeleteSkuRequest, SyncDeleteSkuResponse> = (params) => {
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
 * 获取商品详情
 * */
export const GetDetailSku = (() => {
  const url = '';
  const requestFn: RequestFnType<GetDetailSkuRequest, GetDetailSkuResponse> = (params) => {
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
 * 同步创建报价单
 * */
export const SyncCreateQuotation = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncCreateQuotationRequest, SyncCreateQuotationResponse> = (params) => {
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
 * 同步更新报价单
 * */
export const SyncUpdateQuotation = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncUpdateQuotationRequest, SyncUpdateQuotationResponse> = (params) => {
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
 * 同步删除报价单
 * */
export const SyncDeleteQuotation = (() => {
  const url = '';
  const requestFn: RequestFnType<SyncDeleteQuotationRequest, SyncDeleteQuotationResponse> = (params) => {
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
 * 查询报价单详情
 * */
export const GetDetailQuotation = (() => {
  const url = '';
  const requestFn: RequestFnType<GetDetailQuotationRequest, GetDetailQuotationResponse> = (params) => {
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
 * 同步创建报价单绑定商品
 * */
export const BindQuotationBasicPrice = (() => {
  const url = '';
  const requestFn: RequestFnType<BindQuotationBasicPriceRequest, BindQuotationBasicPriceResponse> = (params) => {
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
 * 同步删除报价单绑定商品
 * */
export const DeleteBindQuotationBasicPrice = (() => {
  const url = '';
  const requestFn: RequestFnType<DeleteBindQuotationBasicPriceRequest, DeleteBindQuotationBasicPriceResponse> = (params) => {
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
 * 报价单绑定客户
 * */
export const BindQuotationCustomer = (() => {
  const url = '';
  const requestFn: RequestFnType<BindQuotationCustomerRequest, BindQuotationCustomerResponse> = (params) => {
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
 * 删除报价单绑定客户
 * */
export const DeleteBindQuotationCustomer = (() => {
  const url = '';
  const requestFn: RequestFnType<DeleteBindQuotationCustomerRequest, DeleteBindQuotationCustomerResponse> = (params) => {
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
 * 最近报价、最近入库价、最近采购价、最近售价缓存////////////////////////////////////////
最近售价
 * */
export const GetSkuSalePricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuSalePricesCache';
  const requestFn: RequestFnType<GetSkuSalePricesCacheRequest, GetSkuSalePricesCacheResponse> = (params) => {
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
 * 设置最近售价缓存
 * */
export const SetSkuSalePricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetSkuSalePricesCache';
  const requestFn: RequestFnType<SetSkuSalePricesCacheRequest, SetSkuSalePricesCacheResponse> = (params) => {
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
 * 最近采购（供应商直供）
 * */
export const GetSkuPurchasePricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuPurchasePricesCache';
  const requestFn: RequestFnType<GetSkuPurchasePricesCacheRequest, GetSkuPurchasePricesCacheResponse> = (params) => {
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
 * 最近入库（供应商直供）
 * */
export const GetSkuInStockPricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuInStockPricesCache';
  const requestFn: RequestFnType<GetSkuInStockPricesCacheRequest, GetSkuInStockPricesCacheResponse> = (params) => {
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
 * 最近参考价（最近采购、最近入库都可使用该方法）
 * */
export const GetSkuReferencePricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuReferencePricesCache';
  const requestFn: RequestFnType<GetSkuReferencePricesCacheRequest, GetSkuReferencePricesCacheResponse> = (params) => {
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
 * 最近报价
 * */
export const GetSkuBasicPricesCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuBasicPricesCache';
  const requestFn: RequestFnType<GetSkuBasicPricesCacheRequest, GetSkuBasicPricesCacheResponse> = (params) => {
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
 * 内存搜索商品
搜索：商品名称（模糊）、编码（精确）、商品名拼音首字母（模糊）、商品名全拼（模糊）、商品别名（模糊）、客户商品别名（模糊）、客户商品编码(精确)、商品条码（精确）
排序：下单频次（倒序）、距离最短（升序）、搜索频次（倒序）、商品自身排序（倒序）
 * */
export const SearchSku = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SearchSku';
  const requestFn: RequestFnType<SearchSkuRequest, SearchSkuResponse> = (params) => {
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
 * 初始化商品缓存
 * */
export const InitSkuCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/InitSkuCache';
  const requestFn: RequestFnType<InitSkuCacheRequest, InitSkuCacheResponse> = (params) => {
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
 * 刷新商品缓存
 * */
export const RefreshSkuCacheData = (() => {
  const url = '/ceres/merchandise/MerchandiseService/RefreshSkuCacheData';
  const requestFn: RequestFnType<RefreshSkuCacheDataRequest, RefreshSkuCacheDataResponse> = (params) => {
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
 * 获取sku缓存信息
 * */
export const GetSkuCache = (() => {
  const url = '/ceres/merchandise/MerchandiseService/GetSkuCache';
  const requestFn: RequestFnType<GetSkuCacheRequest, GetSkuCacheResponse> = (params) => {
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
 * 设置sku下单数、搜索数
 * */
export const SetSkuCount = (() => {
  const url = '/ceres/merchandise/MerchandiseService/SetSkuCount';
  const requestFn: RequestFnType<SetSkuCountRequest, SetSkuCountResponse> = (params) => {
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
 
