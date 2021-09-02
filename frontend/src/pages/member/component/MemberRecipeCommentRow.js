import React from 'react'
import '../../../style/global.css'
import '../../../style/member.css'
import '../../../style/memberRecipeComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import recipePic from '../../../images/member-recipe-comment-ellipse-342.png'

function MemberRecipeCommentRow() {
  return (
    <>
      <div className="row align-items-center">
        <figure className="col-6 col-md-2 memberRecipeComment-figure">
          <img src={recipePic} alt="麻油蝦" />
          <figcaption className="font-400SL">麻油蝦</figcaption>
        </figure>
        <div className="col-6 col-md-2 memberRecipeComment-score">
          <i className="fas fa-star icon-star"></i>
          <i className="fas fa-star icon-star"></i>
          <i className="fas fa-star icon-star"></i>
          <i className="fas fa-star icon-star"></i>
          <i className="fas fa-star icon-star"></i>
          <span className="font-400S">4.5</span>
          <p className="font-400S"> 2021/08/02</p>
        </div>
        <p className="col-8 col-md-6 font-400L memberRecipeComment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestias temporibus obcaecati, delectus ducimus nesciunt maiores
          labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt
          asperiores id, est atque maiores officiis ratione ad tenetur
          perspiciatis aut, architecto possimus laboriosam magnam ullam fuga
        </p>
        <div className="col-4 col-md-2 memberRecipeComment-iconGroup">
          <FontAwesomeIcon icon="pen" size="1x" className="icon-item" />
          <FontAwesomeIcon icon="trash-alt" size="1x" className="icon-item" />
        </div>
      </div>
    </>
  )
}

export default MemberRecipeCommentRow
