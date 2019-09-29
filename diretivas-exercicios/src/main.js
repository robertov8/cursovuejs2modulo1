import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('destaque', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'lightgreen';
        const color = binding.value || 'lightgreen';
    
        (binding.arg === 'fundo') ?
            el.style.backgroundColor = color :
            el.style.color = color;
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
