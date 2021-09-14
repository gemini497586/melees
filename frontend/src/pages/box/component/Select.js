import React from 'react'

function Select(props) {
  const { name, value, fields, fieldErrors, handleFieldChange, options } = props

  return (
    <>
      <div className="row align-items-center">
        <label htmlFor={value} className="col-4 font-700M">
          {name}
        </label>
        <div className="col-8">
          <select
            name={value}
            id={value}
            value={fields}
            onChange={handleFieldChange}
            required
          >
            {fields === '' ? <option value="">請選擇</option> : ''}
            {options.map((v) => {
              return (
                <option value={v.value} key={v.value}>
                  {v.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="col-4 b-page1-errorMsg"></div>
        {fieldErrors !== '' && (
          <div className="col-8 b-page1-errorMsg font-400S">{fieldErrors}</div>
        )}
      </div>
    </>
  )
}

export default Select
