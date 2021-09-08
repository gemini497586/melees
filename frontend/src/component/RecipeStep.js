import React, { useState, useEffect } from 'react'
import '../style/recipeStep.css'
import Axios from 'axios'

function RecipeStep(props) {
  const { id } = props
  const [stepList, setStepList] = useState([])
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/private/steps/${id}`).then((res) => {
      setStepList(res.data)
    })
  }, [])
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {stepList.map((value, index) => {
              return (
                <>
                  <div className="d-flex recipeStep">
                    <span className="font-700M recipeStep-num">
                      {index + 1}.
                    </span>
                    <span className="font-400L recipeStep-content">
                      {value.steps}
                    </span>
                  </div>
                  <hr className="recipeStep-divider w-100" />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeStep
