import service from "@/utils/request";
export default {
  hotIssues(params) {
    return service({
      url: "/orderAnalysis/hotIssues",
      method: "get",
      params
    });
  },
  GovernmentFormCount(params) {
    return service({
      url: "/orderAnalysis/peopleAndGovernmentFormCount",
      method: "get",
      params
    });
  },

  areaFormCount(params) {
    return service({
      url: "/orderAnalysis/areaFormCount",
      method: "get",
      params
    });
  },

  information(params) {
    return service({
      url: "orderAnalysis/hotlineInformation",
      method: "get",
      params
    });
  },

  totalMapData(params) {
    return service({
      url: "/orderAnalysis/orderAnalysisMapData",
      method: "get",
      params
    });
  },
  
  
  // 工单运营统计
  getOrderStatisticsData(params) {
    return service({
      url: "/dataAnalysis/getOrderStatisticsData",
      method: "post",
      params
    });
  }
};
