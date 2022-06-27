import React from 'react'
import { Link } from 'react-router-dom'
import { BackBtn } from './backBtn'
import { UpdateBtn } from './updateBtn'

type href ={
  href1: string
  href2: string
}

export const UpdateAndBack = (props: href) => {
  return (
    <div className='update-back_btn'>
      <Link to = {props.href1}>
        <UpdateBtn nametitle='Cập nhật danh sách' />
      </Link>
      <hr />
      <Link to = {props.href2}>
        <BackBtn />
      </Link>
    </div>
  )
}
