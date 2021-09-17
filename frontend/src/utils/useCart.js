import { useContext, useState } from 'react'
import { CartContext } from './CartContext'

const useCart = () => {
  //   const [login, setLogin] = useContext(CartContext)
  const [login, setLogin] = useState(false) //查看是否登入
  const signIn = () => {
    setLogin(true)
    console.log('signIn', login)
  }
  const signOut = () => {
    setLogin(false)
    console.log('signOut', login)
  }
  return {
    login,
    setLogin,
    signIn,
    signOut,
  }
}

export default useCart
