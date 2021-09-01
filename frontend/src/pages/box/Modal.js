import React from 'react'
import BoxExample from '../../images/box_example.png'
import '../../style/box.css'

function Modal() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div className="b-modal">
        <div className="row align-items-end">
          <div className="col-8 position-absoluted">
            <h4 className="b-savename">RUBYRUBY</h4>
            <img src={BoxExample} alt="BoxUp" class="cover-fit" />
          </div>
          <div className="col-4">
            <a href="/" className="b-btnclose" onClick={handleSubmit}>
              <i className="fas fa-times"></i>
            </a>
            <form className="col">
              <div className="mb-3">
                <label htmlFor="saveBox" className="form-label">
                  為你的便當命名
                </label>
                <input
                  type="text"
                  id="saveBox"
                  value=""
                  className="form-control"
                  placeholder="RUBYRUBY"
                />
              </div>
              <button className="b-btn font-700M" onClick={handleSubmit}>
                確認收藏
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
