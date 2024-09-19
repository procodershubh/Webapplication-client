import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSearch } from '../../SearchContext';

function Navbar() {

  const { searchQuery, setSearchQuery } = useSearch(); // Access search context


  const currentLocation = useLocation(); // Renamed variable

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data, tokens, etc.
        localStorage.removeItem('authToken'); // Example: removing a token from localStorage
        // Redirect to login page
        navigate('/');
    };

    const shouldShowSearchBox = currentLocation.pathname.includes('adminlogin/Landingpage/Myproduct'); // or adjust according to your route logic


    
  return (
    <>

<div className='container-fluid sticky-top ' style={{backgroundColor:"#242c44"}} >
        <div className='row'>
            <div className='col-12'>
            <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#242c44"}}>
  <div className="container-fluid">
  <div className='col-md-3'>
         <img src='/image/dmart.svg' alt='logo' style={{ width: '100px',marginLeft:"25px" }}></img>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
                  <div className='col-md-5'>
                  {shouldShowSearchBox && (

                    <div className="input-group">
                      
                      <input type="text" className="form-control" placeholder="Search Here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  />
                      <div className="input-group-append" style={{ marginLeft: '-44px' }}>
                        <button className="btn" type="button"><FaSearch /></button>
                      </div>
                    </div>
                                    )}

                  </div>
    <div className='col-md-4'> 
         <button type="button" class="btn btn-primary" style={{float:'right'}}><IoMdNotificationsOutline />
     <span class="badge badge-light">0</span></button>
     </div>
     <div className='col-md-1'></div>
     <div className='col-md-2'>
     <div class="dropdown" >
                 <Link to="#" class="d-flex align-items-center link-body-emphasis text-white text-decoration-none dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                     <img src="/image/profile.png" alt="Userpic" width="42" height="42" class="rounded-circle me-3"></img>
                     <strong ></strong>
                 </Link>
                 <ul class="dropdown-menu text-small shadow" >

                     <li><Link class="dropdown-item" to="#">Profile</Link></li>
                     <li><hr class="dropdown-divider" /></li>
                     <li><button className="dropdown-item" onClick={handleLogout}>Sign out</button></li>
                    
                 </ul>
             </div>
     </div>
    
    
    </div>
  </div>
</nav>
            </div>
        </div>
 

    </div>



    </>
  )

  
}


export default Navbar