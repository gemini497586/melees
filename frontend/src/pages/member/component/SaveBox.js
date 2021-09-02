import React from 'react'
import BoxExample from '../../../images/box_example.png'

function SaveBox() {
  return (
    <>
      <div className="col-12 col-md-3">
        <div className="member-box-card">
          <figure>
            <img className="cover-fit" src={BoxExample} alt="bento" />
            <figcaption className="member-box-food font-400S">
              <p>雞肉、花椰菜、番茄、白飯、玉米筍</p>
            </figcaption>
          </figure>
          <div className="member-box-detail">
            <ul className="list-unstyled">
              <li className="member-box-title">
                <h6>
                  總卡路里: <span>1000</span>大卡
                </h6>
              </li>
              <li className="font-400SS member-box-content">
                名稱: <span>RUBYRUBY</span>
              </li>
              <li className="font-400SS member-box-content">
                日期: <span>2021/08/12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default SaveBox
