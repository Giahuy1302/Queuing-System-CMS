import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import 'apexcharts'
import { type } from '@testing-library/user-event/dist/type'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

type Date = {
  charts: string
}

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
export const Chart = (props: Date) => {

  const Chose = (id: string, input: string) => {
    const ip: any = document.getElementById(input)
    const text: any = document.getElementById(id)
    ip.value = text.innerText
  }
 
  const show = (id: string, u: string, d: string) => {
    const ip: any = document.getElementById(id)
    const up: any = document.getElementById(u)
    const down: any = document.getElementById(d)
    if (ip.style.display === 'none') {
      ip.style.display = 'block';
      up.style.display = 'flex';
      down.style.display = 'none';
    } else {
      ip.style.display = 'none';
      down.style.display = 'flex';
      up.style.display = 'none';
    }
  }
  const changeChart = (chart: string) => {
    const chart1: any = document.getElementById('chart1')
    const chart2: any = document.getElementById('chart2')
    const chart3: any = document.getElementById('chart3')
    if (chart === 'ng') {
      chart1.style.display = 'block'
      chart2.style.display = 'none'
      chart3.style.display = 'none'
    }
    if (chart === 'tuan') {
      chart1.style.display = 'none'
      chart2.style.display = 'block'
      chart3.style.display = 'none'
    }
    if (chart === 'thang') {
      chart1.style.display = 'none'
      chart2.style.display = 'none'
      chart3.style.display = 'block'
    }
  }

  const [stateThang] = useState({
    series: [
      {
        name: "series-1",
        type: "area",
        data: [2800, 4200, 3200, 3800, 3300, 4110, 3500, 3800, 3300, 4110, 3500, 4830]
      }
    ],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        fontFamily: "Nunito",
        zoom: {
          enabled: false
        }
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      },
      zoom: {
        enabled: false
      },
      stroke: {
        width: 0.99,
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Bảng thống kê theo tháng",
        style: {
          fontSize: '20px',
        }
      },
      subtitle: {
        text: 'Tháng 6/2022',
        style: {
          fontSize: '14px',
          color: '#A9A9B0'
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => ''
          },
        }
      }
    }
  })
  const [stateNgay] = useState({
    series: [
      {
        name: "series-1",
        type: "area",
        data: [4110, 3500, 3800, 3300, 4110, 3500, 4830]
      }
    ],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        fontFamily: "Nunito",
        zoom: {
          enabled: false
        }
      },
      xaxis: {
        categories: [1, 5, 10, 15, 20, 25, 31]
      },
      zoom: {
        enabled: false
      },
      stroke: {
        width: 0.99,
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Bảng thống kê theo ngày",
        style: {
          fontSize: '20px',
        }
      },
      subtitle: {
        text: 'Tháng 6/2022',
        style: {
          fontSize: '14px',
          color: '#A9A9B0'
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => ''
          },
        }
      }
    }
  })
  const [stateTuan] = useState({
    series: [
      {
        name: "series-1",
        type: "area",
        data: [2800, 4200, 3200, 3800]
      }
    ],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        fontFamily: "Nunito",
        zoom: {
          enabled: false
        }
      },
      xaxis: {
        categories: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4']
      },
      zoom: {
        enabled: false
      },
      stroke: {
        width: 0.99,
        curve: "smooth"
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Bảng thống kê theo tuần",
        style: {
          fontSize: '20px',
        }
      },
      subtitle: {
        text: 'Tháng 6/2022',
        style: {
          fontSize: '14px',
          color: '#A9A9B0'
        }
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        },
        y: {
          title: {
            formatter: () => ''
          },
        }
      }
    }
  })

  return (
    <div className='chart-bg'>
      <div className='chart' id='chart1'>
        <ReactApexChart
          series={stateNgay.series}
          type="area"
          width={750}
          height={450}
          option={stateNgay.options}
        />
      </div>
      <div className="chart" id='chart2' style={{ display: 'none' }}>
        <ReactApexChart
          series={stateTuan.series}
          type="area"
          width={750}
          height={450}
          option={stateTuan.options}
        />
      </div>
      <div className="chart" id='chart3' style={{ display: 'none' }}>
        <ReactApexChart
          series={stateThang.series}
          type="area"
          width={750}
          height={450}
          option={stateThang.options}
        />
      </div>
      <div className='change-chart'>
        <span>Xem theo</span>
        <div className='typechart-select'>
          <input type="text" id='ip' value={'Ngày'} />
          <div id='down' className='down' onClick={() => show('typechart', 'up', 'down')}><TiArrowSortedDown /></div>
          <div id="up" className="up" style={{ display: 'none' }} onClick={() => show('typechart', 'up', 'down')}><TiArrowSortedUp /></div>
        </div>
        <div id='typechart' className='select-drop-down' onClick={() => show('typechart', 'up', 'down')}>
          <div className='select-drop-down-item' onClick={() => { Chose('ng', 'ip'); changeChart('ng'); }}><label id='ng'>Ngày</label></div>
          <div className='select-drop-down-item' onClick={() => { Chose('tuan', 'ip'); changeChart('tuan') }}><label id='tuan'>Tuần</label></div>
          <div className='select-drop-down-item' onClick={() => { Chose('thang', 'ip'); changeChart('thang') }}><label id='thang'>Tháng</label></div>
        </div>
      </div>
    </div>
  )
}
// export default Chart