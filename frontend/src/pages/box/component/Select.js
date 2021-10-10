import React from 'react'

function Select(props) {
  const { name, value, fields, fieldErrors, handleFieldChange, options } = props

  return (
    <>
      <div className="row align-items-center">
        <label htmlFor={value} className="col-4 font-700M b-page1-label">
          {name}
        </label>
        <div className="col-8">
          <select
            className={
              fieldErrors &&
              'b-page1-error animate__animated animate__headShake'
            }
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
          <div className="col-8 b-page1-errorMsg font-400S">{fieldErrors}</div>
        </div>
      </div>
    </>
  )
}

export default Select
