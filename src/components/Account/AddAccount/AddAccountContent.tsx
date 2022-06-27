import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
type name = {
    title: string
}
export const AddAccountContent = (props: name) => {
    const showpw = (pw: string, eyeshow: string, eyehide: string) => {
        const show: any = document.getElementById(eyeshow)
        const hide: any = document.getElementById(eyehide)
        const eye: any = document.getElementById(pw)
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'flex';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'flex';
            show.style.display = 'none';
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
        <div className='add-account_content'>
            <h1>Quản lý tài khoản</h1>
            <div className="add-acc_bg-info">
                <h2>Thông tin tài khoản</h2>
                <div className='add-acc_name'>
                    <span>Họ tên: <p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập họ tên' />
                </div>
                <div className='add-acc_phone'>
                    <span>Số điện thoại:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập số điện thoại' />
                </div>
                <div className='add-acc_email'>
                    <span>Email:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập email' />
                </div>

                <div className='add-acc_username'>
                    <span>Tên đăng nhập:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập tên đăng nhập' />
                </div>
                <div className='add-acc_pwd'>
                    <span>Mật khẩu:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="password" id='pw1' placeholder='Nhập mật khẩu' />
                    <FiEyeOff className="show" id='show1' onClick={() => showpw('pw1', 'show1', 'hide1')} />
                    <FiEye className='hide' id='hide1' style={{ display: 'none' }} onClick={() => showpw('pw1', 'show1', 'hide1')} />
                </div>
                <div className='add-acc_pwd-conf'>
                    <span>Nhập lại mật khẩu:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="password" id='pw2' placeholder='Nhập lại mật khẩu' />
                    <FiEyeOff className="show" id='show2' onClick={() => showpw('pw2', 'show2', 'hide2')} />
                    <FiEye className='hide' id='hide2' style={{ display: 'none' }} onClick={() => showpw('pw2', 'show2', 'hide2')} />
                </div>
                <div className='add-acc_status'>
                    <span>Tình trạng:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <div className='input_status' >
                        <input type="text" id='ip1' readOnly placeholder='Hoạt động' />
                        <div id='down1' className='down' onClick={() => show('tt', 'up1', 'down1')}><TiArrowSortedDown /></div>
                        <div id="up1" className="up" style={{ display: 'none' }} onClick={() => show('tt', 'up1', 'down1')}><TiArrowSortedUp /></div>
                    </div>
                    <div id='tt' className='select-drop-down' onClick={() => show('tt', 'up1', 'down1')}>
                        <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip1')}><label id='tc'>Tất cả</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('nhd', 'ip1')}><label id='nhd'>Ngưng hoạt động</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('hd', 'ip1')}><label id='hd'>Hoạt động</label></div>
                    </div>
                </div>
                <i className='note'><p style={{ color: '#FF4747', marginRight: '4px' }}>*</p>Là trường thông tin bắt buộc</i>
                <div className='add-acc_role'>
                    <span>Vai trò:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <div className='input_status' >
                        <input type="text" id='ip' readOnly placeholder='Chọn vai trò' />
                        <div id='down' className='down' onClick={() => show('vt', 'up', 'down')}><TiArrowSortedDown /></div>
                        <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('vt', 'up', 'down')}><TiArrowSortedUp /></div>
                    </div>
                    <div id='vt' className='select-drop-down' onClick={() => show('vt', 'up', 'down')}>
                        <div className='select-drop-down-item ' onClick={() => Chose('kt', 'ip')}><label id='kt'>Kế toán</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('bs', 'ip')}><label id='bs'>Bác sỹ</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('lt', 'ip')}><label id='lt'>Lễ tân</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('ql', 'ip')}><label id='ql'>Quản lý</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('ad', 'ip')}><label id='ad'>Admin</label></div>
                        <div className='select-drop-down-item ' onClick={() => Chose('supad', 'ip')}><label id='supad'>Superadmin</label></div>
                    </div>
                </div>
            </div>
            <div className='cancel-add-btn'>
                <button className='btn-cancel'>Hủy bỏ</button>
                <button className='btn-add'>{props.title}</button>
            </div>
        </div>
    )
}
