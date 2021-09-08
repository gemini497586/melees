import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import '../../style/home.css'
import '../../style/searchRecipe.css'
import '../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

// import desktop from '../../images/desktop.jpg'
/* 客製化便當 */
import homebento_bento from '../../images/homebento_bento.png'
import homebento_fontbg from '../../images/homebento_fontbg.png'
import homebento_btnbg from '../../images/homebento_btnbg.png'
import homebento_dialog from '../../images/homebento_dialog.png'
/* 精選食譜 */
import Ig from '../../component/Ig'
import homefeature_01 from '../../images/homefeature_01.jpg'
import homefeature_02 from '../../images/homefeature_02.jpg'
import homefeature_03 from '../../images/homefeature_03.jpg'
import homefeature_04 from '../../images/homefeature_04.jpg'
import homefeature_05 from '../../images/homefeature_05.jpg'
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
              {/* 小小對話框 */}
              <div className="h-bento-dialog">
                <img className="fcover-fit" src={homebento_dialog} alt="" />
              </div>
              {/* 中間內容 */}
              <div className="h-bento-group">
                {/* 便當圖片 */}
                <figure className="h-bento-img">
                  <img className="fcover-fit" src={homebento_bento} alt="" />
                </figure>
                {/* 內容 */}
                <div className="h-bento-contentgroup">
                  <h1 className="h-bento-title">客製化便當</h1>
                  <div className="h-bento-subtitle">
                    <img className="fcover-fit" src={homebento_fontbg} alt="" />
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
              {/* <div className="h-feature-gradientbg"></div> */}
              {/* 左邊標題 */}
              <div className="h-feature-titleleft">
                <h5 className="fcolor-grey-500">把煩惱都丟了吧</h5>
                <h1 className="fcolor-primary">人氣精選食譜</h1>
              </div>
              {/* 中間內容 */}
              <div className="f-feature-contentgroup">
                <figure className="f-feature-contentbigimg">
                  <img className="fcover-fit" src={homefeature_01} alt="" />
                </figure>
                <div className="f-feature-contentclass ms-5">
                  <p className="fcolor-white font-400SL">健康長肉肉</p>
                  <h2 className="fcolor-white mb-4">香煎菲力牛排</h2>
                  <Ig />
                </div>
              </div>
              {/* 下面內容 */}
              <div className="f-feature-bottomgrouop">
                <div className="f-feature-cardsgroup">
                  <Link to="/feature/step/" className="f-feature-card">
                    <div className="f-feature-cardimg">
                      <img className="fcover-fit" src={homefeature_01} alt="" />
                    </div>
                    <p className="font-400L fcolor-white">香煎菲力牛排</p>
                    <div className="f-feature-icon font-400S">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={['fas', 'bookmark']}
                        fixedWidth
                      />
                      <span>34210</span>
                    </div>
                  </Link>
                  <Link to="/feature/step/" className="f-feature-card">
                    <div className="f-feature-cardimg">
                      <img className="fcover-fit" src={homefeature_02} alt="" />
                    </div>
                    <p className="font-400L fcolor-white">泡菜月見牛筋牛肉丼</p>
                    <div className="f-feature-icon font-400S">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={['fas', 'bookmark']}
                        fixedWidth
                      />
                      <span>32152</span>
                    </div>
                  </Link>
                  <Link to="/feature/step/" className="f-feature-card">
                    <div className="f-feature-cardimg">
                      <img className="fcover-fit" src={homefeature_03} alt="" />
                    </div>
                    <p className="font-400L fcolor-white">三杯蒟蒻杏鮑菇</p>
                    <div className="f-feature-icon font-400S">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={['fas', 'bookmark']}
                        fixedWidth
                      />
                      <span>34117</span>
                    </div>
                  </Link>
                  <Link to="/feature/step/" className="f-feature-card">
                    <div className="f-feature-cardimg">
                      <img className="fcover-fit" src={homefeature_04} alt="" />
                    </div>
                    <p className="font-400L fcolor-white">野菇時蔬鹹派</p>
                    <div className="f-feature-icon font-400S">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={['fas', 'bookmark']}
                        fixedWidth
                      />
                      <span>28999</span>
                    </div>
                  </Link>
                  <Link to="/feature/step/" className="f-feature-card">
                    <div className="f-feature-cardimg">
                      <img className="fcover-fit" src={homefeature_05} alt="" />
                    </div>
                    <p className="font-400L fcolor-white">蔥醬鮭魚燉飯</p>
                    <div className="f-feature-icon font-400S">
                      <FontAwesomeIcon
                        className="me-3"
                        icon={['fas', 'bookmark']}
                        fixedWidth
                      />
                      <span>27975</span>
                    </div>
                  </Link>
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
                <Link to="/market" className="h-shop-titlebtn">
                  查看更多商品
                </Link>
              </div>
              {/* 圖片內容 */}
              <div className="h-shop-cardgroup">
                <div className="h-shop-cardimg">
                  <div className="h-shop-imgbigclass">
                    <figure className="h-shop-imgbig">
                      <img className="fcover-fit" src={homeshop_01} alt="" />
                    </figure>
                  </div>
                  <div className="h-shop-cardfont">
                    <p className="font-400S fcolor-white">食材</p>
                    <h5 className="fcolor-white">紐西蘭小羔羊薄切片</h5>
                    <p className="font-400S fcolor-secondary">日荷肉舖</p>
                    <p className="font-400S fcolor-secondary">
                      在純淨大自然中成長的樂活羊隻，以天然牧草孕育出更豐富的營養成分，精選六個月大的小羔羊，部位取自於小羔羊隻的肩背肉塊，限定0.2cm的薄度，更能呈現肉質的鮮美嫩度，不論是火鍋、熱炒、烹煮皆適宜。
                    </p>
                  </div>
                </div>
                <div className="h-shop-cardimg">
                  <div className="h-shop-cardfontsmalltwo">
                    <p className="font-400S fcolor-white">調味料</p>
                    <h6 className="fcolor-white">巴薩米克醋Bianco</h6>
                    <div className="h-shop-cardline"></div>
                  </div>
                  <div className="h-shop-imgclass">
                    <figure className="h-shop-img">
                      <img className="fcover-fit" src={homeshop_02} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="h-shop-cardimg">
                  <div className="h-shop-cardfontsmall">
                    <p className="font-400S fcolor-primary">鍋具</p>
                    <h6 className="fcolor-primary">鈦頂級不沾平底鍋</h6>
                    <div className="h-shop-cardline"></div>
                  </div>
                  <div className="h-shop-imgclass">
                    <figure className="h-shop-img">
                      <img className="fcover-fit" src={homeshop_03} alt="" />
                    </figure>
                  </div>
                </div>
                <div className="h-shop-cardimg">
                  <div className="h-shop-cardfontsmall">
                    <p className="font-400S fcolor-primary">食材</p>
                    <h6 className="fcolor-primary">美國Choice嫩肩里肌牛排</h6>
                    <div className="h-shop-cardline"></div>
                  </div>
                  <div className="h-shop-imgclass">
                    <figure className="h-shop-img">
                      <img className="fcover-fit" src={homeshop_04} alt="" />
                    </figure>
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
