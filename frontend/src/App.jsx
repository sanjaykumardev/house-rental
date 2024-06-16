import { Routes, Route  } from 'react-router-dom';
import  { useState } from 'react'
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import HouseList from './Pages/HouseList';
import Payment from './Pages/Payment';
import Loader from './Pages/Loader';
import { UserProvider } from './models/UserContext';
import HouseAdd from './Pages/HouseAdd';
import Cart from './Pages/Cart'
import Buydesp from './Pages/BuyDesp';

function App() {
  const [products ] = useState([]);

 
  return (
    <div>
      <UserProvider >
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/houseadd' element={<HouseAdd />} />
          <Route exact path='/' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/houselist' element={<HouseList 
           products={products} 
          />} />
          <Route exact path='/desp/:id' element={<Buydesp/>} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/pay/:houseId' element={<Payment />} />
          <Route exact path='/loader' element={<Loader />} />
        </Routes>
      </UserProvider>
    </div>
  );
}


export default App;