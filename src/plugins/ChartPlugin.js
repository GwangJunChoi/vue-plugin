import Chart from 'chart.js';

export default {
  install(Vue) {
    //prototype 객체 속성 확장
    Vue.prototype.$_Chart = Chart;
    // $_ vuejs의 권고안
    //BarChart.vue
    //this.$_Chart
    //LineChart.vue
    //this.$_Chart
  }
}