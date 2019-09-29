import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('destaque', {
    bind(el, binding, vnode) {
        // el.style.backgroundColor = 'lightgreen';
        const color = binding.value || 'lightgreen';
        
        let atraso = 0;
        
        if(binding.modifiers['atrasar'])
            atraso = 3000;
        
        setTimeout(() => {
            (binding.arg === 'fundo') ?
                el.style.backgroundColor = color :
                el.style.color = color;
        }, atraso);
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
