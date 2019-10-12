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
                variant="primary">
                Salvar
            </b-button>
            
            <b-button
                class="ml-2"
                @click="obterUsuario"
                size="lg"
                variant="success">
                Obter Usuários
            </b-button>
    
            <hr>
            
            <b-list-group>
                <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
                    <strong>ID: </strong> {{ id }} <br>
                    <strong>Nome: </strong> {{ usuario.nome }} <br>
                    <strong>E-mail: </strong> {{ usuario.email }} <br>
                    
                    <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
                    <b-button variant="danger" size="lg" @click="excluir(id)" class="ml-2">Excluir</b-button>
                </b-list-group-item>
            </b-list-group>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: null,
                usuarios: [],
                usuario: {
                    nome: '',
                    email: ''
                }
            }
        },
        created() {
            this.obterUsuario();
            // console.log('exec!!!');
            //
            // const response = await this.$http.post('usuarios.json', {
            //     nome: 'Maria',
            //     email: 'maria_maria@gmail.com'
            // });
            //
            // console.log(response);
        },
        methods: {
            limpar() {
                this.usuario.nome = '';
                this.usuario.email = '';
                this.id = null;
            },
            carregar(id) {
                this.id = id;
                this.usuario = { ...this.usuarios[id] };
            },
            async excluir(id) {
                this.$http.delete(`/usuarios/${id}.json`);
                await this.obterUsuario();
            },
            async salvar() {
                const method = this.id ? 'patch' : 'post';
                const url = this.id ? `/${this.id}.json` : '.json';
                
                await this.$http[method](`/usuarios${url}`, this.usuario);
                
                this.limpar();
                this.obterUsuario();
            },
            async obterUsuario() {
                this.$http.defaults.headers.common['Authorization'] = 'abc123';
                
                const response = await this.$http.get('usuarios.json');
                this.usuarios = response.data;
            }
        }
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
