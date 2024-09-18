import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Admin from './components/Admin'

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App