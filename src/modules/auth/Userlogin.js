import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Userlogin() {

    const myredirect =useNavigate()
      
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    myredirect("Landingpage")
 
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='container-fluid'style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(mainbg.png)',backgroundSize:'100% 100%',height:'100vh'}}>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4 p-3 shadow rounded' style={{marginTop:'100px',backgroundColor:'white',height:'auto'}}>
           
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control"  aria-describedby="emailHelp"  {...register("email",{required:true})} />
    {errors.email && <div className="form-text text-danger">We'll never share your email & password with anyone else.</div>}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"  {...register("pass",{required:true})} />
    {errors.pass && <div className="form-text text-danger">We'll never share your email & password with anyone else.</div>}

  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" {...register("check",{required:true})}/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    {errors.pass && <div className="form-text text-danger">Verify you are not a Robot</div>}

  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <Link className='ms-4' to="recover/account">Forgot Password</Link>

            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
    </form>
  )
}

export default Userlogin