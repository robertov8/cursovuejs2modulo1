<template>
    <div id="app" class="container">
        <h1>HTTP com Axios</h1>
        
        <b-card>
            <b-form-group label="Nome:">
                <b-form-input
                    type="text"
                    size="lg"
                    v-model="usuario.nome"
                    placeholder="Informe o Nome" />
            </b-form-group>
    
            <b-form-group label="Email:">
                <b-form-input
                        type="email"
                        size="lg"
                        v-model="usuario.email"
                        placeholder="Informe o Email" />
            </b-form-group>
            
            <b-button
                @click="salvar"
                size="lg"
                variant="primary">Salvar</b-button>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                usuario: {
                    nome: '',
                    email: ''
                }
            }
        },
        methods: {
            salvar() {
                console.log(this.usuario.nome);
                console.log(this.usuario.email);
            }
        }
        // async created() {
        //     console.log('exec!!!');
        //
        //     const response = await this.$http.post('usuarios.json', {
        //         nome: 'Maria',
        //         email: 'maria_maria@gmail.com'
        //     });
        //
        //     console.log(response);
        // }
    };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-size: 1.5rem;
    }
    
    #app h1 {
        text-align: center;
        margin: 50px;
    }
</style>
