import service from "@/utils/request";
export default {
  averageTime(params) {
    return service({
      url: "/effectivenessMonitor/averageProcessingTime",
      method: "get",
      params
    });
  },
  knowledge(params) {
    return service({
      url: "/effectivenessMonitor/knowledgeRelevanceTopFive",
      method: "get",
      params
    });
  },
  cardsSummary(params) {
    return service({
      url: "/effectivenessMonitor/endAndEvalTop5",
      method: "get",
      params
    });
  },
  completionRate(params) {
    return service({
      url: "/effectivenessMonitor/platformCompletionRate",
      method: "get",
      params
    });
  },
  satisfactionRate(params) {
    return service({
      url: "/effectivenessMonitor/satisfactionRate",
      method: "get",
      params
    });
  },
  timeResponseRate(params) {
    return service({
      url: "/effectivenessMonitor/timelyResponseRate",
      method: "get",
      params
    });
  },
  knowledgeTotal(params) {
    return service({
      url: "/effectivenessMonitor/knowledgePointsTotalNumber",
      method: "get",
      params
    });
  },
  newKnowledge(params) {
    return service({
      url: "/effectivenessMonitor/newKnowledgePoints",
      method: "get",
      params
    });
  },
  effectiveKnowledge(params) {
    return service({
      url: "/effectivenessMonitor/effectiveKnowledgePoints",
      method: "get",
      params
    });
  },
  totalMapData(params) {
    return service({
      url: "/effectivenessMonitor/effectivenessMonitorMapData",
      method: "get",
      params
    });
  }
};
