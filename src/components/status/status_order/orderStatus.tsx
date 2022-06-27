import React from 'react'
import './orderstatus.css'
export const WaitingStatus = () => {
  return (
    <div className='status_order'>
        <p className="dot-waiting"></p>
        <p>Đang chờ</p>
    </div>
  )
}
export const UsingStatus = () => {
    return (
      <div className='status_order'>
          <p className="dot-using"></p>
          <p>Đã sử dụng</p>
      </div>
    )
  }
  export const SkipedStatus = () => {
    return (
      <div className='status_order'>
          <p className="dot-skiped"></p>
          <p>Bỏ qua</p>
      </div>
    )
  }
