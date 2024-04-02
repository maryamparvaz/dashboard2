'use client'
import React, { useEffect, useRef } from 'react'
import Chart1 from './chart1/chart1'
import Chart2 from './chart2/chart2'
import useStore from './../../zustand/store'
import Chart3 from './chart3Map/chart3'
import Chart4 from './chart4/chart4'
import Chart5 from './chart5/chart5'
function allCharts() {
        const { updateUser5 } = useStore()
        const c = useRef(null)
        useEffect(() => {
                updateUser5(c.current)
        }, [])
        return (
                <section ref={c} className='w-[80%] absolute flex flex-wrap p-5 bg-main  pt-[120px] pl-[45px] overflow-y-scroll z-10'>
                        <Chart1 />
                        <Chart2 />
                        <Chart3 />
                        <Chart4 />
                        <Chart5 />
                </section>
        )
}
export default allCharts