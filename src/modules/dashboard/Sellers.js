import axios from 'axios';

import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { backendurl } from '../../Servicepage';






function Sellers() {
   

  const [mydata, setdata] = useState([]);

  const myapi = () => {
    axios.get(`${backendurl}/allsellers`).then((d) => {
      setdata(d.data);
    });
  };
  useEffect(() => {
    myapi();
  }, []);


  const mydeleterecord = (id)=>{
    axios.delete(`http://localhost:5782/deleterecord/${id}`).then((d) => {
        myapi();
    })
}

  return (
    <Fragment>
    <div className="container-fluid d-flex flex-column full-height bg-custom" >
  <div className='container-fluid' style={{height:'80px',backgroundColor: 'rgb(30, 30, 46)',position:'fixed' }}>
      <div className="row flex-grow-0" >
               <div className='col-md-6'>
               <h3 className="text-light text-center mt-3 " >  SELLER DETAIL'S</h3>
               </div>
            
               <div className='col-md-6'>
            <Link to="addnewseller" className='btn btn-success' style={{marginLeft:"350px",marginTop:"30px",position:"fixed"}}>add new</Link>
               </div>
           
          
          
           </div>
      </div>
      
      <div className="row flex-grow-1 " style={{marginTop:'80px'}}>
        <div className="col-md-12">
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">REG ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No</th>
                <th scope="col">Zipcode</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((d, index) => (
                <tr key={d._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{d._id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>{d.zipcode}</td>
                  <td>
                    <Link to={"edit/"+d._id} className="btn btn-sm btn-warning ms-2">Edit</Link>
                    <button className="btn btn-sm btn-danger ms-2" onClick={() => mydeleterecord(d._id)}> Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


    
  </Fragment>
  )
}

export default Sellers