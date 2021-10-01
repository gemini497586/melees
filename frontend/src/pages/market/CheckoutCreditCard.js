import React from 'react'
import '../../style/checkoutCreditCard.css'

function CheckoutCreditCard() {
  let one = document.getElementById('credit1')
  const handleCredit = (e, v) => {
    let Length = e.target.maxLength
    let target = e.target
    // console.log('e', Length)
    // console.log(one)
    if (target.value.length === Length) {
      console.log(target.id - 1)
      console.log(v)
    }
  }
  return (
    <>
      <div className="credit-area">
        <label className="checkout-credit-card-label"> 卡號 * </label>
        <div className="checkout-credit-card-num">
          <input
            type="text"
            maxLength="4"
            className="credit1"
            id="credit1"
            onChange={(e, v) => {
              handleCredit(e, v)
            }}
          />
          <input type="text" maxLength="4" className="credit2" id="credit2" />
          <input type="text" maxLength="4" className="credit3" id="credit3" />
          <input type="text" maxLength="4" className="credit4" id="credit4" />
        </div>
      </div>
      <div className="expiration-period">
        <label className="checkout-credit-card-label"> 有效期限 * </label>
        <input type="text" maxLength="2" className="ep1" />
        <input type="text" maxLength="2" className="ep2" />
      </div>
      <div className="last3num">
        <label className="checkout-credit-card-label"> 末三碼 * </label>
        <input type="text" maxLength="3" />
      </div>
    </>
  )
}

export default CheckoutCreditCard
