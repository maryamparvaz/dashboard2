'use client'
import React from 'react'
import useStore from './../../zustand/store'
function headerleft() {
        const menu = useStore((state) => state.menu)
        const selectchart = useStore((state) => state.selectchart)
        const selectchart2 = useStore((state) => state.selectchart2)
        let x = 1
        function openMenu() {
                if (x % 2) {
                        menu.style.width = '50px'
                        x++
                        selectchart.style.width = '100%'
                        selectchart.style.paddingLeft = '60px'
                        selectchart2.style.width = '100%'
                        selectchart2.style.paddingLeft = '60px'
                } else {
                        menu.style.width = '300px'
                        x++
                        selectchart.style.width = '80%'
                        selectchart.style.paddingLeft = '45px'
                        selectchart2.style.width = '80%'
                        selectchart2.style.paddingLeft = '45px'
                }
        }
        return (
                <div className='w-[80%] md:w-[40%] xl:w-[30%] flex *:text-[22px] md:*:text-[25px] items-center text-white'>
                        <i onClick={openMenu} className="bi bi-list cursor-pointer text-white"></i>
                        <div className='w-[1px] h-[23px] bg-main mx-3 '></div>
                        <h1 className='ml-3 text-white'>MARYAM PARVAZ</h1>
                </div>
        )
}
export default headerleft
