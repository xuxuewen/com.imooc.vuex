import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './Project/TaskManage/App.vue';
import store from './Project/TaskManage/store';

Vue.use(iView);

const GlobalData = {
  count:0
}

const vm = new Vue({
  el:'#app',
  data:GlobalData,
  store,
  render: h => h(App)
})