import React from 'react'
import '../../../style/homeBento.css'
import '../../../style/featureComponent.css'
import homebento_bento from '../../../images/homebento_bento.png'
import homeBento_fontbg from '../../../images/homeBento_fontbg.png'
import homebento_btnbg from '../../../images/homebento_btnbg.png'
import desktop from '../../../images/desktop.jpg'

function HomeBento() {
  return (
    <>
      <div>
        <img className="fcover-fit hb-100vh" src={desktop} alt="" />
      </div>
      {/* <div className="hb-100vh hb-flowerbg"> */}
      {/* 往下的icon */}
      {/* <div className="hb-arrowdown fcolor-secondary">
          <i class="fas fa-chevron-down"></i>
        </div> */}
      {/* 便當 */}
      {/* <div className="hb-titlegroup">
          <div className="hb-bento">
            <img className="fcover-fit" src={homebento_bento} alt="" />
          </div>
          <div className="hb-titlefont">
            <div className="hb-fonttitle mb-5">客製化便當</div>
            <div className="hb-secondfont">
              <img className="fcover-fit" src={homeBento_fontbg} alt="" />
            </div>
            <div className="hb-btntitle">
              <img className="fcover-fit" src={homebento_btnbg} alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default HomeBento
