import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'

export const NewOrder = () => {
    const popup = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const modal: any = document.querySelector('.popup')
        if (modal.style.display === "none") {
            modal.style.display = "block";
        }
        document.addEventListener("mousedown", (event) => {
            modal.style.display = 'none';
        })
    }
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
        <div className='back'>
            <div className="bg">
                <h1>Quản lý cấp số</h1>
                <div className='new-number_content'>
                    <h4>Cấp số mới</h4>
                    <span>Dịch vụ khách hàng lựa chọn</span>
                    <div className='newOrder_input'>
                        <input type="text" id='ip' placeholder='Chọn dịch vụ' />
                        <div className='down' id='down' onClick={() => show('tdv', 'up', 'down')} ><TiArrowSortedDown /></div>
                        <div className="up" id='up' onClick={() => show('tdv', 'up', 'down')}><TiArrowSortedUp /></div>
                    </div>
                    <div className='cancel-add-btn'>
                        <button className='btn-cancel'>Hủy bỏ</button>
                        <button className='btn-add' onClick={popup}>In số</button>
                    </div>
                    <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')} >
                        <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                        <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => Chose('ps', 'ip')}><label id='ps'>Phụ sản</label></div>
                        <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => Chose('tq', 'ip')}><label id='tq'>Tổng quát</label></div>
                        <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => Chose('rhm', 'ip')}><label id='rhm'>Răng hàm mặt</label></div>
                        <div className='select-drop-down-item ' style={{ width: '400px' }} onClick={() => Chose('tm', 'ip')}><label id='tm'>Tim mạch</label></div>
                    </div>
                    
                </div>
                <div className="popup">
                        <div className="popup-content">
                            <div className="popup-content-info">
                                <div className="close-popup"><IoMdClose className='icon-close-popup' /></div>
                                <p className="popup-content-info-sttdc">Số thứ tự được cấp</p>
                                <p className="popup-content-info-num">2001201</p>
                                <p className="popup-content-info-dvsd">DV: Khám răng hàm mặt (tại quầy số 1 )</p>

                            </div>
                            <div className="popup-content-time">
                                <div className="div-center">
                                    <p>Thời gian cấp:</p><p> 09:30 11/10/2021</p>
                                </div>
                                <div className="div-center">
                                    <p>Hạn sử dụng:</p><p> 09:30 11/10/2021</p>
                                </div>

                            </div>
                        </div>
                    </div>
                <Menubar buttonid='cs' />
                <Topbar nametitle1='Cấp số ﹥' nametitle2='Danh sách cấp số ﹥' href='/order-number' nametitle21='' href2='' nametitle3='Cấp số mới' />
            </div>
        </div>
    )
}
