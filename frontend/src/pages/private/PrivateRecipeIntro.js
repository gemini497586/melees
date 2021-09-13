import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRecipePhotoIntro from './component/PrivateRecipePhotoIntro'
import RecipeStep from '../../component/RecipeStep'
import CardShopping from '../../component/CardShopping'
import PrivateRecipeComment from './component/PrivateRecipeComment'
import PrivateRecipeIngre from './component/PrivateRecipeIngre'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import CardRecipe from '../../component/CardRecipe'

import { useParams } from 'react-router'

function PrivateRecipeIntro(props) {
  const { id } = useParams()
  const heading = ['食材', '步驟', '評論']
  useEffect(() => {}, [])
  return (
    <>
      <div className="page-group">
        <PrivateRecipePhotoIntro id={id} />

        <div className="container">
          <PrivateRecipeHeading title={heading[0]} />
          <div className="row">
            <div className="col-12 col-md-6 g-0">
              <PrivateRecipeIngre id={id} />
            </div>
            <div className="col-12 col-md-6 g-0">
              <PrivateRecipeIngre id={id} />
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
          </div>
        </div>

        <PrivateRecipeComment id={id} />
        <CardRecipe />

        {/* <PrivateRecipeCardMore /> */}
        <CardShopping />
      </div>
    </>
  )
}
export default PrivateRecipeIntro
