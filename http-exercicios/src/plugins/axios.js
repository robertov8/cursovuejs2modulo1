import Vue from 'vue';
import axios from 'axios';
import { baseURL }  from '../../env'

axios.defaults.baseURL = baseURL;

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios;
        Vue.prototype.$http = axios.create({ baseURL });
        
        Vue.prototype.$http.interceptors.request.use(request => {
            console.log(request.method);
            return request;
        }, error => Promise.reject(error));
        
        Vue.prototype.$http.interceptors.response.use(response => {
            console.log(response);
            return response;
        }, error => Promise.reject(error));
    }
});