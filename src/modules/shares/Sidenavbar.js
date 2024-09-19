import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { LiaUsersCogSolid } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";


function Sidenavbar() {



    



  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12 col-sm-12 '>
        <ul className="btn-toggle-nav list-unstyled " style={{marginTop:'120px'}}>

<li className="mb-4 navh">
<Link to="/adminlogin/Landingpage" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
<BiSolidDashboard />Dashboard
</Link>
</li>

<li className="mb-4 navh">
 <Link to="Myorder" className='link-body-emphasis d-inline-flex text-decoration-none rounded'><FiShoppingCart />
 Order</Link>
</li>

<li className="mb-4 navh">
 <Link to="Myproduct" className='link-body-emphasis d-inline-flex text-decoration-none rounded'><MdOutlineShoppingBag />
 Product</Link>
</li>
<li className="mb-4 navh">
 <Link to="salereport" className='link-body-emphasis d-inline-flex text-decoration-none rounded'><BsGraphUpArrow />
 Sale report</Link>
</li>
<li className="mb-4 navh">
 <Link to="sellerlist" className='link-body-emphasis d-inline-flex text-decoration-none rounded'><LiaUsersCogSolid />

 Seller's</Link>
</li>
<li className="mb-4 navh">
 <Link to="/" className='link-body-emphasis d-inline-flex text-decoration-none rounded'><IoIosLogOut />
 Sign out</Link>
</li>
</ul>
        </div>



      </div>


    </div>
  
  
  )
}

export default Sidenavbar