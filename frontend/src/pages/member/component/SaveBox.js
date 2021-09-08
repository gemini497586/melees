import React from 'react'
import BoxExample from '../../../images/box_example.png'

function SaveBox(props) {
  const { saveBoxList } = props
  return (
    <>
      {saveBoxList.map((v, i) => {
        return (
          <div className="col-12 col-md-3">
            <div className="member-box-card">
              <figure>
                <img className="b-cover-fit" src={BoxExample} alt="bento" />
                <figcaption className="member-box-food font-400S">
                  <p>{v.food}</p>
                </figcaption>
              </figure>
              <div className="member-box-detail">
                <ul className="list-unstyled">
                  <li className="member-box-title">
                    <h6>總卡路里: {v.cal} 大卡</h6>
                  </li>
                  <li className="font-400SS member-box-content">
                    名稱: {v.name}
                  </li>
                  <li className="font-400SS member-box-content">
                    日期: {v.date}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SaveBox
