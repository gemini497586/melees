import React from 'react'
import '../../../style/privateRecipeBanner.css'
import banner from '../../../images/privaterecipebanner.jpg'
import rwdbanner from '../../../images/rwd-privaterecipebanner.jpg'

function PrivateRecipeBanner() {
  return (
    <>
      <div class="privateRecipeBanner-img">
        <figure class="privateRecipeBanner-figure">
          <img src={banner} class="w-100" alt="" />
        </figure>
        <div class="privateRecipeBanner-slogan">
          <h1>
            蒸的肉圓才
            <br />
            是真的肉圓
          </h1>
        </div>
        <a class="privateRecipeBanner-btn" href="#/">
          <div class="d-flex">
            <i class="fas fa-plus fa-lg"></i>
            <span class="font-700M">新增食譜</span>
          </div>
        </a>
      </div>
    </>
  )
}

export default PrivateRecipeBanner
