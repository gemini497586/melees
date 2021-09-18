import React, { useState, useEffect } from 'react'
// 共用元件
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
// 私藏元件
import PrivateRecipePhotoIntro from './component/PrivateRecipePhotoIntro'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import PrivateRecipeStarComment from './component/PrivateRecipeStarComment'
import PrivateRecipeComment from './component/PrivateRecipeComment'

import Axios from 'axios'
import { useParams } from 'react-router'
import { API_URL } from '../../utils/config'

function PrivateRecipeIntro() {
  const { id } = useParams()
  const heading = ['食材', '步驟', '標籤', '評論']
  const [ingred, setIngred] = useState([])
  const [stepList, setStepList] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    Axios.get(`${API_URL}/private/ingred/${id}`, {
      // 設定可以跨源送 cookie
      withCredentials: true,
    }).then((res) => {
      setIngred(res.data)
    })

    Axios.get(`${API_URL}/private/tags/${id}`, {
      // 設定可以跨源送 cookie
      withCredentials: true,
    }).then((res) => {
      setTags(res.data)
    })

    Axios.get(`${API_URL}/private/addview/${id}`, {
      // 設定可以跨源送 cookie
      withCredentials: true,
    }).then((res) => {
      console.log(res)
    })

    Axios.get(`${API_URL}/private/steps/${id}`, {
      // 設定可以跨源送 cookie
      withCredentials: true,
    }).then((res) => {
      setStepList(res.data)
    })
  }, [])

  // 將食材資料分半
  const total = ingred.length
  const half = Math.ceil(total / 2)
  const tableleft = ingred.slice(0, half)
  const tableright = ingred.slice(half)

  return (
    <>
      <div className="page-group">
        <PrivateRecipePhotoIntro id={id} />

        <div className="container">
          <PrivateRecipeHeading title={heading[0]} />
          <div className="row">
            <div className="col-12 col-md-6 g-0">
              <Table tableList={tableleft} />
            </div>
            <div className="col-12 col-md-6 g-0">
              <Table tableList={tableright} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PrivateRecipeHeading title={heading[1]} />
            </div>
          </div>
        </div>
        <RecipeStep id={id} stepList={stepList} />
        <div className="container">
          <div className="row">
            <PrivateRecipeHeading title={heading[2]} />
            {tags.map((value, index) => {
              return <span>{value.tags}</span>
            })}
          </div>
        </div>
        <div className="container">
          <div className="row"></div>
        </div>
        <div className="container">
          <div className="row">
            <PrivateRecipeHeading title={heading[3]} />
            <PrivateRecipeStarComment id={id} />
          </div>
        </div>
        <PrivateRecipeComment id={id} />
        <CardRecipe />
        <CardShopping />
      </div>
    </>
  )
}
export default PrivateRecipeIntro
