import React, { useState } from 'react'
import MinorBar from './component/MinorBar'
import DropDown2 from '../../component/DropDown2'
import '../../style/coupon.css'
import CouponCard from './component/CouponCard'

function Coupon() {
  const [sortBy, setSortBy] = useState(0)

  const sortList = [
    {
      name: '時間由新至舊',
      value: '1',
    },
    {
      name: '時間由舊至新',
      value: '2',
    },
    {
      name: '價位由高至低',
      value: '3',
    },
    {
      name: '價位由低至高',
      value: '4',
    },
  ]

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="d-flex justify-content-end">
            <DropDown2
              itemList={sortList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="coupon-top font-700L">
            <button className="coupon-active">未領取</button>
            <button>已領取</button>
            <button>已使用紀錄</button>
          </div>
          <div className="row">
            <CouponCard />
            <CouponCard />
            <CouponCard />
            <CouponCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon
