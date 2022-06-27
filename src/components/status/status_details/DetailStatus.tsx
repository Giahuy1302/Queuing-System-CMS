import React from 'react'
import './DetailStatus.css'
export const Completed = () => {
    return (
        <div className='status_detail'>
            <p className='dot-comp'></p>
            <p>Đã hoàng thành</p>
        </div>
    )
}
export const Doing = () => {
    return (
        <div className="status_detail">
            <p className="dot-doing"></p>
            <p>Đang thực hiện</p>
        </div>
    )
}

export const Absent = () => {
    return (
        <div className='status_detail'>
            <p className="dot-abs"></p>
            <p>Vắng</p>
        </div>
    )
}

