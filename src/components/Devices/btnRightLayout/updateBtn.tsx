import React from 'react'
import{FaPen} from 'react-icons/fa'

type title={
  nametitle: string
}
export const UpdateBtn = (props:title) => {
  return (
    <div className='btn-add'>
        <div className='bg-btn-add'>
            <FaPen/>
        </div>
        <p>{props.nametitle}</p>
    </div>
  )
}
