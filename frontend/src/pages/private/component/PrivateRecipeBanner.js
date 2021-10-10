import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import banner from '../../../images/privaterecipebanner.jpg'
import '../../../style/privateRecipeBanner.css'

function PrivateRecipeBanner() {
  return (
    <>
      <div className="privateRecipeBanner-img">
        <figure className="privateRecipeBanner-figure">
          <img src={banner} className="b-cover-fit" alt="" />
        </figure>
        <div className="privateRecipeBanner-slogan">
          <h1>
            蒸的肉圓才
            <br />
            是真的肉圓
          </h1>
        </div>
        <Link to="/private/upload" className="privateRecipeBanner-btn">
          <div className="d-flex justify-content-center privateRecipeBanner-plus-icon">
            <FontAwesomeIcon icon="plus" className="plus-icon" />
            <span className="font-700M">新增私藏食譜</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default PrivateRecipeBanner
