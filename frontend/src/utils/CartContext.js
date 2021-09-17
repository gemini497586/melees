import React, { useState, createContext } from 'react'

const CartContext = createContext([{}, () => {}])

const CartProvider = (props) => {
  const cartList = JSON.parse(localStorage.getItem('cartList')) || []
  const [carts, setCarts] = useState(cartList) //放入購物車的商品
  const [productsAll, setProductsAll] = useState([]) //所有的商品
  const [login, setLogin] = useState(false) //查看是否登入
  return (
    <CartContext.Provider
      value={[carts, setCarts, productsAll, setProductsAll, login, setLogin]}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
