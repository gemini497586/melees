import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MinorBar /> */}
      <CardRecipe />
      <DropDown />
      <Footer />
    </div>
  )
}

export default App
