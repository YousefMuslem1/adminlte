

require('./bootstrap');
require('admin-lte');
window.Vue = require('vue');
import router from "./router";
import moment from 'moment';
import {Form, AlertError, HasError} from "vform";

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.filter('dataFilter', function(value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');

});

new Vue({
    el: '#app',
    router,
    // render: h => h(App)
});
