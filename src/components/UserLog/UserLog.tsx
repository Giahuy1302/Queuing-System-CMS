import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { UserLogContent } from './UserLogContent'

export const UserLog = () => {
  return (
    <div className='back'>
        <div className="bg">
            <UserLogContent/>
            <Menubar buttonid='nknd'/>
            <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3=' Nhật ký hoạt động'/>
        </div>
    </div>
  )
}
