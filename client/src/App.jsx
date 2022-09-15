// import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutPublic } from './layouts'
import { Contact, Home } from './pages/public'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
