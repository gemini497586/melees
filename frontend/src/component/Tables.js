import React from 'react'
import Table from './Table'

const unitList = [
  { name: '雞蛋', unit: '10顆' },
  { name: '雞蛋', unit: '100克' },
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
]
function Tables() {
  return (
    <>
      <div className="container">
        <div className="d-flex">
          <div className="col-12 col-md-6 g-0">
            <Table unitList={unitList} />
          </div>
          <div className="col-12 col-md-6 g-0">
            <Table unitList={unitList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tables
