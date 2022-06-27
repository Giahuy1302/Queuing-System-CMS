import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { Pagination } from '../Pagination/pagination'
import './userlog.css'
export const UserLogContent = () => {
    return (
        <div className='userlog_content'>
            <div className='datePicker'>
                <p>Chọn thời gian</p>
                <div className='pick'>
                    <input type="date" placeholder='10/10/2021' />
                    <div className='icon_next'>
                        <IoMdArrowDropright />
                    </div>
                    <input type="date" placeholder='18/10/2021' />
                </div>
            </div>
            <div className="search">
                <p>Từ khóa</p>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <div className="table">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <div>
                                    <p>Tên đăng nhập</p>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <p>Thời gian tác động</p>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <p>IP thực hiện</p>
                                </div>
                            </th>
                            <th>
                                <div>
                                    <p>Thao tác thực hiện</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    <p>tuyetnguyen@12</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>01/12/2021 15:12:17</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>192.168.3.1</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Cập nhật thông tin dịch vụ DV_01</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            <div className="pagin">
                <Pagination />
            </div>
        </div>
    )
}
