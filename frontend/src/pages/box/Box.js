import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../style/box.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import { API_URL } from '../../utils/config'

function Box() {
  const [data, setData] = useState([])
  const [bmr, setBmr] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [cal, setCal] = useState(0)
  const [bento, setBento] = useState([])
  const [unitList, setUnitList] = useState([])

  // 從資料庫抓資料
  useEffect(() => {
    // setData(BoxData)
    Axios.get(`${API_URL}/api/box`).then((res) => {
      // console.log(res.data)
      setData(res.data)
    })
  }, [])

  // 點選圖片
  const handleCheck = (v) => {
    // 先抓到便當裡面食材的名稱
    let getName = bento.map((item) => {
      return item.name
    })
    // console.log('新增之前 ', getName)

    // 判斷食材是否已存在便當裡
    // 存在->不能新增
    // 不存在->可以新增
    if (getName.includes(v.name)) {
      // console.log('點過')
      alert('每樣食材只可挑選一次')
      return
    } else {
      const newBento = [
        ...bento,
        { name: v.name, inside_image: v.inside_image, id: v.id, cal: v.cal },
      ]
      // 第六個的時候就不能再新增
      if (newBento.length > 5) {
        alert('最多只可挑選五樣食材')
        return
      }
      setBento(newBento)
      // console.log('新增之前', bento)
      // console.log('新增之後', newBento)

      // 加到table
      const newUnitList = [...unitList, { name: v.name, unit: `${v.cal} 大卡` }]
      setUnitList(newUnitList)

      // 現在便當裡面食材的卡路里，用reduce計算加總
      const getCal = newBento.map((item) => {
        return item.cal
      })
      const newCal = getCal.reduce((acc, curr) => acc + curr)
      setCal(newCal)
      // console.log('現在的卡路里 ', newCal)
    }
  }

  // 把食材刪除
  const handleRemove = (v) => {
    const name = v.name

    // 現在便當裡面食材的卡路里
    const getCal = bento.map((item) => {
      return item.cal
    })
    // 被點到的卡路里要被刪掉
    let newCal = getCal.reduce((acc, curr) => acc + curr)
    newCal = newCal - v.cal

    setBento(bento.map((v) => v.name !== name))
    setUnitList(unitList.map((v) => v.name !== name))
    setCal(newCal)
  }

  return (
    <>
      <section className="page-group">
        <Page1 bmr={bmr} setBmr={setBmr} tdee={tdee} setTdee={setTdee} />
        <Page2
          data={data}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
          bento={bento}
        />
        <Page3
          cal={cal}
          tdee={tdee}
          unitList={unitList}
          bento={bento}
          cal={cal}
        />
        {/* 最下面推薦食譜 商品 */}
        <CardRecipe />
        <CardShopping />
      </section>
    </>
  )
}

export default Box
