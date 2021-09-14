// 只有要放一個table
import React from 'react'
import '../../../style/table.css'

function PrivateRecipeIngre(props) {
  const { id, ingred } = props

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
          {ingred.map((value, index) => {
            return (
              <>
                <tr key={id}>
                  <td className="table-left">{value.ingred}</td>
                  <td className="table-right">{value.ingred_unit}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default PrivateRecipeIngre
