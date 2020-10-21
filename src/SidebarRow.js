import React from 'react'
import "./SidebarRow.css"
import Avatar from '@material-ui/core/Avatar';

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
        {/* this is equivalent to writing 
        if(src){
            <Avatar src={src} />
        } */}
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4> {title} </h4> 
        </div>
    )
}

export default SidebarRow

