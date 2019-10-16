export default {
    namespaced: true,
    state: {
        quantidade: 1,
        preco: 9.98
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload;
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    }
};