import './style/global.css'
import Header from './component/Header.js'
import MinorBar from './component/MinorBar.js'
import Footer from './component/Footer.js'
import FeatureIndex from './pages/feature/FeatureIndex'
import FeatureContentImg from './pages/feature/component/FeatureContentImg'
import FeatureContentIntro from './pages/feature/component/FeatureContentIntro'
import FeatureWeek from './pages/feature/component/FeatureWeek'

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
    </div>
  )
}

export default App
