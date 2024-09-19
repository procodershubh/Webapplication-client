import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { backendurl } from '../../Servicepage';


function Editseller() {

    const usenav =useNavigate();

    const {id} = useParams();
    const [insdata,setdata]=useState({
        name:"",
        email:"",
        phone:"",
        zipcode:""
  
        });

        const updateinput =(e)=>{
            const {name,value} = e.target;
            setdata((a) =>{
                return{
                    ...a,
                    [name]:value
                }
            })
        }

        const singleuser = () => {
            axios.get(`${backendurl}/singledata/${id}`).then((d) => {
              console.log(d.data);
              setdata(d.data);
            })
          }
        
          useEffect(() => {
            singleuser();
          }, [id]);

          const updaterecord = async () => {
            const { name, email, phone, zipcode } = insdata;
            try {
                const mydata = await fetch(`${backendurl}/updaterecord/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name, email, phone, zipcode
                    })
                });
                const res = await mydata.json();
                if (res) {
                    console.log("Record updated successfully", res);
                    usenav("/adminlogin/Landingpage/sellerlist");
                } else {
                    console.error("Failed to update the record");
                }
            } catch (error) {
                console.error("Error updating record:", error);
            }
        };
        



   

    return (
        <>
            <form >
                <div className="container-fluid d-flex flex-column full-height bg-custom" >
                    <div className="row">
                        <div className='col-md-3'></div>
                        <div className="col-md-6">
                            <div className='card-chart card' style={{ backgroundColor: '#27293d', padding: '30px 20px' }}>
                                <div className='card-header'>
                                    <h3 className="text-center text-light">EDIT Seller DETAILS</h3>

                                </div>

                                <div className='card-body'>
                                    <label for="inputName" class="sr-only text-light">Name</label>
                                    <input type="text" id="inputName" class="form-control" placeholder="username" name='name' value={insdata.name} onChange={updateinput}  />

                                    <label for="inputEmail" class="sr-only text-light">Email </label>
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" name='email' value={insdata.email} onChange={updateinput} />

                                    <label for="inputPassword" class="sr-only text-light">phone</label>
                                    <input type="text" id="inputPassword" class="form-control" placeholder="phone" name='phone' value={insdata.phone} onChange={updateinput} />


                                    <label for="inputConfirmPassword" class="sr-only text-light mt-2"> zipcode</label>
                                    <input type="text" id="inputPassword" class="form-control" placeholder="zipcode" name='zipcode' value={insdata.zipcode} onChange={updateinput} />


                                </div>
                                <div className="card-footer text-center">
                                    <input type='button' value="Update record" className='btn btn-outline-success' onClick={updaterecord} />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'></div>


                    </div>
                </div>
            </form>
        </>
    )
}

export default Editseller