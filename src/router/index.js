import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenuView from '../components/MainMenuView.vue'
import PlayView from '../components/PlayView.vue'
import ProfileView from '../components/ProfileView.vue'
import AboutView from '../components/AboutView.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            component: MainMenuView
        },
        {
            path: '/mainMenuView',
            name: "mainMenu",
            component: MainMenuView
        },
        {
            path: '/playView',
            name: "playView",
            component: PlayView
        },
        {
            path: '/profileView',
            name: "profileView",
            component: ProfileView
        },
        {
            path: '/aboutView',
            name: "aboutView",
            component: AboutView
        }
    ],
    mode: "history"
})