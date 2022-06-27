import React from 'react'
import './detailDevice.css'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { UpdateBtn } from '../btnRightLayout/updateBtn'
import { Link } from 'react-router-dom'

export const DetailsDevice = () => {
    return (
        <div className='back'>
            <div className='bg'>
                <h1>Quản lý thiết bị</h1>

                <Link to={'/devices/updates'}>
                    <UpdateBtn nametitle='Cập nhật thiết bị' />
                </Link>

                <div className="detail_bg">
                    <h2>Thông tin thiết bị</h2>
                    <div className='detail_device-id'>
                        <span>Mã thiết bị:</span>
                        <p>KIO_01</p>
                    </div>
                    <div className='detail_device-type'>
                        <span>Loại thiết bị:</span>
                        <p>Kiosk</p>
                    </div>
                    <div className='detail_device-name'>
                        <span>Tên thiết bị:</span>
                        <p>Kiosk</p>
                    </div>
                    <div className='detail_device-username'>
                        <span>Tên đăng nhập:</span>
                        <p>Linhkyo011</p>
                    </div>
                    <div className='detail_device-IP'>
                        <span>Địa chỉ IP:</span>
                        <p>128.172.308</p>
                    </div>
                    <div className='detail_device-pwd'>
                        <span>Mật khẩu:</span>
                        <p>CMS</p>
                    </div>
                    <div className='detail_device-service'>
                        <span>Dịch vụ sử dụng:</span>
                        <p>Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</p>
                    </div>
                </div>
                <Menubar buttonid='tb'/>
                <Topbar nametitle1='Thiết bị ﹥' nametitle2='Danh sách thiết bị ﹥' href='/devices' nametitle21='' href2='' nametitle3='Chi tiết thiết bị' />
            </div>
        </div>
    )
}
