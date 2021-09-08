import React from 'react'
import '../../style/home.css'
import '../../style/searchRecipe.css'
import Recipe01 from '../../images/recipe_01.jpg'
import HomeBento from './component/HomeBento'
import '../../style/featureComponent.css'

function Home() {
  return (
    <>
      <div className="hb-100vh">
        <HomeBento />
      </div>
      {/* 便當 */}
      {/* <section className="home-height">
      <section className="home-height">
        <div className="home-page1">
          <div className="container">
            <div className="p1-dialog font-700L">卡路里幫你算好好</div>
            <div className="p1-title">
              <h1>客製化便當</h1>
            </div>
            <div className="p1-entitle">
              <h2>Just For You</h2>
            </div>
            <div className="p1-btn">
              <a href="/" className="font-700M h-btn">
                動手做便當去吧！
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* 精選食譜 */}
      {/* <section className="home-height">
      <section className="home-height">
        <div className="home-page2">
          <div className="p2-top">
            <div className="d-flex justify-content-evenly">
              <div className="p2-top-text">
                <h5 className="p2-top-subtitle">把煩惱都丟了吧</h5>
                <h1 className="p2-top-title text-nowrap">人氣精選食譜</h1>
              </div>
              <div className="p2-top-image">
                <figure>
                  <img className="home-cover-fit" src={Recipe01} alt="" />
                </figure>
              </div>
              <div className="align-self-center">
                <div className="p2-top-classify font-400SL">健康長肉肉</div>
                <h2 className="p2-top-name text-nowrap">香煎菲力牛排</h2>
                <div></div>
              </div>
            </div>
          </div>
          <div className="p2-bottom">
            <div className="d-flex justify-content-around">
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
            </div>
          </div>
        </div>
      </section> */}
      {/* 私藏食譜 */}
      {/* <section className="home-height">
        <div className="home-page3">
          <div className="plate"></div>
        </div>
      </section> */}
      {/* 商城 */}
      {/* <section className="home-height">
        <div className="home-page4"></div>
      </section> */}
    </>
  )
}

export default Home
