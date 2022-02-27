<template>
  <div class="date-list">
    <ul class="tab">
      <li
        @click="tabClick(item)"
        :class="item.active ? 'active' : ''"
        v-for="item in timeList"
        :key="item.key"
      >
        <a>{{ item.label }}</a>
      </li>
    </ul>
    <el-date-picker
      v-model="time"
      :key="activeItem.type"
      :type="activeItem.type"
      placeholder="选择日期"
      :format="activeItem.valueFormat"
      class="date-picker"
      popper-class="date-picker-popper"
      size="small"
      @change="changeTime"
      style="width: 160px"
    >
    </el-date-picker>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("homePage");
export default {
  name: "TimePicker",
  data() {
    return {
      time: "",
      activeItem: "",
      timeList: [
        {
          key: "year",
          label: "年",
          active: true,
          type: "year",
          format: "yyyy",
          valueFormat: "yyyy",
        },
        {
          key: "month",
          label: "月",
          active: false,
          type: "month",
          format: "yyyy-MM",
          valueFormat: "yyyy-MM",
        },
        // {
        //   key: 'week',
        //   label: '周',
        //   active: false,
        //   type: 'week',
        //   format: 'yyyy 第 WW 周',
        // },
        {
          key: "day",
          label: "日",
          active: false,
          type: "date",
          format: "yyyy-MM-DD",
          valueFormat: "yyyy-MM-dd",
        },
      ],
    };
  },
  mounted() {
    for (let i in this.timeList) {
      let v = this.timeList[i];
      if (v.active) {
        this.activeItem = v;
        this.time = moment().format(v.format);
      }
    }
    this.CHANGE_TIME({
      timeType: this.activeItem.type,
      accuracyTime: this.time,
    });
  },
  methods: {
    ...mapMutations(["CHANGE_TIME"]),
    tabClick(item) {
      this.activeItem.active = false;
      item.active = true;
      this.activeItem = item;
      if (item.type == "year") {
        this.time = moment().format(item.format);
      } else if (item.type == "month") {
        this.time = moment().format(item.format);
      } else {
        this.time = moment().format(item.format);
      }
      this.CHANGE_TIME({
        timeType: this.activeItem.type,
        accuracyTime: this.time,
      });
    },

    changeTime(value) {
      // const beginDate = moment(date).startOf(type).format("YYYY-MM-DD");
      // const endDate = moment(date).endOf(type).format("YYYY-MM-DD");
      this.time = moment(value).format(this.activeItem.format);
      this.CHANGE_TIME({
        timeType: this.activeItem.type,
        accuracyTime: this.time,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.date-list {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  left: 22px;
  top: 12px;
  ul {
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    li {
      width: 50px;
      height: 28px;
      line-height: 28px;
      background: rgba(34, 104, 193, 0.4);
      border-radius: 14px;
      cursor: pointer;
      color: #fff;
      text-align: center;
      & + li {
        margin-left: 10px;
      }
      &.active {
        background: #1661f8;
        border: none;
      }
    }
  }
  /deep/ .date-picker {
    .el-input__inner {
      height: 28px;
      background: rgba(34, 104, 193, 0.4);
      border: 1px solid #2e69ad;
      color: #fff;
      border-radius: 14px;
    }
    .el-input__inner:hover {
      border-color: #3297d0;
    }
    .el-range-input,
    .el-date-editor .el-range-separator {
      color: #fff;
    }
  }
}
</style>
<style lang="scss">
.date-picker-popper {
  background: #103167;
  color: #fff;
  margin-left: 10px;
  border-radius: 14px;
  .popper__arrow {
    display: none;
  }
  .el-date-table td.end-date span,
  .el-date-table td.start-date span {
    background-color: #40639f;
  }
  .el-date-table td.in-range div,
  .el-date-table td.in-range div:hover,
  .el-date-table.is-week-mode .el-date-table__row.current div,
  .el-date-table.is-week-mode .el-date-table__row:hover div {
    background-color: #32a5d8;
  }
  .el-picker-panel__icon-btn,
  .el-date-picker__header-label,
  .el-date-table th,
  .el-month-table td .cell,
  .el-year-table td .cell {
    color: #fff;
  }
  .el-month-table td.today .cell,
  .el-month-table td .cell:hover,
  .el-year-table td.today .cell,
  .el-year-table td .cell:hover,
  .el-year-table td.current:not(.disabled) .cell {
    color: #409eff;
  }
  .el-year-table td,
  .el-month-table td,
  .el-date-table td {
    font-size: 16px;
  }
  .el-date-picker__header-label {
    font-size: 18px;
  }
}
.el-date-table th {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
}
.el-date-picker__header--bordered {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.el-picker-panel {
  border: none !important;
}
.el-input--small .el-input__icon {
  line-height: 29px;
}
</style>