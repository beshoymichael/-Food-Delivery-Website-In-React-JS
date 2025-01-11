// import React from 'react'
import { useContext } from 'react'
import './PlaceOuder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOuder = () => {
  

  const{getTotalCartAmount} = useContext(StoreContext)


  return (
    <form className='Place-Ouder'>
      <div className="place-ouder-left">
       <p className="title">Delivery Information</p>
       <div className="milti-fieds">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
       </div>
       <input type="email" placeholder='Email address'/>
       <input type="text" placeholder='Street'/>
       <div className="milti-fieds">
        <input type="text" placeholder='City'/>
        <input type="text" placeholder='State'/>
       </div>
       <div className="milti-fieds">
        <input type="text" placeholder='Zip code'/>
        <input type="text" placeholder='Country'/>
       </div>
       <input type="text"  placeholder='phone'/>
      </div>
      <div className="place-ouder-right">
      <div className="cart-total">
          <h2>cart totals</h2>
          <div>
          <div className="cart-total-datails">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-datails">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />

            <div className="cart-total-datails">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
    <button>PROCEED TO PAYMENT</button>
        </div>

      </div>

      
    </form>
  )
}

export default PlaceOuder
