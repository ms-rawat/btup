import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Crud from './Crud';
import Home2 from './Home2';
import Paper from './Paper';
import SignIn from './SignIn';

import PrivateRoutes from './PrivateRoutes';
const Header = () => {
  return (
    <Router>

    <header className="header">
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          Btu<span className='online'>Online</span>
        </a>
        <ul className="navbar-links">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contcat-us</Link>
          </li>
          <li>
          <Link to="/Crud">crud</Link>
          </li>
        </ul>
      </nav>
    </header>
    <Routes>
          <Route path="/"  element={<Home2/>}/>
          <Route path="/about" element={<About/>}/>
          <Route  path="/contact" element={<Contact/>}/>
          <Route path='/Paper' element={<Paper/>} />
         
          
<Route element={<PrivateRoutes/>}>

<Route path='/crud' element={<Crud/>}/>

</Route>



            <Route element={<SignIn/>} path='/SignIn'/> 
      
          

        </Routes>
    </Router>

  );
};

export default Header;
