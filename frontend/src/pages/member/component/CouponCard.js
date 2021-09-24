import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function CouponCard(props) {
  const { data } = props
  return (
    <>
      {data.map((v, i) => {
        return (
          <div className="col-md-6" key={i}>
            <div className="coupon-card">
              <div className="coupon-left">
                <div className="coupon-logo">
                  <img
                    src="http://localhost:3000/images/logo.png"
                    alt="LOGO"
                    className="b-contain-fit"
                  ></img>
                </div>
                <div className="coupon-text font-700M">{v.title}</div>
              </div>
              <div className="coupon-right font-400SS">
                <ul className="list-unstyled">
                  <li>
                    <h4 className="coupon-title">{v.content}</h4>
                  </li>
                  <li>有效期限: {v.date}</li>
                  <li>
                    <Link to="/member/coupon">使用規則</Link>
                  </li>
                </ul>
                <button className="font-700M coupon-btn">領取</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(CouponCard)
