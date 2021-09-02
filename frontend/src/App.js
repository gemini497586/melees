import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'

// 冠霖的
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import CardShopping from './component/CardShopping.js'
import RecipeStep from './component/RecipeStep.js'
import PrivateRecipeBanner from './pages/private/component/PrivateRecipeBanner.js'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe.js'
import PrivateRecipePhotoIntro from './pages/private/component/PrivateRecipePhotoIntro.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MinorBar />
      <PrivateRecipePhotoIntro />
      <DropDown />
      <CardPrivateRecipe />
      <CardRecipe />
      <CardShopping />
      <CardShopping />
      <CardShopping />
      <RecipeStep />
      <Footer />
    </div>
  )
}

export default App
