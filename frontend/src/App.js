import './style/global.css'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import FeatureIndex from './pages/feature/FeatureIndex'
import MemberBox from './pages/member/MemberBox'
import MemberFeature from './pages/member/MemberFeature'
import Tables from './component/Tables'
import Box from './pages/box/Box'
import Home from './pages/home/Home'
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'
import Header from './component/Header'
import MinorBar from './pages/member/component/MinorBar'
import Footer from './component/Footer'


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
      {/* <FeatureIndex /> */}

      <Footer />
    </div>
  )
}

export default App
