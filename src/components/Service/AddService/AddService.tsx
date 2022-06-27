import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import './addservice.css'
import { AddServicesContent } from './addServicesContent'

export const AddService = () => {
  return (
    <div className='back'>
      <div className='bg'>
        <AddServicesContent name='Thêm dịch vụ'/>
        <Menubar buttonid='dv'/>
        <Topbar nametitle1='Dịch vụ ﹥' nametitle2='Danh sách dịch vụ ﹥' href='/services' nametitle21='' href2='' nametitle3='Thêm dịch vụ' />
      </div>
    </div>
  )
}
