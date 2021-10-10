import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { API_URL } from '../../../utils/config'
import '../../../style/memberMyRecipeTable.css'
import Swal from 'sweetalert2'

import Axios from 'axios'
function MyRecipeTable(props) {
  const { recipeList, setReRender } = props

  // 星星評分數
  const starNum = (index) => {
    const row = []
    let solid = Math.floor(recipeList[index].star_rate)
    let empty = 5 - Math.ceil(recipeList[index].star_rate)
    let half = 5 - solid - empty
    for (let i = 0; i < solid; i++) {
      row.push(<FontAwesomeIcon icon="star" />)
    }
    for (let j = 0; j < half; j++) {
      row.push(<FontAwesomeIcon icon="star-half-alt" />)
    }
    for (let k = 0; k < empty; k++) {
      row.push(<FontAwesomeIcon icon={['far', 'star']} />)
    }
    return row
  }
  const handleDelete = (id) => {
    Swal.fire({
      text: '確定要刪除這筆食譜嗎',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: '取消',
      confirmButtonText: '確定刪除',
      confirmButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: '刪除成功!',
          confirmButtonColor: '#fe9900',
        })
        Axios.get(`${API_URL}/private/delete-recipe/${id}`, {
          withCredentials: true,
        }).then((res) => {
          console.log(res)
          setReRender((prev) => !prev)
        })
      }
    })
  }
  return (
    <>
      <table className="MyPecipe-table">
        <thead className="MyPecipe-thead">
          <tr>
            <th className="font-700L">私藏食譜</th>
            <th className="font-700L">評分</th>
            <th className="font-700L">份量</th>
            <th className="font-700L">按讚數</th>
            <th className="font-700L">瀏覽數</th>
            <th></th>
          </tr>
        </thead>
        {recipeList.map((value, index) => {
          return (
            <tbody className="MyPecipe-tbody">
              <tr key={index}>
                <td>
                  <div className="d-flex MyPecipe-tbody-avatar">
                    <figure>
                      <img
                        src={`${API_URL}/private/${value.picture}`}
                        alt=""
                        className=""
                      />
                    </figure>
                    <div className="flex-column">
                      <div>{value.name}</div>
                      <div>{value.create_date}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex ">
                    <div className="flex-column MyPecipe-tbody-star">
                      <div>
                        {starNum(index)}

                        <span className="font-400S">{value.star_rate}</span>
                      </div>
                      <div>{value.commentCount} 人評分過</div>
                    </div>
                  </div>
                </td>
                <td className="font-400L">{value.qty} 份</td>
                <td className="font-400L">{value.likeCount}</td>

                <td className="font-400L">{value.viewCount}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div className="MyRecipe-edit">
                      <Link to={`/private/edit/${value.id}`}>
                        <div className="d-flex justify-content-center align-items-center MyRecipe-edit-icon">
                          <FontAwesomeIcon icon="pencil-alt" size="lg" />
                        </div>
                      </Link>
                    </div>
                    <div
                      className="MyRecipe-delete"
                      onClick={(e) => {
                        handleDelete(value.id)
                      }}
                    >
                      <div className="d-flex justify-content-center align-items-center MyRecipe-delete-icon">
                        <FontAwesomeIcon icon="trash-alt" size="lg" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </>
  )
}
export default MyRecipeTable
