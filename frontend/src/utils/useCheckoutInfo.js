import { useContext, useState } from 'react'
import { CheckoutInfoContext } from './CheckoutInfoContext'

const useCheckoutInfo = () => {
  const [info, setInfo, total, setTotal] = useContext(CheckoutInfoContext)

  //   function ...
  const addInfo = (e) => {
    // 1. 先從 localStorage 抓到原本的個人資料，沒有的話就新增一個
    const currentCart = JSON.parse(localStorage.getItem('checkoutInfo')) || []
    // 2. 檢查有沒有重複
    const index = currentCart.findIndex((v) => v.id === e.id)

    // console.log(e)
    if (index > -1) {
      currentCart[index] = e
      alert('購買資料已更新')
    } else {
      // 如果沒有過資料就直接丟進去

      e.id++
      currentCart.pop()
      currentCart.push(e)
    }

    localStorage.setItem('checkoutInfo', JSON.stringify(currentCart))
    setInfo(currentCart)
    // console.log(currentCart)
    // console.log(info)
  }

  // return function ...
  return { info, setInfo, addInfo, total, setTotal }
}

export default useCheckoutInfo
