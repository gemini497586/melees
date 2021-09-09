import React from 'react'
import '../../style/global.css'
import '../../style/memberMyRecipe.css'
import '../../style/memberMyRecipeTable.css'

import MinorBar from './component/MinorBar'
import DropDown from '../../component/DropDown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import food from '../../images/default_food1.jpg'

function MyRecipe() {
  const list = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ]
  console.log(list.length)
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="MyRecipe-state-container">
                <div className="d-flex justify-content-around align-items-center MyRecipe">
                  <div className="MyRecipe-recipe">
                    <div className="MyRecipe-recipe-num">
                      <h2>241</h2>
                    </div>
                    <span className="font-700M">道食譜</span>
                  </div>
                  <div className="MyRecipe-rate">
                    <div className="MyRecipe-recipe-num">
                      <h2>453</h2>
                    </div>
                    <span className="font-700M">個評分</span>
                  </div>
                  <div className="MyRecipe-heart">
                    <div className="MyRecipe-recipe-num">
                      <h2>652</h2>
                    </div>
                    <span className="font-700M">顆愛心</span>
                  </div>
                  <div className="MyRecipe-view">
                    <div className="MyRecipe-recipe-num">
                      <h2>421</h2>
                    </div>
                    <span className="font-700M">瀏覽數</span>
                  </div>
                  <div className="MyRecipe-fans">
                    <div className="MyRecipe-recipe-num">
                      <h2>381</h2>
                    </div>
                    <span className="font-700M">粉絲</span>
                  </div>
                  <Link to={'/private/upload'}>
                    <div className="MyRecipe-upload-btn">
                      <div className="d-flex justify-content-center align-items-center MyRecipe-upload-text">
                        <FontAwesomeIcon icon="plus" />
                        <span className="font-700M">新增私藏食譜</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DropDown />
        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="MyPecipe-table">
                <thead className="MyPecipe-thead">
                  <tr>
                    <th className="font-700L">私藏食譜</th>
                    <th className="font-700L">評分</th>
                    <th className="font-700L">份量</th>
                    <th className="font-700L">愛心數</th>
                    <th className="font-700L">瀏覽數</th>
                    <th className="font-700L">評論數</th>
                    <th></th>
                  </tr>
                </thead>
                {list.map((value, index) => {
                  return (
                    <tbody className="MyPecipe-tbody">
                      <tr>
                        <td>
                          <div className="d-flex MyPecipe-tbody-avatar">
                            <figure>
                              <img src={food} alt="" className="" />
                            </figure>
                            <div className="flex-column">
                              <div>麻油蝦</div>
                              <div>2021/08/07</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex ">
                            <div className="flex-column MyPecipe-tbody-star">
                              <div>
                                <FontAwesomeIcon icon="star" size="lg" />
                                <FontAwesomeIcon icon="star" size="lg" />
                                <FontAwesomeIcon icon="star" size="lg" />
                                <FontAwesomeIcon icon="star" size="lg" />
                                <FontAwesomeIcon icon="star" size="lg" />
                                <span className="font-400S">4.5</span>
                              </div>
                              <div className="font-400S">101人評分</div>
                            </div>
                          </div>
                        </td>
                        <td className="font-400L">2 份</td>
                        <td className="font-400L">152</td>
                        <td className="font-400L">365</td>
                        <td className="font-400L">412</td>
                        <td>
                          <div className="d-flex justify-content-around">
                            <div className="MyRecipe-edit">
                              <div className="d-flex justify-content-center align-items-center MyRecipe-edit-icon">
                                <FontAwesomeIcon icon="pencil-alt" size="lg" />
                              </div>
                            </div>
                            <div className="MyRecipe-delete">
                              <div className="d-flex justify-content-center align-items-center MyRecipe-delete-icon">
                                <FontAwesomeIcon icon="trash-alt" size="lg" />
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRecipe
