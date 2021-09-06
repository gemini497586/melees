import React from 'react'
import '../style/table.css'

function Table(props) {
  const { unitList, setUnitList } = props
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
          {unitList.map((v, i) => {
            return (
              <tr key={i}>
                <td className="table-left">{v.name}</td>
                <td className="table-right">{v.unit}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Table
