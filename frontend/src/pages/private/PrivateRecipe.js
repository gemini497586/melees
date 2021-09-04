import PrivateRecipeBanner from './component/PrivateRecipeBanner'
import DropDown from '../../component/DropDown'
import CardPrivateRecipe from './component/CardPrivateRecipe'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'

function PrivateRecipe() {
  return (
    <>
      <PrivateRecipeBanner />
      <DropDown />
      <CardPrivateRecipe />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-1">
            <Paging />
          </div>
        </div>
      </div>

      <CardShopping />
    </>
  )
}
export default PrivateRecipe
