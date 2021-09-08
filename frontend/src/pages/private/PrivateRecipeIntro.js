import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRecipePhotoIntro from './component/PrivateRecipePhotoIntro'
import RecipeStep from '../../component/RecipeStep'
import CardShopping from '../../component/CardShopping'
import PrivateRecipeComment from './component/PrivateRecipeComment'
import PrivateRecipeIngre from './component/PrivateRecipeIngre'
import PrivateRecipeCardMore from './component/PrivateRecipeCardMore'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'

import { useParams } from 'react-router'

function PrivateRecipeIntro(props) {
  const { id } = useParams()
  useEffect(() => {}, [])
  return (
    <>
      <div className="page-group">
        <PrivateRecipePhotoIntro id={id} />

        <div className="container">
          <div className="row">
            <div className="col-6">
              <PrivateRecipeHeading />
              <PrivateRecipeIngre id={id} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PrivateRecipeHeading />
            </div>
          </div>
        </div>
        <RecipeStep id={id} />
        <PrivateRecipeComment id={id} />
        <PrivateRecipeCardMore />
        <CardShopping />
      </div>
    </>
  )
}
export default PrivateRecipeIntro
