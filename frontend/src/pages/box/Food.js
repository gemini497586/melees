import React from 'react'
import '../../style/box.css'

function Food(props) {
  const { foodList } = props
  return (
    <>
      {foodList.map((v, i) => {
        return (
          <div className="b-page2-card">
            <p className="font-400M b-page2-foodtext">{v.name}</p>
            <div className="b-page2-food">
              <img src={v.image} alt="Egg" className="b-contain-fit" />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Food
