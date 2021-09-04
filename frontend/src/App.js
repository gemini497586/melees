import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './style/global.css'

import Header from './component/Header'
import Home from './pages/home/Home'
import Footer from './component/Footer'
import CardRecipe from './component/CardRecipe'
import CardShopping from './component/CardShopping'
import MarketMainPage from './pages/market/MarketMainPage'
import CartDetail from './pages/market/CartDetail'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe'
import PrivateRecipePhotoIntro from './pages/private/component/PrivateRecipePhotoIntro'
import FeatureIndex from './pages/feature/FeatureIndex'
// 客製化便當
import Box from './pages/box/Box'
import Modal from './pages/box/Modal'
// 搜尋
import SearchRecipe from './pages/search/SearchRecipe'
import SearchMarket from './pages/search/SearchMarket'
// 會員相關
import MemberLogin from './pages/member/Login'
import EditMemberInfo from './pages/member/EditMemberInfo'
import MemberOrderList from './pages/member/OrderList'
import MemberSaveBox from './pages/member/MemberBox'
import MemberMyRecipe from './pages/member/MemberFeature'
import MemberSaveRecipe from './pages/member/MemberFeature'
import MemberRecipeComment from './pages/member/MemberFeature'
import MemberSaveProduct from './pages/member/MemberFeature'
import MemberCoupon from './pages/member/MemberFeature'

function App() {
  return (
    <div className="App">
      {/* <Header />

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
      {/* <Footer />  */}

      <Router>
        <Header />

        <Switch>
          <Route path="/member/edit">
            <EditMemberInfo />
          </Route>
          <Route path="/member/orderlist">
            <MemberOrderList />
          </Route>
          <Route path="/member/savebox">
            <MemberSaveBox />
          </Route>
          <Route path="/member/myrecipe">
            <MemberMyRecipe />
          </Route>
          <Route path="/member/saverecipe">
            <MemberSaveRecipe />
          </Route>
          <Route path="/member/saveproduct">
            <MemberSaveProduct />
          </Route>
          <Route exact path="/member/recipecomment">
            <MemberRecipeComment />
          </Route>
          <Route path="/member/coupon">
            <MemberCoupon />
          </Route>
          <Route exact path="/member">
            <MemberOrderList />
          </Route>

          <Route path="/marketMainPage">
            <MarketMainPage />
          </Route>
          <Route path="/feature/:id?">
            <CardRecipe />
          </Route>
          <Route path="/featureIndex">
            <FeatureIndex />
          </Route>
          <Route path="/box/modal">
            <Modal />
          </Route>
          <Route path="/box">
            <Box />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        {/* 頁尾 */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
