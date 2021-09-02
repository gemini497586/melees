import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureIndexWeek from './pages/feature/FeatureIndexWeek'
import FeatureStep from './pages/feature/FeatureStep'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'
import MemberSaveProdcut from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'

const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header />
      <MinorBar />
      {/* <FeatureIndex /> */}
      <FeatureIndexWeek />
      {/* <FeatureStep /> */}
      <Footer />
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderList /> */}
      {/* 其餘分頁-組合式 */}
      <Header />
      <MinorBar />
      {/* <OrderDetails /> */}
      {/* 未完成分頁 */}
      {/* <MemberSaveProdcut /> */}
      <MemberRecipeComment />
      <Footer />
    </div>
  )
}

export default App
