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
import PrivateRecipeTag from './component/PrivateRecipeTag'

// 套件
import Axios from 'axios'
import { useParams } from 'react-router'
import { API_URL } from '../../utils/config'

function PrivateRecipeIntro() {
  const { id } = useParams()
  const heading = ['食材', '步驟', '標籤', '評論']
  const [ingred, setIngred] = useState([])
  const [stepList, setStepList] = useState([])
  const [tags, setTags] = useState([])
  const [comment, setComment] = useState([])
  const [avatar, setAvatar] = useState()
  const [reRender, setReRender] = useState(false)

  useEffect(() => {
    Axios.get(`${API_URL}/private/avatar`, {
      // 設定可以跨源送 cookie
      withCredentials: true,
    }).then((res) => {
      setAvatar(res.data.picture)
    })
  }, [])

  useEffect(() => {
    Axios.get(`${API_URL}/private/intro/${id}`).then((res) => {
      setIngred(res.data.ingredList)
      setStepList(res.data.stepList)
      setTags(res.data.tagList)
      setComment(res.data.commentList)
    })
  }, [reRender])

  // 將食材資料分成左右兩個 table
  const total = ingred.length
  const half = Math.ceil(total / 2)
  const table_L = ingred.slice(0, half)
  const table_R = ingred.slice(half)

  return (
    <>
      <div className="page-group">
        <div className="container">
          <div className="row">
            <PrivateRecipePhotoIntro id={id} />
            <PrivateRecipeHeading title={heading[0]} />
            <div className="col-12 col-md-6 g-0">
              <Table tableList={table_L} />
            </div>
            <div className="col-12 col-md-6 g-0">
              <Table tableList={table_R} />
            </div>
            <PrivateRecipeHeading title={heading[1]} />
            <RecipeStep id={id} stepList={stepList} />
            <PrivateRecipeHeading title={heading[2]} />
            <PrivateRecipeTag tags={tags} />
            <PrivateRecipeHeading title={heading[3]} />
            <PrivateRecipeStarComment
              id={id}
              setReRender={setReRender}
              avatar={avatar}
            />
          </div>
          <PrivateRecipeComment id={id} comment={comment} />
          <CardRecipe />
          <CardShopping />
        </div>
      </div>
    </>
  )
}
export default PrivateRecipeIntro
