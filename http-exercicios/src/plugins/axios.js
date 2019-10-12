import Vue from 'vue';
import axios from 'axios';
import { baseURL }  from '../../env'

axios.defaults.baseURL = baseURL;

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
    }
});