import React from 'react'
import '../style/paging.css'

function Paging(props) {
  const { value } = props

  return (
    <button
      className="btn paging-btn active"
      onClick={() => {
        console.log(value)
      }}
    >
      {value}
    </button>
  )
}

export default Paging
