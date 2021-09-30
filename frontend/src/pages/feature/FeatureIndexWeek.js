import React, { useState, useEffect } from 'react'
import '../../style/featureIndexWeek.css'
import '../../style/featureComponent.css'
import FeatureWeek from './component/FeatureWeek'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { API_URL } from '../../utils/config'
import Axios from 'axios'

function FeatureIndexWeek() {
  /* 排序搜尋 */
  const [sortBy, setSortBy] = useState('0')
  const itemList = [
    {
      name: '週期由新至舊',
      value: '1',
    },
    {
      name: '週期由舊至新',
      value: '2',
    },
    {
      name: '按讚數由多至少',
      value: '3',
    },
    {
      name: '按讚數由少至多',
      value: '4',
    },
    {
      name: '瀏覽數由多至少',
      value: '5',
    },
    {
      name: '瀏覽數由少至多',
      value: '6',
    },
  ]

  const [weekdata, setWeekdata] = useState([])
  const [weekindeximg, setWeekindeximg] = useState([])
  useEffect(() => {
    Axios.post(`${API_URL}/feature/weeklist`).then((response) => {
      setWeekdata(response.data)
    })

    Axios.post(`${API_URL}/feature/weekindeximg`).then((response) => {
      setWeekindeximg(response.data)
      console.log('weekindeximg', response.data)
    })
  }, [])

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="container">
          <div className="fdropdown-mf">
            <DropDown2
              itemList={itemList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="findexw-titlegroup">
            <div className="findexw-title font-400L">一週食譜</div>
            <div className="findexw-date font-400L">日期</div>
          </div>
          <div className="fline-g300"></div>
          <div className="row m-0">
            <div className="col-2">
              {weekindeximg.map((v, i) => {
                console.log('v', v)
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
              {weekdata.map((v, i) => {
                return <FeatureWeek weekdataCards={v} key={i} />
              })}
            </div>
          </div>
        </div>
        <div className="fpaginf-mf">
          <Paging />
        </div>
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndexWeek
