import { Link } from 'react-router-dom'
import React from 'react'
import '../../../style/privateRecipeUpload.css'

function PrivateRecipeTag(props) {
  const { tags } = props
  return (
    <div className="d-flex justify-content-start flex-wrap">
      {tags.map((value, index) => {
        return (
          <div className="tag-box mt-3 mx-2" key={index}>
            <Link to={'/search/recipe/' + value.tags}>
              <div className="font-400SS">{value.tags}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default PrivateRecipeTag
