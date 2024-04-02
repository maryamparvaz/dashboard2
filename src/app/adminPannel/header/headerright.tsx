'use client'
import React, { useEffect, useRef, useState } from 'react';
import Chip from './../../../../icon/node_modules/@mui/material/Chip';
import Stack from './../../../../icon/node_modules/@mui/material/Stack';
import DownloadIcon from './../../../../icon/node_modules/@mui/icons-material/Download';
import MailOutlineIcon from './../../../../icon/node_modules/@mui/icons-material/MailOutline';
import GitHubIcon from './../../../../icon/node_modules/@mui/icons-material/GitHub';
import Avatar from './../../../../icon/node_modules/@mui/material/Avatar';
import useStore from './../../zustand/store';
import Badge from './../../../../icon/node_modules/@mui/material/Badge';
import MailIcon from './../../../../icon/node_modules/@mui/icons-material/Mail';
import NotificationsIcon from './../../../../icon/node_modules/@mui/icons-material/Notifications';
function headerright() {
        const [data, setData] = useState([])
        const valinp = useStore((state) => state.valinp)
        function stringToColor(string: string) {
                let hash = 0;
                let i;
                for (i = 0; i < string.length; i += 1) {
                        hash = string.charCodeAt(i) + ((hash << 5) - hash);
                }
                let color = '#';
                for (i = 0; i < 3; i += 1) {
                        const value = (hash >> (i * 8)) & 0xff;
                        color += `00${value.toString(16)}`.slice(-2);
                }
                return color;
        }
        function stringAvatar(name: string) {
                return {
                        sx: {
                                bgcolor: stringToColor(name),
                        },
                        children: `${name.split(' ')[0][0]}`,
                };
        }
        useEffect(() => {
                fetch('https://65f3fa83105614e654a19675.mockapi.io/users', {
                        method: 'GET',
                        headers: { 'content-type': 'application/json' },
                }).then(res => {
                        if (res.ok) {
                                return res.json();
                        }
                }).then(tasks => {
                        setData(tasks)
                }).catch(error => {
                })
        }, [])
        let newname = 'admin'
        data && data.map((val: any) => {
                if (val.email === valinp) {
                        newname = val.name
                }
        })

        return (
                <div className='hidden md:flex md:w-[60%] xl:w-[70%] items-center justify-end'>
                        <div className='flex items-center cursor-pointer'>
                                <span className='mr-2 hidden lg:flex'>Support us:</span>
                                <Chip className='bg-gray-200 mr-[5px] text-black' icon={<GitHubIcon />} label="Stars" />
                                <Chip className='bg-gray-200 text-black' label="24957" />
                        </div>
                        <div className='w-[1px] h-[33px] bg-main mx-3'></div>
                        <div className='flex *:mr-[5px] cursor-pointer'>
                                <DownloadIcon />
                                <span>470.000</span>
                        </div>
                        <div className='w-[1px] h-[33px] bg-main mx-3'></div>
                        <div className='hidden xl:flex cursor-pointer'>
                                <MailOutlineIcon />
                                <span className='ml-1'>{valinp}</span>
                        </div>
                        <div className='hidden xl:flex w-[1px] h-[33px] bg-main mx-3'></div>
                        <NotificationsIcon className='hidden xl:flex' />
                        <div className='hidden xl:flex w-[1px] h-[33px] bg-main mx-3'></div>
                        <Stack className='hidden xl:flex cursor-pointer' spacing={2} direction="row">
                                <Badge badgeContent={23} color="secondary">
                                        <MailIcon className='text-gray-200' />
                                </Badge>
                        </Stack>
                        <div className='hidden xl:flex w-[1px] h-[33px] bg-main mx-3'></div>
                        <div>
                                <Stack direction="row" className='flex items-center'>
                                        <Avatar {...stringAvatar(newname)} />
                                        <span className='ml-2 hidden lg:flex'>{newname}</span>
                                </Stack>
                        </div>
                </div>
        )
}
export default headerright
