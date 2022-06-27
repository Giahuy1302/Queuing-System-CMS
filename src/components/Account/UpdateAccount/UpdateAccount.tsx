import { Menubar } from "../../Layout/Menubar"
import { Topbar } from "../../Layout/Topbar"
import { AddAccountContent } from "../AddAccount/AddAccountContent"

export const UpdateAccount = () => {
    return (
      <div className='back'>
          <div className="bg">
              <AddAccountContent title='Cập nhật'/>
              <Menubar buttonid="qltk"/>
              <Topbar nametitle1='Cài đặt hệ thống ﹥' nametitle2='Quản lý tài khoản ﹥' href='/account' nametitle21='' href2='' nametitle3='Cập nhật tài khoản'/>
          </div>
      </div>
    )
  } 