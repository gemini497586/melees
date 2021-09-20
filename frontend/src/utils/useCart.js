import { useContext, useState } from 'react'
import { CartContext } from './CartContext'

const useCart = () => {
  const [carts, setCarts, productsAll, setProductsAll, login, setLogin] =
    useContext(CartContext)
  // console.log(cartList)
  const addCart = (e) => {
    // 增加商品到購物車內
    // 1. 先從 sessionStorage 抓到原本的購物車，沒有的話就新增一個
    const currentCart = JSON.parse(sessionStorage.getItem('cartList')) || []
    // 2. 檢查有沒有重複的商品
    const index = currentCart.findIndex((v) => v.id === e.id)

    if (index > -1) {
      //currentCart[index].amount++
      alert('該商品已經加入購物車')
      return
    } else {
      // 如果商品沒有重複就放進購物車
      currentCart.push(e)
    }
    // 3. 把新的購物車放回 sessionStorage，以及更新 carts
    sessionStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const removeCart = (e, id) => {
    // 從購物車移除商品
    const currentCart = JSON.parse(sessionStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1) {
      currentCart.splice(e, 1)
    }
    sessionStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const minusAmount = (e) => {
    const currentCart = JSON.parse(sessionStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1 && currentCart[e].amount > 1) {
      currentCart[e].amount--
    }
    sessionStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const plusAmount = (e) => {
    const currentCart = JSON.parse(sessionStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1 && currentCart[e].amount < 99) {
      currentCart[e].amount++
    }
    sessionStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const clearCart = () => {
    // 清除 sessionStorage 存的資料
    sessionStorage.removeItem('cartList')
  }

  return {
    carts,
    addCart,
    removeCart,
    productsAll,
    setProductsAll,
    minusAmount,
    plusAmount,
    clearCart,
  }
}

export default useCart
