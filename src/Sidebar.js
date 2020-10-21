import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
// import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from "./StateProvider";


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            {/* <div className="sidebar__info">
                <Avatar />
                <h4> Mallika Sethi</h4>
                This seems fine but instead of doing this what else can be done is that
                we can handle this as a component of SidebarRow itself 
                but there would be conditional rendering in that particualr case.
            </div> */}
            {/* <Sidebar src="https://www.gstatic.com/tv/thumb/persons/883224/883224_v9_bb.jpg" title ="Zayn Malik" /> */}

            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends " />
            <SidebarRow Icon={ChatIcon} title="Messenger " />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace " />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos " />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace " />
        </div>
    )
}

export default Sidebar
