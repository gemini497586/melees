import React, { useState, useEffect } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import '../../style/home.css'
import '../../style/searchRecipe.css'
import '../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL, FEATURE_TYPE, P_CATEGORY } from '../../utils/config'
import Axios from 'axios'

/* 客製化便當 */
import homebento_bento from '../../images/homebento_bento.png'
import homebento_fontbg from '../../images/homeBento_fontbg.png'
import homebento_btnbg from '../../images/homebento_btnbg.png'
import homebento_dialog from '../../images/homebento_dialog.png'
/* 精選食譜 */
import Ig from '../../component/Ig'
/* 私藏食譜 */
import homerecipe_plate from '../../images/homerecipe_plate.png'
import homerecipe_01 from '../../images/homerecipe_01.jpg'
import homerecipe_02 from '../../images/homerecipe_02.jpg'
import homerecipe_03 from '../../images/homerecipe_03.jpg'
import homerecipe_04 from '../../images/homerecipe_04.jpg'
import homerecipe_05 from '../../images/homerecipe_05.jpg'
/* 購物商城 */
import homeshop_01 from '../../images/homeshop_01.jpg'
import homeshop_02 from '../../images/homeshop_02.jpg'
import homeshop_03 from '../../images/homeshop_03.jpg'
import homeshop_04 from '../../images/homeshop_04.jpg'
import { Link } from 'react-router-dom'

