import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../style/searchRecipe.css'
import SearchCardFeature from './component/SearchCardFeature.js'
import SearchCardPrivate from './component/SearchCardPrivate.js'
import RadioBox from './component/RadioBox'
import Axios from 'axios'
import { API_URL } from '../../utils/config'
import DropDown2 from '../../component/DropDown2'

function SearchRecipe() {
  const { word } = useParams()
  const [recipe, setRecipe] = useState([])
  const [displayPrivate, setDisplayPrivate] = useState([])
  const [privateCount, setPrivateCount] = useState(0)

  const [feature, setFeature] = useState([])
  const [displayFeature, setDisplayFeature] = useState([])
  const [featureCount, setFeatureCount] = useState(0)

  const [checked, setChecked] = useState('精選食譜')
  const checkList = ['精選食譜', '私藏食譜']
  const [sortBy, setSortBy] = useState(0)

  const itemList = [
    {
      name: '時間由新至舊',
    },
    {
      name: '時間由舊至新',
    },
    {
      name: '按讚數由多至少',
    },
    {
      name: '按讚數由少至多',
    },
    {
      name: '瀏覽數由多至少',
    },
    {
      name: '瀏覽數由少至多',
    },
  ]

  // 初始化
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/search/recipe?word=${word}`)
        setRecipe(res.data.private)
        setDisplayPrivate(res.data.private)
        setPrivateCount(res.data.count.privateCount)
        setFeature(res.data.feature)
        setDisplayFeature(res.data.feature)
        setFeatureCount(res.data.count.featureCount)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [word])

  return (
    <>
      <section className="page-group">
        <div className="container">
          <div className="s-recipe-top">
            <div className="s-recipe-keyword">
              <div className="col-12 col-md-6">
                <h4>
                  關於 {word} 的食譜共有 {privateCount + featureCount} 筆
                  {/* {checked === '精選食譜'
                    ? `關於 ${word} 的精選食譜共有 ${featureCount} 筆`
                    : `關於 ${word} 的私藏食譜共有 ${privateCount} 筆`} */}
                </h4>
              </div>
              <DropDown2
                itemList={itemList}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
            <div className="col-12 s-recipe-check">
              {checkList.map((v, i) => {
                return (
                  <RadioBox
                    key={i}
                    value={v}
                    checked={checked}
                    setChecked={setChecked}
                  />
                )
              })}
            </div>
          </div>
          {checked === '精選食譜' ? (
            <SearchCardFeature
              featureList={displayFeature}
              setDisplayFeature={setDisplayFeature}
              sortBy={sortBy}
            />
          ) : null}
          {checked === '私藏食譜' ? (
            <SearchCardPrivate
              privateList={displayPrivate}
              setDisplayPrivate={setDisplayPrivate}
              sortBy={sortBy}
            />
          ) : null}
        </div>
      </section>
    </>
  )
}

export default SearchRecipe
