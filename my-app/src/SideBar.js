import React from 'react'
import SideBarRow from './SideBarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function SideBar() {
  return (
    <div className='SideBar'>
        <SideBarRow  Icon={HomeSharpIcon} title="Home"/>
        <SideBarRow Icon={WhatshotSharpIcon} title="Trending"/>
        <SideBarRow Icon={SubscriptionsSharpIcon} title="Subscription"/>
        <hr/>
        <SideBarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
        <SideBarRow Icon={HistoryOutlinedIcon} title="History"/>
        <SideBarRow Icon={OndemandVideoOutlinedIcon} title="Your Videos"/>
        <SideBarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos"/>
        <SideBarRow  Icon={WatchLaterOutlinedIcon} title="Watch later"/>
        <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/>
    </div>
  )
}

export default SideBar;