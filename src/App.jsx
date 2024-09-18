import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NotFound from './components/NotFound'
import Product from './components/Admin/Product'
import Order from './components/Admin/Order'

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path="products" element={<Product/>} />
          <Route path="orders" element={<Order/>} />
        </Route> 
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App