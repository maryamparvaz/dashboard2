'use client'
import React, { useEffect, useRef } from 'react'
import Part1 from './part1/part1'
import Part2 from './part2/part2'
import useStore from '@/app/zustand/store'
import Part3 from './part3/part3'
import Part4 from './part4/part4'
//.........................................................

function page2() {
        const { updateUser7 } = useStore()
        const c = useRef(null)
        useEffect(() => {
                updateUser7(c.current)
        }, [])
        return (
                        <section ref={c} className='w-[80%] absolute flex flex-wrap p-5 bg-main  pt-[120px] pl-[45px] overflow-y-scroll'>
                                <Part1 />
                                <Part2 />
                                <Part3 />
                                <Part4 />
                        </section>
                        
        )
}
export default page2