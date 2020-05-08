

require('./bootstrap');
require('admin-lte');
window.Vue = require('vue');
import router from "./router";


new Vue({
    el: '#app',
    router,
    // render: h => h(App)
});
