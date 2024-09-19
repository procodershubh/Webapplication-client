import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AdminLogin() {

  const usenav =useNavigate();
 const [userlogin,usersetlogin]= useState({
    email:"",
    pass:"",
    checkbox: false, 
 });

 
 const updateinput =(e) =>{
  const {name,value, type, checked} =e.target;
  usersetlogin((a) => {
    return{
      ...a,
      [name]: type === "checkbox" ? checked :value
    }
  })
 }
 const mylogin =async()=>{
  const { email,pass,checkbox} =userlogin;
  
  if(email==="" || pass==="")
  {
    toast.warning("email or password is blank");

  }
  else if (!checkbox) {
    toast.warning("You must agree to the terms by checking the box.");

  } 
  
  else{
    const mydata =await fetch("http://localhost:5782/mylogin",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        email,pass
        
      })
    });
    const res =await mydata.json();
    console.log(res.fullname);

    if(res.status===422)
    {
      toast.success(`welcome ${res.fullname}`);
       setTimeout(()=>{
        usenav('/adminlogin/Landingpage');

       },2000);
    }
    else
    {
      toast.error(res.message || "User Not Found Check Your Email or Password");
    }
  }

 }

  

  return (
    <form >
    <div className='container-fluid'style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(mainbg.png)',backgroundSize:'100% 100%',height:'100vh'}}>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 p-3 shadow rounded' style={{marginTop:'100px',backgroundColor:'white',height:'auto'}}>
           
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp"  name='email' onChange={updateinput} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  name='pass' onChange={updateinput} />

  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" name="checkbox" onChange={updateinput} required/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  
  </div>
 
  <input type="button" value="Login" class="btn btn-primary" onClick={mylogin}/>
  <Link to="createnewaccount" className='ms-3 text-decoration-none'>Create new account</Link>

     

            </div>
            <div className='col-md-4'>
            <ToastContainer />

            </div>
        </div>
    </div>
    </form>
  )
}

export default AdminLogin