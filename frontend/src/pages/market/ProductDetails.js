import React from 'react'
import '../../style/productDetails.css'
import img from '../../images/005.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function ProductDetails() {
  return (
    <div className="container">
      <div className="product-detail">
        <img src={img} alt="商品" />
        <p className="product-detail-category">食材</p>
        <h2 className="product-detail-name">紐西蘭小羔羊薄切片</h2>
        <h2 className="product-detail-price">
          <FontAwesomeIcon icon="dollar-sign" />
          190
        </h2>
        <button className="font-700M product-detail-add-to-cart-btn btn">
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        <div className="w507"></div>
        <p className="font-400L product-detail-specs">
          重量：300g±5% <br />
          原產地：紐西蘭 <br />
          保存方式：請置於冷凍-18℃保存
        </p>
        <div className="info-shadow"></div>
        <h3 className="product-detail-info">商品介紹</h3>
        <p className="font-400L product-detail-information">
          在純淨大自然中成長的樂活羊隻，以天然牧草孕育出更豐富的營養成分，精選六個月大的小羔羊，部位取自於小羔羊隻的肩背肉塊，限定0.2cm的薄度，更能呈現肉質的鮮美嫩度，不論是火鍋、熱炒、烹煮皆適宜。
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
