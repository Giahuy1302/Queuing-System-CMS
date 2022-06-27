import React from 'react'
import './active.css'

export const Actived = () => {
  return (
    <div className='status-act'>
      <p className='dot-act'></p>
      <p>Hoạt động</p>
    </div>
  )
}
export const NonActived = () => {
  return (
    <div className='status-act'>
      <p className='dot-non-act'></p>
      <p>Ngưng hoạt động</p>
    </div>
  )
}
