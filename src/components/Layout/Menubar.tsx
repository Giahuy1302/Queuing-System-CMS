import { FiLogOut, FiMonitor } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiStackLine, RiSettingsLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineMore, AiOutlineComment } from "react-icons/ai";
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
import './menu.css'
type idbuton = {
    buttonid: string
}

export const Menubar = (id:idbuton) => {

    var idbtn: string = id.buttonid;
    const changebutton = (id: string) => {
        if (id != null) {
            const btn: any = document.getElementById(id);
            btn.classList.toggle("button-active");
            if (id === "nknd") {
                const btn1: any = document.getElementById("nknd");
                btn1.classList.toggle("button-nknd");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
            if (id === "qlvt") {
                const btn2: any = document.getElementById("qlvt");
                btn2.classList.toggle("button-qlvt");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
            if (id === "qltk") {
                const btn3: any = document.getElementById("qltk");
                btn3.classList.toggle("button-qltk");
                const btnst: any = document.getElementById('cd')
                btnst.classList.toggle('button-cd')
            }
        }
    }

    return (
        <div className="main-menubar" onLoad={() => changebutton(idbtn)}>
            <div className="main-logo" >
                <Link to={'/dashboard'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="menubar">
                <div className="menubar-item">
                    <Link to="/dashboard" id="db">
                        <MdOutlineDashboard className="icon" />
                        <p>Dashboard</p>
                    </Link>
                </div >
                <div className="menubar-item">
                    <Link to="/devices" id="tb">
                        <FiMonitor className="icon" />
                        <p>Thiết bị</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/services" id="dv">
                        <AiOutlineComment className="icon" />
                        <p>Dịch vụ</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/order-number" id="cs">
                        <RiStackLine className="icon" />
                        <p>Cấp số</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/report" id="bc">
                        <AiOutlineBarChart className="icon" />
                        <p>Báo cáo</p>
                    </Link>
                </div>
                <div className="menubar-item" >
                    <Link to="" id="cd">
                        <RiSettingsLine className="icon" /><p> Cài đặt hệ thống </p>
                        <div className="icon1">
                            <AiOutlineMore />
                        </div>
                        <div className="drop-down-item">
                            <Link to="/roles" id="qlvt">
                                <p>Quản lý vai trò</p>
                            </Link>
                            <Link to="/account" id="qltk">
                                <p>Quản lý tài khoản</p>
                            </Link>
                            <Link to="/user-log" id="nknd">
                                <p>Nhật ký người dùng</p>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='logout'>
                <a href="/">
                    <div>
                        <FiLogOut className='icon' />
                        <p>Đăng xuất</p>
                    </div>
                </a>
            </div>
        </div>

    )
}