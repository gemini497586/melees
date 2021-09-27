import { useState } from 'react'
import '../../../style/global.css'
import '../../../style/member.css'
import '../../../style/memberRecipeComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

function MemberRecipeCommentRow(props) {
  const { recipeData } = props
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const openEditModal = () => {
    setShowEditModal((prev) => !prev)
  }
  const openDeleteModal = () => {
    setShowDeleteModal((prev) => !prev)
  }
  // console.log('recipeData', recipeData)

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
  // })
  
  return (
    <>
      <EditModal
        showEditModal={showEditModal}
        setShowModal={setShowEditModal}
        openEditModal={openEditModal}
        recipeData={recipeData}
        starScore={starScore}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setDeleteModal={setShowDeleteModal}
        openDeleteModal={openDeleteModal}
        id={recipeData.id}
      />
      <div className="row align-items-center">
        <figure className="col-6 col-md-2 memberRecipeComment-figure">
          <img src={recipeData.recipe_img} alt={recipeData.recipe_name} />
          <figcaption className="font-400SL">
            {recipeData.recipe_name}
          </figcaption>
        </figure>
        <div className="col-6 col-md-2 memberRecipeComment-score">
          {starScore(recipeData.recipe_star_rate)}
          <span className="font-400S">{recipeData.recipe_star_rate}</span>
          <p className="font-400S">{recipeData.comment_time}</p>
        </div>
        <p className="col-8 col-md-6 font-400L memberRecipeComment-text">
          {recipeData.comment}
        </p>
        <div className="col-4 col-md-2 memberRecipeComment-iconGroup">
          <button onClick={openEditModal}>
            <FontAwesomeIcon icon="pen" size="1x" className="icon-item" />
          </button>
          <button onClick={openDeleteModal}>
            <FontAwesomeIcon icon="trash-alt" size="1x" className="icon-item" />
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeCommentRow
