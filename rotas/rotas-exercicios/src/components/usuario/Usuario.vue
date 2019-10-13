<template>
    <div class="usuario">
        <h2>Usuários</h2>
    
        <hr>
        
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
    export default {
        name: 'Usuario',
        methods: {
            irParaInicio() {
                this.$router.push('/');
            }
        }
    };
</script>

<style scoped>

</style>