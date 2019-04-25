// import Vue from 'vue';
import $ from 'jquery';
// import AdminApp from './js/AdminApp.vue';
import AuthUser from './js/auth_user';
import Home from './js/home';
// Vue.config.productionTip = false;


class Root{
  constructor(){
    this.auth_user  = new AuthUser();
    this.home = new Home();
  }

  init(){

  }
}
$(document).ready(function () {

});
window.ClientApp = new Root();
window.$ = $;




//
// new Vue({
//   render: h => h(AdminApp)
// }).$mount('#admin_app');