function Home() {
  // 精選食譜用
  // 精選食譜資料
  const [featuredata, setFeaturedata] = useState([])
  // 切換大圖使用
  const [largeimg, setLargeimg] = useState('')
  const [largelistid, setLargelistid] = useState('')
  const [largelinkname, setLargelinkname] = useState('')
  const [largetype, setLargetype] = useState('')
  const [largelistname, setLargelistname] = useState('')

  // 購物商城用
  const [product, setProduct] = useState([])
  const [productLarge, setProductLarge] = useState([])
  useEffect(() => {
    Axios.get(`${API_URL}/home/feature`).then((response) => {
      setFeaturedata(response.data)
      console.log(response.data[0])
      // 給預設
      setLargeimg(response.data[0].img.file_type)
      setLargetype(response.data[0].type_id)
      setLargelistname(response.data[0].listName)
      setLargelinkname(response.data[0].linkName)
    })

    // 購物商城的API
    Axios.get(`${API_URL}/home/market`).then((response) => {
      setProduct(response.data.slice(1))
      setProductLarge(response.data[0])
    })
  }, [])
  // 縮圖使用
  // 在下面帶變數前，這邊要先宣告變數，變數名稱不一定要和下面一樣，位置對就好
  const smallimg = (v) => {
    // console.log('e', e)
    console.log('v', v)
    setLargeimg(v.img.file_type)
    setLargelistid(v.listId)
    setLargetype(v.type_id)
    setLargelistname(v.listName)
    setLargelinkname(v.linkName)
    // console.log('etarget', e.target)
  }

  // 購物商城用

  return (
    <ReactFullpage
      scrollingSpeed={1000}
      fitToSection={true} //每一屏是否自动适应视窗（viewport）大小
      scrollOverflow={true}
      scrollBar={true}
      // sectionSelector={'.section'}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* 便當頁面 */}
            <article className="section h-bento-bg">
              {/* 中間內容 */}
              <div className="h-bento-group">
                {/* 便當圖片 */}
                <figure className="h-bento-img">
                  <img className="fcover-fit" src={homebento_bento} alt="" />
                </figure>
                {/* 內容 */}
                <div className="h-bento-contentgroup">
                  {/* 小小對話框 */}
                  <div className="h-bento-dialog">
                    <img className="fcover-fit" src={homebento_dialog} alt="" />
                  </div>
                  <div className="h-bento-titlegroup">
                    <h1 className="h-bento-title">客製化便當</h1>
                    <div className="h-bento-subtitle">
                      <img
                        className="fcover-fit"
                        src={homebento_fontbg}
                        alt=""
                      />
                    </div>
                    <Link to="/box">
                      <div className="h-bento-subtitle">
                        <img
                          className="fcover-fit"
                          src={homebento_btnbg}
                          alt=""
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* 往下箭頭 */}
              <a onClick={() => fullpageApi.moveSectionDown()}>
                <div className="h-bento-arrowdown">
                  <FontAwesomeIcon icon={['fas', 'chevron-down']} fixedWidth />
                </div>
              </a>
            </article>

            {/* 精選食譜 */}
            <article className="section h-feature-bg">
              {/* 背景漸變遮蓋 */}
              <div className="h-feature-gradientbg"></div>
              {/* 左邊標題 */}
              <div className="h-feature-titleleft">
                <h5 className="fcolor-grey-500">把煩惱都丟了吧</h5>
                <h1 className="fcolor-primary">人氣精選食譜</h1>
              </div>
              {/* 中間內容 */}
              <Link
                to={`/feature/step/${largelistid}`}
                className="f-feature-contentgroup text-decoration-none"
              >
                <figure className="f-feature-contentbigimg">
                  <img
                    className="fcover-fit"
                    src={`http://localhost:3001/feature/featurefood/${largeimg}`}
                    alt=""
                  />
                </figure>
                <div className="f-feature-contentclass ms-5">
                  <p className="fcolor-white font-400SL">
                    {FEATURE_TYPE[largetype]}
                  </p>
                  <h2 className="fcolor-white mb-4">{largelistname}</h2>
                  <Ig linkName={largelinkname} />
                </div>
              </Link>
              {/* 下面內容 */}
              <div className="f-feature-bottomgrouop">
                <div className="f-feature-cardsgroup">
                  {featuredata.map((v, i) => {
                    return (
                      <div
                        className="f-feature-card"
                        // onClick事件這邊用的e，是代表點擊的狀態(詳細資料)
                        onClick={() => {
                          // 這邊的v，是帶上面map的value值
                          smallimg(v)
                        }}
                      >
                        {/* 當onClick時呼叫函式，傳值進去函式裡 */}
                        <div className="f-feature-cardimg">
                          <img
                            className="fcover-fit"
                            src={`http://localhost:3001/feature/featurefood/${v.img.file_type}`}
                            alt=""
                            // data 是固定語法，key可以自己取名，想區分同一個標籤時(區分哪一個是listId)
                          />
                        </div>
                        <p className="font-400L fcolor-white">{v.listName}</p>
                        <div className="f-feature-icon font-400S">
                          <FontAwesomeIcon
                            className="me-3"
                            icon={['fas', 'bookmark']}
                            fixedWidth
                          />
                          <span>{v.saveqty}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* 往下箭頭 */}
              <a onClick={() => fullpageApi.moveSectionDown()}>
                <div className="h-feature-arrowdown">
                  <FontAwesomeIcon icon={['fas', 'chevron-down']} fixedWidth />
                </div>
              </a>
            </article>

            {/* 私藏食譜 */}
            <article className="section h-recipe-bg">
              <div className="h-recipe-content">
                {/* 左邊標題 */}
                <div className="h-recipe-titlegroup">
                  <h5 className="fcolor-grey-800">開啟美好生活</h5>
                  <h1 className="fcolor-primary">熱門私藏食譜</h1>
                  <h2 className="fcolor-grey-900">印尼炒泡麵</h2>
                </div>
                <div className="h-recipe-imggroup">
                  {/*中間大圖*/}
                  <div className="f-recipe-plateimg">
                    <div className="h-recipe-plate">
                      <img
                        className="fcover-fit"
                        src={homerecipe_plate}
                        alt=""
                      />
                    </div>
                    <figure className="f-recipe-img">
                      <img className="fcover-fit" src={homerecipe_01} alt="" />
                    </figure>
                  </div>
                  {/*右邊小圖*/}
                  <div className="h-recipe-cardsgroup">
                    <div className="h-recipe-cards">
                      <div className="h-recipe-cardimg">
                        <img
                          className="fcover-fit"
                          src={homerecipe_01}
                          alt=""
                        />
                      </div>
                      <span className="font-400S fcolor-grey-800">
                        高顏值蛤蜊蒸蛋
                      </span>
                    </div>
                    <div className="h-recipe-cards">
                      <div className="h-recipe-cardimg">
                        <img
                          className="fcover-fit"
                          src={homerecipe_02}
                          alt=""
                        />
                      </div>
                      <span className="font-400S fcolor-grey-800">
                        蔥鹽骰子牛
                      </span>
                    </div>
                    <div className="h-recipe-cards">
                      <div className="h-recipe-cardimg">
                        <img
                          className="fcover-fit"
                          src={homerecipe_03}
                          alt=""
                        />
                      </div>
                      <span className="font-400S fcolor-grey-800">
                        泰式咖哩螃蟹
                      </span>
                    </div>
                    <div className="h-recipe-cards">
                      <div className="h-recipe-cardimg">
                        <img
                          className="fcover-fit"
                          src={homerecipe_04}
                          alt=""
                        />
                      </div>
                      <span className="font-400S fcolor-grey-800">
                        鳳梨蝦球
                      </span>
                    </div>
                    <div className="h-recipe-cards">
                      <div className="h-recipe-cardimg">
                        <img
                          className="fcover-fit"
                          src={homerecipe_05}
                          alt=""
                        />
                      </div>
                      <span className="font-400S fcolor-grey-800">
                        居酒屋風燒烤雞翅
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* 往下箭頭 */}
              <a onClick={() => fullpageApi.moveSectionDown()}>
                <div className="h-recipe-arrowdown">
                  <FontAwesomeIcon icon={['fas', 'chevron-down']} fixedWidth />
                </div>
              </a>
            </article>
            {/* 購物商城 */}
            <article className="section h-shop-bg">
              <div className="h-shop-round"></div>
              {/* 右邊標題 */}
              <div className="h-shop-titlegroup">
                <div className="h-shop-title">
                  <h5 className="fcolor-grey-800">你最好的SUP！</h5>
                  <h1 className="fcolor-primary mb-5">熱燒商品</h1>
                </div>
                <Link to="/market/home" className="h-shop-titlebtn">
                  查看更多商品
                </Link>
              </div>
              {/* 圖片內容 */}
              <div className="h-shop-cardgroup">
                <div className="h-shop-cardimg">
                  <div className="h-shop-imgbigclass">
                    <Link to={`/market/product/${productLarge.id}`}>
                      <figure className="h-shop-imgbig">
                        <img
                          className="b-cover-fit"
                          src={`${API_URL}/market/${productLarge.image}`}
                          alt={productLarge.name}
                        />
                      </figure>
                    </Link>
                  </div>
                  <div className="h-shop-cardfont">
                    <p className="font-400S fcolor-white">
                      {P_CATEGORY[productLarge.category]}
                    </p>
                    <h5 className="fcolor-white">{productLarge.name}</h5>
                    <p className="font-400S fcolor-secondary">
                      {productLarge.info}
                    </p>
                  </div>
                </div>
                {product.map((v) => {
                  return (
                    <div className="h-shop-cardimg" key={v.id}>
                      <div className="h-shop-cardfontsmalltwo">
                        <p className="font-400S fcolor-secondary">
                          {P_CATEGORY[v.category]}
                        </p>
                        <h6 className="fcolor-secondary">{v.name}</h6>
                        <div className="h-shop-cardline"></div>
                      </div>
                      <div className="h-shop-imgclass">
                        <Link to={`/market/product/${v.id}`}>
                          <figure className="h-shop-img">
                            <img
                              className="fcover-fit"
                              src={`${API_URL}/market/${v.image}`}
                              alt={v.name}
                            />
                          </figure>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* 往下箭頭 */}
              <a onClick={() => fullpageApi.moveSectionDown()}>
                <div className="h-recipe-arrowdown">
                  <FontAwesomeIcon icon={['fas', 'chevron-down']} fixedWidth />
                </div>
              </a>
            </article>
            {/* footer */}
            <div className="section fp-auto-height h-footer">
              <div className="h-footer-div"></div>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

export default Home
