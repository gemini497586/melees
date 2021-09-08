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
import CardRecipe from './component/CardRecipe.js'
import DropDown from './component/DropDown.js'
import CardShopping from './component/CardShopping.js'
import CardPrivateRecipe from './pages/private/component/CardPrivateRecipe.js'

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

const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header /> {/* <MinorBar /> */} {/* <Home /> */} {/* <Box /> */}{' '}
      {/* <Tables /> */} {/* <SearchMarket /> */} {/* <SearchRecipe /> */}{' '}
      {/* <MemberBox /> */}{' '}
      {/* <DropDown />
                  <CardRecipe />
                  <CardShopping />
                  <CardPrivateRecipe /> */}
      {/* <SortingBar /> */} {/* <div className="t60"></div> */}{' '}
      {/* <div className="container">
                    <MarketMainPage />
                    <MarketMainPage />
                    <MarketMainPage />
                    {array.map((v, i) => {
                      return <Paging value={v} />
                    })}
                  </div> */}{' '}
      {/* <ProductDetails /> */} {/* <CartDetail /> */}{' '}
      {/* <CheckoutPersonalData /> */} <CheckoutConfirm />
      <Footer />
    </div>
  )
}

export default App
