import React from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import useCart from '../../utils/useCart'

function CheckoutConfirmTable(props) {
  const { carts } = useCart()
  const index = props.index
  // const productID = carts[index].id - 1

  return (
    <tr className="d-flex checkout-confirm-tr">
      <td className="checkout-confirm-tr-name">{carts[index].name}</td>
      <td className="checkout-confirm-tr-amount">*{carts[index].amount}</td>
      <td className="checkout-confirm-tr-price">
        <FontAwesomeIcon icon="dollar-sign" />
        {carts[index].amount * carts[index].price}
      </td>
    </tr>
  )
}

export default CheckoutConfirmTable
