import logo from '../images/logo.svg'
import forget from '../images/forget.svg'
import { Link } from 'react-router-dom'

export const ForgetPW = () => {
    return (
        <div className="back">
            <div className="bg">
                <div className="forget-page">
                    <img className="logo" src={logo} alt="" />
                    <p>Đặt lại mật khẩu</p>
                    <div className='pass-content'>
                        <p>Vui lòng nhập email để đặt lại mật khẩu của bạn *</p>
                        <input type="text" />
                    </div>
                    <Link to={'/'}>
                        <button className='btn-cancel'>Hủy</button>
                    </Link>
                    <Link to={'/quen-mat-khau-2'}>
                        <button className='btn-continue'>Tiếp tục</button>
                    </Link>
                    <div className='banner'>
                        <img src={forget} alt="" />
                    </div>
                </div>
            </div>
        </div>


    )
}