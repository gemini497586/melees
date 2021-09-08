import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BoxExample from '../../../images/box_example.png'
import BoxUp from '../../../images/box_up.png'
import BoxDown from '../../../images/box_down.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Black from '../Black'

function Modal(props) {
  const [name, setName] = useState('Ruby')
  const { modal, closeModal, bento } = props
  return (
    <>
      <Black modal={modal} closeModal={closeModal} />
      <div
        className="b-modal "
        style={{
          transform: modal
            ? 'translate(-50%,-50%)'
            : 'translate(-1000px,-1000px)',
          opacity: modal ? '1' : '0',
        }}
      >
        <button className="b-modal-close " onClick={closeModal}>
          <FontAwesomeIcon icon="times" className="" />
        </button>
        <div className="b-modal-box">
          <div className="col-md-8 b-modal-left">
            <div className="b-modal-name">
              <div className="font-700L text-center">{name}</div>
            </div>
            {/* <img src={BoxExample} alt="BoxUp" class="b-contain-fit" /> */}
            <div className="b-page2-box">
              <img src={BoxUp} alt="BoxUp" class="b-contain-fit b-page2-up" />
              <div className="b-page2-indside">
                {bento.map((v, i) => {
                  return (
                    <>
                      <img
                        key={v.id}
                        className={`b-page2-box-${i}`}
                        src={`http://localhost:3000/images/${v.inside_image}`}
                        alt={v.name}
                      />
                    </>
                  )
                })}
              </div>
              <img
                src={BoxDown}
                alt="BoxDown"
                class="b-contain-fit b-page2-down"
              />
            </div>
          </div>

          <div className="col-md-4 b-modal-right">
            <form>
              <label htmlFor="boxName" className="font-700M mb-3">
                為你的便當命名
              </label>
              <input
                type="text"
                name="boxName"
                id="boxName"
                value={name}
                className="col-8 mb-3"
                placeholder={name}
                maxlength="6"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <Link to="/box">
                <button className="b-btn font-700M">確認收藏</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
