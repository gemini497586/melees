import { useContext, useState } from 'react'
import { CartContext } from './CartContext'

const useCart = () => {
  const [carts, setCarts, productsAll, setProductsAll, login, setLogin] =
    useContext(CartContext)
  // console.log(cartList)
  const addCart = (e) => {
    // 增加商品到購物車內
    // 1. 先從 localStorage 抓到原本的購物車，沒有的話就新增一個
    const currentCart = JSON.parse(localStorage.getItem('cartList')) || []
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
    // 3. 把新的購物車放回 localStorage，以及更新 carts
    localStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const removeCart = (e, id) => {
    // 從購物車移除商品
    const currentCart = JSON.parse(localStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1) {
      currentCart.splice(e, 1)
    }
    localStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const minusAmount = (e) => {
    const currentCart = JSON.parse(localStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1 && currentCart[e].amount > 1) {
      currentCart[e].amount--
    }
    localStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  const plusAmount = (e) => {
    const currentCart = JSON.parse(localStorage.getItem('cartList')) || []
    const index = currentCart.findIndex((v) => v.id === e.id)
    if (index === -1 && currentCart[e].amount < 99) {
      currentCart[e].amount++
    }
    localStorage.setItem('cartList', JSON.stringify(currentCart))
    setCarts(currentCart)
  }

  //   const [login, setLogin] = useState(false) //查看是否登入

  return {
    carts,
    addCart,
    removeCart,
    productsAll,
    setProductsAll,
    minusAmount,
    plusAmount,
  }
}

export default useCart
