import './style/global.css'
import './style/member.css'
import './style/header.css'
import OrderDetails from './pages/member/OrderDetails'
import Register from './pages/member/Register'
import EditPassword from './pages/member/EditPassword'
import EditMemberInfo from './pages/member/EditMemberInfo'
import Login from './pages/member/Login'

function App() {
  return (
    <div className="App">
      {/* <OrderDetails /> */}
      {/* <Register /> */}
      {/* <EditPassword /> */}
      {/* <EditMemberInfo /> */}
      <Login />
    </div>
  )
}

export default App
