import Vue from "vue";
// eslint-disable-next-line no-unused-vars
import Router from 'vue-router'
import Login from "../layout/Login";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'Home',
            component:() => import('../components/Home'),
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'AppIndex',
                    component:() => import('../components/home/AppIndex')
                },
                {
                    path:'/library',
                    name:'Library',
                    component:() => import('../components/library/LibraryIndex'),

                }
            ]

        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },

        // {
        //     path:'index',
        //     name'AppIndex',
        //     component:AppIndex
        // }
    ]
})