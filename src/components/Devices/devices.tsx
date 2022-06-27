
import { Listdevices } from "./listdevices"
import { Menubar } from "../Layout/Menubar"
import { Topbar } from "../Layout/Topbar"

export const Devices = () => {
    return (
        <div className="back">
            <div className="bg">
                <Menubar buttonid="tb"/>
                <Listdevices/>
                <Topbar nametitle1='Thiết bị ﹥' nametitle2='' href='' nametitle21='' href2='' nametitle3='Danh sách thiết bị' />
            </div>
            
        </div>
    )
}