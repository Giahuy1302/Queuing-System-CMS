import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { Adddevices } from '../AddDevice/Adddevices'

export const UpdateDevice = () => {
  return (
    <div className='back'>
        <div className="bg">
            <Adddevices name='Cập nhật'/>
            <Menubar buttonid='tb'/>
            <Topbar nametitle1='Thiết bị ﹥' nametitle2='Danh sách thiết bị ﹥' href='/devices' nametitle21='' href2='' nametitle3='Cập nhật thiết bị'/>
        </div>
    </div>
  )
}
