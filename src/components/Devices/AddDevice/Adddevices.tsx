import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import './AddDevices.css'
type titlebtn = {
    name: string
}
export const Adddevices = (props: titlebtn) => {
    const add = (id: string) => {
        const dvsd: any = document.getElementById('dvsd')
        const goiy: any = document.getElementById('textcdvsd')
        const chose: any = document.getElementById(id)
        const dvcc: any = document.createElement('div')
        dvcc.id = chose.id
        dvcc.className = 'dvcc'
        const p: any = document.createElement('p')
        p.innerText = chose.innerText
        const icon: any = document.createElement('label')
        icon.innerText = '×'
        icon.className = 'icon-delete'
        icon.onclick = function () {
            const elem: any = document.getElementById(id);
            dvsd.removeChild(elem)
            chose.style.display = 'flex'
        }
        dvcc.appendChild(p)
        dvcc.appendChild(icon)
        dvsd.appendChild(dvcc)
        chose.style.display = 'none'
        goiy.style.display = 'none'
    }
    const showmore = () => {
        const btn: any = document.getElementById('dd')
        if (btn.style.display === 'none')
            btn.style.display = 'flex';
        else {
            btn.style.display = 'none'
        }
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
        <div>
            <h1>Quản lý thiết bị</h1>
            <div className='add-info-device'>
                <h2>Thông tin thiết bị</h2>
                <div className='device_id'>
                    <p>Mã thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập mã thiết bị' />
                </div>
                <div className='device_name'>
                    <p>Tên thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập tên thiết bị' />
                </div>
                <div className='device_IP'>
                    <p>Địa chỉ IP:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập địa chỉ IP' />
                </div>
                <div className='device_type'>
                    <p>Loại thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <div >
                        <input type="text" readOnly id='ip' placeholder='Chọn loại thiết bị' />
                        <div id='down' className='down' onClick={() => show('tdv', 'up', 'down')}><TiArrowSortedDown /></div>
                        <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('tdv', 'up', 'down')}><TiArrowSortedUp /></div>
                    </div>
                </div>
                <div className='device_username'>
                    <p>Tên đăng nhập:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập tài khoản' />
                </div>
                <div className='device_userpwd'>
                    <p>Mật khẩu:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập mật khẩu' />
                </div>
                <div id='tdv' className='select-drop-down' onClick={() => show('tdv', 'up', 'down')} style={{ width: '540px', marginLeft: '590px', marginTop: '74px' }}>
                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('kiosk', 'ip')}><label id='kiosk'>Kiosk</label></div>
                    <div className='select-drop-down-item ' style={{ width: '540px' }} onClick={() => Chose('ht', 'ip')}><label id='ht'>Hệ thống</label></div>
                </div>
                <div className='device_service' >
                    <p>Dịch vụ sử dụng:<p style={{ color: '#FF4747' }}>*</p></p>
                    <div className='div-dvsd' id='dvsd' onClick={showmore} style={{ border: '1.5px solid #A9A9B0' }} >
                        <span className='goiy' id='textcdvsd'>Nhập dịch vụ sử dụng</span>
                    </div>
                    
                </div>
                <div className='note'>
                    <p style={{ color: '#FF4747', paddingRight: '2px' }}>* </p>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
                <div id='dd' className='dd'>
                    <div className='dropdown-device' id="style-2">
                        <div id='ktm' className='dropdown-device-item ' onClick={() => add('ktm')}>Khám tim mạch </div>
                        <div id='kpk' className='dropdown-device-item ' onClick={() => add('kpk')}>Khám sản - phụ khoa</div>
                        <div id='krhm' className='dropdown-device-item ' onClick={() => add('krhm')}>Khám răng hàm mặt</div>
                        <div id='ktmh' className='dropdown-device-item ' onClick={() => add('ktmh')}>Khám tai mũi họng</div>
                        <div id='khh' className='dropdown-device-item ' onClick={() => add('khh')}>Khám hô hấp</div>
                        <div id='ktq' className='dropdown-device-item ' onClick={() => add('ktq')}>Khám tổng quát  </div>
                        <p className='enddata'>No more data</p>
                    </div>
                </div>
            </div>
            <div className='cancel-add-btn'>
                <Link to="/devices">
                    <button className='btn-cancel'>Hủy bỏ</button>
                </Link>
                <Link to="/devices">
                    <button className='btn-add'>{props.name}</button>
                </Link>
            </div>
        </div>
    )
}
