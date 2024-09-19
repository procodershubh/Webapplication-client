import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { backendurl } from '../../Servicepage';
import { useSearch } from '../../SearchContext';


function Productpage() {

    const [mydata, setdata] = useState([]);
    const { searchQuery } = useSearch(); // Access search query from context


    const myapi = () => {
        axios.get(`${backendurl}/products`).then((d) => {
            console.log(d.data);
            setdata(d.data);
        });
    };
    useEffect(() => {
        myapi();
    }, []);


    // Filter products based on search query
  const filteredProducts = mydata.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
    




    return (
        <Fragment>

           
        
                <div className='container-fluid d-flex flex-column full-height bg-custom'>
                <div className='row' style={{position:'fixed',right:'20px',zIndex:'9'}}>
                <Link to="addnewproduct" className='btn btn-success'>add new</Link>

                </div>
                
                <div className='row '  >

              
                {filteredProducts.map((e) => {
                    
               return(
                
                    <div className='col-sm-12 col-lg-3 col-md-12 mt-3 p-2 ' key={e._id}>
                          <Link to={`view/${e._id}`} className='text-decoration-none'>
                        <div class="card"  style={{height:'300px',padding:'20px 10px'}} >
                            <img src={e.image} class="card-img-top" style={{width:'120px',aspectRatio:'4/4',marginLeft:'70px'}} alt="product img"></img>
                            <div class="card-body">
                                <h4 class="card-title" style={{maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{e.title}</h4>
                                <h5 class="card-text" style={{float:'left',fontSize:'medium',marginTop:'30px'}}>Price.{e.price}</h5>
                                <h3 className='position-absolute bottom-0 end-0' style={{fontSize:'medium',backgroundColor:'bisque',marginRight:'5px'}}>Stock QTY={e.rating.count}</h3>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                   
               )
               
               
                

            })}
            
                   </div>
        </div>
       
        </Fragment>
      
    )
}

export default Productpage