import './style/global.css'
import './style/header.css'
import OrderDetails from './pages/member/OrderDetails'
import Register from './pages/member/Register'
import EditPassword from './pages/member/EditPassword'
import EditMemberInfo from './pages/member/EditMemberInfo'
import Login from './pages/member/Login'

function App() {
  return (
    <div className="App">
      {/* 完成分頁 */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <EditMemberInfo /> */}
      <EditPassword />
      {/* 未完成分頁 */}
      {/* <OrderDetails /> */}
    </div>
  )
}

export default App
