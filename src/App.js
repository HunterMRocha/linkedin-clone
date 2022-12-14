import './App.css';
import Login from "./Login"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice"
import { auth } from "./firebase"
import { useEffect } from 'react'

function App() {
 
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid, 
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		})
	}, [])

	return (
		<div className="app">
			<Header />

			{!user ? (
				// login page
				<Login /> 
			):(
				// main page
				<div className="app__body">
					<Sidebar />
					<Feed /> 
					<Widgets /> 
				</div>
			)};


			
		</div>
	);
}

export default App;
