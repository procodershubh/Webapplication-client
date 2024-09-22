import React, { Fragment, useEffect, useState } from 'react';
import { backendurl } from '../../Servicepage';
import axios from 'axios'


function Order() {


  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders when the component mounts
    fetch(`${backendurl}/myorders`)
      .then((response) => response.json())
      .then((data) => {
        const sortedOrders = data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));

        setOrders(sortedOrders);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching orders:', error);
        setError('Failed to fetch orders.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Update order status and send it to the API
  const handleStatusChange = (orderId, newStatus) => {
    // Optimistically update UI
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        return { ...order, orderStatus: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);

    // Send the updated status to the backend via PATCH request
    axios
      .patch(`${backendurl}/updateorderstatus/${orderId}`, {
        status: newStatus,
      })
      .then((response) => {
        console.log('Status updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
        // Optionally handle the error (revert UI changes or show a message)
      });
  };





  return (

    <Fragment>
      <div className="container-fluid d-flex flex-column full-height bg-custom">
        <div className='container-fluid' style={{ height: '80px', backgroundColor: 'rgb(30, 30, 46)', position: 'fixed' }}>
          <div className="row flex-grow-0">
            <div className='col-md-12'>
              <h3 className="text-light text-left mt-3">ORDER DETAILS</h3>
            </div>
          </div>
        </div>

        <div className="row flex-grow-1" style={{ marginTop: '80px' }}>
          <div className="col-md-12">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Order ID</th>
                  <th scope="col">Products</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Qty</th>

                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{order.name}</td>
                    <td>{order._id}</td>
                    <td>{order.cartItems.map(item => item.title)}</td>
                    <td>
                      {order.cartItems.reduce((total, item) => total + item.price, 0)
                        .toLocaleString('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                    </td>
                    <td style={{ color: 'yellow' }}>
                      {order.cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </td>


                    <td className={`text-${order.orderStatus === 'Shipped' ? 'warning' : order.orderStatus === 'Approved' ? 'primary' : order.orderStatus === 'Delivered' ? 'success' : order.orderStatus === 'cancelled' ? 'danger' : 'danger'}`}>
                      {order.orderStatus}
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm ms-1" onClick={() => handleStatusChange(order._id, 'Approved')}>
                        Accept
                      </button>
                      <button className="btn btn-warning btn-sm ms-1" onClick={() => handleStatusChange(order._id, 'Shipped')}>
                        Shipped
                      </button>
                      <button className="btn btn-success btn-sm ms-1 mt-2" onClick={() => handleStatusChange(order._id, 'Delivered')}>
                        Delivered
                      </button>
                      <button className="btn btn-danger btn-sm ms-1 mt-3" onClick={() => handleStatusChange(order._id, 'cancelled')}>
                        cancelled
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Order;
