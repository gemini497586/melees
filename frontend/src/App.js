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
      <Footer />
    </div>
  )
}

export default App
