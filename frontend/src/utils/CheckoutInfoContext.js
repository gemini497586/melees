import React, { useState, createContext } from 'react'

const CheckoutInfoContext = createContext([{}, () => {}])

const CheckoutInfoProvider = (props) => {
  const dataList = JSON.parse(sessionStorage.getItem('checkoutInfo')) || []
  const [info, setInfo] = useState(dataList)
  const [total, setTotal] = useState(0)
  return (
    <CheckoutInfoContext.Provider value={[info, setInfo, total, setTotal]}>
      {props.children}
    </CheckoutInfoContext.Provider>
  )
}

export { CheckoutInfoContext, CheckoutInfoProvider }
