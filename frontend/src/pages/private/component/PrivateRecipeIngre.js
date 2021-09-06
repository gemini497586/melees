// 只有要放一個table
import React from 'react'
import '../../../style/table.css'

function PrivateRecipeIngre(props) {
  return (
    <>
      <table className="table-food">
        <thead className="font-700L">
          <tr>
            <th className="table-left">食材</th>
            <th className="table-right">份量</th>
          </tr>
        </thead>
        <tbody className="font-400M">
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

export default PrivateRecipeIngre
