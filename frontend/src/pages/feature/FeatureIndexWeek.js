import React, { useState, useEffect } from 'react'
import '../../style/featureIndexWeek.css'
import '../../style/featureComponent.css'
import FeatureWeek from './component/FeatureWeek'
import SortBarWeek from './SortBarWeek'
import Paging from '../market/component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { API_URL } from '../../utils/config'
import Axios from 'axios'

function FeatureIndexWeek() {
  // 搜尋
  const [sort, setSort] = useState('')
  console.log('sort', sort)
  // 食譜資料
  const [weekdata, setWeekdata] = useState([])
  // 圖片資料
  const [weekindeximg, setWeekindeximg] = useState([])
  // 分頁
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // 食譜資料
    Axios.post(`${API_URL}/feature/weeklist/${sort}`).then((response) => {
      setWeekdata(response.data)
    })
    // 食譜圖片
    Axios.post(`${API_URL}/feature/weekindeximg/${sort}`).then((response) => {
      setWeekindeximg(response.data)
      // console.log('weekindeximg', response.data)
    })
  }, [sort])

  // 分頁
  const [perPage, setPerPage] = useState(5)
  const lastNumber = currentPage * perPage
  const firstNumber = lastNumber - perPage
  const currentNumber = weekdata.slice(firstNumber, lastNumber)
  const currentNumberImg = weekindeximg.slice(firstNumber, lastNumber)
  // console.log('currentNumber', currentNumber)

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="container">
          <div className="fdropdown-mf">
            <SortBarWeek sort={sort} setSort={setSort} />
          </div>
          <div className="findexw-titlegroup">
            <div className="findexw-title font-400L">一週食譜</div>
            <div className="findexw-date font-400L">日期</div>
          </div>
          <div className="fline-g300"></div>
          <div className="row m-0">
            <div className="col-2">
              {currentNumberImg.map((v, i) => {
                {
                  /* console.log('v', v) */
                }
                return (
                  <figure className="findexw-img">
                    <img
                      className="fcover-fit"
                      src={`http://localhost:3001/feature/featurefood/${v.file_type}`}
                      alt=""
                    />
                  </figure>
                )
              })}
            </div>
            <div className="col-10">
              {currentNumber.map((v, i) => {
                return <FeatureWeek weekdataCards={v} key={i} />
              })}
            </div>
          </div>
        </div>
        <div className="fpaginf-mf">
          <Paging
            product={weekindeximg}
            product={weekdata}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndexWeek
