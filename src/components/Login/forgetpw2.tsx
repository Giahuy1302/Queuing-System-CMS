
import { Link } from 'react-router-dom'
import forget from '../images/forget.svg'
import logo from '../images/logo.svg'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export const Step2 = () => {
    const showpw =(pw: string, eyeshow: string, eyehide: string)=> {
        const show: any = document.getElementById(eyeshow)
        const hide: any = document.getElementById(eyehide)
        const eye: any = document.getElementById(pw)
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
          show.style.display = 'flex';
          hide.style.display = 'none';
        }
        else {
          hide.style.display = 'flex';
          show.style.display = 'none';
        }
      }
    return (
        <div className="back">
            <div className="bg">
                <div className="step2">
                    <img className='logo' src={logo} alt="" />
                    <p>Đặt lại mật khẩu mới</p>
                    <div className='new-pass'>
                        <label>Mật khẩu</label>
                        <input type="password" id='pw1'/>
                        <FiEyeOff className="show" id='show1' onClick={()=>showpw('pw1', 'show1', 'hide1')}/>
                        <FiEye className='hide' id='hide1' style={{display:'none'}} onClick={()=>showpw('pw1', 'show1', 'hide1')}/>
                    </div>
                    <div className='new-pass-again'>
                        <label>Nhập lại mật khẩu</label>
                        <input type="password" id='pw2'/>
                        <FiEyeOff className="show" id='show2' onClick={()=>showpw('pw2', 'show2', 'hide2')}/>
                        <FiEye className='hide' id='hide2' style={{display:'none'}} onClick={()=>showpw('pw2', 'show2', 'hide2')}/>
                    </div>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <button>Xác nhận</button>
                    </Link>
                    <div className='banner'>
                        <img src={forget} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}