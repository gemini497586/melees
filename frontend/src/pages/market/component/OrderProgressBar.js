import React, { useEffect, useState } from 'react'
import '../../../style/orderProgressBar.css'

function OrderProgressBar() {
  // console.log(window.location.pathname)

  const handleBar = (e) => {
    let firstStep = document.getElementById('firstStep')
    let secondStep = document.getElementById('secondStep')
    let thirdStep = document.getElementById('thirdStep')
    let fourthStep = document.getElementById('fourthStep')

    switch (e) {
      case '/market/checkout-personalData':
        secondStep.classList.add('active')
        break
      case '/market/checkout-confirm':
        thirdStep.classList.add('active')
        break
      case '/market/orders-complete':
        fourthStep.classList.add('active')
        break
      default:
        firstStep.classList.add('active')
        break
    }
    setCount(e)
  }

  const [count, setCount] = useState([])
  let theURL = window.location.pathname

  useEffect(() => {
    handleBar(theURL)
  }, [count])

  return (
    <>
      <ol className="orderProgressBar">
        <li id="firstStep">
          <div className="orderProgressBar-icon">1</div>
          <p className="orderProgressBar-text font-400S">購物車</p>
        </li>
        <li id="secondStep">
          <div className="orderProgressBar-icon">2</div>
          <p className="orderProgressBar-text font-400S">運送資訊</p>
        </li>
        <li id="thirdStep">
          <div className="orderProgressBar-icon">3</div>
          <p className="orderProgressBar-text font-400S">付款資訊</p>
        </li>
        <li id="fourthStep">
          <div className="orderProgressBar-icon">4</div>
          <p className="orderProgressBar-text font-400S">訂單完成</p>
        </li>
      </ol>
    </>
  )
}

export default OrderProgressBar
