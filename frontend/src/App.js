import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureStep from './pages/feature/FeatureStep'
import FeatureIndexWeek from './pages/feature/FeatureIndexWeek'
import FeatureStepWeek from './pages/feature/FeatureStepWeek'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'
import MemberSaveProdcut from './pages/member/MemberSaveProduct'
import MemberRecipeComment from './pages/member/MemberRecipeComment'
import HomeBento from './pages/home/component/HomeBento'
import Home from './pages/home/Home'

const array = [1, 2, 3]

function App() {
  return (
    <div className="App">
      <Header />
      <MinorBar />
      {/* <Home /> */}
      <FeatureIndex />
      {/* <FeatureStep /> */}
      {/* <FeatureIndexWeek /> */}
      {/* <FeatureStepWeek /> */}
      <Footer />
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderList /> */}
      {/* 其餘分頁-組合式 */}
      {/* <OrderDetails /> */}
      {/* 未完成分頁 */}
      {/* <MemberSaveProdcut /> */}
      {/* <MemberRecipeComment /> */}
    </div>
  )
}

export default App
