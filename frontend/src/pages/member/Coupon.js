import React from 'react'
import MinorBar from './component/MinorBar'
import CouponCard from './component/CouponCard'
import '../../style/coupon.css'

function Coupon() {
  const data = [
    { title: '運費抵用券', content: '購物商城滿$299免運', date: '2021/10/30' },
    {
      title: '商城92折券',
      content: '購物商城滿500即享92折',
      date: '2021/11/30',
    },
    {
      title: '十足抵用券',
      content: '消費滿1000可抵用$100',
      date: '2021/12/30',
    },
    {
      title: '廚具92抵券',
      content: '廚房鍋具滿2000即享92折',
      date: '2021/12/30',
    },
  ]

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="coupon-top font-700L">
            <button className="coupon-active">未領取</button>
            <button>已領取</button>
            <button>已使用紀錄</button>
          </div>
          <div className="row">
            <CouponCard data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon
