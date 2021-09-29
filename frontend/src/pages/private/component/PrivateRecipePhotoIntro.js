import React, { useEffect, useState } from 'react'
import '../../../style/privateRecipePhotoIntro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from '../../../images/default_avatar1.jpg'
import Axios from 'axios'
import { API_URL } from '../../../utils/config'

function PrivateRecipePhotoIntro(props) {
  const { id } = props
  const [recipe, setRecipe] = useState([])
  const [memberInfo, setMemberInfo] = useState([])
  const [totalRecipe, setTotalRecipe] = useState('')
  const [totalFollow, setTotalFollow] = useState('')

  // 按鈕的狀態
  const [followState, setFollowState] = useState()
  const [likeState, setLikeState] = useState()
  const [saveState, setSaveState] = useState()

  useEffect(() => {
    Axios.get(`${API_URL}/private/index/recipe/${id}`, {
      withCredentials: true,
    }).then((res) => {
      setRecipe(res.data.result)
      setFollowState(res.data.followed)
      setLikeState(res.data.liked)
      setSaveState(res.data.saved)
      setMemberInfo(res.data.memResult[0])
      setTotalRecipe(res.data.memberT)
      setTotalFollow(res.data.followT)
      console.log(res.data)
    })
  }, [])

  const followSwitch = () => {
    followState ? setFollowState(false) : setFollowState(true)
    followState ? deleteFollow() : addFollow()
  }
  const likeSwitch = () => {
    likeState ? setLikeState(false) : setLikeState(true)
    likeState ? console.log('未按讚') : console.log('已按讚')
    likeState ? deleteLike() : addLike()
  }
  const saveSwitch = () => {
    saveState ? setSaveState(false) : setSaveState(true)
    saveState ? deleteSave() : addSave()
  }
  // 新增追蹤
  const addFollow = async () => {
    let res = await Axios.get(`${API_URL}/private/add-follow/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }
  // 刪除追蹤
  const deleteFollow = async () => {
    let res = await Axios.get(`${API_URL}/private/remove-follow/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }

  // 新增按讚
  const addLike = async () => {
    let res = await Axios.get(`${API_URL}/private/add-like/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }
  //刪除按讚
  const deleteLike = async () => {
    let res = await Axios.get(`${API_URL}/private/remove-like/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }

  // 新增收藏
  const addSave = async () => {
    let res = await Axios.get(`${API_URL}/private/add-save/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }
  //刪除收藏
  const deleteSave = async () => {
    let res = await Axios.get(`${API_URL}/private/remove-save/${id}`, {
      withCredentials: true,
    })
    console.log(res)
  }
  const starNum = (index) => {
    const row = []
    let solid = Math.floor(recipe[index].star_rate)
    let empty = 5 - Math.ceil(recipe[index].star_rate)
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
  return (
    <>
      <div class="container">
        <div class="row">
          {recipe.map((value, index) => {
            return (
              <>
                <pre>{JSON.stringify(recipe, null, 2)}</pre>
                <pre>追蹤 {JSON.stringify(followState, null, 2)}</pre>
                <pre>按讚 {JSON.stringify(likeState, null, 2)}</pre>
                <pre>收藏 {JSON.stringify(saveState, null, 2)}</pre>
                <pre>收藏 {JSON.stringify(memberInfo, null, 2)}</pre>

                <div class="col-12 col-md-6">
                  <div class="PrivateRecipePhotoIntro-left">
                    <figure class="PrivateRecipePhotoIntro-photo">
                      <img
                        src={`${API_URL}/private/${value.picture}`}
                        class="PrivateRecipePhotoIntro-photo-img"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="PrivateRecipePhotoIntro-right">
                    <div class="d-flex justify-content-between">
                      <figure class="PrivateRecipePhotoIntro-avatar">
                        <img
                          src={`${API_URL}/member/${memberInfo.picture}`}
                          class="b-cover-fit"
                          alt=""
                        />
                      </figure>
                      <div
                        class="
                          flex-column
                          PrivateRecipePhotoIntro-user-info
                      "
                      >
                        <div class="font-700M">{memberInfo.nickname}</div>
                        <div class="font-400SS">
                          {totalRecipe} 篇食譜 {totalFollow} 粉絲
                        </div>
                      </div>
                      <button
                        onClick={followSwitch}
                        class={
                          followState
                            ? 'PrivateRecipePhotoIntro-follow-btn-active'
                            : 'PrivateRecipePhotoIntro-follow-btn'
                        }
                      >
                        <span class="font-700M">
                          {followState ? '已追蹤' : '追蹤'}
                        </span>
                      </button>
                    </div>

                    <div class="PrivateRecipePhotoIntro-star">
                      {starNum(index)}

                      <span
                        class="
                          font-700S
                          PrivateRecipePhotoIntro-star-num
                      "
                      >
                        ({value.star_rate})
                      </span>
                    </div>
                    <h2 class="PrivateRecipePhotoIntro-recipe-name">
                      {value.name}
                    </h2>
                    <span class="font-400L PrivateRecipePhotoIntro-intro">
                      {value.intro}
                    </span>
                    <h2 class="PrivateRecipePhotoIntro-qty">份量</h2>
                    <span class="font-400L PrivateRecipePhotoIntro-qty-num">
                      {value.qty} 份
                    </span>

                    <button
                      onClick={likeSwitch}
                      class={
                        likeState
                          ? 'PrivateRecipePhotoIntro-like-btn-active'
                          : 'PrivateRecipePhotoIntro-like-btn'
                      }
                    >
                      <FontAwesomeIcon icon={['far', 'heart']} size="lg" />
                      <span class="font-700M">
                        {likeState ? '已按讚' : '按讚'}
                      </span>
                    </button>
                    <button
                      onClick={saveSwitch}
                      class={
                        saveState
                          ? 'PrivateRecipePhotoIntro-bookmark-btn-active'
                          : 'PrivateRecipePhotoIntro-bookmark-btn'
                      }
                    >
                      <FontAwesomeIcon icon={['far', 'bookmark']} size="lg" />
                      <span class="font-700M">
                        {saveState ? '已收藏' : '加入收藏'}
                      </span>
                    </button>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default PrivateRecipePhotoIntro
