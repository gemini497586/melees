import React, { createContext, useState } from 'react'

const CartContext = createContext()
const CartProvider = (props) => {
  return (
    <CartContext.Provider value={[]}>{props.children}</CartContext.Provider>
  )
}
export { CartContext, CartProvider }
