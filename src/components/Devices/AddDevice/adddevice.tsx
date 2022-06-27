import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { Adddevices } from './Adddevices'

export const Adddevice = () => {
  return (
    <div className='back'>
        <div className='bg'>
        <Adddevices name='Thêm thiết bị'/>
        <Menubar buttonid='tb'/>
        <Topbar nametitle1='Thiết bị ﹥' nametitle2='Danh sách thiết bị ﹥' href='/devices' nametitle21='' href2='' nametitle3='Thêm thiết bị'/>
        </div>
    </div>
  )
}
