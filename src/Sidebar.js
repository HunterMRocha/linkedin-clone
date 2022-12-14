import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            {/* Sidebar top */}
            <div className="sidebar__top">
                <img src="https://www.europastar.com/local/cache-gd2/2b/66703a84ffd2fad47c00c082afda62.jpg" alt="" />  
                <Avatar className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            {/* sidebar stats */}
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,564</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">5,134</p>
                </div>
            </div>

            {/* Sidebar bottom */}
            <div className="sidebar__bottom">
                <p>Recent</p>
                { recentItem('reactjs') }
                {recentItem('softwareengineering')}
                {recentItem('softwaredesign')}
                {recentItem('metamask')}
            </div>


        </div>
        )
    }

export default Sidebar