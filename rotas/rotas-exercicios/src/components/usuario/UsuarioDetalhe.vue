<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        
        <p>
            <strong>Código:</strong> {{ id }}
        </p>
        
        <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link>-->
        <router-link
            tag="button"
            primario
            :to="{name: 'usuario.editar', params: { id }}">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UsuarioDetalhe',
        props: ['id'],
        // data() {
        //     return {
        //         id: this.$route.params.id
        //     };
        // },
        // watch: {
        //     $route(to) {
        //         this.id = to.params.id;
        //     }
        // }
    };
</script>

<style scoped>

</style>