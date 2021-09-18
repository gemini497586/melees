import React from 'react'
import '../style/recipeStep.css'

function RecipeStep(props) {
  const { stepList } = props
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {stepList.map((value, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="d-flex recipeStep">
                      <span className="font-700M recipeStep-num">
                        {index + 1}.
                      </span>
                      <span className="font-400L recipeStep-content">
                        {value.steps}
                      </span>
                    </div>
                    <hr className="recipeStep-divider w-100" />
                  </div>
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
