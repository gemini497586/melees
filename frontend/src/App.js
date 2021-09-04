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
import MemberSaveRecipe from './pages/member/MemberSaveRecipe'

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
      {/* <OrderDetails /> */}
      {/* <MemberSaveProdcut /> */}
      {/* <MemberRecipeComment /> */}
      {/* <MemberSaveRecipe /> */}
      {/* 未完成分頁 */}
      {/* <MemberBox /> */}
      <Footer />
    </div>
  )
}

export default App
