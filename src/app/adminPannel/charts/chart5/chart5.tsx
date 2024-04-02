'use client'
import React, { useEffect, useState } from 'react'
import { Chart as ChartJs } from './../../../charts/node_modules/chart.js/auto'
import ImageList from './../../../../../icon/node_modules/@mui/material/ImageList';
import ImageListItem from './../../../../../icon/node_modules/@mui/material/ImageListItem';
import ImageListItemBar from './../../../../../icon/node_modules/@mui/material/ImageListItemBar';
import IconButton from './../../../../../icon/node_modules/@mui/material/IconButton';
import StarBorderIcon from './../../../../../icon/node_modules/@mui/icons-material/StarBorder';
import { Line } from './../../../charts/node_modules/react-chartjs-2'
function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
        return {
                src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
                srcSet: `${image}?w=${width * cols}&h=${height * rows
                        }&fit=crop&auto=format&dpr=2 2x`,
        };
}
function chart5() {
        return (
                <div className='w-full flex justify-evenly mt-3 flex-wrap xl:flex-nowrap'>
                        <div className='w-full xl:w-[38%] flex flex-wrap'>
                                <Right />
                                <Leftbut />
                        </div>
                        <Left />
                </div>
        )
}
function Left() {
        return (
                <div className='flex justify-center w-full xl:w-[60%] bg-bn2  border border-main flex-wrap  shadow-shadow1 mt-3 xl:mt-0'>
                        <div className='w-full bg-bn2 p-3 text-[20px] items-center'>Security Cameras</div>
                        <ImageList
                                className='w-full'
                                sx={{
                                        height: 450,
                                        transform: 'translateZ(0)',
                                }}
                                rowHeight={200}
                                gap={1}
                        >
                                {itemData.map((item) => {
                                        const cols = item.featured ? 2 : 1;
                                        const rows = item.featured ? 2 : 1;

                                        return (
                                                <ImageListItem key={item.img} cols={cols} rows={rows}>
                                                        <img
                                                                {...srcset(item.img, 250, 200, rows, cols)}
                                                                alt={item.title}
                                                                loading="lazy"
                                                        />
                                                        <ImageListItemBar
                                                                sx={{
                                                                        background:
                                                                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                                                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                                                }}
                                                                title={item.title}
                                                                position="top"
                                                                actionIcon={
                                                                        <IconButton
                                                                                sx={{ color: 'white' }}
                                                                                aria-label={`star ${item.title}`}
                                                                        >
                                                                                <StarBorderIcon />
                                                                        </IconButton>
                                                                }
                                                                actionPosition="left"
                                                        />
                                                </ImageListItem>
                                        );
                                })}
                        </ImageList>
                        <div className='w-full flex p-3 justify-evenly items-center'>
                                <span className='flex items-center cursor-pointer hover:text-bn3'><i className="bi bi-pause-circle mr-2 text-[20px]"></i>pause</span>
                                <div className='w-[1px] h-[33px] bg-main mx-3'></div>
                                <span className='flex items-center cursor-pointer hover:text-bn3'><i className="bi bi-list-task mr-2 text-[20px]"></i>Logs</span>
                                <div className='w-[1px] h-[33px] bg-main mx-3'></div>
                                <span className='flex items-center cursor-pointer hover:text-bn3'><i className="bi bi-search mr-2 text-[20px]"></i>search</span>
                                <div className='w-[1px] h-[33px] bg-main mx-3'></div>
                                <span className='flex items-center cursor-pointer hover:text-bn3'><i className="bi bi-gear mr-2 text-[20px]"></i>setting</span>
                        </div>
                </div>
        )


}
const itemData = [
        {
                img: './11.jpg',
                title: 'Camera #1',
                author: '@bkristastucchio',
                featured: true,
        },
        {
                img: './10.jpg',
                title: 'Camera #2',
                author: '@rollelflex_graphy726',
        },
        {
                img: './12.jpg',
                title: 'Camera #3',
                author: '@helloimnik',
        },
        {
                img: './13.jpg',
                title: 'Camera #4',
                author: '@nolanissac',
        }
];

function Right() {
        return (
                <div className='flex flex-wrap  justify-center w-full  h-[280px] bg-bn2 overflow-y-scroll content-start p-3 mt-3 xl:mt-0  shadow-shadow1'>
                        <div className='w-full flex justify-around border-b border-main pb-2  p-3 items-center'>
                                <span className='text-[20px]'>Traffic Consumption</span>
                                <select name="" id="" className='p-3 bg-bn3 border border-main  border-none text-[20px] w-[120px] outline-none'>
                                        <option value="week">week</option>
                                        <option value="month">month</option>
                                        <option value="year">year</option>
                                </select>
                        </div>
                        <div className='w-full mt-2 flex justify-center'>
                                <Line
                                        className='w-full'
                                        data={{
                                                labels: ['Mon', 'The', 'Wed', 'Thu', 'Fri', 'Sat'],
                                                datasets: [{
                                                        label: 'Transactions',
                                                        data: ['40', '60', '55', '70', '65', '90'],
                                                        backgroundColor: 'rgb(37 37 71)',
                                                        borderColor: 'rgb(37 37 71 )',
                                                        fill: {
                                                                target: "origin", // 3. Set the fill options
                                                                above: "rgba(37, 37, 71, 0.569)"
                                                        }

                                                }]
                                        }}
                                />
                        </div>
                </div>
        )
}
function Leftbut() {
        return (
                <div className='flex flex-wrap  justify-center w-full  h-[290px] bg-bn2 overflow-y-scroll content-start p-5 mt-3 shadow-shadow1'>
                        <div className='w-full flex px-3'>
                                <div className='w-[50%] flex flex-wrap *:w-full'>
                                        <span className='text-[24px] font-bold'>New York</span>
                                        <span className='text-[18px]'>Mon 29 May</span>
                                        <span className='text-[16px]'>20°</span>
                                </div>
                                <div className='w-[45%] flex justify-end'>
                                        <i className="bi bi-brightness-high text-[60px] text-bn3"></i>
                                </div>
                        </div>
                        <div className='w-full mt-6 flex flex-wrap'>
                                <ul className='w-full flex justify-evenly'>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>MAX</span>
                                                <span>23°</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>MIN</span>
                                                <span>19°</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>WIND</span>
                                                <span>4 km/h</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>HUM</span>
                                                <span>87%</span>
                                        </li>
                                </ul>
                        </div>
                        <div className='w-full mt-3 flex flex-wrap'>
                                <ul className='w-full flex justify-evenly'>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>SUN</span>
                                                <i className="bi bi-cloud"></i>
                                                <span>17°</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>MON</span>
                                                <i className="bi bi-brightness-high"></i>
                                                <span>19°</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>TUE</span>
                                                <i className="bi bi-cloud-rain"></i>
                                                <span>22°</span>
                                        </li>
                                        <li className='flex flex-wrap *:w-full *:flex *:justify-center'>
                                                <span>WED</span>
                                                <i className="bi bi-cloud-sun"></i>
                                                <span>21°</span>
                                        </li>
                                </ul>
                        </div>
                </div>

        )
}
export default chart5
