// 必要的
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style/global.css'
import Header from './component/Header'
import Home from './pages/home/Home'
import Footer from './component/Footer'

// 購物商城
import MarketMainPage from './pages/market/MarketMainPage'
import CartDetail from './pages/market/CartDetail'
import CheckOrder from './pages/market/CheckOrder'
import CheckoutConfirm from './pages/market/CheckoutConfirm'
import CheckoutPersonalData from './pages/market/CheckoutPersonalData'
import OrdersComplete from './pages/market/OrdersComplete'
import ProductDetails from './pages/market/ProductDetails'
import Shoppingcart from './pages/market/CartDetail'

// 精選食譜
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureStepWeek from './pages/feature/FeatureStepWeek'
import FeatureIndexWeek from './pages/feature/FeatureIndexWeek'

// 客製化便當
import Box from './pages/box/Box'

// 私藏食譜
import PrivateRecipe from './pages/private/PrivateRecipe'
import PrivateRecipeIntro from './pages/private/PrivateRecipeIntro'
import PrivateRecipeUpload from './pages/private/PrivateRecipeUpload'

// 搜尋
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'

// 會員相關
// import Login from './pages/member/Login'
// import Register from './pages/member/Register'
// import EditMemberInfo from './pages/member/EditMemberInfo'
// import EditPassword from './pages/member/EditPassword'
// import OrderDetails from './pages/member/OrderDetails'
// import OrderList from './pages/member/OrderList'
// import MemberBox from './pages/member/MemberBox'
// import MemberFeature from './pages/member/MemberFeature'
// import MemberSaveProduct from './pages/member/MemberSaveProduct'
// import MemberRecipeComment from './pages/member/MemberRecipeComment'
// import Coupon from './pages/member/Coupon'
// import MyRecipe from './pages/member/MyRecipe'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          {/* 首頁 */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* 客製化 */}
          <Route exact path="/box">
            <Box />
          </Route>

          {/* 私藏 */}
          <Route exact path="/private">
            <PrivateRecipe />
          </Route>
          <Route exact path="/private/upload">
            <PrivateRecipeUpload />
          </Route>
          <Route exact path="/private/detail/:id">
            <PrivateRecipeIntro />
          </Route>

          {/* 精選 */}
          <Route exact path="/feature">
            <FeatureIndex />
          </Route>
          <Route path="/feature/week">
            <FeatureIndexWeek />
          </Route>
          <Route path="/feature/stepweek">
            <FeatureStepWeek />
          </Route>

          {/* 購物車 */}
          <Route path="/market/orderscomplete">
            <OrdersComplete />
          </Route>
          <Route path="/market/checkoutconfirm">
            <CheckoutConfirm />
          </Route>
          <Route path="/market/shoppingcart">
            <Shoppingcart />
          </Route>
          <Route path="/market/checkoutpersonaldata">
            <CheckoutPersonalData />
          </Route>
          <Route path="/market/cartdetail">
            <CartDetail />
          </Route>
          <Route path="/market/product/:id?">
            <ProductDetails />
          </Route>
          <Route path="/market">
            <MarketMainPage />
          </Route>
          <Route path="/market/check-order">
            <CheckOrder />
          </Route>

          {/* 搜尋 */}
          <Route path="/search/recipe">
            <SearchRecipe />
          </Route>
          <Route path="/search/market">
            <SearchMarket />
          </Route>

          {/* 會員相關 */}
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/member">
            <MyRecipe />
          </Route>
          <Route path="/member/editinfo">
            <EditMemberInfo />
          </Route>
          <Route path="/member/editpwd">
            <EditPassword />
          </Route>
          <Route path="/member/orderdetail">
            <OrderDetails />
          </Route>
          <Route path="/member/orderlist">
            <OrderList />
          </Route>
          <Route path="/member/savebox">
            <MemberBox />
          </Route>
          <Route path="/member/saverecipe">
            <MemberFeature />
          </Route>
          <Route path="/member/saveproduct">
            <MemberSaveProduct />
          </Route>
          <Route exact path="/member/recipecomment">
            <MemberRecipeComment />
          </Route>
          <Route path="/member/coupon">
            <Coupon />
          </Route> */}
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
