
import { Cards } from "./Cards"
import { Chart } from "./Chart"
import { Menubar } from "../Layout/Menubar"
import { Overview } from "./overview"
import { Topbar } from "../Layout/Topbar"

export const Dashboard = () => {
    return (
        <div className="back">
            <div className='bg'>
                <h1>Biểu đồ cấp số</h1>
                <Cards/>
                <Chart charts=''/>
                <Menubar buttonid="db"/>
                <Overview />
                <Topbar nametitle1='' nametitle2='' href='' nametitle21='' href2='' nametitle3='Dashboard' />
            </div>
        </div>
    )
} 