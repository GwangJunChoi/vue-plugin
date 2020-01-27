# chart-lib

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# vue 외부 라이브러리 (모듈화)
* Vue.js 관련 라이브러리 없을 때 일반 라이브러리 결합
* 차트, 데이트 피커, 테이블, 스피너 등등

>##### vue init 
```
//vue init && npm i
vue create chart-lib
```

>##### chart.js
* [chart.js](https://www.chartjs.org/docs/latest/)
* 설치
```
npm install chart.js --save
```
* App.vue
```
import Chart from 'chart.js';
//package.js 의존성명과 같은 파일 import
export default {
  mounted() {
    //라이프 사이클 훅에서 차트를 그림
  }
}
```
* 차트를 컴포넌트화
* 컴포넌트의 플러그인화
  ** [vue 플러그인](https://vuejs.org/v2/guide/plugins.html#ad)
```
//./plugins/ChartPlugin.js
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
```
```
//main.js
import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.use(ChartPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
```
//usage
var myChart = new this.$_Chart(this.$refs.barChart, {

});
```