import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { Add } from '../Devices/btnRightLayout/add'
import { Pagination } from '../Pagination/pagination'
import { Actived, NonActived } from '../status/active/active'
import { Disconnected } from '../status/connect/connect'
import './account.css'
export const AccountContent = () => {
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
        <div className='account_content'>
            <h1>Danh sách tài khoản</h1>
            <div className='table'>
                <table>
                    <tr>
                        <th>
                            <div>
                                <p>Tên đăng nhập</p>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Họ tên</p>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Số điện thoại</p>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Email</p>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Vai trò</p>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Trạng thái hoạt động</p>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@12</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn A</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919256712</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen123@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <Link to ={'update-account'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@10</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyen Văn B</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919236712</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen123@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@22</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyen Văn C</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919116712</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen222@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <NonActived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@18</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn D</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919253715</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen232@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@19</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn T</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919233712</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen244@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@18</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn K</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919277712</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen242@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@16</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn N</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919257008</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen122@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@14</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn M</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919258003</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen227@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <NonActived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>tuyetnguyen@13</p>
                            </div>
                        </td>
                        <td>
                        <div>
                                <p>Nguyễn Văn L</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>0919251274</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>tuyetnguyen278@gmail.com</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <Actived/>
                        </td>
                        <td>
                            <div>
                                <a href="">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='account_role-name'>
                <span>Tên vai trò</span>
                <div className='role-name_account' >
                    <input type="text" id='ip' readOnly value={'Tất cả'} />
                    <div id='down' className='down' onClick={() => show('tvt', 'up', 'down')}><TiArrowSortedDown /></div>
                    <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('tvt', 'up', 'down')}><TiArrowSortedUp /></div>
                </div>
                <div id='tvt' className='select-drop-down' onClick={() => show('tvt', 'up', 'down')}>
                    <div className='select-drop-down-item ' onClick={() => Chose('tc', 'ip')}><label id='tc'>Tất cả</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('kt', 'ip')}><label id='kt'>Kế toán</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('bs', 'ip')}><label id='bs'>Bác sỹ</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('lt', 'ip')}><label id='lt'>Lễ tân</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('ql', 'ip')}><label id='ql'>Quản lý</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('ad', 'ip')}><label id='ad'>Admin</label></div>
                    <div className='select-drop-down-item ' onClick={() => Chose('supad', 'ip')}><label id='supad'>Superadmin</label></div>
                </div>
            </div>
            <div className='search'>
                <p>Từ khóa</p>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <Link to={'add-account'}>
                <Add nametitle='Thêm tài khoản'/>
            </Link>
            
            <div className="pagin">
                <Pagination/>
            </div>
        </div>
    )
}
