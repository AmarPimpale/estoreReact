
import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
const Purchase = () => {
    // const [price,setPrice] = useState(0)
    // const getdata = useSelector((state)=> state.cartreducer.carts);
    // console.log(getdata)
    // const total = ()=>{
    //     let price = 0;
    //     getdata.map((ele,k)=>{
    //         price = ele.price * ele.qnty + price
    //     console.log(price)

    //     });
    //     setPrice(price);
    // };
  return (
    <>
      <div className="app-container">
        <div className="row">
          <div className="col">
          <div className="card text-center">
        <div className="card-header">
        Order has been placed  .......
        </div>
        <div className="card-body">
          <h5 className="card-title">Foody SERVE BEST</h5>
          <p className="card-text">Thank you for ordering from our food delivery website...</p>
          {/* <a href="#" className="btn btn-primary">Confirm Order</a> */}
        </div>
        <div className="card-footer text-muted">
        
        </div>
      </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Purchase