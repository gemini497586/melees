// 要放兩個並排的table
import React from 'react'
import Table from './Table'

function Tables() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 g-0">
            <Table />
          </div>
          <div className="col-6 g-0">
            <Table />
          </div>
          <div className="col-6 g-0">
            <Table />
          </div>
          <div className="col-6 g-0">
            <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tables
