

require('./bootstrap');
require('admin-lte');
window.Vue = require('vue');
import router from "./router";
import {Form, AlertError, HasError} from "vform";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);



new Vue({
    el: '#app',
    router,
    // render: h => h(App)
});
