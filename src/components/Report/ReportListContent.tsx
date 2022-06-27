import React from 'react'
import './report.css'
import { IoMdArrowDropright } from 'react-icons/io'
import { TiArrowUnsorted } from 'react-icons/ti'
import { SkipedStatus, UsingStatus, WaitingStatus } from '../status/status_order/orderStatus'
import { Pagination } from '../Pagination/pagination'
import { DownloadBtn } from '../Devices/btnRightLayout/downloadBtn'

export const ReportListContent = () => {
    return (
        <div className='report_content'>
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
            <DownloadBtn/>
            <div className="table">
                <table>
                    <tr>
                        <th>
                            <div>
                                <p>Số thứ tự</p>
                                <i className='sort-icon'>
                                    <TiArrowUnsorted />
                                </i>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Tên dịch vụ</p>
                                <i className='sort-icon'>
                                    <TiArrowUnsorted />
                                </i>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Thời gian cấp</p>
                                <i className='sort-icon'>
                                    <TiArrowUnsorted />
                                </i>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Tình trạng</p>
                                <i className='sort-icon'>
                                    <TiArrowUnsorted />
                                </i>
                            </div>
                        </th>
                        <th>
                            <div>
                                <p>Nguồn cấp</p>
                                <i className='sort-icon'>
                                    <TiArrowUnsorted />
                                </i>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010001</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010002</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Răng hàm mặt</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Hệ thống</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010003</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám sản - phụ khoa</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <SkipedStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010004</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Răng hàm mặt</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Hệ thống</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010005</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Răng hàm mặt</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010006</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tổng quát</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <SkipedStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Hệ thống</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010007</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám hô hấp</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010008</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám hô hấp</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010009</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Tai mũi họng</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <SkipedStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Hệ thống</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                            <div>
                                <p>2010010</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám sản - phụ khoa</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>07:20 - 07/10/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus/>
                        </td>
                        <td>
                            <div>
                                <p>Hệ thống</p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="pagin">
                <Pagination/>
            </div>
        </div>
    )
}
