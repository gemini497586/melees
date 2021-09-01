import React from 'react'
import '../../style/home.css'

function Home() {
  return (
    <>
      {/* 便當 */}
      <section className="home-height">
        <div className="page1">
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
      </section>
      {/* 精選食譜 */}
      <section className="home-height">
        <div className="page2"></div>
      </section>
      {/* 私藏食譜 */}
      <section className="home-height">
        <div className="page3">
          <div className="plate"></div>
        </div>
      </section>
      {/* 商城 */}
      <section className="home-height">
        <div className="page4"></div>
        <div className="container">
          <div className="p4-content">
            <div className="p4-rect"></div>
            <div className="p4-text">
              <div class="p4-subtitle">
                <h5>你最好的SUP!</h5>
              </div>
              <div class="p4-title">
                <h1>熱燒商品</h1>
              </div>
              <div className="p4-btn mt-3">
                <a href="/" className="font-700M h-btn">
                  查看更多商品
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
