import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import AdminProduct from './components/Admin/Products'
import Order from './components/Admin/Order'
import Dashboard from './components/Admin/Dashboard'
import Setting from './components/Admin/Setting'
import Coustmer from './components/Admin/Coustmer'
import Payment from './components/Admin/Payment'
import Admin from './components/Admin'
import Home from './components/Home'
import Products from './components/Products'
import Category from './components/Category'
import Login from './components/Login'
import Signup from './components/Signup'

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path="/admin">
          <Route path="products" element={<AdminProduct/>} />
          <Route path="orders" element={<Order/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="settings" element={<Setting/>} />
          <Route path="coustmers" element={<Coustmer/>} />
          <Route path="payments" element={<Payment/>} />
          <Route path="auth" element={<Admin/>} />
        </Route> 
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App