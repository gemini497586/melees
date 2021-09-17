import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/privateRecipeUpload.css'
import React, { useState } from 'react'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function PrivateRecipeUpload() {
  const [recipeName, setRecipeName] = useState('')
  const [recipeIntro, setRecipeIntro] = useState('')
  const [recipeQty, setRecipeQty] = useState('')
  const [ingredList, setIngredList] = useState([
    { ingred: '', ingred_unit: '' },
  ])
  const [steps, setSteps] = useState([{ step: '' }])
  const title = ['新增']

  // 食材的部分
  const ChangeIngred = (e, index) => {
    const { name, value } = e.target

    const list = [...ingredList]
    list[index][name] = value
    setIngredList(list)
  }

  const AddIngred = () => {
    setIngredList([...ingredList, { ingred: '', ingred_unit: '' }])
  }

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

  const AddStep = () => {
    setSteps([...steps, { step: '' }])
  }

  const DeleteStep = (index) => {
    const list = [...steps]
    list.splice(index, 1)
    setSteps(list)
  }

  // 上傳
  const upload = async () => {
    try {
      let res = Axios.post(
        `${API_URL}/private/upload`,
        {
          name: recipeName,
          intro: recipeIntro,
          qty: recipeQty,
          ingred: ingredList,
          steps: steps,
        },
        { withCredentials: true }
      )
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="page-group">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              {/* 食譜圖片 */}
              <PrivateRecipeHeading title={title[0]} />
              <div className="privateRecipeUpload">
                <input type="file" />
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
                  placeholder="請填入食譜名稱"
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
                  placeholder="請填入食譜介紹"
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
                  placeholder="請輸入份量"
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
                        placeholder="高麗菜"
                        onChange={(e) => ChangeIngred(e, index)}
                      />
                      <input
                        type="text"
                        id="ingred_unit"
                        name="ingred_unit"
                        placeholder="1顆"
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
                  <button
                    className="privateRecipeUpload-add-ingred"
                    onClick={AddIngred}
                  >
                    <FontAwesomeIcon icon="plus" size="lg" />
                    <span className="font-700M"> 添加</span>
                  </button>
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
                          name="step"
                          placeholder="輸入步驟說明"
                          value={value.step}
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
                  <button
                    className="privateRecipeUpload-add-ingred"
                    onClick={AddStep}
                  >
                    <FontAwesomeIcon icon="plus" size="lg" />
                    <span className="font-700M">添加</span>
                  </button>
                </div>

                {/* 送出跟取消 */}
                <div className="d-flex justify-content-around privateRecipeUpload-btn ">
                  <button
                    className="privateRecipeUpload-btn-upload font-700M"
                    onClick={upload}
                  >
                    送出
                  </button>
                  <Link to={'/private'}>
                    <button className="privateRecipeUpload-btn-cancel font-700M">
                      取消
                    </button>
                  </Link>
                </div>
              </div>

              <pre>{JSON.stringify(ingredList, null, 2)}</pre>
              <pre>{JSON.stringify(steps, null, 2)}</pre>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeUpload
