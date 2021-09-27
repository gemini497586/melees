import React, { useState, createContext } from 'react'

const CartContext = createContext([{}, () => {}])

const CartProvider = (props) => {
  const cartList = JSON.parse(sessionStorage.getItem('cartList')) || []
  const [carts, setCarts] = useState(cartList) //放入購物車的商品
  const [productsAll, setProductsAll] = useState([]) //所有的商品
  const [login, setLogin] = useState(false) //查看是否登入
  const [selectIndex, setSelectIndex] = useState('時間由舊至新') //商城頁面的排序功能
  const [pageArray, setPageArray] = useState([]) //商城分頁
  return (
    <CartContext.Provider
      value={[
        carts,
        setCarts,
        productsAll,
        setProductsAll,
        login,
        setLogin,
        selectIndex,
        setSelectIndex,
        pageArray,
        setPageArray,
      ]}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }
