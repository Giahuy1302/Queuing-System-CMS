import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddRoleContent } from '../AddRole/AddRoleContent'

export const UpdateRole = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddRoleContent namebtn='Cập nhật'/>
            <Menubar buttonid='qlvt'/>
            <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='Quản lý vai trò ﹥' href='/roles' nametitle21='' href2='' nametitle3='Cập nhật vai trò'/>
        </div>
    </div>
  )
}
