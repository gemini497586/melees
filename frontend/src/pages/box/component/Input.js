import React from 'react'

function Input(props) {
  const { name, value, fields, fieldErrors, handleFieldChange } = props

  return (
    <>
      <div className="row align-items-center">
        <label htmlFor={value} className="col-4 font-700M">
          {name}
        </label>
        <div className="col-8">
          <input
            type="number"
            name={value}
            id={value}
            value={fields}
            placeholder={`請輸入${name}`}
            min="0"
            onChange={handleFieldChange}
            required
          />
        </div>
        <div className="col-4 b-page1-errorMsg"></div>
        {fieldErrors !== '' && (
          <div className="col-8 b-page1-errorMsg font-400S">{fieldErrors}</div>
        )}
      </div>
      
    </>
  )
}

export default Input
