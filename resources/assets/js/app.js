

require('./bootstrap');
require('admin-lte');
window.Vue = require('vue');
import router from "./router";
import moment from 'moment';
import VueProgressBar from 'vue-progressbar';
import Swal from 'sweetalert2';
import {Form, AlertError, HasError} from "vform";


window.Swal = Swal;
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.filter('dataFilter', function(value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
});

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.Toast = Toast;
window.Fire = new Vue();

Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

new Vue({
    el: '#app',
    router,
    // render: h => h(App)
});
