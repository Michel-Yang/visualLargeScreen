import service from "@/utils/request";
export default {
  areaMonitor(params) {
    return service({
      url: "/seatMonitor/areaMonitor",
      method: "get",
      params
    });
  },
  headDataSummary(params) {
    return service({
      url: "/seatMonitor/headDataSummary",
      method: "get",
      params
    });
  },
  areaSeats(params) {
    return service({
      url: "/seatMonitor/areaSeats",
      method: "get",
      params
    });
  },
  areaQueue(params) {
    return service({
      url: "/seatMonitor/areaQueue",
      method: "get",
      params
    });
  }
};
