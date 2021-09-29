import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import React, { useState, useEffect } from 'react'
import '../../style/privateRecipeUpload.css'
import Axios from 'axios'
import { API_URL } from '../../utils/config'
import { useParams } from 'react-router'
import PrivateReicpeAnimate from './component/PrivateRecipeAnimate'

function PrivateRecipeEdit() {
  const { id } = useParams()
  const title = ['編輯']

  // 要送出的資料初始狀態
  const [recipePhoto, setRecipePhoto] = useState()
  const [recipeName, setRecipeName] = useState('')
  const [recipeIntro, setRecipeIntro] = useState('')
  const [recipeQty, setRecipeQty] = useState('')
  const [ingredList, setIngredList] = useState([
    { ingred: '', ingred_unit: '' },
  ])
  const [steps, setSteps] = useState([{ steps: '' }])
  const [tag, setTag] = useState('')
  const [displayTag, setDisplayTag] = useState([])

  const [imgPreview, setImgPreview] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      let res = await Axios.get(`${API_URL}/private/edit/get-data/${id}`, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      let recipe = res.data.recipe[0]
      let ingred = res.data.ingred
      let steps = res.data.steps
      let tags = res.data.tags

      console.log(res.data)
      setRecipeName(recipe.name)
      setRecipeIntro(recipe.intro)
      setRecipeQty(recipe.qty)
      setIngredList(ingred)
      setSteps(steps)
      setImgPreview(recipe.picture)
      setDisplayTag(tags)
    }
    getData()
  }, [])

  const handleImageChange = (e) => {
    const seleted = e.target.files[0]
    const ALLOW_TYPES = ['image/png', 'image/jpg', 'image/jpeg']
    if (seleted && ALLOW_TYPES.includes(seleted.type)) {
      let reader = new FileReader()
      reader.onloadend = () => {
        setImgPreview(reader.result)
        setRecipePhoto(seleted)
      }
      reader.readAsDataURL(seleted)
    } else {
      alert('not found')
    }
  }

  // 食材的部分
  const ChangeIngred = (e, index) => {
    const { name, value } = e.target

    const list = [...ingredList]
    list[index][name] = value
    setIngredList(list)
  }

  // 增加食材欄位
  const AddIngred = () => {
    setIngredList([...ingredList, { ingred: '', ingred_unit: '' }])
  }

  // 刪除食材欄位
  const DeleteIngred = (index) => {
    const list = [...ingredList]
    list.splice(index, 1)
    setIngredList(list)
  }

  // 步驟的部分
  const changeStep = (e, index) => {
    const { name, value } = e.target

    const list = [...steps]
    list[index][name] = value
    setSteps(list)
  }
  // 增加步驟欄位
  const AddStep = () => {
    setSteps([...steps, { steps: '' }])
  }
  // 刪除步驟欄位
  const DeleteStep = (index) => {
    const list = [...steps]
    list.splice(index, 1)
    setSteps(list)
  }
  const handleTag = async () => {
    let res = await setDisplayTag([
      ...displayTag,
      { private_id: '', tags: `${tag}` },
    ])
    let res1 = await setTag('')
  }
  const deleteTag = (index) => {
    const list = [...displayTag]
    list.splice(index, 1)
    setDisplayTag(list)
    console.log(displayTag)
  }

  // 上傳食譜 function
  const handleSubmit = async (e) => {
    e.preventDefault()

    // 要上傳檔案/圖片的版本，需要透過 FormData
    // Content-Type: multipart/form-data
    // Express 需要用到另外的 middleware 來處理
    try {
      let formData = new FormData()
      formData.append('photo', recipePhoto)
      formData.append('name', recipeName)
      formData.append('intro', recipeIntro)
      formData.append('qty', recipeQty)
      formData.append('ingred', JSON.stringify(ingredList))
      formData.append('step', JSON.stringify(steps))
      formData.append('tags', JSON.stringify(displayTag))

      let res = await Axios.post(
        `${API_URL}/private/edit/post-data/${id}`,
        formData,
        {
          withCredentials: true,
        }
      )

      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <div className="page-group">
        <PrivateReicpeAnimate />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              {/* 食譜圖片 */}
              <PrivateRecipeHeading title={title[0]} />
              <div className="privateRecipeUpload">
                <form action="" onSubmit={handleSubmit}>
                  <div className="privateRecipeUpload-img">
                    {error && <p>file not supported</p>}
                    <div
                      className="privateRecipeUpload-img-preview"
                      style={{
                        background: imgPreview
                          ? `url("${imgPreview}") no-repeat center/cover`
                          : '',
                      }}
                    >
                      {!imgPreview && (
                        <>
                          <label htmlFor="photo">
                            <FontAwesomeIcon
                              className="previewIcon"
                              icon={['far', 'image']}
                              size="10x"
                            />
                            <p>add an image</p>
                            <span>(jpg, jpeg, png)</span>
                          </label>
                          <input
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handleImageChange}
                          />
                        </>
                      )}
                    </div>
                    {imgPreview && (
                      <button
                        className="font-700M"
                        onClick={(e) => {
                          setImgPreview(null)
                        }}
                      >
                        移除圖片
                      </button>
                    )}
                  </div>

                  <br />
                  {/* 食譜名稱 */}
                  <label htmlFor="name" className="privateRecipeUpload-label">
                    <h4>食譜名稱</h4>
                  </label>

                  <input
                    className="w-100"
                    type="text"
                    id="name"
                    name="name"
                    value={recipeName}
                    onChange={(e) => {
                      setRecipeName(e.target.value)
                    }}
                  />
                  {/* 食譜介紹 */}
                  <label htmlFor="intro" className="privateRecipeUpload-label">
                    <h4>食譜介紹</h4>
                  </label>
                  <textarea
                    className="w-100"
                    name="intro"
                    id="intro"
                    cols="30"
                    rows="10"
                    value={recipeIntro}
                    onChange={(e) => {
                      setRecipeIntro(e.target.value)
                    }}
                  ></textarea>

                  {/* 份量 */}
                  <label htmlFor="qty" className="privateRecipeUpload-label">
                    <h4>份量</h4>
                  </label>
                  <input
                    className="w-100"
                    type="text"
                    id="qty"
                    name="qty"
                    value={recipeQty}
                    onChange={(e) => {
                      setRecipeQty(e.target.value)
                    }}
                  />

                  {/* 食材 */}
                  <label htmlFor="ingred" className="privateRecipeUpload-label">
                    <h4>食材</h4>
                  </label>
                  {ingredList.map((value, index) => {
                    return (
                      <div className="d-flex privateRecipeUpload-ingred justify-content-between">
                        <input
                          type="text"
                          id="ingred"
                          name="ingred"
                          value={value.ingred}
                          onChange={(e) => ChangeIngred(e, index)}
                        />
                        <input
                          type="text"
                          id="ingred_unit"
                          name="ingred_unit"
                          value={value.ingred_unit}
                          onChange={(e) => ChangeIngred(e, index)}
                        />
                        <FontAwesomeIcon
                          className="d-flex privateRecipeUpload-ingred-delete"
                          icon="trash-alt"
                          size="lg"
                          onClick={(e) => DeleteIngred(index)}
                        />
                      </div>
                    )
                  })}
                  <div className="d-flex justify-content-center">
                    <div
                      className="privateRecipeUpload-add-ingred"
                      onClick={AddIngred}
                    >
                      <FontAwesomeIcon icon="plus" size="lg" />
                      <span className="font-700M"> 添加</span>
                    </div>
                  </div>

                  {/* 步驟 */}
                  <label htmlFor="step" className="privateRecipeUpload-label">
                    <h4>步驟</h4>
                  </label>
                  {steps.map((value, index) => {
                    return (
                      <>
                        <div className="font-700SL">{index + 1}.</div>
                        <div className="d-flex privateRecipeUpload-step">
                          <input
                            className="w-100"
                            type="text"
                            id="steps"
                            name="steps"
                            value={value.steps}
                            onChange={(e) => changeStep(e, index)}
                          />
                          <FontAwesomeIcon
                            className="privateRecipeUpload-step-delete"
                            icon="trash-alt"
                            size="lg"
                            onClick={(e) => DeleteStep(index)}
                          />
                        </div>
                      </>
                    )
                  })}
                  <div className="d-flex justify-content-center">
                    <div
                      className="privateRecipeUpload-add-steps"
                      onClick={AddStep}
                    >
                      <FontAwesomeIcon icon="plus" size="lg" />
                      <span className="font-700M">添加</span>
                    </div>
                  </div>
                  {/* 標籤 */}
                  <label htmlFor="tag" className="privateRecipeUpload-label">
                    <h4>標籤</h4>
                  </label>
                  <div className="d-flex">
                    <input
                      className="w-100"
                      type="text"
                      id="tag"
                      name="tag"
                      placeholder="輸入食材名稱, ex:豬肉"
                      value={tag}
                      onChange={(e) => {
                        setTag(e.target.value)
                      }}
                    />
                    <div
                      className="privateRecipeUpload-add-tags"
                      onClick={(e) => {
                        handleTag()
                      }}
                    >
                      <FontAwesomeIcon
                        className="privateRecipeUpload-tag-add"
                        icon="plus"
                        size="lg"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start flex-wrap">
                    {displayTag.map((value, index) => {
                      return (
                        <div
                          className="tag-box mt-3 mx-2"
                          key={index}
                          onClick={(e) => {
                            deleteTag(index)
                          }}
                        >
                          <div className="font-400SS">
                            {value.tags + ' '}
                            <FontAwesomeIcon icon="times" size="1x" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {/* 送出跟取消 */}
                  <div className="d-flex justify-content-around privateRecipeUpload-btn ">
                    <button className="privateRecipeUpload-btn-upload font-700M">
                      送出
                    </button>
                    <Link to={'/private'}>
                      <button className="privateRecipeUpload-btn-cancel font-700M">
                        取消
                      </button>
                    </Link>
                  </div>
                </form>
              </div>

              <pre>{JSON.stringify(ingredList, null, 2)}</pre>
              <pre>{JSON.stringify(steps, null, 2)}</pre>
              <pre>{JSON.stringify(recipeName, null, 2)}</pre>
              <pre>{JSON.stringify(recipeIntro, null, 2)}</pre>
              <pre>{JSON.stringify(recipePhoto, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeEdit
