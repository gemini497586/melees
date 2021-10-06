// 必要的
import { HandleCart } from './utils/HandleCart'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import MemberSaveRecipe from './pages/member/MemberSaveRecipe'
import MemberSaveProduct from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'
import Coupon from './pages/member/Coupon'
import MyRecipe from './pages/member/MyRecipe'
import MemberView from './pages/member/MemberView'

import About from './pages/about/About'
import Privacy from './pages/about/Privacy'

// useContext。CartProvider 跟購物車商品有關; CheckoutInfoProvider 跟個人購買資料有關
import { CheckoutInfoProvider } from './utils/CheckoutInfoContext'
import { CartProvider } from './utils/CartContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './utils/config'

function App() {
  const [login, setLogin] = useState(false) //查看是否登入

  useEffect(() => {
    // 瀏覽器重新整理的時候查看有沒有登入過
    axios
      .post(`${API_URL}/auth/isLogin`, null, { withCredentials: true })
      .then((response) => {
        console.log('登入: ', response.data)
        if (response.data === '有登入') {
          setLogin(true)
        }
      })
  }, [])

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
                {/* footer */}
                <Route exact path="/privacy">
                  <Privacy />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                {/* 客製化 */}
                <Route exact path="/box">
                  <Box />
                </Route>
                {/* 私藏 */}
                <Route exact path="/private">
                  <PrivateRecipe />
                </Route>
                <ProtectedRoute exact path="/private/upload" isAuth={login}>
                  <PrivateRecipeUpload />
                </ProtectedRoute>
                <ProtectedRoute exact path="/private/edit/:id" isAuth={login}>
                  <PrivateRecipeEdit />
                </ProtectedRoute>
                <Route exact path="/private/detail/:id">
                  <PrivateRecipeIntro />
                </Route>

                {/* 精選 */}
                <Route path="/feature/index/4">
                  <FeatureIndexWeek />
                </Route>
                <Route path="/feature/stepweek/:weekId?/:listId?">
                  <FeatureStepWeek />
                </Route>
                <Route path="/feature/step/:listId?">
                  <FeatureStep />
                </Route>
                <Route path="/feature/index/:typeid?">
                  <FeatureIndex />
                </Route>

                {/* 搜尋 */}
                <Route path="/search/recipe/:word?">
                  <SearchRecipe />
                </Route>
                <Route path="/search/market/:word?">
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
                  <MemberSaveRecipe />
                </ProtectedRoute>
                <ProtectedRoute
                  path="/member/saveproduct/:currentPage?"
                  isAuth={login}
                >
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
                <ProtectedRoute exact path="/member/history" isAuth={login}>
                  <MemberView />
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
                  <ProtectedRoute
                    exact
                    path="/market/checkout-personalData"
                    isAuth={login}
                  >
                    <CheckoutPersonalData />
                  </ProtectedRoute>
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
