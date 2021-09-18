import React from 'react'

function ProgressBar(props) {
  const { step } = props

  return (
    <>
      <ol className="progressBar">
        <li className={step === 1 ? 'active' : ''}>
          <div className="progressBar-icon">1</div>
          <p className="progressBar-text font-400S">訂單成立</p>
        </li>
        <li className={step === 2 ? 'active' : ''}>
          <div className="progressBar-icon">2</div>
          <p className="progressBar-text font-400S">處理中</p>
        </li>
        <li className={step === 3 ? 'active' : ''}>
          <div className="progressBar-icon">3</div>
          <p className="progressBar-text font-400S">已出貨</p>
        </li>
        <li className={step === 4 ? 'active' : ''}>
          <div className="progressBar-icon">4</div>
          <p className="progressBar-text font-400S">派送中</p>
        </li>
        <li className={step === 5 ? 'active' : ''}>
          <div className="progressBar-icon">5</div>
          <p className="progressBar-text font-400S">已送達</p>
        </li>
      </ol>
    </>
  )
}

export default ProgressBar
