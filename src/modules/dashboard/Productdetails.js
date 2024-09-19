import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Productgraph from './Productgraph';
import { backendurl } from '../../Servicepage';

function Productdetails() {

    const { id } = useParams();

    const [singledata, setsingledata] = useState([]);
    const [secdata, setsecdata] = useState([]);


    useEffect(() => {
        const Viewdetails = () => {
            axios.get(`${backendurl}/products/${id}`).then((d) => {
                console.log(d.data);
                setsingledata(d.data);
                setsecdata(d.data.rating);

            });

        };

        Viewdetails();
    }, [id]);

    return (
        <Fragment>
            <div className='container-fluid d-flex flex-column full-height bg-custom'>
                <div className='row' >

                    <div className='col-md-4 mt-5'>
                        <div className="card p-3" >
                            <img className="card-img-top" src={singledata.image} alt="Product" style={{ width: '170px', aspectRatio: '2/3', marginLeft: '80px' }} />
                            <div className="card-body">
                                <h5 className="card-text">{singledata.title}</h5>
                                <p className='card-text'>{singledata.description}</p>
                                <h5 class="p-3 mb-2 bg-primary text-white" style={{ float: 'left', fontSize: 'medium', marginTop: '30px' }}>Price.{singledata.price}rs</h5>
                                <h5 class="p-3 mb-2 bg-warning text-white" style={{ float: 'right', fontSize: 'medium', marginTop: '30px' }}>Stock QTY.{secdata.count}</h5>

                            </div>
                            <div className='card-detail'>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 mt-5 '>
                      
                            <h1 className='p-3 mb-2 bg-info text-white'>Product Impression And Sell</h1>
                           

                             <Productgraph/>
                             
                             
                       


                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Productdetails