import React, { Fragment } from 'react';
import Totalrevenuechart from '../component/Totalrevenuechart';
import Dailysales from '../component/Dailysales';
import Shipment from '../component/Shipment';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdSell } from "react-icons/md";
import Completetask from '../component/Completetask';
import { MdTaskAlt } from "react-icons/md";




function Salereport() {
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 p-2' style={{ height: '400px' }}>
            <p className='text-white text-center'> Total Revenue</p>
            <Totalrevenuechart />
          </div>

        </div>
      </div>

      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-md-4 p-2' >
          <div class="card-chart card " style={{backgroundColor:'#27293d'}}>
              <div class="card-header">
              <p className='text-white text-center'>Daily Sales</p>
              <h3 class="card-title text-center text-primary">
              <MdSell />
                1841
                  </h3>
                </div>
                <div className='card-body' style={{ height: '300px' }}>
                <Dailysales />
                </div>
                         
            </div>
          </div>
          <div className='col-md-4 p-2' >
          <div class="card-chart card " style={{backgroundColor:'#27293d'}}>
              <div class="card-header">
              <p className='text-white text-center'>Total Shipment</p>
              <h3 class="card-title text-center text-primary">
                <CiDeliveryTruck />
                763,215
                  </h3>
                </div>
                
                <div className='card-body' style={{ height: '300px' }}>
                <Shipment />
                </div>
                         
            </div>
          </div>  
          <div className='col-md-4 p-2' >
         
            <div class="card-chart card " style={{backgroundColor:'#27293d'}}>
              <div class="card-header">
              <p className='text-white text-center'>Complete Task</p>
              <h3 class="card-title text-center text-primary">
              <MdTaskAlt />
                
                763,200
                  </h3>
                </div>
                <div className='card-body' style={{ height: '300px' }}>
                <Completetask />
                </div>
                         
            </div>
                          
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Salereport