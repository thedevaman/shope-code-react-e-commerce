import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import Product from './components/Admin/Products'
import Order from './components/Admin/Order'
import Dashboard from './components/Admin/Dashboard'
import Setting from './components/Admin/Setting'
import Coustmer from './components/Admin/Coustmer'
import Payment from './components/Admin/Payment'
import Admin from './components/Admin'

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="products" element={<Product/>} />
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