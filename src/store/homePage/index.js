const moment = require("moment");

const state = {
  activeTab: "operationView",
  timeType: "year",
  accuracyTime: moment().format("YYYY"),
  cityCode: 440000
};

const mutations = {
  SET_ACTIVE_TAB(state, activeTab) {
    state.activeTab = activeTab;
  },
  CHANGE_TIME(state, { timeRange, timeType, accuracyTime }) {
    state.timeRange = timeRange;
    state.timeType = timeType;
    state.accuracyTime = accuracyTime;
  },
  SET_CITY_CODE(state, cityCode) {
    state.cityCode = cityCode;
  }
};

const actions = {};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
