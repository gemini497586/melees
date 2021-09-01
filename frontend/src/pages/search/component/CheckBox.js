import React from 'react'

function Select(props) {
  const { value, name, checked, setChecked } = props
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={checked}
          name={name}
          onChange={(e) => {
            setChecked(e.target.checked)
          }}
        />
        <label className="form-check-label me-2 font-400S" htmlFor={name}>
          {value}
        </label>
      </div>
    </>
  )
}

export default Select
