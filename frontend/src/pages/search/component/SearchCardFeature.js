import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import { API_URL } from '../../../utils/config'

function SearchCardFeature(props) {
  const { featureList } = props
  let typeid = {
    1: '健康長肉肉',
    2: '健康不吃肉',
    3: '家常好手藝',
    4: '上班不煩惱',
  }
  return (
    <>
      {featureList.map((v, i) => {
        return (
          <div className="s-recipe-card" key={i}>
            <div className="s-recipe-intro">
              <div className="s-recipe-image">
                <img
                  className="b-cover-fit"
                  src={`${API_URL}/feature/featurefood/${v.featureimg[0]}`}
                  alt={v.name}
                />
              </div>
              <div className="s-recipe-info font-400SL">
                <div className="s-recipe-classify">
                  <FontAwesomeIcon icon="bookmark" className="me-2 font-400L" />
                  精選食譜
                </div>
                <div className="s-recipe-text">
                  <ul className="list-unstyled">
                    <li className="s-recipe-subtitle font-400SL">
                      {typeid[v.type_id]}
                    </li>
                    <li className="s-recipe-title font-700L ">{v.listName}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="s-recipe-count font-400M">
              <HeartViewNum featureList={featureList} />
              <a href={v.link} target="_blank">
                <Ig linkName={v.linkName} />
              </a>
            </div>
            <div className="s-recipe-read">
              <Link to={`/feature/step/${v.id}`}>
                <button className="font-700M">
                  <FontAwesomeIcon icon="eye" className="me-2" />
                  查看食譜
                </button>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SearchCardFeature
