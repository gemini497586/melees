import React from 'react'
import BoxExample from '../../../images/box_example.png'

function SaveBox(props) {
  const { data } = props
  return (
    <>
      {data.map((v, i) => {
        return (
          <div className="col-12 col-md-4">
            <div className="member-box-card">
              <figure>
                <img className="b-cover-fit" src={BoxExample} alt="bento" />
                <figcaption className="member-box-food font-400L">
                  <p>{v.box_ids}</p>
                </figcaption>
              </figure>
              <div className="member-box-detail">
                <ul className="list-unstyled">
                  <li className="member-box-title">
                    <div className="font-700L">總卡路里: {v.cal} 大卡</div>
                  </li>
                  <li className="font-400S member-box-content">
                    名稱: {v.name}
                  </li>
                  <li className="font-400S member-box-content">
                    日期: {v.create_at}
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
