import React from 'react'
import Recipe02 from '../../../images/recipe_02.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import Avatar from '../../../images/Avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function SearchCardPrivate(props) {
  const { privateList } = props
  return (
    <>
      {privateList.map((v, i) => {
        return (
          <div className="s-recipe-card">
            <div className="d-flex justify-content-around align-items-center">
              <figure className="s-recipe-image">
                <img className="b-cover-fit" src={Recipe02} alt="Recipe02" />
              </figure>
              <div className="s-recipe-classify font-400SL">
                <FontAwesomeIcon icon="bookmark" className="me-2 font-400L" />
                {v.classify}
              </div>
              <div className="s-recipe-text">
                <ul className="list-unstyled">
                  <li className="s-recipe-date font-400S">{v.date}</li>
                  <li className="s-recipe-title font-700L ">{v.name}</li>
                </ul>
              </div>
              <div className="s-recipe-count font-400M">
                <HeartViewNum />
                <div className="s-recipe-count-user">
                  <div className="s-recipe-count-circle">
                    <img className="b-cover-fit" src={Avatar} alt=""></img>
                  </div>
                  <p className="font-400SL">{v.auth}</p>
                </div>
              </div>
              <div className="s-recipe-add">
                <button className="s-recipe-btn font-700M">
                  <FontAwesomeIcon icon="eye" className="me-2" />
                  查看食譜
                </button>
              </div>
            </div>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default SearchCardPrivate
