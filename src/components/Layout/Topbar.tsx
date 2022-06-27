import { Link } from "react-router-dom"
import { IconNoti } from "./notificationIcon"
import './top.css'
type title = {
    nametitle1?: string | undefined
    nametitle2: string | undefined
    href: string | undefined
    nametitle21: string | undefined
    href2: string | undefined
    nametitle3: string | undefined
}
export const Topbar = (props: title) => {
    return (
        <div className="topbar">
            <div className="content">
                <div className="title1" id="title">
                    <p className="title2">{props.nametitle1}</p>
                    <Link to ={props.href+''}>{props.nametitle2}</Link>
                    <Link to={props.href2+''}>{props.nametitle21}</Link>
                    <p className="title3">{props.nametitle3}</p>
                </div>
            </div>
            <div className="info">
                <IconNoti />
                <Link to="/info" className="header_info">
                    <div className="avatar">
                        <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/278233334_1921015778087081_5663478882079989297_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3LbLLV80WW8AX_p3zBm&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT97o5VvpUFoHY-rmWtce7_KxQE_-LZCBDn7kErA_7kzJQ&oe=62BEB160" alt="fail img" />
                    </div>
                    <div className="name-user">
                        <p>Xin chào</p>
                        <span>Trần Gia Huy</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
