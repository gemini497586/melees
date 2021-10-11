import React, { useState, useContext, useEffect } from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import '../../../style/featureContentIntro.css'
import '../../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Axios from 'axios'
import { API_URL } from '../../../utils/config'
import { useParams } from 'react-router'
import { HandleCart } from '../../../utils/HandleCart'
import { Redirect, useLocation } from 'react-router-dom'

function FeatureContentIntro(props) {
  const { listId } = useParams()
  const { login } = useContext(HandleCart)
  const [redirect, setRedirect] = useState(false)
  const location = useLocation()

  const {
    link,
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
    reRender,
    setRerender,
    updataLikeqty,
  } = props

  // 判斷是否有登入
  // 沒有 -> 跳去登入畫面
  // 有 -> 打開modal
  const handleLoginLike = () => {
    if (login) {
      setLike(!like)
    } else {
      setRedirect(true)
    }
  }
  const handleLoginSave = () => {
    if (login) {
      setSave(!save)
    } else {
      setRedirect(true)
    }
  }

  // 收藏
  const SaveFeature = async () => {
    try {
      await Axios.post(`${API_URL}/feature/feature-save/${listId}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
    setRerender(true)
  }

  const DeleteFeature = async () => {
    try {
      await Axios.post(`${API_URL}/feature/feature-delete/${listId}`, null, {
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }
    setRerender(true)
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
      setRerender((prev) => !prev)
    } catch (err) {
      console.error(err.message)
    }
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
      setRerender((prev) => !prev)
    } catch (err) {
      console.error(err.message)
    }
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
            取消按讚 <FontAwesomeIcon icon={['far', 'heart']} />
          </button>
        ) : (
          <button
            className="fintro-btnlike font-700M"
            onClick={() => {
              LikeFeature()
            }}
          >
            按讚 <FontAwesomeIcon icon={['far', 'heart']} />
          </button>
        )}
      </>
    )
  }

  useEffect(() => {
    // 為了刷新畫面，即時更新按讚數
  }, [reRender])

  return (
    <>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location.pathname },
          }}
        />
      ) : null}

      <div className="fintro-boxsize">
        <div>
          {/* IG連結 */}
          <a
            href={link}
            target="_blank"
            className="text-decoration-none"
            rel="noreferrer"
          >
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
          <div onClick={handleLoginLike}>{handleLike()}</div>
          <div onClick={handleLoginSave}>{handleSave()}</div>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
