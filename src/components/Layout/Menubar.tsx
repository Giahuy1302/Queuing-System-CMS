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
                        <p>Thi???t b???</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/services" id="dv">
                        <AiOutlineComment className="icon" />
                        <p>D???ch v???</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/order-number" id="cs">
                        <RiStackLine className="icon" />
                        <p>C???p s???</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/report" id="bc">
                        <AiOutlineBarChart className="icon" />
                        <p>B??o c??o</p>
                    </Link>
                </div>
                <div className="menubar-item" >
                    <Link to="" id="cd">
                        <RiSettingsLine className="icon" /><p> C??i ?????t h??? th???ng </p>
                        <div className="icon1">
                            <AiOutlineMore />
                        </div>
                        <div className="drop-down-item">
                            <Link to="/roles" id="qlvt">
                                <p>Qu???n l?? vai tr??</p>
                            </Link>
                            <Link to="/account" id="qltk">
                                <p>Qu???n l?? t??i kho???n</p>
                            </Link>
                            <Link to="/user-log" id="nknd">
                                <p>Nh???t k?? ng?????i d??ng</p>
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='logout'>
                <a href="/">
                    <div>
                        <FiLogOut className='icon' />
                        <p>????ng xu???t</p>
                    </div>
                </a>
            </div>
        </div>

    )
}