
import { createWebHistory, createRouter } from 'vue-router'
import Login from '../components/login.vue'
import Overview from '../components/Overview.vue'
import Paremetres from '../components/Paremetres.vue'
import Statics from '../components/statics.vue'
import Contact from '../components/contact.vue'
import Manage from '../components/manage.vue'
import CPO from '../components/cpo.vue'
import Map from '../components/map.vue'
import Update from '../components/updateCpo.vue'



export default () => createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Login',
        component: Login,
      },
      {
        path: '/map',
        name: 'Map',
        component: Map,
      },
      {
        path: '/update/:id',
        name: 'Update',
        component: Update,
      },
      {
        path: '/overview',
        name: 'Overview',
        component: Overview,
      }, {
        path: '/statics',
        name: 'Statics',
        component: Statics,
      }, {
        path: '/paremetres',
        name: 'Parametres',
        component: Paremetres,
      },
     {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
   {
    path: '/cpo',
    name: 'Manage',
    component: Manage,
  },
  ,
      {
        path: '/ajouter',
        name: 'cpo',
        component: CPO,
      }
      ,
     


    ]
  })