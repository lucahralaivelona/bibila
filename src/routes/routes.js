import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import Voiture from 'src/pages/Voiture.vue'
import Disponible from 'src/pages/Disponible.vue'
import Historique from 'src/pages/Historique.vue'
import Icons from 'src/pages/Icons.vue'
import Reservation from 'src/pages/Reservation.vue'
import Utilisateur from 'src/pages/Utilisateur.vue'
import Upgrade from 'src/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'voiture',
        name: 'Voiture',
        component: Voiture
      },
      {
        path: 'disponible',
        name: 'Disponible',
        component: Disponible
      },
      {
        path: 'historique',
        name: 'Historique',
        component: Historique
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'reservation',
        name: 'Reservation',
        component: Reservation
      },
      {
        path: 'utilisateur',
        name: 'Utilisateur',
        component: Utilisateur
      },
      // {
      //   path: 'upgrade',
      //   name: 'Upgrade to PRO',
      //   component: Upgrade
      // }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
