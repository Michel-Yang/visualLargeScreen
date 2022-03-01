// echarts 初始化
export function initChart(dom, option = {}, event) {
  let chart = echarts.init(dom);
  chart.setOption(option, true);
  chart.resize();
  if (event) {
    chart.off("click");
    chart.on("click", event);
  }
  return chart;
}
