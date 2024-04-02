'use client'
import React from 'react'
import Headerleft from './headerleft'
import Headerright from './headerright'
function header() {
        return (
                <header className='z-50 w-full 2xl:w-[80%] flex fixed top-0 left-[50%] translate-x-[-50%] bg-head h-[150px] justify-start md:justify-between pt-12 px-5 items-center shadow-shadow1'>
                        <Headerleft />
                        <Headerright />
                </header>
        )
}

export default header