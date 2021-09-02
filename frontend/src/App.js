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

// 冠霖的
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import CardShopping from './component/CardShopping.js'
import RecipeStep from './component/RecipeStep.js'
import PrivateRecipeBanner from './pages/private/component/PrivateRecipeBanner.js'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe.js'
import PrivateRecipePhotoIntro from './pages/private/component/PrivateRecipePhotoIntro.js'

// 排序
import SortingBar from './pages/market/SortingBar'

// 商城主頁
import MarketMainPage from './pages/market/MarketMainPage'
import Paging from './component/Paging'

// 商品詳細頁面
import ProductDetails from './pages/market/ProductDetails'

// 購物車詳細頁面
import CartDetail from './pages/market/CartDetail'

// 結帳-基本資料頁面
import CheckoutPersonalData from './pages/market/CheckoutPersonalData'

// 結帳-資料確認頁面
import CheckoutConfirm from './pages/market/CheckoutConfirm'

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

const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header />

      {/* <MinorBar /> */}
      {/* <Home /> */}
      {/* <Box /> */}
      {/* <Tables /> */}
      {/* <SearchMarket /> */}
      {/* <SearchRecipe /> */}
      {/* <MemberBox /> */}
      {/* <DropDown />
      <CardRecipe />
      <CardShopping />
      <CardPrivateRecipe /> */}

      {/* <SortingBar /> */}
      {/* <div className="t60"></div> */}
      {/* <PrivateRecipeBanner /> */}
      <PrivateRecipePhotoIntro />
      <DropDown />
      <CardPrivateRecipe />
      <CardRecipe />
      <CardShopping />
      <CardShopping />

      <CardShopping />

      <RecipeStep />
      {/* <ProductDetails /> */}
      {/* <CartDetail /> */}
      {/* <CheckoutPersonalData /> */}
      {/* <CheckoutConfirm /> */}
      {/* <MinorBar /> */}
      {/* <FeatureIndex /> */}
      {/* <FeatureContentImg /> */}
      {/* <FeatureContentIntro /> */}
      {/* <FeatureWeek /> */}
      {/* <Footer /> */}
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderList /> */}
      {/* 未完成分頁 */}
      {/* <OrderDetails /> */}
    </div>
  )
}

export default App
