import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Tables from './component/Tables.js'
import Footer from './component/Footer.js'
import Box from './pages/box/Box.js'
import Home from './pages/home/Home.js'
import SearchMarket from './pages/search/SearchMarket.js'
import SearchRecipe from './pages/search/SearchRecipe.js'
import MemberBox from './pages/member/MemberBox'
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import CardShopping from './component/CardShopping.js'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe.js'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MinorBar /> */}
      {/* <Home /> */}
      {/* <Box /> */}
      <Tables />
      {/* <SearchMarket /> */}
      {/* <SearchRecipe /> */}
      {/* <MemberBox /> */}
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
