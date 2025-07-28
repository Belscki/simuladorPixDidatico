import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { createRouter, createWebHistory } from 'vue-router'

//views
// import login from "./view/login.vue"

import home from './view/home.vue'

//Nubank
import nubank from './view/nubank/nubank.vue'
import paymentnubank from './view/nubank/paymentnubank.vue'
import valuepaymentnubank from './view/nubank/valuepaymentnubank.vue'
import reciptnubank from './view/nubank/reciptnubank.vue'
import destinationpixnubank from './view/nubank/destinationpixnubank.vue'
import confimationnubank from './view/nubank/confimationnubank.vue'

import $ from 'jquery'
import { io } from 'socket.io-client'
import { gsap } from 'gsap'

const router = createRouter({
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path:"/Home",
      component: home
    },
    {
      path: "/Nubank",
      component: nubank
    },
    {
      path: "/Nubank/Payment",
      component: paymentnubank
    },
    {
      path: "/Nubank/Payment/Value",
      component: valuepaymentnubank
    },
    {
      path: "/Nubank/Payment/Value/Destination",
      component: destinationpixnubank
    },
    {
      path:"/Nubank/Payment/Value/Confirm",
      component: confimationnubank
    },
    {
      path:"/Nubank/Payment/Value/Recipt",
      component:reciptnubank
    },
  ],
  history: createWebHistory()
})

const app = createApp(App)
app.config.globalProperties.$ = $;
app.use(router).mount('#app')
