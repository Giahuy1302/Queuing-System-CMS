import React from 'react'
import {IoIosAdd} from 'react-icons/io'

type title={
    nametitle: string
}
export const Add = (props:title) => {
  return (
    <div className='btn-add'>
        <div className='bg-btn-add'>
            <IoIosAdd/>
        </div>
        <p>{props.nametitle}</p>
    </div>
  )
}
