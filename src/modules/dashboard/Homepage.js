import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from 'react-router-dom';



function Homepage() {
  return (
    <div class="container-fluid text-center" style={{ backgroundImage: 'url(mainbg.png)', backgroundSize: '100% 100%', height: '100vh' }}>
      <div class="row align-items-center" >
        <div class="col-md-12 "> </div>
        <div className='col-md-5'></div>
        <div class="col-md-2">
          <div class="card" style={{ marginTop: '200px',border:'2px solid red' }}  >
            <img src="user.png" class="card-img-top" alt="ADMIN LOGIN" style={{ width: '100px', marginLeft: 'auto', marginRight: 'auto' }} />
            <div class="card-body">
              <h5 class="card-title">ADMIN LOGIN</h5>
              <Link to="adminlogin" class="btn btn-warning">LOGIN</Link>
            </div>
          </div>
          <div className='col-md-5'></div>
        </div>


      </div>
    </div>
  )
}

export default Homepage