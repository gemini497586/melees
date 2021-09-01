import './style/global.css'
import './style/header.css'
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import EditMemberInfo from './pages/member/EditMemberInfo'
import EditPassword from './pages/member/EditPassword'
import OrderList from './pages/member/OrderList'
import OrderDetails from './pages/member/OrderDetails'

function App() {
  return (
    <div className="App">
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      {/* <EditPassword /> */}
      {/* 未完成分頁 */}
      <OrderList />
      {/* <OrderDetails /> */}
    </div>
  )
}

export default App
