import React, { useState, useEffect } from 'react'
import PrivateRecipePhotoIntro from './component/PrivateRecipePhotoIntro'
import RecipeStep from '../../component/RecipeStep'
import CardShopping from '../../component/CardShopping'
import PrivateRecipeComment from './component/PrivateRecipeComment'
import PrivateRecipeIngre from './component/PrivateRecipeIngre'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import CardRecipe from '../../component/CardRecipe'
import Axios from 'axios'
import { useParams } from 'react-router'

function PrivateRecipeIntro(props) {
  const { id } = useParams()
  const heading = ['食材', '步驟', '標籤', '評論']
  const [ingred, setIngred] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/private/ingred/${id}`).then((res) => {
      setIngred(res.data)
    })

    Axios.get(`http://localhost:3001/api/private/tags/${id}`).then((res) => {
      setTags(res.data)
    })

    Axios.get(`http://localhost:3001/api/private/addview/${id}`).then((res) => {
      console.log(res)
    })
  }, [])

  const total = ingred.length
  const half = Math.ceil(total / 2)
  const tableleft = ingred.slice(0, half)
  const tableright = ingred.slice(half)
  const tableIngred = [tableleft, tableright]

  return (
    <>
      <div className="page-group">
        <PrivateRecipePhotoIntro id={id} />

        <div className="container">
          <PrivateRecipeHeading title={heading[0]} />
          <div className="row">
            <div className="col-12 col-md-6 g-0">
              <PrivateRecipeIngre id={id} ingred={tableIngred[0]} />
            </div>
            <div className="col-12 col-md-6 g-0">
              <PrivateRecipeIngre id={id} ingred={tableIngred[1]} />
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
        <RecipeStep id={id} />
        <div className="container">
          <div className="row">
            <PrivateRecipeHeading title={heading[2]} />
            {tags.map((value, index) => {
              return <span>{value.tags}</span>
            })}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <PrivateRecipeHeading title={heading[3]} />
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
