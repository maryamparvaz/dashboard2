'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJs } from './../../../../../charts/node_modules/chart.js/auto'
// import Chart from './../../../../../charts/node_modules/chart.js/auto';
import { Bar, Line } from './../../../charts/node_modules/react-chartjs-2'
import useStore from './../../../zustand/store'
function chart2() {
  return (
    <div className='w-full flex justify-evenly mt-3 flex-wrap'>
      <Left />
      <Right />
    </div>
  )
}
function Left() {
  const [data2, setData2] = useState([])
  const { updateUser6 } = useStore()
  useEffect(() => {
    fetch('https://65f3fa83105614e654a19675.mockapi.io/chart', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(tasks => {
      setData2(tasks)
      updateUser6(tasks)
    }).catch(error => {
    })

  }, [])
  if (data2.length !== 0) {
    return (
      <div className='flex justify-center w-full lg:w-[49%] bg-bn2 p-3 border border-main'>
        <Line
          data={{
            labels: ['Mon', 'The', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Transactions',
              data: data2 && data2.map((val) => val.value),
              backgroundColor: '#8c57ff',
              borderColor: '#8c57ff',
              pointBackgroundColor: '#5c57ff',
             
            },
            {
              label: 'Orders',
              data: data2 && data2.map((val) => val.value2),
              backgroundColor: '#00d68fab',
              borderColor: '#00d68fab',
              pointBackgroundColor: '#5c57ff',
            }],
          }}
          options={{
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              },
              scales: {
                y: {
                  min: 0,
                  max: 100
                }
              }
            }
          }}
        />
      </div>
    )
  }
}
function Right() {
  const data3 = useStore((state) => state.data)
  if (data3.length !== 0) {
    return (
      <div className='mt-3 lg:mt-0 flex justify-center w-full lg:w-[49%] bg-bn2 p-3 border border-main'>
        <Bar
          data={{
            labels: ['Mon', 'The', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Transactions',
              data: data3.map((val) => val.value),
              backgroundColor: '#8c57ff',
              borderColor: '#8c57ff',
              pointBackgroundColor: '#5c57ff',
              responsive: true,
              maintainAspectRatio: true
            }, {
              label: 'Orders',
              data: data3.map((val) => val.value2),
              backgroundColor: '#00d68fab',
              borderColor: '#00d68fab',
              responsive: true,
              maintainAspectRatio: true
            }],
          }}
          options={{
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              },
              scales: {
                y: {
                  min: 0,
                  max: 100
                }
              }
            }
          }}
        />
      </div>
    )
  }
}
export default chart2
