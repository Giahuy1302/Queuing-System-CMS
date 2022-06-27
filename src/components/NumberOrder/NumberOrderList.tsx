import React from 'react'
import { Link } from 'react-router-dom'
import { Add } from '../Devices/btnRightLayout/add'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { ListOrderContent } from './ListOrderContent'

export const NumberOrderList = () => {
  return (
    <div className='back'>
        <div className="bg">
            <ListOrderContent/>
            <Link to ={'new-number'}>
              <Add nametitle='Cấp số mới'/>
            </Link>
            <Menubar buttonid='cs'/>
            <Topbar nametitle1='Cấp số ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Danh sách cấp số'/>
        </div>
    </div>
  )
}
