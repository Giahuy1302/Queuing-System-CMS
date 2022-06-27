import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { Pagination } from '../Pagination/pagination'
import { SkipedStatus, UsingStatus, WaitingStatus } from '../status/status_order/orderStatus'
import './Order.css'

export const ListOrderContent = () => {
    const Chose = (id: string, input: string) => {
        const ip: any = document.getElementById(input)
        const text: any = document.getElementById(id)
        ip.value = text.innerText
    }

    const show = (id: string, u: string, d: string) => {
        const ip: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (ip.style.display === 'none') {
            ip.style.display = 'block';
            up.style.display = 'flex';
            down.style.display = 'none';
        } else {
            ip.style.display = 'none';
            down.style.display = 'flex';
            up.style.display = 'none';
        }
    }
    return (
        <div className='order_content'>
            <h1>Quản lý cấp số</h1>
            <div className="table">
                <table>
                </table>
            </div>
            <div className="oder_name-service">
                <span>Tên dịch vụ</span>
                <div className='input_status' >
                    <input type="text" id='ip' readOnly value={'Tất cả'} />
                    <div id='down' className='down' onClick={() => show('tdv', 'up', 'down')}><TiArrowSortedDown /></div>
                    <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('tdv', 'up', 'down')}><TiArrowSortedUp /></div>
                </div>
                <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('pspk', 'ip')}><label id='pspk'>Khám sản - Phụ khoa</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('rhm', 'ip')}><label id='rhm'>Khám răng hàm mặt</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('tmh', 'ip')}><label id='tmh'>Khám tai mũi họng</label></div>

                </div>
            </div>
            <div className="order_status">
                <span>Tình trạng</span>
                <div className='input_status' >
                    <input type="text" id='ip1' readOnly value={'Tất cả'} />
                    <div id='down1' className='down' onClick={() => show('tt', 'up1', 'down1')}><TiArrowSortedDown /></div>
                    <div id="up1" className="up" style={{ display: 'none' }} onClick={() => show('tt', 'up1', 'down1')}><TiArrowSortedUp /></div>
                </div>
                <div id='tt' className='select-drop-down' onClick={() => show('tt', 'up1', 'down1')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc1', 'ip1')}><label id='tc1'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('dc', 'ip1')}><label id='dc'>Đang chờ</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('dsd', 'ip1')}><label id='dsd'>Đã sử dụng</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('bq', 'ip1')}><label id='bq'>Bỏ qua</label></div>
                </div>
            </div>
            <div className='order_origin'>
                <span>Nguồn cấp</span>
                <div className='input_status' >
                    <input type="text" id='ip2' readOnly value={'Tất cả'} />
                    <div id='down2' className='down' onClick={() => show('nc', 'up2', 'down2')}><TiArrowSortedDown /></div>
                    <div id="up2" className="up" style={{ display: 'none' }} onClick={() => show('nc', 'up2', 'down2')}><TiArrowSortedUp /></div>
                </div>
                <div id='nc' className='select-drop-down' onClick={() => show('nc', 'up2', 'down2')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc2', 'ip2')}><label id='tc2'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('nc1', 'ip2')}><label id='nc1'>Kiosk</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('nc2', 'ip2')}><label id='nc2'>Hệ thống</label></div>
                </div>
            </div>
            <div className='datePicker'>
                <span>Chọn thời gian</span>
                <div className='pick'>
                    <input type="date" placeholder='10/10/2021' />
                    <div className='icon_next'>
                        <IoMdArrowDropright />
                    </div>
                    <input type="date" placeholder='18/10/2021' />
                </div>
            </div>
            <div className='order_search'>
                <span>Từ khóa</span>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            
            <div className='pagin'>
                <Pagination />
            </div>
        </div>
    )
}
