new Vue({
    el: '#desafio',
    data: {
        nome: 'Roberto Ribeiro',
        idade: 25,
        link: 'https://ci.memecdn.com/8816995.gif'
    },
    methods: {
        multiplicadorDeIdade(idade, multiplicador) {
            return idade * multiplicador;
        },
        getRandomNumber() {
            return Math.random();
        }
    }
});