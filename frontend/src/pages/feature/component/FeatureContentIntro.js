import React, { useState, useEffect } from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import '../../../style/featureContentIntro.css'
import '../../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Axios from 'axios'
import { API_URL } from '../../../utils/config'
import { useParams } from 'react-router'

function FeatureContentIntro(props) {
  const { listId } = useParams()
  const {
    linkImg,
    listName,
    qty,
    linkName,
    likeqty,
    viewqty,
    like,
    setLike,
    save,
    setSave,
    setRerender,
  } = props

  // 收藏
  const SaveFeature = async () => {
    try {
      await Axios.post(`${API_URL}/feature/feature-save/${listId}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
  }

  const DeleteFeature = async () => {
    try {
      await Axios.post(`${API_URL}/feature/feature-delete/${listId}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
  }
  const handleSave = () => {
    return (
      <>
        {save ? (
          <button
            className="fintro-btnsave-active font-700M"
            onClick={() => {
              DeleteFeature()
            }}
          >
            取消收藏 <FontAwesomeIcon icon={['fas', 'bookmark']} />
          </button>
        ) : (
          <button
            className="fintro-btnsave font-700M"
            onClick={() => {
              SaveFeature()
            }}
          >
            加入收藏 <FontAwesomeIcon icon={['far', 'bookmark']} />
          </button>
        )}
      </>
    )
  }

  // 按讚
  const LikeFeature = async () => {
    try {
      await Axios.post(`${API_URL}/feature/feature-like/${listId}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
    setRerender(true)
  }

  const DeleteLikeFeature = async () => {
    try {
      await Axios.post(
        `${API_URL}/feature/feature-deletelike/${listId}`,
        null,
        {
          withCredentials: true,
        }
      )
    } catch (err) {
      console.error(err.message)
    }
    setRerender(true)
  }

  const handleLike = () => {
    return (
      <>
        {like ? (
          <button
            className="fintro-btnlike-active font-700M"
            onClick={() => {
              DeleteLikeFeature()
            }}
          >
            取消按讚 <FontAwesomeIcon icon={['fas', 'bookmark']} />
          </button>
        ) : (
          <button
            className="fintro-btnlike font-700M"
            onClick={() => {
              LikeFeature()
            }}
          >
            按讚 <FontAwesomeIcon icon={['far', 'bookmark']} />
          </button>
        )}
      </>
    )
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
          <div
            onClick={() => {
              setLike(!like)
            }}
          >
            {handleLike()}
          </div>
          <div
            onClick={() => {
              setSave(!save)
            }}
          >
            {handleSave()}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
