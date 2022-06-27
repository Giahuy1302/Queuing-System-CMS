import { HiOutlineCamera } from 'react-icons/hi'

export const Infomation = () => {
    return (
        <div className="infomation-img">
            <div className='name-img'>
                <div className='img-icon'>
                    <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/278233334_1921015778087081_5663478882079989297_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3LbLLV80WW8AX_p3zBm&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT97o5VvpUFoHY-rmWtce7_KxQE_-LZCBDn7kErA_7kzJQ&oe=62BEB160" alt="" />
                    <div className='icon-cam'><HiOutlineCamera className='camera' /></div>
                </div>
                <p>Trần Gia Huy</p>
            </div>
            <div className='infomation'>
                <div className='info-item'>
                    <label htmlFor="">Tên người dùng</label>
                    <input type="text" value={'Trần Gia Huy'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Tên đăng nhập</label>
                    <input type="text" value={'trgiahuy1302'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" value={'0706013625'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text"  value={'************'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Email</label>
                    <input type="text" value={'trgiahuy1302@gmail.com'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Vai trò</label>
                    <input type="text" value={'Admin'}/>
                </div>
            </div>
        </div>
    )
}