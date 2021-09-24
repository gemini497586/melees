import { useEffect, useState } from 'react'
import '../../../style/memberModal.css'
import CardPrivateRecipeforMember from './CardPrivateRecipeforMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import avatar from '../../../images/Avatar.png'
import Black from '../../box/Black'
import axios from 'axios'
// import food from '../../../images/default_food2.jpg'
import author_avatar from '../../../images/default_avatar1.jpg'

function EditModal(props) {
  const { showEditModal, openEditModal, recipeData } = props
  const [recipeDataDetails, setRecipeDataDetails] = useState({})

  const starScore = (star_rate) => {
    const starRow = []
    let solidStar = Math.floor(star_rate)
    let emptyStar = 5 - Math.ceil(star_rate)
    let halfStar = 5 - solidStar - emptyStar
    for (let i = 0; i < solidStar; i++) {
      starRow.push(<FontAwesomeIcon icon="star" className="icon-star" />)
    }
    if (halfStar > 0) {
      starRow.push(
        <FontAwesomeIcon icon="star-half-alt" className="icon-star" />
      )
    }
    for (let j = 0; j < emptyStar; j++) {
      starRow.push(
        <FontAwesomeIcon icon={['far', 'star']} className="icon-star" />
      )
    }
    return starRow
  }

  useEffect(() => {
    // 正式從資料庫生成資料
    // const queryRecipeDetails = async () => {
    //   try {
    //     let response = await axios.post()
    //     setRecipeDataDetails({
    //       ...recipeData,
    //       member_avatar: avatar,
    //       member_name: 'volunteer',
    //       member_star_rate: 4,
    //       member_like: true,
    //       member_save: true,
    //       recipe_author_avatar: avatar,
    //       recipe_like: 523,
    //       recipe_view: 1648,
    //     })
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }
    // queryRecipeDetails()

    // 測試用死資料
    setRecipeDataDetails({
      ...recipeData,
      member_avatar: avatar,
      member_name: 'volunteer',
      member_star_rate: 4,
      member_like: true,
      member_save: true,
      recipe_author_avatar: author_avatar,
      recipe_like: 523,
      recipe_view: 1648,
    })
  }, [])

  // recipeData = {
  //   id: 54,
  //   member_id: 37,
  //   comment:
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  //   comment_time: '2021/09/18',

  //   recipe_id: 120,
  //   recipe_img: recipePic,
  //   recipe_name: '麻油蝦',
  //   recipe_star_rate: 3.4,
  // }

  // recipeDataDetails = {
  // id: 54,
  // member_id: 37,
  // member_avatar: avatar,
  // member_name: 'volunteer',
  // member_star_rate: 4,
  // member_like: true,
  // member_save: true,
  // comment:
  // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  // comment_time: '2021/09/18',

  // recipe_id: 120,
  // recipe_img: recipePic,
  // recipe_name: '麻油蝦',
  // recipe_star_rate: 3.4,
  // recipe_author_avatar: avatar,
  // recipe_like: 523,
  // recipe_view: 1648,
  // }
  return (
    <>
      <Black modal={showEditModal} closeModal={openEditModal} />
      {showEditModal ? (
        <div class="modal-edit-recipeComment-wrapper">
          <button className="b-modal-close " onClick={openEditModal}>
            <FontAwesomeIcon icon="times" className="" />
          </button>
          <CardPrivateRecipeforMember recipeDataDetails={recipeDataDetails} />
          <div className="modal-edit-recipeComment-comment">
            <div className="modal-edit-recipeComment-title">
              <div className="modal-edit-recipeComment-title-shadow"></div>
              <h3>評論</h3>
            </div>
            <figure>
              <img src={recipeDataDetails.member_avatar} alt="avatar" />
              <figcaption>{recipeDataDetails.member_name}</figcaption>
            </figure>
            <div className="modal-edit-recipeComment-starScore">
              {starScore(recipeDataDetails.member_star_rate)}
              <span className="font-400S">
                {recipeDataDetails.member_star_rate}
              </span>
            </div>
            <textarea
              className="modal-edit-recipeComment-text"
              value={recipeDataDetails.comment}
              // onChange={(e) => {
              //   return e.target.value
              // }}
            />
            <button className="modal-edit-recipeComment-editBtn">修改</button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EditModal
