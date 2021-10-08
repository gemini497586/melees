import React, { useState } from 'react'
import Carousel from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'

function Page2(props) {
  const { data, subData, handleCheck, handleRemove, bento } = props
  const [show, setShow] = useState(true)

  const handleMain = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      <div className="container b-step position-relative">
        <h4 className="b-title" data-aos="fade-right">
          2. 客製屬於你的便當
        </h4>
        <div className="b-page2-dialog" data-aos="fade-left">
          <img
            className="b-contain-fit"
            src="http://localhost:3000/images/dialog.png"
            alt="dialog"
          />
        </div>
        <p className="font-700M b-page2-note" data-aos="fade-left">
          請點選以下主食一樣，配菜最多可挑選四樣。
        </p>
        <div className="b-page2-bento">
          <div className="d-block d-md-flex">
            <div className="col-md-3 b-page2-left">
              {bento.length > 0 ? (
                <div className="b-page2-select font-400L animation-bentotext">
                  已選擇食材
                  {bento.map((v, i) => {
                    return (
                      <div
                        className="d-flex align-items-center justify-content-between my-1"
                        key={i}
                      >
                        {v.name}
                        <FontAwesomeIcon
                          icon="times"
                          className="times"
                          onClick={() => {
                            handleRemove(v)
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="col-md-6 b-page2-image">
              <div className="b-page2-box">
                <img
                  src="http://localhost:3000/images/box_up.png"
                  alt="BoxUp"
                  className="b-contain-fit b-page2-up"
                />
                <div className="b-page2-indside">
                  {bento.map((v, i) => {
                    return (
                      <img
                        key={v.id}
                        src={`${API_URL}/box/${v.inside_image}`}
                        alt={v.name}
                        className="animation-bentoIn"
                        id={v.id}
                      />
                    )
                  })}
                </div>
                <img
                  src="http://localhost:3000/images/box_down.png"
                  alt="BoxDown"
                  className="b-contain-fit b-page2-down"
                />
              </div>
            </div>
            <div className="col-md-3 b-page2-right">
              <div className="b-page2-btn">
                <button
                  className={
                    'font-700M me-2 ' + (show ? 'b-btn-active' : 'b-btn')
                  }
                  onClick={() => {
                    handleMain()
                  }}
                >
                  主食
                </button>
                <button
                  className={'font-700M ' + (show ? 'b-btn' : 'b-btn-active')}
                  onClick={() => {
                    handleMain()
                  }}
                >
                  配菜
                </button>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          show={show}
          data={data}
          subData={subData}
          handleCheck={handleCheck}
        />
        <hr />
      </div>
    </>
  )
}

export default Page2
