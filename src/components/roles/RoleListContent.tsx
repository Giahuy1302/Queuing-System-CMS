import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Add } from '../Devices/btnRightLayout/add'
import './roles.css'
export const RoleListContent = () => {
    return (
        <div className='role_content'>
            <h1>Danh sách vai trò</h1>
            <div className='search'>
                <p>Từ khóa</p>
                <input type="text" placeholder='Nhập từ khóa' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th style={{width: '224px'}}>
                            <div>
                                <p>Tên vai trò</p>
                            </div>
                        </th>
                        <th style={{width: '224px'}}>
                            <div>
                                <p>Số người dùng</p>
                            </div>
                        </th>
                        <th style={{width: '537px'}}>
                            <div>
                                <p>Mô tả</p>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>Kế toán</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>Bác sĩ</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>Lễ tân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>Quản lý</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>Admin</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>Superadmin</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>6</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'update-role'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <Link to ={'add-role'}>
                <Add nametitle='Thêm vai trò'/>
            </Link>
        </div>
    )
}
