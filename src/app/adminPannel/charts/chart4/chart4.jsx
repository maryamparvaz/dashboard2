'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJs } from './../../../charts/node_modules/chart.js/auto/auto'
import { Bar, Line, Doughnut } from './../../../charts/node_modules/react-chartjs-2/dist'
import useStore from './../../../zustand/store'
function chart4() {
        return (
                <div className='w-full flex justify-evenly mt-3 flex-wrap '>
                        <Left />
                        <Right />
                </div>
        )
}
function Left() {
        const data3 = useStore((state) => state.data)
        if (data3.length !== 0) {
                return (
                        <div className='flex justify-center w-full xl:w-[60%] bg-bn2 p-3 border border-main  shadow-shadow1'>
                                <Line
                                        data={{
                                                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                                datasets: [{
                                                        label: 'Transactions',
                                                        data: data3 && data3.map((val) => val.value3),
                                                        backgroundColor: '#8c57ff',
                                                        borderColor: '#8c57ff',
                                                        pointBackgroundColor: '#5c57ff',
                                                        fill: {
                                                                target: "origin", // 3. Set the fill options
                                                                above: "#00d68fab"
                                                        }
                                                },
                                                {
                                                        label: 'Orders',
                                                        data: data3 && data3.map((val) => val.value4),
                                                        backgroundColor: '#00d68fab',
                                                        borderColor: '#00d68fab',
                                                        pointBackgroundColor: '#5c57ff',
                                                        fill: {
                                                                target: "origin", // 3. Set the fill options
                                                                above: "#8c57ff7e"
                                                        }
                                                }],
                                        }}

                                />
                        </div>
                )
        }

}

function Right() {
        return (
                <ul className='flex flex-wrap  justify-center w-full xl:w-[38%] h-[350px] bg-bn2 overflow-y-scroll content-start p-3 mt-3 xl:mt-0  shadow-shadow1'>
                        <li className='ml-3 w-full h-[40px] border-b text-[20px] xl:text-[17px] border-b-main'>User Activity</li>
                        <li className='items-center my-2  text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>1Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-green-400'>186</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-red-300'><i class="bi bi-caret-down-fill text-red-300"></i>65%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>2Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-green-400'>603</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-red-300'><i class="bi bi-caret-down-fill text-red-300"></i>87%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>3Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-green-400'>71</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-green-400'><i class="bi bi-caret-up-fill text-green-400"></i>30%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>4Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-green-400'>397</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-green-400'><i class="bi bi-caret-up-fill text-green-400"></i>19%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>5Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-green-400'>197</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-red-300'><i class="bi bi-caret-down-fill text-red-300"></i>47%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full border-b  border-b-main flex justify-evenly'>
                                <span className='text-white mr-4'>6Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-red-300'>97</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-green-400'><i class="bi bi-caret-up-fill text-green-400"></i>79%</span>
                                </div>
                        </li>
                        <li className='items-center my-2 text-[18px]  xl:text-[17px] w-full  flex justify-evenly'>
                                <span className='text-white mr-4'>7Mar</span>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>Pages Visit</span>
                                        <span className='text-red-300'>397</span>
                                </div>
                                <div className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                        <span className='text-gray-300'>New visits, %</span>
                                        <span className='text-green-400'><i class="bi bi-caret-up-fill text-green-400"></i>99%</span>
                                </div>
                        </li>
                </ul>
        )
}
export default chart4