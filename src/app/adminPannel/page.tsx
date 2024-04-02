'use client'
import Image from "next/image";
import Header from "./header/header";
import './../../../icon/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "./sidebar/sidebar";
import AllCharts from "./charts/allCharts";
import Page2 from "./page2/page2";
import Box from './../../../icon/node_modules/@mui/material/Box';
import SpeedDial from './../../../icon/node_modules/@mui/material/SpeedDial';
import SpeedDialAction from './../../../icon/node_modules/@mui/material/SpeedDialAction';
import GitHubIcon from './../../../icon/node_modules/@mui/icons-material/GitHub';
import InstagramIcon from './../../../icon/node_modules/@mui/icons-material/Instagram';
import LinkedInIcon from './../../../icon/node_modules/@mui/icons-material/LinkedIn';
import LanguageIcon from './../../../icon/node_modules/@mui/icons-material/Language';
export default function Home() {
        const actions = [
                { icon: <GitHubIcon />, name: 'Github' },
                { icon: <InstagramIcon />, name: 'Instagram' },
                { icon: <LinkedInIcon />, name: 'Linkedin' },
                { icon: <LanguageIcon />, name: 'Website' },
        ];
        return (
                <main className="w-full flex 2xl:justify-center h-[100vh] overflow-hidden bg-main justify-between ">
                        <section className="w-full flex items-start 2xl:container overflow-y-scroll 2xl:pt-10 justify-end mt-16">
                                <Header />
                                <Sidebar />
                                <section className="w-[100%] flex relative justify-end">
                                        <AllCharts />
                                        <Page2 />
                                </section>
                                <div className="absolute bottom-5 right-5 z-50" >
                                        <Box sx={{ width: '400', height: '400', transform: 'translateZ(0px)', flexGrow: 1 }}>
                                                <SpeedDial
                                                        ariaLabel="SpeedDial openIcon example"
                                                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                                        icon={<img className=" rounded-[50%] object-cover " src="./7.webp" alt="" />}
                                                >
                                                        {/* <img src="./5.webp" alt="" /> */}
                                                        {actions.map((action) => (
                                                                <SpeedDialAction className="text-black bg-white"
                                                                        key={action.name}
                                                                        icon={action.icon}
                                                                        tooltipTitle={action.name}
                                                                />
                                                        ))}
                                                </SpeedDial>
                                        </Box>
                                </div>
                        </section>
                </main>
        );
}
