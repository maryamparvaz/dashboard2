'use client'
import React, { useEffect, useState } from 'react'
import List from './../../../../../icon/node_modules/@mui/material/List';
import ListItem from './../../../../../icon/node_modules/@mui/material/ListItem';
import Divider from './../../../../../icon/node_modules/@mui/material/Divider';
import ListItemText from './../../../../../icon/node_modules/@mui/material/ListItemText';
import ListItemAvatar from './../../../../../icon/node_modules/@mui/material/ListItemAvatar';
import Avatar from './../../../../../icon/node_modules/@mui/material/Avatar';
function Part4() {
        return (
                <div className='w-full flex justify-evenly mt-3 flex-wrap xl:flex-nowrap'>
                        <Left />
                        <div className='w-full lg:w-[48%] flex flex-wrap'>
                                <Right />
                        </div>
                </div>
        )
}
function Left() {
        return (
                <div className='flex justify-center w-full lg:w-[50%] bg-bn2  border border-main flex-wrap  shadow-shadow1  xl:mt-0'>
                        <List className='bg-bn2 w-full' >
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Zahra</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Maryam</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Fatemeh</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Ladan</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Ghazal</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Paniz</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Elnaz</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Katy</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start" className='flex items-center group'>
                                        <ListItemAvatar>
                                                <Avatar alt="Cindy Baker" src="./7.webp" />
                                        </ListItemAvatar>
                                        <ListItemText

                                                primary={<React.Fragment><span className='text-[20px]'>Hoda</span></React.Fragment>}

                                        />
                                        <i className="bi bi-telephone text-white text-[26px] mr-6 group-hover:text-bn3"></i>
                                </ListItem>
                        </List>
                </div>
        )


}
function Right() {
        return (
                <div className='flex flex-wrap  justify-center w-full   bg-bn2  content-start  mt-3 xl:mt-0  shadow-shadow1'>
                        <div className='w-full flex flex-wrap '>
                                <img src="./20.webp" className=' w-full  object-cover ' alt="" />
                                <div className='w-full flex flex-wrap *:w-full p-3 mt-3 '>
                                        <span className='text-[24px] font-bold'>UI Kitten</span>
                                        <p className='text-[18px] mt-2'>UI Kitten is a framework that contains a set of commonly used UI components styled in a similar way. The most awesome thing: you can change themes on the fly by just passing a different set of variables. 100% native. Give our kitten a try!</p>
                                </div>
                        </div>
                        <div className='w-full flex px-3 justify-evenly items-center my-4'>
                                <i className="bi bi-pause-circle mr-2 text-[25px] text-bn3 cursor-pointer"></i>
                                <i className="bi bi-list-task mr-2 text-[25px] text-bn3 cursor-pointer"></i>
                                <i className="bi bi-search mr-2 text-[25px] text-bn3 cursor-pointer"></i>
                                <i className="bi bi-gear mr-2 text-[25px] text-bn3 cursor-pointer"></i>
                        </div>
                </div>
        )
}
export default Part4