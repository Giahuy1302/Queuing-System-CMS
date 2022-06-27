import React from 'react'
import { FaFileDownload } from 'react-icons/fa'
import { RiFileDownloadLine } from 'react-icons/ri'

export const DownloadBtn = () => {
  return (
    <div className='btn-add'>
        <div className='bg-btn-add'>
            <RiFileDownloadLine/>
        </div>
        <p>Tải về</p>
    </div>
  )
}
