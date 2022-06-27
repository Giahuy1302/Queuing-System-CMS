import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { AccountContent } from './AccountContent'

export const Account = () => {
  return (
    <div className='back'>
      <div className="bg">
        <AccountContent />
        <Menubar buttonid='qltk'/>
        <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Quản lý tài khoản' />
      </div>
    </div>
  )
}
 