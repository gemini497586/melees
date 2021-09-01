import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureContentImg from './pages/feature/component/FeatureContentImg'
import FeatureContentIntro from './pages/feature/component/FeatureContentIntro'
import FeatureWeek from './pages/feature/component/FeatureWeek'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <MinorBar />
      <FeatureIndex />
      <FeatureContentImg />
      <FeatureContentIntro />
      <FeatureWeek />
      <Footer />
      {/* 完成分頁 */}
      <Login />
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* <OrderList /> */}
      {/* 未完成分頁 */}
      {/* <OrderDetails /> */}
    </div>
  )
}

export default App
