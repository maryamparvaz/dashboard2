'use client'
import React, { useEffect, useRef } from 'react'
import useStore from './../../zustand/store'
function sidebar() {
        const c = useRef(null)
        const { updateUser4 } = useStore()
        const selectchart = useStore((state) => state.selectchart)
        const selectchart2 = useStore((state) => state.selectchart2)
        useEffect(() => {
                updateUser4(c.current)
        }, [])
        function ecom() {
                selectchart.style.zIndex = '10'
                selectchart2.style.zIndex = '0'
                selectchart2.style.display = 'none'
                selectchart.style.display = 'flex'
        }
        function ecom2() {
                selectchart2.style.zIndex = '10'
                selectchart.style.zIndex = '0'
                selectchart.style.display = 'none'
                selectchart2.style.display = 'flex'
        }
        return (
                <nav ref={c} className='w-[300px] h-[100vh] overflow-y-scroll overflow-x-hidden bg-head fixed left-0 top-0 z-40  flex 2xl:left-[10%] pt-[180px] '>
                        <ul className='w-full'>
                                <li onClick={ecom} className='pl-4 w-full flex border-b border-b-main pb-4 group cursor-pointer'>
                                        <i className="bi bi-cart2 group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>E-commerce</span>
                                </li>
                                <li onClick={ecom2} className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-house-door group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>IoT Dashboard</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-columns group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Layout</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-pencil-square group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Forms</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-ui-checks-grid group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>UI Features</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-window group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Modal & Overlays</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-chat-dots group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Extra Components</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-map group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Maps</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-pie-chart group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Charts</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-fonts group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Editors</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-grid group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Tables & Data</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-shuffle group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Miscellaneous</span>
                                </li>
                                <li className='pl-4 w-full flex border-b border-b-main py-4 group cursor-pointer'>
                                        <i className="bi bi-lock group-hover:text-bn3"></i>
                                        <span className='ml-5 group-hover:text-bn3'>Auth</span>
                                </li>
                        </ul>
                </nav>
        )
}
export default sidebar