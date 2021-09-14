import React, { useContext } from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'
import { HandleCart } from '../../utils/HandleCart'

function CheckoutConfirmTable(props) {
  const { carts, productsAll, amount, setAmount } = useContext(HandleCart)
  let id = props.value - 1

  return (
    <tr className="d-flex justify-content-between checkout-confirm-tr">
      <td>{productsAll[id].name}</td>
      <td>*5</td>
      <td>
        <FontAwesomeIcon icon="dollar-sign" /> 1,550
      </td>
    </tr>
  )
}

export default CheckoutConfirmTable
