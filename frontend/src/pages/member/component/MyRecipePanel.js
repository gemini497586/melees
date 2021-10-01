import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
import '../../../style/memberMyRecipePanel.css'
import CountUp from 'react-countup'

function MyRecipePanel(props) {
  const { recipeList, likeTotal, viewTotal, commentTotal, followTotal } = props

  return (
    <>
      <div className="col-12 col-md-12">
        <div className="MyRecipe-state-container">
          <div className="d-flex justify-content-around align-items-center MyRecipe">
            <div className="MyRecipe-recipe">
              <div className="MyRecipe-recipe-num">
                <h2>
                  <CountUp end={recipeList.length} duration={2} />
                </h2>
              </div>
              <span className="font-700M">道食譜</span>
            </div>
            <div className="MyRecipe-rate">
              <div className="MyRecipe-recipe-num">
                <h2>
                  <CountUp end={commentTotal} duration={2} />
                </h2>
              </div>
              <span className="font-700M">個評論</span>
            </div>
            <div className="MyRecipe-heart">
              <div className="MyRecipe-recipe-num">
                <h2>
                  <CountUp end={likeTotal} duration={2} />
                </h2>
              </div>
              <span className="font-700M">個讚</span>
            </div>
            <div className="MyRecipe-view">
              <div className="MyRecipe-recipe-num">
                <h2>
                  <CountUp end={viewTotal} duration={2} useEasing={true} />
                </h2>
              </div>
              <span className="font-700M">瀏覽數</span>
            </div>
            <div className="MyRecipe-fans">
              <div className="MyRecipe-recipe-num">
                <h2>
                  <CountUp end={followTotal} duration={2} />
                </h2>
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
    </>
  )
}
export default MyRecipePanel
