import React, { useEffect, useState } from 'react'
import '../../style/productDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { useParams } from 'react-router'
import { API_URL, P_CATEGORY } from '../../utils/config'
import axios from 'axios'
import useCart from '../../utils/useCart'

function ProductDetails(props) {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [save, setSave] = useState(false)
  const [sideImg, setSideImg] = useState([])
  const { addCart } = useCart()

  useEffect(() => {
    axios
      .post(`${API_URL}/market/product/${id}`, null, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.getSave && response.data.getSave.length > 0) {
          // 如果回傳不是undefined，代表資料庫有資料，那就是該會員有收藏過，所以把按鈕設成true
          setSave(true)
        }

        setSideImg(response.data.productImg)

        response.data.product[0].specs = response.data.product[0].specs
          .split('\n')
          .join(' | ')
        setProduct(response.data.product[0])
      })
  }, [id])

  const SaveProduct = async () => {
    try {
      await axios.post(`${API_URL}/market/product-save/${id}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  const DeleteProduct = async () => {
    try {
      await axios.post(`${API_URL}/market/product-delete/${id}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  const handleSave = () => {
    return (
      <>
        {save ? (
          <button
            className="btn product-detail-unSave"
            onClick={() => {
              DeleteProduct()
            }}
          >
            取消收藏 <FontAwesomeIcon icon={['fas', 'bookmark']} />
          </button>
        ) : (
          <button
            className="btn product-detail-save-active"
            onClick={() => {
              SaveProduct()
            }}
          >
            加入收藏 <FontAwesomeIcon icon={['far', 'bookmark']} />
          </button>
        )}
      </>
    )
  }

  const [mainImg, setMainImg] = useState('')

  useEffect(() => {
    setMainImg(`${API_URL}/market/${product.image}`)
  }, [product])

  const HandleImg = (e) => {
    setMainImg(e.target.src)
  }

  const handleProductDetail = () => {
    return (
      <div className="product-detail">
        <img src={mainImg} alt={`商品${product.id}圖片`} className="main-img" />
        <div className="thumbnail">
          {sideImg &&
            sideImg.map((v) => {
              return (
                <img
                  src={`${API_URL}/market/${v.image}`}
                  alt="圖1"
                  className="side-img"
                  onClick={(e) => {
                    HandleImg(e)
                  }}
                />
              )
            })}
        </div>
        {/* 收藏功能 */}
        <div
          className="product-detail-save"
          onClick={() => {
            setSave(!save)
          }}
        >
          {handleSave()}
        </div>
        <p className="font-400S product-detail-specs">{product.specs}</p>
        <p className="product-detail-category">
          {P_CATEGORY[product.category]}
        </p>
        <h2 className="product-detail-name">{product.name}</h2>
        <h2 className="product-detail-price">
          <FontAwesomeIcon icon="dollar-sign" />
          {product.price}
        </h2>
        <button
          className="font-700M product-detail-add-to-cart-btn btn"
          id={id}
          onClick={() => {
            addCart({
              id: product.id,
              name: product.name,
              amount: 1,
              price: product.price,
              category: P_CATEGORY[product.category],
              specs: product.specs,
              img: product.image,
            })
          }}
        >
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        <div className="w507"></div>
        <div className="info-shadow"></div>
        <h3 className="product-detail-info">商品介紹</h3>
        <p className="font-400L product-detail-information">{product.info}</p>
      </div>
    )
  }
  return (
    <div className="page-group">
      <div className="container">{handleProductDetail(product)}</div>
    </div>
  )
}

export default ProductDetails
