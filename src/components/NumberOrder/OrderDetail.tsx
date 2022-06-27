import React from 'react'
import { Link } from 'react-router-dom'
import { BackBtn } from '../Devices/btnRightLayout/backBtn'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { WaitingStatus } from '../status/status_order/orderStatus'

export const OrderDetail = () => {
  return (
    <div className='back'>
        <div className="bg">
            <h1>Quản lý cấp số</h1>
            <div className='order_detail'>
                <h2>Thông tin cấp số</h2>
                <div className="order_detail-info">
                    <div className='order_name-user'>
                        <span>Họ tên:</span>
                        <i>Nguyễn Thị Dung</i>
                    </div>
                    <div className='order_name-service'>
                        <span>Tên dịch vụ:</span>
                        <i>Khám tim mạch</i>
                    </div>
                    <div className="order_serial-number">
                        <span>Số thứ tự:</span>
                        <i>2001201</i>
                    </div>
                    <div className='order_time'>
                        <span>Thời gian cấp:</span>
                        <i>14:35 - 07/11/2021</i>
                    </div>
                    <div className="order_exp">
                        <span>Hạn sử dụng:</span>
                        <i>18:00 - 07/11/2021</i>
                    </div>
                    <div className='order_origin'>
                        <span>Nguồn cấp:</span>
                        <i>Kiosk</i>
                    </div>
                    <div className='order_status'>
                        <span>Trạng thái:</span>
                        <i><WaitingStatus/></i>
                    </div>
                    <div className="order_phone-number">
                        <span>Số điện thoại:</span>
                        <i>0948523623</i>
                    </div>
                    <div className="order_email">
                        <span>Địa chỉ Email:</span>
                        <i>nguyendung@gmail.com</i>
                    </div>
                </div>
            </div>
            <Link to ={'/order-number'}>
                <BackBtn/>
            </Link>
            <Menubar buttonid='cs'/>
            <Topbar nametitle1='Cấp số ﹥' nametitle2='Danh sách cấp số ﹥' href='/order-number' nametitle21='' href2='' nametitle3='Chi tiết'/>
        </div>
    </div>
  )
}
