// 必要的
import { HandleCart } from './utils/HandleCart'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/global.css'
import Header from './component/Header'
import Home from './pages/home/Home'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop'
import ProtectedRoute from './component/ProtectedRoute'

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
import FeatureStep from './pages/feature/FeatureStep'
import FeatureStepWeek from './pages/feature/FeatureStepWeek'
import FeatureIndexWeek from './pages/feature/FeatureIndexWeek'

// 客製化便當
import Box from './pages/box/Box'

// 私藏食譜
import PrivateRecipe from './pages/private/PrivateRecipe'
import PrivateRecipeIntro from './pages/private/PrivateRecipeIntro'
import PrivateRecipeUpload from './pages/private/PrivateRecipeUpload'
import PrivateRecipeEdit from './pages/private/PrivateRecipeEdit'

// 搜尋
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'

// 會員相關
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderDetails from './pages/member/OrderDetails'
import OrderList from './pages/member/OrderList'
import MemberBox from './pages/member/MemberBox'
import MemberFeature from './pages/member/MemberFeature'
import MemberSaveProduct from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'
import Coupon from './pages/member/Coupon'
import MyRecipe from './pages/member/MyRecipe'

// useContext。CartProvider 跟購物車商品有關; CheckoutInfoProvider 跟個人購買資料有關
import { CheckoutInfoProvider } from './utils/CheckoutInfoContext'
import { CartProvider } from './utils/CartContext'
import useCart from './utils/useCart'
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState(false) //查看是否登入
  return (
    <CartProvider>
      <HandleCart.Provider value={{ login, setLogin }}>
        <Router>
          <div className="App">
            <Header />
            <ScrollToTop>
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
                <Route exact path="/private/edit">
                  <PrivateRecipeEdit />
                </Route>
                <Route exact path="/private/detail/:id">
                  <PrivateRecipeIntro />
                </Route>
                {/* 精選 */}
                <Route path="/feature/step">
                  <FeatureStep />
                </Route>
                <Route path="/feature/week">
                  <FeatureIndexWeek />
                </Route>
                <Route path="/feature/stepweek">
                  <FeatureStepWeek />
                </Route>
                <Route path="/feature/step">
                  <FeatureStep />
                </Route>
                <Route path="/feature">
                  <FeatureIndex />
                </Route>

                {/* 搜尋 */}
                <Route path="/search/recipe">
                  <SearchRecipe />
                </Route>
                <Route path="/search/market">
                  <SearchMarket />
                </Route>

                {/* 會員相關 */}
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>

                <ProtectedRoute path="/member/editinfo" isAuth={login}>
                  <EditMemberInfo />
                </ProtectedRoute>
                <ProtectedRoute path="/member/editpwd" isAuth={login}>
                  <EditPassword />
                </ProtectedRoute>
                <ProtectedRoute path="/member/orderdetail/:id" isAuth={login}>
                  <OrderDetails />
                </ProtectedRoute>
                <ProtectedRoute path="/member/orderlist" isAuth={login}>
                  <OrderList />
                </ProtectedRoute>
                <ProtectedRoute path="/member/savebox" isAuth={login}>
                  <MemberBox />
                </ProtectedRoute>
                <ProtectedRoute path="/member/saverecipe" isAuth={login}>
                  <MemberFeature />
                </ProtectedRoute>
                <ProtectedRoute path="/member/saveproduct" isAuth={login}>
                  <MemberSaveProduct />
                </ProtectedRoute>
                <ProtectedRoute
                  exact
                  path="/member/recipecomment"
                  isAuth={login}
                >
                  <MemberRecipeComment />
                </ProtectedRoute>
                <ProtectedRoute path="/member/coupon" isAuth={login}>
                  <Coupon />
                </ProtectedRoute>
                <ProtectedRoute exact path="/member" isAuth={login}>
                  <MyRecipe />
                </ProtectedRoute>

                {/* 購物車 */}
                <CheckoutInfoProvider>
                  <Route exact path="/market/orders-complete">
                    <OrdersComplete />
                  </Route>
                  <Route exact path="/market/check-order">
                    <CheckOrder />
                  </Route>
                  <Route exact path="/market/checkout-confirm">
                    <CheckoutConfirm />
                  </Route>
                  <Route exact path="/market/shoppingcart">
                    <Shoppingcart />
                  </Route>
                  <Route exact path="/market/checkout-personalData">
                    <CheckoutPersonalData />
                  </Route>
                  <Route exact path="/market/cart-detail">
                    <CartDetail />
                  </Route>
                  <Route exact path="/market/product/:id?">
                    <ProductDetails />
                  </Route>
                  <Route exact path="/market/home/:category?">
                    <MarketMainPage />
                  </Route>
                </CheckoutInfoProvider>

                {/* 搜尋 */}
                <Route path="/search/recipe">
                  <SearchRecipe />
                </Route>
                <Route path="/search/market">
                  <SearchMarket />
                </Route>
              </Switch>
            </ScrollToTop>
            <Footer />
          </div>
        </Router>
      </HandleCart.Provider>
    </CartProvider>
  )
}

export default App
