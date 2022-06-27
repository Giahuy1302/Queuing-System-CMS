import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { ReportListContent } from './ReportListContent'

export const ReportList = () => {
  return (
    <div className='back'>
        <div className='bg'>
            <ReportListContent/>
            <Menubar buttonid='bc'/>
            <Topbar nametitle1='Báo cáo ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Lập báo cáo'/>
        </div>
    </div>
  )
}
