import { BsCalendar, BsCalendarCheck, BsBookmarkStar, BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs'
import { MdOutlineContactPhone } from 'react-icons/md'



export const Cards = () => {
    return (
        <div className="main-cards">
            <div className="card">
                <div className="title-card">
                    <div className="icon-title">
                        <BsCalendar className='icon'/>
                    </div>
                    <p className="title">Số thứ tự đã cấp</p>
                </div>
                <p className="count">4.221</p>
                <div className="grown">
                    <BsArrowUpShort className='up-down-grown'/>
                    <p>32,41%</p>
                </div>
            </div> 
            <div className="card">
                <div className="title-card">
                    <div className="icon-title" style={{background:'#E1F7E6'}}>
                        <BsCalendarCheck className='icon' style={{color:'#35C75A'}}/>
                    </div>
                    <p className="title">Số thứ tự đã sử dụng</p>
                </div>
                <p className="count">3.721</p>
                <div className="grown" style={{background:'rgba(231, 63, 63, 0.15)'}}>
                    <BsArrowDownShort className='up-down-grown'/>
                    <p style={{color:'#F86D6D'}}>32,41%</p>
                </div>
            </div>
            <div className="card">
                <div className="title-card">
                    <div className="icon-title" style={{background:'#FFF3E9'}}>
                        <MdOutlineContactPhone className='icon' style={{color:'#FFAC6A'}}/>
                    </div>
                    <p className="title">Số thứ tự đang chờ</p>
                </div>
                <p className="count">468</p>
                <div className="grown">
                    <BsArrowUpShort className='up-down-grown'/>
                    <p>32,41%</p>
                </div>
            </div>
            <div className="card">
                <div className="title-card">
                    <div className="icon-title" style={{background:'rgba(231, 63, 63, 0.15)'}}>
                        <BsBookmarkStar className='icon' style={{color:'#F86D6D'}}/>
                    </div>
                    <p className="title">Số thứ tự đã bỏ qua</p>
                </div>
                <p className="count">32</p>
                <div className="grown" style={{background:'rgba(231, 63, 63, 0.15)'}}>
                    <BsArrowDownShort className='up-down-grown'/>
                    <p style={{color:'#F86D6D'}}>32,41%</p>
                </div>
            </div>
        </div>
    )
}