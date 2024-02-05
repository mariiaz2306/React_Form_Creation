import React from 'react'
import logotriangle from "../Checkout/logo_triangle.svg"
import styles from '../Checkout/Checkout.css'


const Checkout = () => {
  return (
      <div className='checkout_main'>
          <div className='checkout_secondary'>
              <img src={logotriangle} alt="logo" />
              <h1>Checkout</h1>
              <p>Home > Checkout</p>

          </div>
    </div>
  )
}

export default Checkout;