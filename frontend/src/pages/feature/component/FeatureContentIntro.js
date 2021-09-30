import React, { useState, useEffect } from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import '../../../style/featureContentIntro.css'
import '../../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { useParams } from 'react-router'
import Axios from 'axios'
import { API_URL } from '../../../utils/config'

function FeatureContentIntro(props) {
  const { linkImg, listName, qty, linkName, likeqty, viewqty, listId } = props
  const [likeList, setLikeList] = useState([])
  const [viewList, setViewList] = useState([])
  const [saveState, setSaveState] = useState([])
  const [likeState, setLikeState] = useState([])

  const likeSwitch = () => {
    likeState ? setLikeState(false) : setLikeState(true)
    likeState ? console.log('未按讚') : console.log('已按讚')
    likeState ? deleteLike() : addLike()
  }
  const saveSwitch = () => {
    saveState ? setSaveState(false) : setSaveState(true)
    saveState ? deleteSave() : addSave()
  }

  // 新增按讚
  const addLike = async () => {
    let res = await Axios.get(`${API_URL}/feature/add-like/${listId}`)
    console.log(res)
  }
  //刪除按讚
  const deleteLike = async () => {
    let res = await Axios.get(`${API_URL}/feature/remove-like/${listId}`)
    console.log(res)
  }

  // 新增收藏
  const addSave = async () => {
    let res = await Axios.get(`${API_URL}/feature/add-save/${listId}`)
    console.log(res)
  }
  //刪除收藏
  const deleteSave = async () => {
    let res = await Axios.get(`${API_URL}/feature/remove-save/${listId}`)
    console.log(res)
  }

  return (
    <>
      <div className="fintro-boxsize">
        <div>
          {/* IG連結 */}
          <a href="#/" className="text-decoration-none">
            <div className="fintro-ig">
              <figure className="fintro-avatar-bg">
                <img
                  className="fintro-avatar"
                  src={`http://localhost:3001/feature/igavatar/${linkImg}`}
                  alt=""
                />
              </figure>
              <Ig linkName={linkName} />
            </div>
          </a>
          {/* 中間標題 */}
          <div className="d-flex flex-column">
            <h2 className="fs-color900 mb-3 mt-4">{listName}</h2>
            {/* 份數 */}
            <div className="d-flex">
              <p className="fcolor-900 font-400SL me-3">份量</p>
              <p className="fcolor-900 font-400SL">{qty}人份</p>
            </div>
          </div>
        </div>
        {/* 下面按鈕 */}
        <div className="fintro-btngroup">
          {/* 愛心瀏覽數 */}
          <HeartViewNum likeqty={likeqty} viewqty={viewqty} />
          {/* 收藏btn */}
          <button
            onClick={likeSwitch}
            className={
              likeState
                ? 'fintro-btnlike font-700M'
                : 'fintro-btnlike-active font-700M'
            }
          >
            <FontAwesomeIcon
              className="me-2"
              icon={['far', 'heart']}
              fixedWidth
            />
            <span class="font-700M">{likeState ? '已按讚' : '按讚'}</span>
          </button>
          <button
            onClick={saveSwitch}
            className={
              saveState
                ? 'fintro-btnsave font-700M'
                : 'fintro-btnsave-active font-700M'
            }
          >
            <FontAwesomeIcon
              className="me-2"
              icon={['far', 'bookmark']}
              fixedWidth
            />
            <span class="font-700M">{likeState ? '已按讚' : '按讚'}</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
