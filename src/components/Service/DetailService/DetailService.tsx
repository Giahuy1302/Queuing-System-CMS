import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { UpdateAndBack } from '../../Devices/btnRightLayout/UpdateAndBack'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { Pagination } from '../../Pagination/pagination'
import { Absent, Completed, Doing } from '../../status/status_details/DetailStatus'
import './details.css'

export const DetailService = () => {
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
            <div className='bg'>
                <h1>Quản lý dịch vụ</h1>
                <div className='info-service'>
                    <h2>Thông tin dịch vụ</h2>
                    <div className="service_id">
                        <span>Mã dịch vụ:</span>
                        <p>201</p>
                    </div>
                    <div className='service_nameservice'>
                        <span>Tên dịch vụ:</span>
                        <p>Khám tim mạch</p>
                    </div>
                    <div className='service_descriptions'>
                        <span>Mô tả:</span>
                        <p>Chuyên các bệnh lý về tim</p>
                    </div>
                    <h3>Quy tắc cấp số</h3>
                    <div className="autonumber">
                        <span>Tăng tự động:</span>
                        <div className="details-input_number">
                            <input type="text" value={'0001'} className='num-start' />
                            <p>đến</p>
                            <input type="text" value={'9999'} className='num-end' />
                        </div>
                    </div>
                    <div className='prefix-number'>
                        <span>Prefix:</span>
                        <input type="text" className='prefix_detail-input' value={'0001'} />
                    </div>
                    <span className='rst'>Reset mỗi ngày</span>
                    <i className='exam'>Ví dụ: 201-2001</i>
                </div>
                <div className="detail_bg_status">
                    <div className="table">
                        <table>
                            <tr>
                                <th><p>Số thứ tự</p></th>
                                <th><p>Trạng thái</p></th>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010001</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010002</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010003</p>
                                    </div>
                                </td>
                                <td>
                                    <Doing />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010004</p>
                                    </div>
                                </td>
                                <td>
                                    <Absent />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010005</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010006</p>
                                    </div>
                                </td>
                                <td>
                                    <Doing />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010007</p>
                                    </div>
                                </td>
                                <td>
                                    <Absent />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010008</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="detail_status">
                        <span>Trạng thái</span>
                        <div className='input_status' >
                            <input type="text" id='ip' readOnly value={'Tất cả'} />
                            <div id='down' className='down' onClick={() => show('tt', 'up', 'down')}><TiArrowSortedDown /></div>
                            <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('tt', 'up', 'down')}><TiArrowSortedUp /></div>
                        </div>
                        <div id='tt' className='select-drop-down' onClick={() => show('tt', 'up', 'down')}>
                            <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                            <div className='select-drop-down-item ' onClick={() => Chose('dht', 'ip')}><label id='dht'>Đã hoàn thành</label></div>
                            <div className='select-drop-down-item ' onClick={() => Chose('dth', 'ip')}><label id='dth'>Đã thực hiện</label></div>
                            <div className='select-drop-down-item ' onClick={() => Chose('v', 'ip')}><label id='v'>Vắng</label></div>
                        </div>
                    </div>
                    <div className="detail_datepicker-status">
                        <span>Chọn thời gian</span>
                        <div className='pick'>
                            <input type="date" placeholder='10/10/2021' />
                            <div className='icon_next'>
                                <IoMdArrowDropright />
                            </div>
                            <input type="date" placeholder='18/10/2021' />
                        </div>
                    </div>
                    <div className="detail_search">
                        <span>Từ khóa</span>
                        <input type="text" placeholder='Nhập từ khóa' />
                        <div className='icon_search'>
                            <FiSearch />
                        </div>
                    </div>

                    <div className='detail_pagin'>
                        <Pagination />
                    </div>
                </div>
                <UpdateAndBack href1='/services/updates' href2='/services' />
                <Menubar buttonid='dv' />
                <Topbar nametitle1='Dịch vụ ﹥' nametitle2='Danh sách dịch vụ ﹥' href='/services' nametitle21='' href2='' nametitle3='Chi tiết' />
            </div>
        </div>
    )
}
