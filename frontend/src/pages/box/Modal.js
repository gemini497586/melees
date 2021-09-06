import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BoxExample from '../../images/box_example.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import Black from './Black'

function Modal(props) {
  const [name, setName] = useState('Ruby')
  const { modal, closeModal } = props
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
            <h4 className="b-modal-name">{name}</h4>
            <img src={BoxExample} alt="BoxUp" class="b-contain-fit" />
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
