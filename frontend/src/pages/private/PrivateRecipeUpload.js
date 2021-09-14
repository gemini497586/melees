import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../style/privateRecipeUpload.css'
import Axios from 'axios'

function PrivateRecipeUpload(props) {
  const [recipeName, setRecipeName] = useState('')
  const [recipeIntro, setRecipeIntro] = useState('')
  const [recipeQty, setRecipeQty] = useState('')
  const [ingredList, setIngredList] = useState([
    { ingred: '', ingred_unit: '' },
  ])
  const [recipeSteps, setRecipeSteps] = useState('')
  const [steps, setSteps] = useState([{ step: '' }])

  const title = ['新增']
  // 食材的部分
  const handleChange = (e, index) => {
    const { name, value } = e.target

    const list = [...ingredList]
    list[index][name] = value
    setIngredList(list)
  }

  const handleAddIngred = () => {
    setIngredList([...ingredList, { ingred: '', ingred_unit: '' }])
  }

  const handleDeleteIngred = (index) => {
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
  const upload = () => {
    Axios.post('http://localhost:3001/api/private/upload', {
      name: recipeName,
      intro: recipeIntro,
      qty: recipeQty,
      ingred: ingredList,
      steps: steps,
    }).then(() => {
      console.log('success')
    })
  }
  return (
    <>
      <div className="page-group">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6">
              <PrivateRecipeHeading title={title[0]} />
              <div className="privateRecipeUpload">
                <label htmlFor="name" className="privateRecipeUpload-label">
                  <h4>食譜名稱</h4>
                </label>
                <input
                  className="w-100"
                  type="text"
                  // id="name"
                  // name="name"
                  placeholder="請填入食譜名稱"
                  onChange={(e) => {
                    setRecipeName(e.target.value)
                  }}
                />

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
                        className=""
                        type="text"
                        id="ingred"
                        name="ingred"
                        placeholder="高麗菜"
                        onChange={(e) => handleChange(e, index)}
                      />
                      <input
                        className=""
                        type="text"
                        id="name"
                        name="name"
                        placeholder="1顆"
                        onChange={(e) => handleChange(e, index)}
                      />
                      <FontAwesomeIcon
                        className="d-flex privateRecipeUpload-ingred-delete"
                        icon="trash-alt"
                        size="lg"
                        onClick={(e) => handleDeleteIngred(index)}
                      />
                    </div>
                  )
                })}
                <div className="d-flex justify-content-center">
                  <button
                    className="privateRecipeUpload-add-ingred"
                    onClick={handleAddIngred}
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

              {/* <pre>{JSON.stringify(ingredList, null, 2)}</pre> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeUpload
