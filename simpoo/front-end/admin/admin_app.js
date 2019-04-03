// import Vue from 'vue';
import $ from 'jquery';
// import AdminApp from './js/AdminApp.vue';
import AuthUser from './js/auth_user';
// Vue.config.productionTip = false;


class Root{
  constructor(){
    this.auth_user  = new AuthUser();
  }

  init(){

  }
}

window.ClientApp = new Root();
//
// new Vue({
//   render: h => h(AdminApp)
// }).$mount('#admin_app');