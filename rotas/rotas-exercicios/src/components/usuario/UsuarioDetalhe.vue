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
            :to="{
                name: 'usuario.editar',
                params: { id },
                query: { completo: false, lingua: 'pt' },
                hash: '#rodape'
            }">
            Editar
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'UsuarioDetalhe',
        props: ['id'],
        beforeRouteEnter(to, from, next) {
            console.log('dentro do componente -> usuário detalhe');
            // next(vm => {
            //     console.log(vm.id);
            // });
            
            const auth = true;
            auth ? next() : next(false);
        }
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