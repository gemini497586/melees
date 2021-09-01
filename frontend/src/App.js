import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import Footer from './component/Footer.js'
import CardShopping from './component/CardShopping.js'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MinorBar />
      <DropDown />
      <CardRecipe />
      <CardRecipe />
      <CardRecipe />
      <CardShopping />
      <CardPrivateRecipe />
      <Footer />
    </div>
  )
}

export default App
