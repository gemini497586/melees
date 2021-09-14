// 必要的
import { HandleCart } from './utils/HandleCart'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/global.css'
import Header from './component/Header'
import Home from './pages/home/Home'
import Footer from './component/Footer'
import ScrollToTop from './component/ScrollToTop'

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
import { useState } from 'react'

function App() {
  const [carts, setCarts] = useState([]) //放入購物車的商品
  const addCart = (e) => {
    if (carts.includes(e)) {
      console.log(`已經有${e}了`)
      alert('該商品已經加入購物車')
      setCarts([...carts])
    } else {
      setCarts([...carts, e])
    }
  }
  const removeCart = (e, id) => {
    id = id + 1
    const newList = carts.filter((item) => item !== id)
    setCarts(newList)
  }
  const [productsAll, setProductsAll] = useState([]) //所有的商品

  const [amount, setAmount] = useState(1) // 計算商品數量用

  const [login, setLogin] = useState(false) //查看是否登入
  return (
    <HandleCart.Provider
      value={{
        carts,
        addCart,
        removeCart,
        productsAll,
        setProductsAll,
        amount,
        setAmount,
        login,
        setLogin,
      }}
    >
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
              <Route exact path="/feature/:id?">
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
              </Route>
              <Route exact path="/member">
                <MyRecipe />
              </Route>

              {/* 購物車 */}
              <Route exact path="/market/orders-complete">
                <OrdersComplete />
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
              <Route exact path="/market/:category?">
                <MarketMainPage />
              </Route>
              <Route exact path="/market/check-order">
                <CheckOrder />
              </Route>

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
  )
}

export default App
