import React, { useState } from 'react'
import BoxExample from '../../images/box_example.png'
import '../../style/box.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function Modal() {
  const [name, setName] = useState('Ruby')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="b-modal">
        <div className="d-flex align-items-end">
          <div className="col-md-8 b-modal-left">
            <h4 className="b-modal-name">{name}</h4>
            <img src={BoxExample} alt="BoxUp" class="b-contain-fit" />
          </div>

          <div className="col-md-4 b-modal-right">
            <div className="d-flex flex-column align-items-end">
              <a href="#/" className="b-modal-close" onClick={handleSubmit}>
                <FontAwesomeIcon icon="times" className="chevron" />
              </a>

              <form className="col">
                <div className="mb-3">
                  <label htmlFor="saveBox" className="form-label">
                    為你的便當命名
                  </label>
                  <input
                    type="text"
                    id="saveBox"
                    value={name}
                    className="form-control"
                    placeholder={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <button className="b-btn font-700M" onClick={handleSubmit}>
                  確認收藏
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
