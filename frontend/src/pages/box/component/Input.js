import React from 'react'

function Input(props) {
  const { name, value, fields, fieldErrors, handleFieldChange, max } = props

  return (
    <>
      <div className="row align-items-center">
        <label htmlFor={value} className="col-4 font-700M b-page1-label">
          {name}
        </label>
        <div className="col-8">
          <input
            className={
              fieldErrors &&
              'b-page1-error animate__animated animate__headShake'
            }
            type="number"
            name={value}
            id={value}
            value={fields}
            placeholder={`請輸入${name}`}
            min="0"
            max={max}
            onChange={handleFieldChange}
            required
          />
          <div className="col-8 b-page1-errorMsg font-400S">{fieldErrors}</div>
        </div>
      </div>
    </>
  )
}

export default Input
