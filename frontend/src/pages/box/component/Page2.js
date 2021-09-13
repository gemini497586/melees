import React, { useState } from 'react'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'

function Page2(props) {
  const { data, subData, handleCheck, handleRemove, bento } = props
  const [main, setMain] = useState(true)
  const [sub, setSub] = useState(false)
  const handleMain = () => {
    setMain((prev) => !prev)
  }
  // const handleSub = () => {
  //   setSub((prev) => !prev)
  // }
  return (
    <>
      <div className="container b-step position-relative">
        <h4 className="b-title">2. 客製屬於你的便當</h4>
        <p className="font-700L b-note">請點選客製化便當食材，最多五樣</p>
        <div className="b-page2-dialog">
          <p className="font-700L b-page2-note">
            請點選客製化便當食材
            <br />
            最多五樣
          </p>
          <img
            className="b-contain-fit"
            src="http://localhost:3000/images/dialog.png"
            alt="dialog"
          />
        </div>
        <div className="d-block d-md-flex">
          <div className="col-md-3 b-page2-left">
            {bento.length > 0 ? (
              <div className="b-page2-select">
                已選擇食材
                {bento.map((v, i) => {
                  return (
                    <>
                      <div key={i}>
                        {v.name}
                        <FontAwesomeIcon
                          icon="times"
                          className="times"
                          onClick={() => {
                            handleRemove(v)
                          }}
                        />
                      </div>
                    </>
                  )
                })}
              </div>
            ) : null}
          </div>
          <div className="col-md-6 b-page2-image">
            <div className="b-page2-box">
              <img
                src="http://localhost:3000/images/box_up.png"
                alt="BoxUp"
                class="b-contain-fit b-page2-up"
              />
              <div className="b-page2-indside">
                {bento.map((v, i) => {
                  return (
                    <>
                      <img
                        key={v.id}
                        className={`b-page2-box-${i}`}
                        src={`${API_URL}/box/${v.inside_image}`}
                        alt={v.name}
                      />
                    </>
                  )
                })}
              </div>
              <img
                src="http://localhost:3000/images/box_down.png"
                alt="BoxDown"
                class="b-contain-fit b-page2-down"
              />
            </div>
          </div>
          <div className="col-md-3 b-page2-right ">
            <div className="b-page2-btn mb-2">
              <button
                className="b-btn"
                onClick={() => {
                  handleMain()
                }}
              >
                主食
              </button>
            </div>
            <div>
              <button
                className="b-btn"
                onClick={() => {
                  handleMain()
                }}
              >
                配菜
              </button>
            </div>
          </div>
        </div>
        <Carousel
          main={main}
          data={data}
          subData={subData}
          handleCheck={handleCheck}
          bento={bento}
        />
        <hr />
      </div>
    </>
  )
}

export default Page2
