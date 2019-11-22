import AdminHome from './components/admin/AdminHome.vue';
import Ex from './components/ExampleComponent';
import CategoryList from './components/admin/category/List';
import AddCAtegory from './components/admin/category/New';




export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/post',
        component:Ex
    },
    {
        path:'/category-list',
        component:CategoryList
    },
    {
        path:'/add-category',
        component:AddCAtegory
    },
]
