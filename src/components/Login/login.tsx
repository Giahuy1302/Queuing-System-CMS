
import { FiAlertCircle, FiEye, FiEyeOff } from 'react-icons/fi'
import login from '../images/login.svg'
import logo from '../images/logo.svg'
import { Link } from "react-router-dom"

export const Login = () => {
    const showpw = () => {
        const hide: any = document.getElementById('hide')
        const show: any = document.getElementById('show')
        const eye: any = document.getElementById('pw1')
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
    const checklogin = (e: React.SyntheticEvent) => {
        const wn: any = document.getElementById('warning')
        const pw: any = document.getElementById('pass')
        const tk: any = document.getElementById('name')
        const qmk1: any = document.getElementById('qmk1')
        const qmk2: any = document.getElementById('qmk2')
        e.preventDefault();
        const target = e.target as typeof e.target & {
            name: { value: string };
            password: { value: string };
        };
        const name = target.name.value;
        const password = target.password.value;
        if (name !== '' && password !== '') {
            if (name === "giahuy1302" && password === "vn0909273966") {
                var parser = document.location.href = "/info";
                return (parser);
            }
            else {
                pw.style.border = "1.5px solid red"
                tk.style.border = "1.5px solid red"
                wn.style.display = 'flex'
                qmk1.style.display = 'none'
                qmk2.style.display = 'flex'
            }
        } else {
            pw.style.border = "1.5px solid red"
            tk.style.border = "1.5px solid red"
        }
    }
    return (
        <div className="login-page" >
            <img className="logo" src={logo} alt="" />
            <form onSubmit={checklogin} autoComplete='off'>

                <div className="username">
                    <label htmlFor="">Tên đăng nhập *</label>
                    <div id='name' style={{ borderRadius: '8px' }}>
                        <input type="text" name='name' />
                    </div>
                </div>

                <div className="password">
                    <label htmlFor="">Mật khẩu *</label>
                    <div id='pass' style={{ borderRadius: '8px' }}>
                        <input type="password" id='pw1' name='password'></input>
                        <FiEyeOff className="show" id='show' onClick={() => showpw()} />
                        <FiEye className='hide' id='hide' style={{ display: 'none' }} onClick={() => showpw()} />
                    </div>

                </div>
                <div id='warning' className='warning' style={{ display: 'none'}}>
                    <FiAlertCircle className='icon' style={{ color: 'red', flex: 'none', marginRight: '4px' }} />
                    <p style={{ flex: '4', margin: 'auto', color: 'red', fontSize: '14px' }}>Sai mật khẩu hoặc tên đăng nhập</p>
                </div>

                <Link to={'/quen-mat-khau'} className='a' id='qmk1'>
                    Quên mật khẩu?
                </Link>
                <div>
                    <button type="submit" className="submit">Đăng nhập</button>
                </div>
            </form>
            <Link to='/quen-mat-khau' className='a2' id='qmk2' style={{ margin: "auto" }} >Quên mật khẩu?</Link>

            <div className="banner">
                <img src={login} alt="" />
                <div className="name_proj">
                    <p>Hệ thống</p>
                    <p>QUẢN LÝ XẾP HÀNG</p>
                </div>
            </div>
        </div>
    )
}