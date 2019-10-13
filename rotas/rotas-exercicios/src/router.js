import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';

import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';
import Menu from './components/template/Menu';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition)
            return savedPosition;
        
        if (to.hash)
            return {selector: to.hash};
        
        return {x: 0, y: 0};
    },
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
            {path: '', component: UsuarioLista},
            {
                path: ':id', props: true, component: UsuarioDetalhe, beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuário detalhe');
                    next();
                }
            },
            {path: ':id/editar', props: true, name: 'usuario.editar', component: UsuarioEditar}
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
});

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global');
    next();
    console.log('depois das rotas -> global');
});
export default router;