import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Canvas from '@/views/Canvas'
import View1 from '@/views/View1'
import View2 from '@/views/View2'
import View3 from '@/views/View3'
import View4 from '@/views/View4'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: Canvas
  },
  {
    path: '/view1',
    name: 'View1',
    component: View1
  },
  {
    path: '/view2',
    name: 'View2',
    component: View2
  },
  {
    path: '/view3',
    name: 'View3',
    component: View3
  },
  {
    path: '/view4',
    name: 'View4',
    component: View4
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router