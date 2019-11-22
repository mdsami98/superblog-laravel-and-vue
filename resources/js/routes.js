import AdminHome from './components/admin/AdminHome.vue';
import Ex from './components/ExampleComponent';
export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/post',
        component:Ex
    },
]
