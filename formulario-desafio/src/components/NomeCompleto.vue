<template>
    <div>
        <Rotulo nome="Nome">
            <input
                type="text"
                id="nome"
                name="nome"
                @input="alterarNome"
                :value="value.nome">
        </Rotulo>

        <Rotulo nome="Sobrenome">
            <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                @input="alterarSobrenome"
                :value="value.sobrenome">
        </Rotulo>
    </div>
</template>

<script>
    import Rotulo from './Rotulo';

    export default {
        name: 'NomeCompleto',
        props: {
            value: { type: Object, required: true }
        },
        methods: {
            alterarNome(event) {
                this.$emit('input', { nome: event.target.value, sobrenome: this.value.sobrenome });
            },
            alterarSobrenome(event) {
                this.$emit('input', { nome: this.value.nome, sobrenome: event.target.value });
            }
        },
        components: { Rotulo }
    };
</script>

<style scoped>

</style>