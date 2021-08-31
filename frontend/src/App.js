import './style/global.css'
import './style/member.css'
import OrderDetails from './pages/member/OrderDetails'
import Register from './pages/member/Register'
import EditPassword from './pages/member/EditPassword'
import EditMemberInfo from './pages/member/EditMemberInfo'

function App() {
  return (
    <div className="App">
      <OrderDetails />
      <Register />
      <EditPassword />
      <EditMemberInfo />
    </div>
  )
}

export default App
