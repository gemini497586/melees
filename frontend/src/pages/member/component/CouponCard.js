import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function CouponCard(props) {
  return (
    <>
      <div className="col-md-6">
        <div className="coupon-card">
          <div className="coupon-left">
            <div className="coupon-logo">
              <img
                src="http://localhost:3000/images/logo.png"
                alt="LOGO"
                className="b-contain-fit"
              ></img>
            </div>
            <div className="coupon-text font-700M">運費抵用券</div>
          </div>
          <div className="coupon-right font-400SS">
            <ul className="list-unstyled">
              <li>
                <h4 className="coupon-title">購物商城滿500即享92折</h4>
              </li>
              <li>有效期限: 2021/10/15</li>
              <li>
                <Link to="/member/coupon">使用規則</Link>
              </li>
            </ul>
            <button className="font-700M coupon-btn">領取</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(CouponCard)
