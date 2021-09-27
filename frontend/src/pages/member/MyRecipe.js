import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
// css
import '../../style/global.css'
import '../../style/memberMyRecipe.css'
import '../../style/memberMyRecipeTable.css'
// 共用
import MinorBar from './component/MinorBar'
import DropDown from '../../component/DropDown'

import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MyRecipe() {
  const [recipeList, setRecipeList] = useState([])
  const [commentList, setCommentList] = useState([])
  const [likeList, setLikeList] = useState([])
  const [viewList, setViewList] = useState([])
  const [followList, setFollowList] = useState()

  useEffect(() => {
    Axios.get(`${API_URL}/private/myrecipe`, {
      withCredentials: true,
    }).then((res) => {
      setRecipeList(res.data.result)
      setCommentList(res.data.commentResult)
      setLikeList(res.data.likeResult)
      setViewList(res.data.viewResult)
      setFollowList(res.data.followTotal[0].count)
    })
  }, [])

  // 星星評分數
  const starNum = (index) => {
    const row = []
    let solid = Math.floor(recipeList[index].star_rate)
    let empty = 5 - Math.ceil(recipeList[index].star_rate)
    let half = 5 - solid - empty
    for (let i = 0; i < solid; i++) {
      row.push(<FontAwesomeIcon icon="star" />)
    }
    for (let j = 0; j < half; j++) {
      row.push(<FontAwesomeIcon icon="star-half-alt" />)
    }
    for (let k = 0; k < empty; k++) {
      row.push(<FontAwesomeIcon icon={['far', 'star']} />)
    }
    return row
  }

  // 評分數總計
  const commentTotal = (index) => {
    let x = 0
    for (let i = 0; i < commentList.length; i++) {
      if (commentList[i].private_id === recipeList[index].id) {
        x++
      }
    }
    if (x > 0) {
      return <div className="font-400S">{x} 人評分過</div>
    }
    return <div className="font-400S">0 人評分過</div>
  }
  // 按讚數總計
  const likeTotal = (index) => {
    let x = 0
    for (let i = 0; i < likeList.length; i++) {
      if (likeList[i].private_id === recipeList[index].id) {
        x++
      }
    }
    if (x > 0) {
      return <td className="font-400L">{x}</td>
    }
    return <td className="font-400L">{x}</td>
  }
  // 瀏覽數總計
  const viewTotal = (index) => {
    let x = 0
    for (let i = 0; i < viewList.length; i++) {
      if (viewList[i].private_id === recipeList[index].id) {
        x++
      }
    }
    if (x > 0) {
      return <td className="font-400L">{x}</td>
    }
    return <td className="font-400L">{x}</td>
  }

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
                    <span className="font-700M">個評論</span>
                  </div>
                  <div className="MyRecipe-heart">
                    <div className="MyRecipe-recipe-num">
                      <h2>{likeList.length}</h2>
                    </div>
                    <span className="font-700M">顆愛心</span>
                  </div>
                  <div className="MyRecipe-view">
                    <div className="MyRecipe-recipe-num">
                      <h2>{viewList.length}</h2>
                    </div>
                    <span className="font-700M">瀏覽數</span>
                  </div>
                  <div className="MyRecipe-fans">
                    <div className="MyRecipe-recipe-num">
                      <h2>{followList}</h2>
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
        {/* <DropDown /> */}
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
                    <th></th>
                  </tr>
                </thead>
                {recipeList.map((value, index) => {
                  return (
                    <tbody className="MyPecipe-tbody">
                      <tr key={index}>
                        <td>
                          <div className="d-flex MyPecipe-tbody-avatar">
                            <figure>
                              <img
                                src={`${API_URL}/private/${value.picture}`}
                                alt=""
                                className=""
                              />
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
                                {starNum(index)}

                                <span className="font-400S">
                                  {value.star_rate}
                                </span>
                              </div>
                              {commentTotal(index)}
                            </div>
                          </div>
                        </td>
                        <td className="font-400L">{value.qty} 份</td>
                        {likeTotal(index)}
                        {viewTotal(index)}
                        <td>
                          <div className="d-flex justify-content-around">
                            <div className="MyRecipe-edit">
                              <Link to={`/private/edit/${value.id}`}>
                                <div className="d-flex justify-content-center align-items-center MyRecipe-edit-icon">
                                  <FontAwesomeIcon
                                    icon="pencil-alt"
                                    size="lg"
                                  />
                                </div>
                              </Link>
                            </div>
                            <div
                              className="MyRecipe-delete"
                              onClick={() => {
                                alert('123')
                              }}
                            >
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
      <pre>食譜 {JSON.stringify(recipeList, null, 2)}</pre>
      <pre>評論 {JSON.stringify(commentList, null, 2)}</pre>
      <pre>按讚 {JSON.stringify(likeList, null, 2)}</pre>
      <pre>瀏覽 {JSON.stringify(viewList, null, 2)}</pre>
      <pre>粉絲 {JSON.stringify(followList, null, 2)}</pre>
    </>
  )
}

export default MyRecipe
