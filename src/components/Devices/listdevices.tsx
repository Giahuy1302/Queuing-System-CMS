import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Add } from './btnRightLayout/add'
import { Pagination } from '../Pagination/pagination'
import { Link } from "react-router-dom"
import { FiSearch } from 'react-icons/fi'
import { Connected, Disconnected } from '../status/connect/connect'
import { Actived, NonActived } from '../status/active/active'

export const Listdevices = () => {
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
    const showmore = (id: string) => {

            const btn: any = document.getElementById(id)
            if (btn.style.display === 'none')
                btn.style.display = 'flex';

            document.addEventListener("mousedown", (event) => {
                btn.style.display = 'none';
            })

        }
    return (
        <div>
            <h1>Danh sách thiết bị</h1>

            <div className='table'>
                <table>
                    <tr>
                        <th style={{ width: '103px' }}><p>Mã thiết bị</p></th>
                        <th style={{ width: '99px' }}><p>Tên thiết bị</p></th>
                        <th style={{ width: '138px' }}><p>Địa chỉ IP</p></th>
                        <th style={{ width: '171px' }}><p>Trạng thái hoạt động</p></th>
                        <th style={{ width: '145px' }}><p>Trạng thái kết nối</p></th>
                        <th style={{ width: '268px' }}><p>Dịch vụ sử dụng</p></th>
                        <th style={{ width: '82px' }}></th>
                        <th style={{ width: '106px' }}></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <label onClick={() => showmore('c2')}>Xem thêm</label>
                                <i className="div-more" id="c2">Khám tim mạch, Khám Sản -
                                    Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát
                                </i>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to={'details'}>
                                    Chi tiết
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to={'updates'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='device_status_active'>
                <p>Trạng thái hoạt động</p>
                <div className='input_status' >
                    <input type="text" id='ip' readOnly value={'Tất cả'} />
                    <div id='down' className='down' onClick={() => show('tthd', 'up', 'down')}><TiArrowSortedDown /></div>
                    <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('tthd', 'up', 'down')}><TiArrowSortedUp /></div>
                </div>
                <div id='tthd' className='select-drop-down' onClick={() => show('tthd', 'up', 'down')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('hd', 'ip')}><label id='hd'>Hoạt động</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('nhd', 'ip')}><label id='nhd'>Ngừng hoạt động</label></div>
                </div>
            </div>
            <div className='device_status_connect'>
                <p>Trạng thái kết nối</p>
                <div className='input_connect' >
                    <input type="text" id='ip1' readOnly value={'Tất cả'} />
                    <div id='down1' className='down' onClick={() => show('ttkn', 'up1', 'down1')}><TiArrowSortedDown /></div>
                    <div id="up1" className="up" style={{ display: 'none' }} onClick={() => show('ttkn', 'up1', 'down1')}><TiArrowSortedUp /></div>
                </div>
                <div id='ttkn' className='select-drop-down' onClick={() => show('ttkn', 'up1', 'down1')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc1', 'ip1')}><label id='tc1'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('kn', 'ip1')}><label id='kn'>Kết nối</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('mkn', 'ip1')}><label id='mkn'>Mất kết nối</label></div>
                </div>
            </div>
            <div className='search'>
                <p>Từ khóa</p>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <div>
                <Link to={'add-device'}>
                    <Add nametitle='Thêm thiết bị' />
                </Link>
            </div>

            <div className="pagin">
                <Pagination />
            </div>
        </div>
    )
}
