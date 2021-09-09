import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRecipeBanner from './component/PrivateRecipeBanner'
import DropDown from '../../component/DropDown'
import PrivateRecipeCard from './component/PrivateRecipeCard'
import Paging from '../../component/Paging'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import PrivateRecipeCardMore from './component/PrivateRecipeCardMore'

function PrivateRecipe() {
  return (
    <>
      <div className="page-group">
        <PrivateRecipeBanner />
        <DropDown />
        <PrivateRecipeCard />
        <CardRecipe />
        <CardShopping />
      </div>
    </>
  )
}
export default PrivateRecipe
