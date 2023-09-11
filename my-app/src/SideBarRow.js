import React from 'react'

function SideBarRow({Icon,title}) {
  return (
    <div className='SideBarRow'>
        <Icon className="SideBarRow_Icon"/>
        <h1 className='SideBarRow_title'>{title}</h1>
    </div>
  )
}

export default SideBarRow;