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
      {/* 未完成分頁 */}
      {/* <OrderDetails /> */}
    </div>
  )
}

export default App
