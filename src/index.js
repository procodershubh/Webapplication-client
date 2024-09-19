import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './modules/dashboard/Homepage';
import AdminLogin from './modules/auth/AdminLogin';
import Landingpage from './modules/component/Landingpage';
import Landinghome from './modules/component/Landinghome';
import Productpage from './modules/dashboard/Productpage';
import Productdetails from './modules/dashboard/Productdetails';
import Navbar from './modules/shares/Navbar';
import Salereport from './modules/dashboard/Salereport';
import Sellers from './modules/dashboard/Sellers';
import Addnewseller from './modules/dashboard/Addnewseller';
import Editseller from './modules/dashboard/Editseller';

import './style.css';
import Order from './modules/dashboard/Order';
import Newacc from './modules/auth/Newacc';
import { SearchProvider } from './SearchContext';
import Addnewproduct from './modules/dashboard/Addnewproduct';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/adminlogin','/adminlogin/createnewaccount',];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminlogin/createnewaccount' element={<Newacc/>}/>
        
        <Route path='/adminlogin/Landingpage' element={<Landingpage />}>
          <Route path='' element={<Landinghome />} />
          <Route path='Myproduct' element={<Productpage />} />
          <Route path='Myproduct/addnewproduct' element={<Addnewproduct />} />

          <Route path='Myproduct/view/:id' element={<Productdetails />} />
          <Route path='salereport' element={<Salereport />} />
          <Route path='sellerlist' element={<Sellers />} />
          <Route path='sellerlist/edit/:id' element={<Editseller />} />
          <Route path='sellerlist/addnewseller' element={<Addnewseller />} />
          <Route path='Myorder' element={<Order />} />

        </Route>
      </Routes>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
    <SearchProvider>
      <App />
    </SearchProvider>
  </BrowserRouter>
</React.StrictMode>
);

