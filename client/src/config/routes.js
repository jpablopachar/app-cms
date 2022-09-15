import { AdminRoutes } from '../constants'
import { LayoutAdmin } from '../layouts'
import { Admin } from '../pages/admin'

const routesAdmin = [
  {
    path: AdminRoutes.ADMIN,
    layout: LayoutAdmin,
    component: Admin
  }
]

const routes = [...routesAdmin]

export default routes
