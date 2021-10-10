import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../style/box.css'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
import Page3 from './component/Page3'
import CardRecipe from './component/CardRecipe'
import CardShopping from './component/CardShopping'
import { API_URL } from '../../utils/config'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'
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
  const [product, setProduct] = useState([])
  const [recipe, setRecipe] = useState([])

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
  // 點選食材->新增至便當盒 + 新增至table + 更新下方推薦商品/食譜
  const handleCheck = async (v) => {
    // 先抓到便當裡面食材的名稱
    const getId = bento.map((v) => {
      return v.id
    })

    // 判斷食材是否已存在便當裡
    // 存在->不能新增
    // 不存在->可以新增
    if (getId.includes(v.id)) {
      Swal.fire({
        title: '每樣食材只可挑選一次',
        confirmButtonText: '確認',
        confirmButtonColor: 'var(--color-primary)',
      })
      return
    } else {
      const newBento = [
        ...bento,
        {
          id: v.id,
          name: v.name,
          inside_image: v.inside_image,
          cal: v.cal,
          product_id: v.product_id,
          feature_id: v.feature_id,
        },
      ]
      // 第六個的時候就不能再新增
      if (newBento.length > 5) {
        Swal.fire({
          title: '最多只能挑選五樣食材',
          confirmButtonText: '確認',
          confirmButtonColor: 'var(--color-primary)',
        })
        return
      }
      setBento(newBento)
      // 加到table
      const newTableList = [
        ...tableList,
        { ingred: v.name, ingred_unit: `${v.cal} 大卡` },
      ]
      setTableList(newTableList)

      // 現在便當裡面食材的卡路里，用reduce計算加總
      const getCal = newBento.map((v) => {
        return v.cal
      })
      const newCal = getCal.reduce((acc, curr) => acc + curr)
      setCal(newCal)

      // 抓到點下去，抓到商品id/食譜id
      const productIds = newBento.map((v) => {
        return v.product_id
      })
      const recipeId = newBento.map((v) => {
        return v.feature_id
      })
      getProduct(productIds, recipeId)
    }
  }
  // 點到的商品id丟到後端，也同時丟進product/recipe這個狀態中
  const getProduct = async (productIds, recipeId) => {
    try {
      let result = await Axios.post(
        `${API_URL}/box/recommendproduct`,
        { productIds },
        {
          withCredentials: true,
        }
      )
      let result2 = await Axios.post(
        `${API_URL}/box/recommendrecipe`,
        { recipeId },
        {
          withCredentials: true,
        }
      )
      setProduct(result.data)
      setRecipe(result2.data)
    } catch (e) {
      console.log('e', e.response)
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

    setBento(bento.filter((v) => v.name !== name))
    setTableList(tableList.filter((v) => v.ingred !== name))
    setCal(newCal)
  }

  return (
    <>
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
        />
        {/* 最下面推薦食譜 商品 */}
        <CardRecipe recipe={recipe} />
        <CardShopping product={product} />
      </section>
    </>
  )
}

export default Box
