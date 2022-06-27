import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddAccountContent } from './AddAccountContent'

export const AddAccount = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddAccountContent title='Thêm'/>
            <Menubar buttonid='nknd'/>
            <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='Quản lý tài khoản ﹥' href='/account' nametitle21='' href2='' nametitle3='Thêm tài khoản'/>
        </div>
    </div>
  )
}
 