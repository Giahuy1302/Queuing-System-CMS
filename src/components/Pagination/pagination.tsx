import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

export const Pagination = () => {
    return (
        <div className='pagination'>
            <a href='#' className='prev-page'>
                <IoMdArrowDropleft />
            </a>
            <a href="#" className='page-number'>1</a>
            <a href="#" className='page-number'>2</a>
            <a href="#" className='page-number'>3</a>
            <a href="#" className='page-number'>4</a>
            <a href="#" className='page-number'>5</a>
            ...
            <a href="#" className='page-number'>10</a>
            <a href='#' className='next-page'>
                <IoMdArrowDropright />
            </a>
        </div>
    )
}
