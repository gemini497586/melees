import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RadioBox(props) {
  const { value, checked, setChecked } = props
  return (
    <>
      <div className="s-radiobox">
        <input
          type="radio"
          value={value}
          id={value}
          checked={checked === value}
          onChange={(e) => {
            setChecked(e.target.value)
          }}
        />
        <label className="font-400S" htmlFor={value}>
          {value}
        </label>
      </div>
    </>
  )
}

export default RadioBox
