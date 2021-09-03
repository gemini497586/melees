import './style/global.css'
import Header from './component/Header'
import Home from './pages/home/Home'
import CardRecipe from './component/CardRecipe'
import CardShopping from './component/CardShopping'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import MemberBox from './pages/member/MemberBox'
import MemberFeature from './pages/member/MemberFeature'
import FeatureIndex from './pages/feature/FeatureIndex'
import MinorBar from './pages/member/component/MinorBar'
import Tables from './component/Tables'
import Box from './pages/box/Box'
import Modal from './pages/box/Modal'
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'
import ProductDetails from './pages/market/ProductDetails'
import CartDetail from './pages/market/CartDetail'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe'
import PrivateRecipePhotoIntro from './pages/private/component/PrivateRecipePhotoIntro'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      {/* <CardRecipe />
      <CardShopping /> */}
      {/* <Register/> */}
      {/* <SearchRecipe /> */}
      {/* <SearchMarket /> */}
      <Box />
      {/* <Modal /> */}
      {/* <Tables /> */}
      {/* <CartDetail /> */}
      {/* <CardPrivateRecipe />
      <PrivateRecipePhotoIntro /> */}
      {/* <ProductDetails /> */}
      {/* <MemberBox /> */}
      {/* <MemberFeature /> */}
      {/* <FeatureIndex /> */}

      <Footer />
    </div>
  )
}

export default App
