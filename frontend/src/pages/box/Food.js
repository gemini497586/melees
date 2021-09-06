import React from 'react'
import '../../style/box.css'
import salmon from '../../images/box_salmon.png'

function Food(props) {
  const { BoxData } = props

  return (
    <>
      {BoxData.map((v, i) => {
        return (
          <div className="b-page2-card" key={i}>
            <p className="font-400M b-page2-foodtext">{v.name}</p>
            <div className="b-page2-food">
              <img src={salmon} alt="Egg" className="b-cover-fit" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Food
