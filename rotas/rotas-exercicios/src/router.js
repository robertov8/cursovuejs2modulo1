import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';

import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';
import Menu from './components/template/Menu';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        props: true,
        // component: Usuario,
        components: {
            default: Usuario,
            menu: Menu
        },
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', props: true, component: UsuarioDetalhe },
            { path: ':id/editar', props: true, name: 'usuario.editar', component: UsuarioEditar }
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/'
    }]
});