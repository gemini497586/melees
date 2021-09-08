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
    // 計算卡路里
    let calories = 0
    calories += v.cal
    let newTotal = total + calories
    setTotal(newTotal)
    // console.log(newTotal)

    // 第六個的時候就不能再新增
    // if (bento.length >= 5) {
    //   alert(`最多只可挑選五樣食材`)
    // }

    // 先確認食材是否已存在便當裡
    // 存在->不能新增
    // 不存在->可以新增

    const newBento = [
      ...bento,
      { name: v.name, inside_image: v.inside_image, id: v.id },
    ]
    setBento(newBento)

    // 加到table
    const newUnitList = [...unitList, { name: v.name, unit: `${v.cal} 大卡` }]
    setUnitList(newUnitList)

    // 變成checkbox的話
    // 如果在陣列->移出 (先拷貝原本陣列，在陣列上處理)
    // if (bento.includes(v.target.value)) {
    //   const newBento = bento.filter((value, index) => {
    //     return value !== v.target.value
    //   })
    //   return setBento(newBento)
    // }
    // // 如果沒在這陣列中 -> 加入
    // setBento([...bento, v.target.value])

    // // 加到table
    // if (unitList.includes(v.target.value)) {
    //   const newUnitList = unitList.filter((value, index) => {
    //     return value !== v.target.value
    //   })
    // }
    // setUnitList([
    //   ...unitList,
    //   { name: v.target.value, unit: `${v.target.value} 大卡` },
    // ])
    // console.log(v.target.value)
  }

  // 新增至便當盒後，把它刪除
  const handleDelete = (v) => {
    // console.log(`再見 ${v.name}`)
    const name = v.name
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
          handleDelete={handleDelete}
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
