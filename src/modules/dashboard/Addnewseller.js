import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendurl } from "../../Servicepage";



function Addnewseller() {

    const navigate = useNavigate();
    const [insdata, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        zipcode:""
    });

    const updateinput = (e) => {
        const { name, value } = e.target;
        setdata((a) => {
            return {
                ...a,
                [name]: value
            }
        })
    }


    const registorpage = async () => {

        if (insdata.name.length>=3) {

            const { name, email, phone, zipcode} = insdata;
            const mydata = await fetch(`${backendurl}/createseller`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name, email, phone, zipcode
                })
            });
            const res = await mydata.json();
            console.log(res);
            if (res.status === 255) {
                toast.success("Seller Added Successfully");
                navigate("/adminlogin/Landingpage/sellerlist");

                // setInterval(()=>{
                //     navigate("/adminlogin/Landingpage/sellerlist");


                // },2000)
            }
            

        }
        else {
            toast.error("ALL field are require/Name must be 3 digits");

        }


    }


  








    return (
        <>
            <form >
                <div className="container-fluid d-flex flex-column full-height bg-custom" >

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 ">
                            <div className="card-chart card" style={{ backgroundColor: '#27293d', padding: '30px 20px' }}>
                                <div className="card-header">
                                    <h3 className="text-center text-light">please fill this form</h3>
                                </div>
                                <div className="card-body">
                                    <label for="inputName" class="sr-only text-light">Name</label>
                                    <input type="text" class="form-control" placeholder="username" name='name' value={insdata.name} onChange={updateinput} />

                                    <label for="inputEmail" class="sr-only text-light">Email </label>
                                    <input type="email"  class="form-control" placeholder="Email address" name='email' value={insdata.email} onChange={updateinput} />

                                    <label for="inputPassword" class="sr-only text-light">phone</label>
                                    <input type="text"  class="form-control" placeholder="phone" name='phone' value={insdata.phone} onChange={updateinput} />


                                    <label for="inputConfirmPassword" class="sr-only text-light"> zipcode</label>
                                    <input type="text" class="form-control" placeholder="zipcode" name='zipcode' value={insdata.zipcode} onChange={updateinput} />

                                </div>

                                <div className="card-footer text-center ">
                                    <input type='button' value="ADD NEW SELLER" className='btn btn-outline-success' onClick={registorpage}/>
                                </div>


                            </div>

                        </div>
                        <div className="col-md-3">
                        <ToastContainer />

                        </div>

                    </div>
                </div>
            </form>
        </>
    );
};

export default Addnewseller;
