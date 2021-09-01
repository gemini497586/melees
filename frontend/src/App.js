import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MinorBar /> */}
      {/* <CardRecipe /> */}
      <DropDown />
    </div>
  )
}

export default App
