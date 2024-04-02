'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJs } from './../../../charts/node_modules/chart.js/auto/auto'
import { Doughnut, Bar } from './../../../charts/node_modules/react-chartjs-2'
import useStore from '@/app/zustand/store'
function part3() {
        return (
                <div className='w-full flex justify-evenly mt-3 flex-wrap '>
                        <Right />
                        <Left />
                </div>
        )
}
function Left() {
        const data3 = useStore((state) => state.data)
        if (data3.length !== 0) {
                return (
                        <div className='h-[350px] flex justify-center w-full xl:w-[60%] bg-bn2 p-3 border border-main'>
                                <Bar
                                        data={{
                                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                                datasets: [{
                                                        // axis: 'y',
                                                        label: 'My First Dataset',
                                                        data: data3 && data3.map((val: any) => val.value3),
                                                        // fill: false,
                                                        backgroundColor: [
                                                                'rgba(255, 99, 132)',
                                                                'rgba(255, 159, 64)',
                                                                'rgba(255, 205, 86)',
                                                                'rgba(75, 192, 192)',
                                                                'rgba(54, 162, 235)',
                                                                'rgba(153, 102, 255)',
                                                                'rgba(201, 203, 207)'
                                                        ],
                                                        borderColor: [
                                                                'rgb(255, 99, 132)',
                                                                'rgb(255, 159, 64)',
                                                                'rgb(255, 205, 86)',
                                                                'rgb(75, 192, 192)',
                                                                'rgb(54, 162, 235)',
                                                                'rgb(153, 102, 255)',
                                                                'rgb(201, 203, 207)'
                                                        ],
                                                        borderWidth: 1
                                                }]

                                        }}
                                        options={{
                                                indexAxis: 'y'
                                        }} />
                        </div>
                )
        }

}

function Right() {

        const data3 = useStore((state) => state.data)
        if (data3.length !== 0) {
                return (
                        <div className='h-[350px] flex justify-center w-full xl:w-[38%] bg-bn2 p-3 border border-main  shadow-shadow1'>
                                <Doughnut
                                        data={{
                                                labels: ['Jan', 'Feb', 'Mar'],
                                                datasets: [{
                                                        label: 'Month',
                                                        data: data3 && data3.map((val: any) => val.value5),
                                                        backgroundColor: [
                                                                'rgb(255, 99, 132)',
                                                                'rgb(54, 162, 235)',
                                                                'rgb(255, 205, 86)'
                                                        ],
                                                        hoverOffset: 4
                                                }]
                                        }}

                                />
                        </div>
                )
        }

}
export default part3