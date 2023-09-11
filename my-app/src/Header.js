import React from "react";

import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { Avatar } from "@mui/material";
import './Header.css'

function Header() {
  return (

    <div className="Header">

        <div className="HeaderLeft">
       <MenuIcon/>
       <img className="logo" src="https://imgs.search.brave.com/nKoUlsnCjVglVPt38pyQh0JgAn1snVoe5czubt4fR7I/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/MG1KZUwxbXg5NEt3/N0cyVGtMdTJRSGFF/SyZwaWQ9QXBp"/>
        </div>
   
    <div className="HeaderSearch">
    <input placeholder="Search" type="text"/>
    <SearchIcon className="Search"/>
    </div>
    
    <div className="HeaderIcon">     
    <VideoCallOutlinedIcon/>  
    <AppsSharpIcon/>
    <NotificationsNoneSharpIcon/>
    <Avatar src="https://imgs.search.brave.com/VQg9QEhL073lzN14-r_qqY0Fcn_-rPToEJv8BLqznp8/rs:fit:502:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/LVZrRlJZYTg0eFdW/d1haWkwxNXdnSGFH/XyZwaWQ9QXBp"/>
    </div>

    

    </div>

    
    
  );
}

export default Header