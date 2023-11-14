import "./sidebar.css"
import React from 'react'
import {
    AttachMoney,
    BarChart,
    ChatBubbleOutline,
    DynamicFeed,
    LineStyle,
    MailOutline,
    PermIdentity,
    Storefront,
    Timeline,
    TrendingUp,
    WorkOutline,
    Report
} from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle />Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp />Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <PermIdentity className="sidebarIcon" />Users
                        </li>
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon" />Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon" />Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutline className="sidebarIcon" />Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkOutline className="sidebarIcon" />Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
