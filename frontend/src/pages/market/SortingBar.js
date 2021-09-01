import React from 'react'
import '../../style/sortingBar.css'

function SortingBar() {
  return (
    <div className="container position-relative">
      <div className="sorting-bar">
        <button
          className="btn dropdown-toggle sorting-btn"
          data-bs-toggle="dropdown"
        >
          請選擇排序方式
        </button>
        <ul class="dropdown-menu btn-dropdown">
          <li>
            <a class="dropdown-item" href="#/">
              價格由低至高
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#/">
              價格由高至低
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#/">
              時間由新至舊
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#/">
              時間由舊至新
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SortingBar
