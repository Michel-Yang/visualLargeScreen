import service from "@/utils/request";
export default {
  orderSum(params) {
    return service({
      url: "/operationOverview/formIndicator/provinceOrderNumber",
      method: "get",
      params
    });
  },
  orderUrgency(params) {
    return service({
      url: "/operationOverview/formIndicator/orderUrgency",
      method: "get",
      params
    });
  },
  headDataSummary(params) {
    return service({
      url: "/operationOverview/topIndicator/headDataSummary",
      method: "get",
      params
    });
  },
  areaFormCountTopFive(params) {
    return service({
      url: "/operationOverview/formIndicator/areaFormCountTopFive",
      method: "get",
      params
    });
  },

  cityOrderNumber(params) {
    return service({
      url: "/operationOverview/hwIndicator/cityOrderNumber",
      method: "get",
      params
    });
  },
  orderTrendView(params) {
    return service({
      url: "/operationOverview/formIndicator/formCountTrendView",
      method: "get",
      params
    });
  },

  trendOfOrder(params) {
    return service({
      url: "/operationOverview/hwIndicator/trendOfOrder",
      method: "get",
      params
    });
  },

  formSource(params) {
    return service({
      url: "/operationOverview/formIndicator/formSource",
      method: "get",
      params
    });
  },

  formType(params) {
    return service({
      url: "/operationOverview/formIndicator/formType",
      method: "get",
      params
    });
  },

  countyOrderNumber(params) {
    return service({
      url: "/operationOverview/hwIndicator/countyOrderNumber",
      method: "get",
      params
    });
  },

  allOrderNumber(params) {
    return service({
      url: "/operationOverview/hwIndicator/provinceAllOrderNumber",
      method: "get",
      params
    });
  },

  totalMapData(params) {
    return service({
      url: "/operationOverview/operationOverviewMapData",
      method: "get",
      params
    });
  },

};
