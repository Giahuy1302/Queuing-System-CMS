import { FiMonitor } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import Chart from 'react-apexcharts'
import { buildStyles, CircularProgressbar } from "@rhazegh/react-circular-progressbar";
import { Calendarr } from "./Calendar";
import { Link } from "react-router-dom";

export const Overview = () => {
    return (
        <div className="overview">
            <span className="over-span">Tổng quan</span>
            <Link to={'/devices'}>
                <div className="overview-device">
                    <div className='percent'>
                        <div className="percent-1">
                            <CircularProgressbar
                                value={90}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#FF7506',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <div className='percent-2'>
                            <CircularProgressbar
                                value={10}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#7E7D88',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <p>90%</p>
                    </div>
                    <div className='quantity'>
                        <p className="number">4.221</p>
                        <div className="icon-name">
                            <FiMonitor className="icon" />
                        </div>
                        <p className="name">Thiết bị</p>
                    </div>
                    <div className="status">
                        <div className="status-on">
                            <p className="dot-on"></p>
                            <div>
                                <p>Đang hoạt động</p>
                                <p className="status-on-total">3.799</p>
                            </div>
                        </div>
                        <div className="status-off">
                            <p className="dot-off"></p>
                            <div>
                                <p>Ngưng hoạt động</p>
                                <p className="status-off-total">422</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={'/services'}>
                <div className="overview-service">
                    <div className='percent'>
                        <div className="percent-1">
                            <CircularProgressbar
                                value={76}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#4277FF',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <div className='percent-2'>
                            <CircularProgressbar
                                value={24}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#7E7D88',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <p>76%</p>
                    </div>
                    <div className='quantity'>
                        <p className="number">276</p>
                        <div className="icon-name">
                            <AiOutlineComment className="icon" style={{ color: '#4277FF' }} />
                        </div>
                        <p className="name" style={{ color: '#4277FF' }}>Dịch vụ</p>
                    </div>
                    <div className="status">
                        <div className="status-on">
                            <p className="dot-on" style={{ background: '#4277FF' }}></p>
                            <div>
                                <p>Đang hoạt động</p>
                                <p className="status-on-total" style={{ color: '#4277FF' }}>210</p>
                            </div>
                        </div>
                        <div className="status-off">
                            <p className="dot-off"></p>
                            <div>
                                <p>Ngưng hoạt động</p>
                                <p className="status-off-total" style={{ color: '#4277FF' }}>66</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link> 
            <Link to={'/order-number'}>
                <div className="overview-num-order">
                    <div className='percent'>
                        <div className="percent-1">
                            <CircularProgressbar
                                value={86}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#35C75A',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <div className='percent-2'>
                            <CircularProgressbar
                                value={11}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#7E7D88',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <div className="percent-3">
                            <CircularProgressbar
                                value={3}
                                strokeWidth={5}
                                styles={buildStyles({
                                    pathColor: '#F178B6',
                                    trailColor: '#EAEAEC'
                                })} />
                        </div>
                        <p>86%</p>
                    </div>
                    <div className='quantity'>
                        <p className="number">4.221</p>
                        <div className="icon-name">
                            <RiStackLine className="icon" style={{ color: '#35C75A' }} />
                        </div>
                        <p className="name" style={{ color: '#35C75A' }}>Cấp số</p>
                    </div>
                    <div className="status-num-order">
                        <div className="status-used">
                            <p className="dot-used" style={{ color: '#4277FF' }}></p>
                            <div>
                                <p>Đã sử dụng</p>
                                <p className="status-used-total" style={{ color: '#35C75A' }}>3.721</p>
                            </div>
                        </div>
                        <div className="status-wait">
                            <p className="dot-wait"></p>
                            <div>
                                <p>Đang chờ</p>
                                <p className="status-wait-total" style={{ color: '#35C75A' }}>486</p>
                            </div>
                        </div>
                        <div className="status-skip">
                            <p className="dot-skip"></p>
                            <div>
                                <p>Bỏ qua</p>
                                <p className="status-skip-total" style={{ color: '#35C75A' }}>32</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="overview-datepicker">
                <Calendarr />
            </div>
        </div>
    )
}