import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../style/box.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import BoxData from '../../data/box.json'

function Box() {
  const [data, setData] = useState([])
  const [bmr, setBmr] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [total, setTotal] = useState(0)
  const [bento, setBento] = useState([])
  // 控制table裡的資料
  const [unitList, setUnitList] = useState([])

  // 從資料庫抓資料
  useEffect(() => {
    setData(BoxData)
    // Axios.get(`http://localhost:3001/box`).then((res) => {
    //   console.log(res.data)
    //   setData(res.data)
    // })
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
      alert('每個食材僅可挑選一次')
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
      console.log('新增之後', newBento)

      // 加到table
      const newUnitList = [...unitList, { name: v.name, unit: `${v.cal} 大卡` }]
      setUnitList(newUnitList)

      // 現在便當裡面食材的cal
      let getCal = newBento.map((item) => {
        return item.cal
      })

      // 計算卡路里
      const newTotal = getCal.reduce((acc, curr) => acc + curr)
      setTotal(newTotal)
      // console.log(newTotal)
    }
  }

  // 如果不要，把它刪除
  const handleRemove = (v) => {
    // console.log(`再見 ${v.name}`)
    const name = v.name
    const cal = v.cal
    console.log(cal)
    setBento(bento.filter((v) => v.name !== name))
    setUnitList(unitList.filter((v) => v.name !== name))
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
        <Page3 total={total} tdee={tdee} unitList={unitList} bento={bento} />
        {/* 最下面推薦食譜 商品 */}
        <CardRecipe />
        <CardShopping />
      </section>
    </>
  )
}

export default Box
