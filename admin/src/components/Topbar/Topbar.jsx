import React from 'react'
import "./topbar.css"
import { NotificationsNone, Settings, Language } from '@mui/icons-material';
const TopBar = () => {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                    <sapn className="logo">
                        ArtGirlZ Admin
                    </sapn></div>
                <div className="topright">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">
                            2+
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">
                            2+
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocLHcYbOWTJchr0gRoOXKXW0HnLDN7_amlIAUWNBpfwSbJ4=s360-c-no" alt="User" className='topAvatar' />
                </div>
            </div>
        </div>
    )
}

export default TopBar
