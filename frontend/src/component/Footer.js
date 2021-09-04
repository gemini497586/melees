import React from 'react'
import '../style/footer.css'

function Footer() {
  const footerList = [
    {
      header: '關於MELLEs',
      content: [
        { link: '/a', title: '關於我們' },
        { link: '/b', title: '加入MELEEs' },
        { link: '/c', title: '異業合作' },
      ],
    },
    {
      header: '客製化便當',
      content: [
        { link: '/a', title: '代謝率計算' },
        { link: '/b', title: '熱量計算' },
      ],
    },
    {
      header: '客戶服務',
      content: [
        { link: '/a', title: '進度查詢' },
        { link: '/b', title: '取消訂單' },
        { link: '/c', title: '追蹤清單' },
        { link: '/d', title: '常見問答' },
        { link: '/e', title: '聯絡我們' },
      ],
    },
    {
      header: '購物商城',
      content: [
        { link: '/a', title: '生鮮食材' },
        { link: '/a', title: '調味料' },
        { link: '/b', title: '廚房器具' },
      ],
    },
    {
      header: '精選食譜',
      content: [
        { link: '/a', title: '健康長肉肉' },
        { link: '/b', title: '健康不吃肉' },
        { link: '/c', title: '一周不煩惱' },
        { link: '/d', title: '家常好手藝' },
      ],
    },
    {
      header: '私藏食譜',
      content: [
        { link: '/a', title: '熱門食譜' },
        { link: '/b', title: '上傳食譜' },
      ],
    },
  ]
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
                          <a href={v.link}>{v.title}</a>
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
