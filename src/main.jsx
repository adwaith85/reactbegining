import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import "./card.css"
import  {BrowserRouter} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductScreen from './ProductScreen';
import About from './About';
import Cart from './Cart';
import { CartProvider } from './CarProvider';
createRoot(document.getElementById('root')).render(
  <StrictMode>


<CartProvider>
   <BrowserRouter>
    <Routes>
   
  <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
  
    
    </Routes>
    
    </BrowserRouter>

</CartProvider>
     


    
  </StrictMode>,
)
