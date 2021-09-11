import React, { useState, useEffect } from 'react'
import '../../style/memberBox.css'
import SaveBox from './component/SaveBox'
import MinorBar from './component/MinorBar'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MemberBox() {
  const [data, setData] = useState([])
  const [prep, setPrep] = useState([])
  const itemList = [
    {
      name: '時間由新至舊',
      value: '1',
    },
    {
      name: '時間由舊至新',
      value: '2',
    },
    {
      name: '卡路里由多至少',
      value: '3',
    },
    {
      name: '卡路里由少至多',
      value: '4',
    },
  ]
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/api/box/boxsave`)
        let data = res.data.result
        let prep = res.data.result2
        setData(data)
        setPrep(prep)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <section>
          <div className="container">
            <div className="member-box-top d-flex justify-content-end">
              <DropDown2 itemList={itemList} />
            </div>
            <div className="member-box-bottom">
              <div className="row">
                <SaveBox data={data} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberBox
