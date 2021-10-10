import React from 'react'
import '../../style/privacy.css'

function About() {
  return (
    <>
      <section className="page-group">
        <div className="container">
          <h4 className="privacy">關於我們</h4>
          <div className="about-image">
            <img
              src="http://localhost:3000/images/logo.png"
              alt="MELEE"
              className="contain-fit"
            />
          </div>
          <div className="about-content">
            <ul className="list-unstyled">
              <li>
                在設計階段初期，團隊希望用簡潔、新穎的線條，以及橘黃綠三大主色來乘載與傳遞人與人之間的愛與暖意，特別用橘色來強調做料理是一件充滿著愛、溫暖、健康的一件事情。
              </li>
              <li>
                LOGO 中的文字
                MELEE，對很多人來說，使用廚房是一件混亂的事，做一頓飯下來，廚房裏早已混亂不已。這個網站能讓你告別廚房那段「混亂」時光，重新開啟整潔模式，好像自己的烹飪小助手一般，十分實用，也不用擔心東西扔得到處都是。
              </li>
              <li>
                LOGO
                中橘色部分是桃花心木的砧板，是生長在亞熱/熱帶的硬木喬木，堅固又漂亮的橘色澤適合製成傢俱使用，清理起來也方便許多。使用後清洗晾乾可放在水槽上方晾乾，也可當成擺盤直接端上桌子。
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
