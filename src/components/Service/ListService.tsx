import { Pagination } from '../Pagination/pagination'
import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import './service.css'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Add } from '../Devices/btnRightLayout/add'
import { Actived, NonActived } from '../status/active/active'

export const ListService = () => {
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
        <h1>Quản lý dịch vụ</h1>
        <div className="table">
          <table>
            <tr>
              <th style={{ width: '150px' }}><p>Mã dịch vụ</p></th>
              <th style={{ width: '224px' }}><p>Tên dịch vụ</p></th>
              <th style={{ width: '230px' }}><p>Mô tả</p></th>
              <th style={{ width: '253px' }}><p>Trạng thái hoạt động</p></th>
              <th style={{ width: '125px' }}></th>
              <th style={{ width: '125px' }}></th>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <NonActived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <NonActived />
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived />
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
          </table>
        </div>
        <div className="service_status_active">
          <p>Trạng thái hoạt động</p>
          <div className='service_input-status' >
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

        <div className='datePicker'>
          <p>Chọn thời gian</p>
          <div className='pick'>
            <input type="date" />
            <div className='icon_next'>
              <IoMdArrowDropright />
            </div>
            <input type="date" />
          </div>
        </div>
        <div className="search">
          <p>Từ khóa</p>
          <input type="text" placeholder='Nhập từ khóa...' />
          <div className='icon_search'>
            <FiSearch />
          </div>
        </div>
        <Link to={'add-service'}>
          <Add nametitle='Thêm dịch vụ'></Add>
        </Link>
        

        <Menubar buttonid='dv' />
        <div className='pagin'>
          <Pagination />
        </div>
        <Topbar nametitle1='Dịch vụ ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Danh sách dịch vụ' />
      </div>
    </div>
  )
}
