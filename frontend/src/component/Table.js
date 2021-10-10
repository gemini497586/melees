import React from 'react'
import '../style/table.css'

function Table(props) {
  const { tableList } = props
  return (
    <>
      <table className="table-food">
        <thead className="font-700L">
          <tr>
            <th className="table-left">食材名稱</th>
            <th className="table-right">食材份量</th>
          </tr>
        </thead>
        <tbody className="font-400M">
          {tableList.map((value, index) => {
            return (
              <tr key={index} className="animation-table">
                <td className="table-left">{value.ingred}</td>
                <td className="table-right">{value.ingred_unit}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
