import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../../../style/minorBar.css'
import MarketMainPage from '../MarketMainPage'

function MinorBar(props) {
  // const minorBarArray = ['全部', '食材', '鍋具', '調味料']
  return (
    <Router>
      <ul className="minor-bar">
        {/* 原本的寫法 */}
        <li>
          <a href="/">全部</a>
        </li>
        <li>
          <a href="/">食材</a>
        </li>
        <li>
          <a href="/">鍋具</a>
        </li>
        <li>
          <a href="/">調味料</a>
        </li>

        {/* map寫法 */}
        {/* {minorBarArray.map((v) => {
          return (
            <li>
              <a href="/">{v}</a>
            </li>
          )
        })} */}
      </ul>
      <div className="sub-line"></div>
      <Switch>
        <Route path="/market/all"></Route>
      </Switch>
    </Router>
  )
}

export default MinorBar
