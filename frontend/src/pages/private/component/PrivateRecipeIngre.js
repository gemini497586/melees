// 只有要放一個table
import React, { useState, useEffect } from 'react'
import '../../../style/table.css'
import Axios from 'axios'

function PrivateRecipeIngre(props) {
  const { id } = props
  const [ingred, setIngred] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/recipe/ingred/${id}`).then((res) => {
      setIngred(res.data)
    })
  }, [])
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
                <tr>
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
