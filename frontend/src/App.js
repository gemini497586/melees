import './style/global.css'

import Header from './component/Header.js'

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

// 商城主頁
import MarketMainPage from './pages/market/MarketMainPage'

// 商品詳細頁面
import ProductDetails from './pages/market/ProductDetails'

// 購物車詳細頁面
import CartDetail from './pages/market/CartDetail'

// 結帳-基本資料頁面
import CheckoutPersonalData from './pages/market/CheckoutPersonalData'

// 結帳-資料確認頁面
import CheckoutConfirm from './pages/market/CheckoutConfirm'

// 結帳完成頁面
import OrdersComplete from './pages/market/OrdersComplete'

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

import MemberSaveProdcut from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Home /> */}

      {/* <Tables /> */}
      {/* <SearchMarket /> */}
      {/* <SearchRecipe /> */}
      {/* <MemberBox /> */}
      {/* <DropDown />
      <CardRecipe />
      <CardShopping />
      <CardPrivateRecipe /> */}
      {/* <MarketMainPage /> */}
      {/* <ProductDetails /> */}
      {/* <CartDetail /> */}
      {/* <CheckoutPersonalData /> */}
      {/* <CheckoutConfirm /> */}
      {/* <OrdersComplete /> */}
      <Footer />
    </div>
  )
}

export default App
