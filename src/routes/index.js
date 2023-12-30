
import { lazy } from 'react'
import ProfileSettings from '../features/settings/profilesettings'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Leads = lazy(() => import('../pages/protected/Leads'))
const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Transactions = lazy(() => import('../pages/protected/Transactions'))
const Settings = lazy(() => import('../pages/protected/ProfileSettings'))


const routes = [
  {
    path: '/dashboard', 
    component: Dashboard, 
  },
  {
    path: '/leads',
    component: Leads,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/settings',
    component: ProfileSettings
  }
]

export default routes
