import './style/global.css'
import Header from './component/Header.js'

import Footer from './component/Footer.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// 各主要分頁
import Box from './pages/box/Box.js'
import Home from './pages/home/Home.js'
import PrivateRecipe from './pages/private/PrivateRecipeIntro'
import Feature from './pages/feature/FeatureIndex'
import MarketMainPage from './pages/market/MarketMainPage'

// member 的分頁
import MemberLogin from './pages/member/Login'
import MemberOrderList from './pages/member/OrderList'
import MemberSaveBox from './pages/member/MemberBox'
import MemberMyRecipe from './pages/member/OrderList'
import MemberSaveRecipe from './pages/member/OrderList'
import MemberSaveProduct from './pages/member/OrderList'
import MemberRecipeComment from './pages/member/OrderList'
import MemberCoupon from './pages/member/OrderList'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/box">
            <Box />
          </Route>
          <Route exact path="/member">
            <MemberOrderList />
          </Route>
          <Route path="/private">
            <PrivateRecipe />
          </Route>
          <Route path="/market">
            <MarketMainPage />
          </Route>
          <Route path="/feature">
            <Feature />
          </Route>
          {/* member path */}
          <Route path="/member/login">
            <MemberLogin />
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
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
