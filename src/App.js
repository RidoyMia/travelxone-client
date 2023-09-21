import React, { useContext } from 'react';
import Header from './components/Shared/Header/Header';
import Home from './components/pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Contactus from './components/pages/Contactus/Contactus';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Users from './components/pages/Dashboard/Users';
import Divission from './components/Shared/Divission/Divission';
import CountryTour from './components/pages/CountryTour/CountryTour';
import TourDetails from './components/pages/TourDetails/TourDetails';
import { AuthContextElement } from './components/Context/AuthContext';
import Order from './components/pages/Dashboard/Order';
//
const App = () => {
  const{user} = useContext(AuthContextElement) 
  return (
    
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/touristPlace/:country' element={<CountryTour></CountryTour>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contactus></Contactus>}></Route>
       {
      user?  <Route path='/:CountryName/:place' element={<TourDetails></TourDetails>}></Route> : <Route path='/:CountryName/:place' element={<Login></Login>}></Route>
       }
       
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='my-order' element={<Order></Order>}></Route>
        </Route>
      </Routes>
     
      <Footer></Footer>
    </div>
  );
};

export default App;