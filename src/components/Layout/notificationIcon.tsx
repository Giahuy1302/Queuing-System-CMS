import { IoNotifications } from "react-icons/io5";

export const IconNoti = () => {
    const handleNotice = () => {
        const iconBell: any = document.querySelector(".notification-icon")
        const notice: any = document.querySelector(".notifi-content")
        if (iconBell.classList.toggle("button-notice-active")) {
            notice.style.display = 'flex';
        } else {
            notice.style.display = 'none';
        }
    }
    return (
        <div className="notification-icon" onClick={()=>handleNotice()}>
            
            <IoNotifications className="icon-bell" />
            
            <div className='notifi-content'>
                <div className="notifi-header">
                    <p>Thông báo</p>
                </div>
                <div className="notifi-message">
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Nguyễn Thị Thùy Dung</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Nguyễn Thiên Chinh</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Võ Thị Kim Liên</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Hoàng Nguyễn Quốc Huy</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Võ Ngọc Lan Anh</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Nguyễn Thị Trúc Anh</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Nguyễn Thị Trúc Anh</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                    <div className="notifi-message-item">
                        <div>
                            <p className="notifi-name_user">Người dùng: Nguyễn Thị Trúc Anh</p>
                            <p className="notifi-time">Thời gian nhận số: 12h20 ngày 31/11/2021</p>
                        </div>
                        <hr className="line"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
