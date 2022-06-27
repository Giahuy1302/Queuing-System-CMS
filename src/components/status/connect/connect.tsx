import React from 'react'
import './connect.css'


export const Connected = () => {
    return (
        <div className='status_connect'>
            <p className='dot-con'></p>
            <p>Kết nối</p>
        </div>
    )
}
export const Disconnected = () => {
    return (
        <div className='status_connect'>
            <p className="dot-dis"></p>
            <p>Mất kết nối</p>
        </div>
    )
}