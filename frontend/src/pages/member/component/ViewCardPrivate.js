import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import HeartViewNum from '../../../component/HeartViewNum'
import { API_URL } from '../../../utils/config'

function ViewCardPrivate(props) {
  const { privateList } = props

  return (
    <>
      <div className="s-recipe-bottom">
        {privateList.map((v, i) => {
          return (
            <div className="s-recipe-card" key={i}>
              <div className="s-recipe-intro">
                <div className="s-recipe-image">
                  <img
                    className="b-cover-fit"
                    src={`${API_URL}/private/${v.picture}`}
                    alt={v.name}
                  />
                </div>
                <div className="s-recipe-info font-400SL">
                  <div className="s-recipe-classify">
                    <FontAwesomeIcon
                      icon="bookmark"
                      className="me-2 font-400L"
                    />
                    私藏食譜
                  </div>
                  <div className="s-recipe-text">
                    <ul className="list-unstyled">
                      <li className="s-recipe-subtitle font-400SL">
                        {v.create_date}
                      </li>
                      <li className="s-recipe-title font-700L ">{v.name}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="s-recipe-count font-400M">
                <HeartViewNum likeqty={v.like_qty} viewqty={v.view_qty} />
                <div className="s-recipe-count-user">
                  <div className="s-recipe-count-circle">
                    <img
                      className="b-cover-fit"
                      src={`${API_URL}/member/${v.member_pic}`}
                      alt={v.member_nickname}
                    ></img>
                  </div>
                  <p className="font-400SL">{v.member_nickname}</p>
                </div>
              </div>
              <div className="s-recipe-read">
                <Link to={`/private/detail/${v.id}`}>
                  <button className="font-700M">
                    <FontAwesomeIcon icon="eye" className="me-2" />
                    查看食譜
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ViewCardPrivate
