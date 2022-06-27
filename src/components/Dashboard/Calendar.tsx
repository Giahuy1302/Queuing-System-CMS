import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './calendar/calendar.css'

export const Calendarr = () => {
  const [date, onChange] = useState(new Date());

  return (
    <div className='calendar-container'>
        <Calendar onChange={onChange} value={date} locale='en' />
    </div>
  )
}
 