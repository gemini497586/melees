import React, { useContext } from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'
import { HandleCart } from '../../utils/HandleCart'
import useCart from '../../utils/useCart'

function CheckoutConfirmTable(props) {
  const { carts, productsAll, minusAmount, plusAmount } = useCart()
  const index = props.index
  const productID = carts[index].id - 1

  return (
    <tr className="d-flex justify-content-between checkout-confirm-tr">
      <td>{carts[index].name}</td>
      <td>*{carts[index].amount}</td>
      <td>
        <FontAwesomeIcon icon="dollar-sign" />
        {carts[index].amount * carts[index].price}
      </td>
    </tr>
  )
}

export default CheckoutConfirmTable
