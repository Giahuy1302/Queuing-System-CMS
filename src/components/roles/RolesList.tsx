import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { RoleListContent } from './RoleListContent'

export const RolesList = () => {
  return (
    <div className='back'>
        <div className="bg">
            <RoleListContent/>
            <Menubar buttonid='qlvt'/>
            <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Quản lý vai trò'/>
        </div>
    </div>
  )
}
