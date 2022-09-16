// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminRoutes, PublicRoutes } from './constants/routes'
import { LayoutAdmin, LayoutPublic } from './layouts'
import { Admin, SignIn } from './pages/admin'
import { Contact, Home } from './pages/public'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<Home/>}/>
          <Route path={PublicRoutes.CONTACT} element={<Contact/>} />
        </Route>
        <Route path={AdminRoutes.ADMIN} element={<LayoutAdmin/>}>
          <Route index element={<Admin/>}/>
          <Route path={AdminRoutes.ADMIN_LOGIN} element={<SignIn/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
