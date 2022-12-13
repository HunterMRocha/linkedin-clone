import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from "./features/userSlice";


function Header() {

	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const logoutOfApp = () => {
		dispatch(logout())
		auth.signOut();
	};

  return (
    <div className='header'>
        <div className="header__left">
			<img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt=""/>

			<div className="header__search">
				{/* SearchIcon */}
				<SearchIcon />
				<input type="text"/>
			</div>
        </div>


		<div className="header__right">
			<HeaderOption Icon={HomeIcon} title="Home" />
			<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
			<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
			<HeaderOption Icon={ChatIcon} title="Messaging" />
			<HeaderOption Icon={NotificationIcon} title="Notifications" />
			<HeaderOption 
				avatar="https://pbs.twimg.com/profile_images/1597756795598307328/M1tDVxEK_400x400.jpg" 
				title="me"
				onClick={logoutOfApp}
				/>
        </div>
  
    </div>
  );
}

export default Header;