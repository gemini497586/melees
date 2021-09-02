import './style/global.css'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'
import Header from './component/Header'
import MinorBar from './pages/member/component/MinorBar'
import Footer from './component/Footer'
import MemberSaveProdcut from './pages/member/MemberSaveProduct'

function App() {
  return (
    <div className="App">
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderList /> */}
      {/* 其餘分頁-組合式 */}
      <Header />
      <MinorBar />
      {/* <MemberSaveProdcut /> */}
      {/* 未完成分頁 */}
      <OrderDetails />
      <Footer />
    </div>
  )
}

export default App
