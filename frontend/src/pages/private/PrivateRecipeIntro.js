import PrivateRecipePhotoIntro from './component/PrivateRecipePhotoIntro'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import PrivateRecipeComment from './component/PrivateRecipeComment'
import PrivateRecipeIngre from './component/PrivateRecipeIngre'

// json 測試用
import RecipeStepTest from '../../data/RecipeStepTest'

function PrivateRecipeIntro() {
  return (
    <>
      <PrivateRecipePhotoIntro />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <PrivateRecipeIngre />
          </div>
        </div>
      </div>
      <RecipeStep RecipeStepTest={RecipeStepTest} />
      <PrivateRecipeComment />
      <CardRecipe />
      <CardShopping />
    </>
  )
}
export default PrivateRecipeIntro
