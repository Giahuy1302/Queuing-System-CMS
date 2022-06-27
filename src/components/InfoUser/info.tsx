import { Infomation } from "./infomation"
import { Menubar } from "../Layout/Menubar"
import { Topbar } from "../Layout/Topbar"

export const Info = () => {
    return(
        <div className="back">

        <div className="bg">
            <Menubar buttonid=""/>
            <Infomation/>
            <Topbar nametitle1='' nametitle2='' href='' nametitle21='' href2='' nametitle3='Thông tin cá nhân'/>
        </div>
        </div>
    )
}