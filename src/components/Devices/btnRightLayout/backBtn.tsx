import React from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'

export const BackBtn = () => {
  return (
    <div className='btn-back'>
        <div className='bg-btn-add'>
            <RiArrowGoBackLine/>
        </div>
        <p>Quay lại</p>
    </div>
  )
}
