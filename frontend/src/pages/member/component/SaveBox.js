import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { API_URL } from '../../../utils/config'
import Swal from 'sweetalert2'
import Axios from 'axios'

function SaveBox(props) {
  const { data, prepList, setDisplayData, currentPage, perPage } = props
  // 設定分頁
  const lastNumber = currentPage * perPage
  const firstNumber = lastNumber - perPage
  const currentNumber = data.slice(firstNumber, lastNumber)

  // 把原本的陣列->轉成對應的圖片陣列
  const getImage = (e) => {
    e = e.split(',')
    if (prepList) {
      e = e.map((item) => {
        return prepList[item].inside_image
      })
    }
    return e
  }

  // 把原本的陣列->轉成對應的中文名->轉回字串
  const getName = (e) => {
    e = e.split(',')
    if (prepList) {
      e = e.map((item) => {
        return prepList[item].name
      })
    }
    e = e.join('/')
    return e
  }

  // 彈出視窗，確認是否刪除
  const openDeleteModal = (id, name) => {
    Swal.fire({
      icon: 'warning',
      iconColor: 'var(--color-red-C)',
      title: '確定要刪除嗎？',
      html: `您收藏的便當 <strong>${name}</strong> 將無法回復！`,
      showCancelButton: true,
      confirmButtonText: '刪除',
      confirmButtonColor: 'var(--color-red-C)',
      cancelButtonText: '取消',
      cancelButtonColor: 'var(--color-grey-500)',
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(id)
        Swal.fire({
          icon: 'success',
          title: '已刪除',
          confirmButtonText: '確認',
          confirmButtonColor: 'var(--color-primary)',
        })
      }
    })
  }

  // 刪除按鈕
  const handleDelete = async (id) => {
    try {
      await Axios.post(
        `${API_URL}/box/deletesavebox`,
        {
          id,
        },
        { withCredentials: true }
      )
      // 刪除後，重新抓原本的data
      let res2 = await Axios.get(`${API_URL}/box/readsavebox`, {
        withCredentials: true,
      })
      let data = res2.data.result
      setDisplayData(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      {currentNumber.map((value) => {
        return (
          <div className="col-12 col-md-4 member-box-card" key={value.id}>
            <div className="b-page2-box">
              <img
                src="http://localhost:3000/images/box_up.png"
                alt="BoxUp"
                className="b-contain-fit b-page2-up"
              />
              <div className="member-box-indside">
                {getImage(value.box_ids).map((v, i) => {
                  return <img key={i} src={`${API_URL}/box/${v}`} alt={v} />
                })}
              </div>
              <img
                src="http://localhost:3000/images/box_down.png"
                alt="BoxDown"
                className="b-contain-fit b-page2-down"
              />
            </div>
            <div className="member-box-detail">
              <p className="member-box-prep font-400M">
                {getName(value.box_ids)}
              </p>
              <div className="member-box-content">
                <ul className="list-unstyled">
                  <li className="font-700L member-box-cal">
                    總卡路里: {value.cal} 大卡
                  </li>
                  <li className="font-400S">名稱: {value.name}</li>
                  <li className="font-400S">日期: {value.create_date}</li>
                </ul>
                <button
                  className="member-box-del"
                  onClick={() => {
                    openDeleteModal(value.id, value.name)
                  }}
                >
                  <FontAwesomeIcon icon="trash-alt" />
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SaveBox
