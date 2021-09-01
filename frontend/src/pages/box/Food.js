import React from 'react'
import '../../style/box.css'
import Chicken from '../../images/box_chicken.png'
import Egg from '../../images/box_egg.png'
import Salmon from '../../images/box_salmon.png'
import Shrimp from '../../images/box_shrimp.png'
import Steak from '../../images/box_steak.png'

function Food() {
  return (
    <>
      <figure className="b-food">
        <figcaption className="font-400M b-foodtext">雞蛋</figcaption>
        <img src={Egg} alt="Egg" className="contain-fit" />
      </figure>
      <figure className="b-food">
        <figcaption className="font-400M b-foodtext">雞胸肉</figcaption>
        <img src={Chicken} alt="Chicken" className="contain-fit" />
      </figure>
      <figure className="b-food">
        <figcaption className="font-400M b-foodtext">鮭魚</figcaption>
        <img src={Salmon} alt="Salmon" className="contain-fit" />
      </figure>
      <figure className="b-food">
        <figcaption className="font-400M b-foodtext">白蝦</figcaption>
        <img src={Shrimp} alt="Shrimp" className="contain-fit" />
      </figure>
      <figure className="b-food">
        <figcaption className="font-400M b-foodtext">牛小排</figcaption>
        <img src={Steak} alt="Steak" className="contain-fit" />
      </figure>
    </>
  )
}

export default Food
