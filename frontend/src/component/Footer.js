import React from 'react'
import '../style/footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const footerList = [
    {
      header: '關於MELEEs',
      content: [
        { url: '/about', title: '關於我們' },
        { url: '/', title: '加入MELEEs' },
        { url: '/', title: '異業合作' },
      ],
    },
    {
      header: '客製化便當',
      content: [
        { url: '/box', title: '代謝率計算' },
        { url: '/box', title: '熱量計算' },
      ],
    },
    {
      header: '客戶服務',
      content: [
        { url: '/member/orderlist', title: '進度查詢' },
        { url: '/member/orderlist', title: '取消訂單' },
        { url: '/member/saveproduct', title: '追蹤清單' },
        { url: '/', title: '常見問答' },
        { url: '/', title: '聯絡我們' },
      ],
    },
    {
      header: '購物商城',
      content: [
        { url: '/market/home/1', title: '生鮮食材' },
        { url: '/market/home/2', title: '調味料' },
        { url: '/market/home/3', title: '廚房器具' },
      ],
    },
    {
      header: '精選食譜',
      content: [
        { url: '/feature/index/1', title: '健康長肉肉' },
        { url: '/feature/index/2', title: '健康不吃肉' },
        { url: '/feature/index/3', title: '家常好手藝' },
        { url: '/feature/index/4', title: '一周不煩惱' },
      ],
    },
    {
      header: '私藏食譜',
      content: [
        { url: '/private', title: '熱門食譜' },
        { url: '/private/upload', title: '上傳食譜' },
      ],
    },
  ]
  const bottom = [
    {
      url: '/privacy',
      title: '隱私權政策',
    },
    {
      url: '/privacy',
      title: '使用者條款',
    },
    {
      url: '/privacy',
      title: '服務契約',
    },
    {
      url: '/privacy',
      title: '法律聲明',
    },
    {
      url: '/privacy',
      title: '網站地圖',
    },
  ]
  return (
    <>
      <footer className="footer">
        <div className="footer-mask">
          <div className="footer-top">
            {/* 先跑大標題 */}
            {footerList.map((v, i) => {
              return (
                <div className="col-12 col-md-2" key={i}>
                  <label
                    htmlFor={'tab' + (i + 1)}
                    className="font-700M footer-title"
                  >
                    {v.header}
                  </label>
                  <input type="checkbox" name="tab" id={'tab' + (i + 1)} />
                  <ul className="list-unstyled footer-top-content">
                    {/* 再跑大標題裡面的小標題 */}
                    {v.content.map((v, i) => {
                      return (
                        <li className="font-400S" key={i}>
                          <Link to={v.url}>{v.title}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="font-400SS col-12 col-md-6 p-0 footer-bottom-text">
            本網站所有內容及資料全部來自網路，僅供學術交流使用，若有侵權請告知
          </div>
          <ul className="font-400SS list-unstyled col-12 col-md-6">
            {bottom.map((v, i) => {
              return (
                <li key={i}>
                  <Link to={v.url}>{v.title}</Link>
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
