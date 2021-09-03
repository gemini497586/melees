import React from 'react'
import '../style/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontawsomeIcons'

function Footer() {
  const content = ['關於我們', '加入MELEEs', '異業合作']
  console.log(content)
  const bottom = [
    '隱私權政策',
    '使用者條款',
    '服務契約',
    '法律聲明',
    '網站地圖',
  ]
  return (
    <>
      <footer className="footer">
        <div className="footer-mask">
          <div className="footer-top">
            {/* Column1 */}
            <div className="col-12 col-md-2">
              <dic className="footer-title">
                <div className="font-700M">關於MELLEs</div>
                <div className="">
                  <FontAwesomeIcon icon="plus" className="plus font-400SS" />
                </div>
              </dic>
              <ul className="list-unstyled">
                {content.map((v, i) => {
                  return (
                    <li>
                      <a href="#/">{v}</a>
                    </li>
                  )
                })}
                {/* <li>
                  <a href="#/">關於我們</a>
                </li>
                <li>
                  <a href="#/">加入MELEEs</a>
                </li>
                <li>
                  <a href="#/">異業合作</a>
                </li> */}
              </ul>
            </div>
            {/* Column2 */}
            <div className="col-12 col-md-2">
              <div className="font-700M footer-title">客製化便當</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#/">代謝率計算</a>
                </li>
                <li>
                  <a href="#/">熱量計算</a>
                </li>
              </ul>
            </div>
            {/* Column3 */}
            <div className="col-12 col-md-2">
              <div className="font-700M footer-title">客戶服務</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#/">進度查詢</a>
                </li>
                <li>
                  <a href="#/">取消訂單</a>
                </li>
                <li>
                  <a href="#/">追蹤清單</a>
                </li>
                <li>
                  <a href="#/">常見問答</a>
                </li>
                <li>
                  <a href="#/">聯絡我們</a>
                </li>
              </ul>
            </div>
            {/* Column4 */}
            <div className="col-12 col-md-2">
              <div className="font-700M footer-title">購物商城</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#/">生鮮食材</a>
                </li>
                <li>
                  <a href="#/">調味料</a>
                </li>
                <li>
                  <a href="#/">廚房器具</a>
                </li>
              </ul>
            </div>
            {/* Column5 */}
            <div className="col-12 col-md-2">
              <div className="font-700M footer-title">精選食譜</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#/">健康長肉肉</a>
                </li>
                <li>
                  <a href="#/">健康不吃肉</a>
                </li>
                <li>
                  <a href="#/">一周不煩惱</a>
                </li>
                <li>
                  <a href="#/">家常好手藝</a>
                </li>
              </ul>
            </div>
            {/* Column6 */}
            <div className="col-12 col-md-2">
              <div className="font-700M footer-title">私藏食譜</div>
              <ul className="list-unstyled">
                <li>
                  <a href="#/">熱門食譜</a>
                </li>
                <li>
                  <a href="#/">上傳食譜</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom row">
          <div className="font-400SS col-12 col-md-6 p-0">
            本網站所有內容及資料全部來自網路，僅供學術交流使用，若有侵權請告知
          </div>
          <ul className="font-400SS list-unstyled col-12 col-md-6">
            {bottom.map((v, i) => {
              return (
                <li key={i}>
                  <a href="#/">{v}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
