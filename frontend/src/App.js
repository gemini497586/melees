import './App.css'
import './style/global.css'
import Header from './component/Header'
// 次選單
import MinorBar from './component/MinorBar'
// 排序
import SortingBar from './pages/market/SortingBar'

// 商城主頁
import MarketMainPage from './pages/market/MarketMainPage'
import Paging from './pages/market/Paging'

// 商品詳細頁面
import ProductDetails from './pages/market/ProductDetails'

// 購物車詳細頁面
import CartDetail from './pages/market/CartDetail'

// 結帳-基本資料頁面
import CheckoutPersonalData from './pages/market/CheckoutPersonalData'

// 結帳-信用卡頁面
import CheckoutCreditCard from './pages/market/CheckoutCreditCard'

const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MinorBar /> */}
      {/* <SortingBar /> */}
      {/* <div className="t60"></div> */}
      {/* <div className="container">
        <MarketMainPage />
        <MarketMainPage />
        <MarketMainPage />
        {array.map((v, i) => {
          return <Paging value={v} />
        })}
      </div> */}
      {/* <ProductDetails /> */}
      {/* <CartDetail /> */}
      <CheckoutPersonalData />
    </div>
  )
}

export default App
