import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from '../../Servicepage';
function Newacc() {
  const appnavigate = useNavigate();

  const updateinput = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [insdata, setdata] = useState({
    fullname: "",
    email: "",
    mobile: "",
    pass: ""
  });

  const validateForm = () => {
    const { fullname, email, mobile, pass } = insdata;

    // Name validation (at least 3 characters)
    if (fullname.trim().length < 3) {
      toast.warning("Name must be at least 3 characters long");
      return false;
    }

    // Email validation (basic email format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.warning("Please enter a valid email address");
      return false;
    }

    // Mobile number validation (10 digits)
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      toast.warning("Please enter a valid 10-digit mobile number");
      return false;
    }

    // Password validation (at least 6 characters)
    if (pass.length < 6) {
      toast.warning("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const registerpage = async () => {
    if (!validateForm()) {
      return; // Stop the submission if validation fails
    }

    const { fullname, email, mobile, pass } = insdata;

    try {
      const mydata = await fetch(`${backendurl}/createnew`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, mobile, pass })
      });

      if (!mydata.ok) {
        throw new Error(`HTTP error! status: ${mydata.status}`);
      }

      const res = await mydata.json();
      console.log(res);

      if (res.status === 255) {
          toast.success("Account Created Successfully");
        setTimeout(() => {
          appnavigate("/adminlogin");
        }, 2000);
      } else if (res.status === 450) {
        toast.warning("Name must be 3 digits long");
      } else {
        toast.error(res.message || "An unexpected error occurred");
      }
    } catch (error) {
      toast.error("Failed to connect to the server");
      console.error("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerpage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container-fluid newacc'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 p-3 shadow rounded' style={{ marginTop: '100px', backgroundColor: 'white', height: 'auto' }}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name='fullname' onChange={updateinput} value={insdata.fullname} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' onChange={updateinput} value={insdata.email} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input type="text" className="form-control" name='mobile' onChange={updateinput} value={insdata.mobile} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name='pass' onChange={updateinput} value={insdata.pass} required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" name='check' required />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className='btn btn-success'>Register Now</button>
            <Link to="/adminlogin" className='ms-3 text-decoration-none'>Back To Login</Link>
          </div>
          <div className='col-md-4'>
            <ToastContainer />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newacc;
