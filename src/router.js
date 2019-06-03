import Vue from 'vue'
import Router from 'vue-router'

import ProjectList from './views/ProjectList.vue'
import Home from './views/Home.vue';
import Member from './views/Member.vue';
import Task from './views/Task.vue';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'projectList',
      component: ProjectList
    } ,{
      path:'/home',
      name:'home',
      component:Home
    },{
      path:'/member',
      name:'member',
      component:Member
    },{
      path:'/task',
      name:'task',
      component:Task
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
