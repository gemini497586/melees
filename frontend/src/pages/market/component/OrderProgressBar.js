import React, { useEffect, useState } from 'react'
import '../../../style/orderProgressBar.css'

function OrderProgressBar() {
  // console.log(window.location.pathname)
  let firstStep = document.getElementById('firstStep')
  let secondStep = document.getElementById('secondStep')
  let thirdStep = document.getElementById('thirdStep')
  let fourthStep = document.getElementById('fourthStep')
  let theURL = window.location.pathname

  const [count, setCount] = useState(1)
  useEffect(() => {
    if (theURL === '/market/cart-detail') {
      // console.log('第一步')
    } else if (theURL === '/market/checkout-personalData') {
      setCount(count + 1)
      // console.log('第二步')
      firstStep.classList.remove('active')
      secondStep.classList.add('active')
    } else if (theURL === '/market/checkout-confirm') {
      setCount(count + 1)
      // console.log('第三步')
      firstStep.classList.remove('active')
      thirdStep.classList.add('active')
    } else if (theURL === '/market/orders-complete') {
      setCount(count + 1)
      // console.log('第四步')
      firstStep.classList.remove('active')
      fourthStep.classList.add('active')
    }
  }, [count])

  return (
    <>
      <ol className="orderProgressBar">
        <li id="firstStep" className="active">
          <div className="orderProgressBar-icon">1</div>
          <p className="orderProgressBar-text font-400S">購物車</p>
        </li>
        <li id="secondStep" className="">
          <div className="orderProgressBar-icon">2</div>
          <p className="orderProgressBar-text font-400S">運送資訊</p>
        </li>
        <li id="thirdStep" className="">
          <div className="orderProgressBar-icon">3</div>
          <p className="orderProgressBar-text font-400S">付款資訊</p>
        </li>
        <li id="fourthStep" className="">
          <div className="orderProgressBar-icon">4</div>
          <p className="orderProgressBar-text font-400S">訂單完成</p>
        </li>
      </ol>
    </>
  )
}

export default OrderProgressBar
