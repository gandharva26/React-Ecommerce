import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Navbar, navbar } from './Components/Navbar';
import { CartItem } from './Pages/Cart/CartItem';
import { Cart } from './Pages/Cart/Cart';
import { Shop } from './Pages/Shop/Shop';
import { ShopContext, ShopContextProvider } from './Context/shop-context';
function App() {
 
  return (
    <div className="App">
      <ShopContextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Shop/>}>Shop</Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
    
  );
}

export default App;
