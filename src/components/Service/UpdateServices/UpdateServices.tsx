import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddServicesContent } from '../AddService/addServicesContent'

export const UpdateServices = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddServicesContent name='Cập nhật'/>
            <Menubar buttonid='dv'/>
            <Topbar nametitle1='Dịch vụ ﹥' nametitle2='Danh sách dịch vụ ﹥' href='/services' nametitle21='Chi tiết ﹥' href2='/services/details' nametitle3='Cập nhật'/>
        </div>
    </div>
  )
}
