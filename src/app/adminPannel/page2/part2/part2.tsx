'use client'
import React from 'react'
function part2() {
        function statuss(e: any) {
                let sel = e.target
                if (sel.getAttribute('data-stat') == 'off') {
                        e.target.parentElement.children[1].innerText = 'off'
                        e.target.parentElement.parentElement.children[0].style.backgroundColor = 'inherit'
                        sel.setAttribute('data-stat', 'on')

                } else {
                        if (sel.innerText == 'Light') {
                                e.target.parentElement.parentElement.children[0].style.backgroundColor = 'rgb(244 114 182)'
                        } else if (sel.innerText == 'Roller Shades') {
                                e.target.parentElement.parentElement.children[0].style.backgroundColor = 'rgb(74 222 128)'
                        } else if (sel.innerText == 'Wireless Audio') {
                                e.target.parentElement.parentElement.children[0].style.backgroundColor = 'rgb(96 165 250)'
                        } else if (sel.innerText == 'Coffee Maker') {
                                e.target.parentElement.parentElement.children[0].style.backgroundColor = 'rgb(250 204 21)'
                        }
                        e.target.parentElement.children[1].innerText = 'on'
                        sel.setAttribute('data-stat', 'off')

                }
        }
        return (
                <section className='w-full flex flex-wrap'>
                        <div className='flex w-full flex-wrap justify-evenly mt-3'>
                                <div className='flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 cursor-pointer'>
                                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-pink-400 flex justify-center items-center'>
                                                <i className="bi bi-lightbulb-fill text-white text-[30px]  "></i>
                                        </div>
                                        <div className='flex flex-wrap ml-9 justify-start '>
                                                <span data-stat='off' onClick={statuss} className='text-center cursor-pointer flex justify-start text-[16px] md:text-[22px] text-balance w-[70%] font-bold'>Light</span>
                                                <span className='text-center flex justify-start text-[16px] md:text-[16px] text-balance w-[70%]'>on</span>
                                        </div>
                                </div>
                                <div className='flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 '>
                                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-green-400 flex justify-center items-center'>
                                                <i className="bi bi-grid-1x2-fill text-white text-[30px]  "></i>
                                        </div>
                                        <div className='flex flex-wrap ml-9 justify-start '>
                                                <span data-stat='off' onClick={statuss} className='text-center cursor-pointer  flex justify-start text-[16px] md:text-[22px]  w-[70%] font-bold text-nowrap'>Roller Shades</span>
                                                <span className='text-center flex justify-start text-[16px] md:text-[16px] text-balance w-[70%]'>on</span>
                                        </div>
                                </div>
                        </div>
                        <div className='flex w-full flex-wrap justify-evenly mt-3'>
                                <div className='flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 '>
                                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-blue-400 flex justify-center items-center'>
                                                <i className="bi bi-router-fill text-white text-[30px]  "></i>
                                        </div>
                                        <div className='flex flex-wrap ml-9 justify-start '>
                                                <span data-stat='off' onClick={statuss} className='text-center cursor-pointer  flex justify-start text-[16px] md:text-[22px]  w-[70%] font-bold text-nowrap'>Wireless Audio</span>
                                                <span className='text-center flex justify-start text-[16px] md:text-[16px] text-balance w-[70%]'>on</span>
                                        </div>
                                </div>
                                <div className='flex w-full lg:w-[49%] h-[100px] bg-bn2 items-center  px-3 '>
                                        <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-yellow-400 flex justify-center items-center'>
                                                <i className="bi bi-cup-hot-fill text-white text-[30px]  "></i>
                                        </div>
                                        <div className='flex flex-wrap ml-9 justify-start '>
                                                <span data-stat='off' onClick={statuss} className='text-center cursor-pointer  flex justify-start text-[16px] md:text-[22px]  w-[70%] font-bold text-nowrap'>Coffee Maker</span>
                                                <span className='text-center flex justify-start text-[16px] md:text-[16px] text-balance w-[70%]'>on</span>
                                        </div>
                                </div>
                        </div>

                </section>

        )
}
export default part2
