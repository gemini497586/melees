import './style/global.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderQuery from './pages/member/OrderQuery'
import OrderDetails from './pages/member/OrderDetails'
import MemberSaveProdcut from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'
import MemberBox from './pages/member/MemberBox'

// const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header />
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderQuery /> */}
      <OrderDetails />
      {/* 未完成分頁 */}
      {/* <MemberSaveProdcut /> */}
      {/* <MemberRecipeComment /> */}
      {/* <MemberBox /> */}
      <Footer />
    </div>
  )
}

export default App
