new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('showAlert');
        },
        changeValue(e) {
            this.valor = e.target.value;
        }
    }
});