import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../style/box.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import AlertModal from '../../component/AlertModal'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import { API_URL } from '../../utils/config'
import useAlert from '../../utils/useAlert'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  offset: 50,
  duration: 500,
})

function Box() {
  const [data, setData] = useState([])
  const [subData, setSubData] = useState([])
  const [bento, setBento] = useState([])
  const [tableList, setTableList] = useState([])
  const [bmr, setBmr] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [cal, setCal] = useState(0)
  const { openAlertModal, message, alertmodal } = useAlert()

  // 從資料庫抓資料
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/box`)
        let data = res.data.result2
        let subData = res.data.result
        setData(data)
        setSubData(subData)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  // 點選圖片
  const handleCheck = async (v) => {
    // 先抓到便當裡面食材的名稱
    let getName = bento.map((item) => {
      return item.name
    })
    // console.log('新增之前 ', getName)

    // 判斷食材是否已存在便當裡
    // 存在->不能新增
    // 不存在->可以新增
    if (getName.includes(v.name)) {
      openAlertModal('每樣食材只可挑選一次')
      return
    } else {
      const newBento = [
        ...bento,
        { name: v.name, inside_image: v.inside_image, id: v.id, cal: v.cal },
      ]
      // 第六個的時候就不能再新增
      if (newBento.length > 5) {
        openAlertModal('最多只可挑選五樣食材')
        return
      }
      setBento(newBento)
      // console.log('新增之前', bento)
      // console.log('新增之後', newBento)

      // 加到table
      const newTableList = [
        ...tableList,
        { ingred: v.name, ingred_unit: `${v.cal} 大卡` },
      ]
      setTableList(newTableList)

      // 現在便當裡面食材的卡路里，用reduce計算加總
      const getCal = newBento.map((item) => {
        return item.cal
      })
      const newCal = getCal.reduce((acc, curr) => acc + curr)
      setCal(newCal)
      // console.log('現在的卡路里 ', newCal)
    }

    // console.log(v.name)
    // try {
    //   let res = await Axios.get(`${API_URL}/box/recommend`,{

    //   })
    // } catch (e) {
    //   console.log(e)
    // }
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

    setBento(bento.filter((v) => v.name !== name))
    setTableList(tableList.filter((v) => v.ingred !== name))
    setCal(newCal)
  }

  return (
    <>
      <AlertModal
        message={message}
        alertmodal={alertmodal}
        openAlertModal={openAlertModal}
      />
      <section className="page-group">
        <Page1 bmr={bmr} setBmr={setBmr} tdee={tdee} setTdee={setTdee} />
        <Page2
          data={data}
          subData={subData}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
          bento={bento}
        />
        <Page3
          tdee={tdee}
          cal={cal}
          setCal={setCal}
          tableList={tableList}
          setTableList={setTableList}
          bento={bento}
          setBento={setBento}
          message={message}
          alertmodal={alertmodal}
          openAlertModal={openAlertModal}
        />
        {/* 最下面推薦食譜 商品 */}
        <CardRecipe />
        <CardShopping />
      </section>
    </>
  )
}

export default Box
