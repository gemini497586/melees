// 只有要放一個table
import React from 'react'
import '../style/table.css'

function Table(props) {
  return (
    <>
      <table className="table-food">
        <thead className="font-700L">
          <tr>
            <th className="table-left">食材名稱</th>
            <th className="table-right">食材份量</th>
          </tr>
        </thead>
        <tbody className="font-400M fcolor-grey-900">
          <tr>
            <td className="table-left">蝦子</td>
            <td className="table-right">五隻</td>
          </tr>
          <tr>
            <td className="table-left">蝦子</td>
            <td className="table-right">五隻</td>
          </tr>
          <tr>
            <td className="table-left">蝦子</td>
            <td className="table-right">五隻</td>
          </tr>
          <tr>
            <td className="table-left">蝦子</td>
            <td className="table-right">五隻</td>
          </tr>
          <tr>
            <td className="table-left">蝦子</td>
            <td className="table-right">五隻</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table
