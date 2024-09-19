import React, { Fragment, useEffect, useState } from 'react';
import { FcSalesPerformance } from "react-icons/fc";
import Totalrevenuechart from "./Totalrevenuechart"
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineSell } from "react-icons/md";
import { RiLuggageCartLine } from "react-icons/ri";
import Visitorchart from "./Visitorchart"
import Topproduct from './Topproduct';
import Targetsell from './Targetsell';
import Customersatisfaction from './Customersatisfaction';
import { BsGraphUpArrow } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { MdOutlineThumbsUpDown } from "react-icons/md";
import axios from 'axios';
  import { backendurl } from '../../Servicepage';


function Landinghome() {

  const [mydata, setdata] = useState([]);
  const [totalDeliveredSales, setTotalDeliveredSales] = useState(0);
  const [userCount, setUserCount] = useState(0); // New state for user count


  const myalldata = () => {
    axios.get(`${backendurl}/myorders`).then((d) => {
        console.log(d.data);
        setdata(d.data)

         // Calculate total delivered sales
      const deliveredSales = d.data
      .filter(order => order.orderStatus === 'Delivered') // Filter for delivered orders
      .reduce((total, order) => {
        // Sum the price of all delivered items
        return total + (order.cartItems || []).reduce((sum, item) => sum + item.price, 0);
      }, 0);

    setTotalDeliveredSales(deliveredSales);

    });


     // Fetch user signup
     axios.get(`${backendurl}/signup`).then((response) => {
      console.log(response.data);
      setUserCount(response.data);
    })

     
};


useEffect(() => {
    myalldata();
}, []);









  return (
    <Fragment>

      <div className='container-fluid mt-3'>
        <div className='row '>
          <div className='col-lg-6 col-md-12 p-2  ' >
            <div className='card-chart card ' style={{ backgroundColor: '#27293d', height: '360px' }}>

              <div class="card-header">
                <p className='text-white text-center'><MdOutlineShoppingCartCheckout style={{ marginRight: '10px', fontSize: '20px' }} />

                  Today Sales</p>

              </div>
              <div className='card-body' >
                <div className='row'>
                  <div className='col-12 col-sm-6 col-md-3 mb-3'>
                    <div className='card text-center p-2' style={{ backgroundColor: 'pink', height: '140px' }}>
                      <div className='card-logo'><FcSalesPerformance className='cardimgone' /></div>
                      <h5>Rs.{totalDeliveredSales}</h5>
                      <p>Total Sales</p>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-3 mb-3'>
                    <div className='card text-center p-2' style={{ backgroundColor: '#fff4de', height: '140px' }}>
                      <div className='card-logo'><RiLuggageCartLine className='cardimgtwo' /></div>
                      <h5>
                     {mydata.length} Qty
                      </h5>
                      <p>Total Order</p>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-3 mb-3'>
                    <div className='card text-center p-2' style={{ backgroundColor: '#dcfce7', height: '140px' }}>
                      <div className='card-logo'><MdOutlineSell className='cardimgthree' /></div>
                      <h5>
                        {mydata.filter(myorders => myorders.orderStatus === "Delivered").length } Qty
                      </h5>
                      <p>Product Sold</p>
                    </div>
                  </div>
                  <div className='col-12 col-sm-6 col-md-3 mb-3'>
                    <div className='card text-center p-2' style={{ backgroundColor: '#d7c2ff', height: '140px' }}>
                      <div className='card-logo'><IoPersonAdd className='cardimgfour' /></div>
                      <h5>{userCount.length}</h5> {/* Display user count here */}
                      <p>Total Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-lg-6 col-md-12 p-2  '>
            <div className='card-chart card ' style={{ backgroundColor: '#27293d' }}>
              <div class="card-header">

                <p className='text-white text-center'> <BsGraphUpArrow style={{ marginRight: '10px', fontSize: '20px' }} />
                  Visitor insights</p>

              </div>
              <div className='card-body' style={{ height: '300px' }}>

                <Visitorchart />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-md-12 p-2 shadow' style={{ backgroundColor: 'rgb(39, 41, 61)' }}>
            <p className='text-white text-center'><GiReceiveMoney style={{ marginRight: '10px', fontSize: '20px' }} />Total Revenue</p>

            <div className='col-md-12' style={{ height: '320px' }}>
              <Totalrevenuechart />
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-3'>
        <div className='row '>

          <div className='col-md-4 p-3' >
            <div className='card-chart card ' style={{ backgroundColor: '#27293d' }}>
              <div class="card-header">
                <p className='text-white text-center'><FaRegThumbsUp style={{ marginRight: '10px', fontSize: '20px' }} />
                  Best Products</p>
              </div>
              <div className='card-body'>
                <Topproduct />
              </div>


            </div>
          </div>

          <div className='col-md-4 p-2' >

            <div class="card-chart card " style={{ backgroundColor: '#27293d' }}>
              <div class="card-header">
                <p className='text-white text-center'> <MdOutlineStackedLineChart style={{ marginRight: '10px', fontSize: '20px' }} />
                  Target VS Reality</p>
              </div>
              <div className='card-body' style={{ height: '300px' }}>
                <Targetsell />

              </div>

            </div>

          </div>


          <div className='col-md-4 p-2' >

            <div class="card-chart card " style={{ backgroundColor: '#27293d' }}>
              <div class="card-header">
                <p className='text-white text-center'><MdOutlineThumbsUpDown style={{ marginRight: '10px', fontSize: '20px' }} />  Customer Satisfaction(Last 7days)</p>

              </div>
              <div className='card-body' style={{ height: '300px' }}>
                <Customersatisfaction />
              </div>

            </div>

          </div>


        </div>
      </div>

    </Fragment>



  )
}

export default Landinghome