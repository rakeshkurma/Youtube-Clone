import { Avatar } from '@material-ui/core';
import React from 'react'
import './VideoCard.css';

function VideoCard({Url,Img,Title,ChannelName,Views,TimeStamp}) {
  return (
    <div className='VideoCard'>
        <img  className="img" src={Url} alt=""/>
        <div className='VideoCard_Info'>
  <div className='LeftGrid'>
    <Avatar className='Avatar' src={Img} alt={ChannelName} />
  </div>
  <div className='RightGrid'>
      <span className='Title'>{Title}</span>
       <p>{ChannelName}</p>
      <p>{Views} . {TimeStamp}</p>
  </div>
</div>


    </div>
  )
}

export default VideoCard;