import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureContentImg from './pages/feature/component/FeatureContentImg'
import FeatureContentIntro from './pages/feature/component/FeatureContentIntro'
import FeatureWeek from './pages/feature/component/FeatureWeek'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'
import MemberBox from './pages/member/MemberBox'
import MemberFeature from './pages/member/MemberFeature'
import Tables from './component/Tables'
import Box from './pages/box/Box'
import Home from './pages/home/Home'
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <SearchRecipe />
      {/* <SearchMarket /> */}
      {/* <Box /> */}
      {/* <Tables /> */}
      {/* <MemberBox /> */}
      {/* <MemberFeature /> */}
      <FeatureIndex />

      <Footer />
    </div>
  )
}

export default App
