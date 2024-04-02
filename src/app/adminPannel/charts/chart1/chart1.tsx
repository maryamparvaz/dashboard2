'use client'
import React from 'react'
function chart1() {
        return (
                <div className='flex w-full flex-wrap justify-evenly'>
                        <Chartleft/>
                        <Chartright/>
                </div>
        )
}

export default chart1
function Chartleft() {
        return (
                <div className=' flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 justify-evenly'>
                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-bn3 flex justify-center items-center'>
                                <i className="bi bi-bar-chart-fill text-white text-[25px]"></i>
                        </div>
                        <p className='text-center flex justify-center text-[16px] md:text-[22px] text-balance w-[70%]'>Hire us to customize ngx-admin</p>
                        <span className='w-[100px] h-[50px] bg-bn3 flex justify-center items-center cursor-pointer text-[16px] md:text-[18px]'>Contact</span>
                </div>
        )
}
function Chartright() {
        return (
                <div className='mt-3 lg:mt-0 flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 justify-evenly'>
                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-bn3 flex justify-center items-center'>
                                <i className="bi bi-suitcase-lg-fill text-white text-[25px]"></i>
                        </div>
                        <p className='text-center text-[16px] md:text-[22px] text-balance w-[70%] flex justify-center'>Documentation and customization articles</p>
                        <span className='w-[120px] h-[50px] bg-bn3 flex justify-center items-center cursor-pointer text-[16px] md:text-[18px]'>Learn more</span>
                </div>
        )
}