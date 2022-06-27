import React from 'react'
import './Addrole.css'
type name = {
    namebtn: string
}
export const AddRoleContent = (props:name) => {
    return (
        <div>
            <h1>Danh sách vai trò</h1>
            <div className='addrole_content'>
                <h2>Thông tin vai trò</h2>
                <div className='addrole_name-role'>
                    <span>Tên vai trò <p>*</p></span>
                    <input type="text" placeholder='Nhập tên vai trò' />
                </div>
                <div className="addrole_descripion">
                    <span>Mô tả</span>
                    <textarea rows={4} cols={50} placeholder='Nhập mô tả' />
                </div>
                <div className='note'>
                    <p style={{ color: '#FF4747', paddingRight: '2px' }}>* </p>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
                <span className='permision'>Phân quyền chức năng <p>*</p></span>
                <div className="addrole_permision">
                    <h2>Nhóm chức năng A</h2>
                    <div className='checkbox'>
                        <div className="check1">
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className="check2">
                            <input type="checkbox" />
                            <p>Chức năng x</p>
                        </div>
                        <div className="check3">
                            <input type="checkbox" />
                            <p>Chức năng y</p>
                        </div>
                        <div className="check4">
                            <input type="checkbox" />
                            <p>Chức năng z</p>
                        </div>
                    </div>
                    <h3>Nhóm chức năng B</h3>
                    <div className='checkbox'>
                        <div className="check1">
                            <input type="checkbox" />
                            <p>Tất cả</p>
                        </div>
                        <div className="check2">
                            <input type="checkbox" />
                            <p>Chức năng x</p>
                        </div>
                        <div className="check3">
                            <input type="checkbox" />
                            <p>Chức năng y</p>
                        </div>
                        <div className="check4">
                            <input type="checkbox" />
                            <p>Chức năng z</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cancel-add-btn">
                <button className='btn-cancel'>Hủy bỏ</button>
                <button className='btn-add'>{props.namebtn}</button>
            </div>
        </div>
    )
}
