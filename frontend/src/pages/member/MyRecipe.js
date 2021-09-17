import React, { useState, useEffect } from 'react'
import '../../style/global.css'
import '../../style/memberMyRecipe.css'
import '../../style/memberMyRecipeTable.css'

import MinorBar from './component/MinorBar'
import DropDown from '../../component/DropDown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import food from '../../images/default_food1.jpg'

import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MyRecipe() {
  const [recipeList, setRecipeList] = useState([])
  const [commentList, setCommentList] = useState([])
  const [likeList, setLikeList] = useState([])
  const [followList, setFollowList] = useState([])

  useEffect(() => {
    Axios.get(`${API_URL}/private/myrecipe`).then((res) => {
      setRecipeList(res.data.result)
      setCommentList(res.data.commentResult)
      setLikeList(res.data.likeResult)
      setFollowList(res.data.followResult)
      console.log('success')
      console.log(recipeList)
    })
  }, [])
  const list = [
    {
      id: 1,
    },
  ]
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
                      <h2>{recipeList.length}</h2>
                    </div>
                    <span className="font-700M">道食譜</span>
                  </div>
                  <div className="MyRecipe-rate">
                    <div className="MyRecipe-recipe-num">
                      <h2>{commentList.length}</h2>
                    </div>
                    <span className="font-700M">個評分</span>
                  </div>
                  <div className="MyRecipe-heart">
                    <div className="MyRecipe-recipe-num">
                      <h2>{likeList.length}</h2>
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
                      <h2>{followList.length}</h2>
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

        <pre>{JSON.stringify(recipeList, null, 2)}</pre>
        <pre>{JSON.stringify(followList, null, 2)}</pre>

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
                {recipeList.map((value, index) => {
                  return (
                    <tbody className="MyPecipe-tbody">
                      <tr>
                        <td>
                          <div className="d-flex MyPecipe-tbody-avatar">
                            <figure>
                              <img src={food} alt="" className="" />
                            </figure>
                            <div className="flex-column">
                              <div>{value.name}</div>
                              <div>{value.create_date}</div>
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
                        <td className="font-400L">{value.qty} 份</td>
                        <td className="font-400L">152</td>
                        <td className="font-400L">365</td>
                        <td className="font-400L">412</td>
                        <td>
                          <div className="d-flex justify-content-around">
                            <div className="MyRecipe-edit">
                              <Link to={'/private/edit'}>
                                <div className="d-flex justify-content-center align-items-center MyRecipe-edit-icon">
                                  <FontAwesomeIcon
                                    icon="pencil-alt"
                                    size="lg"
                                  />
                                </div>
                              </Link>
                            </div>
                            <div className="MyRecipe-delete">
                              <Link to={'/private/edit'}>
                                <div className="d-flex justify-content-center align-items-center MyRecipe-delete-icon">
                                  <FontAwesomeIcon icon="trash-alt" size="lg" />
                                </div>
                              </Link>
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
