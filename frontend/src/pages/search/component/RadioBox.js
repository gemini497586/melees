import React from 'react'

function RadioBox(props) {
  const { value, name, checked, setChecked } = props
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          value={value}
          id={name}
          checked={checked === value}
          onChange={(e) => {
            setChecked(e.target.value)
          }}
        />
        <label className="form-check-label me-2 font-400S" htmlFor={name}>
          {value}
        </label>
      </div>
    </>
  )
}

export default RadioBox
