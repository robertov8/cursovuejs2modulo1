import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';

import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario',
        props: true,
        component: Usuario,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', props: true, component: UsuarioDetalhe },
            { path: ':id/editar', props: true, component: UsuarioEditar }
        ]
    }]
});