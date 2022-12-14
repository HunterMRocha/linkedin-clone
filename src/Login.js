import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { auth } from "./firebase";
import "./Login.css"

function login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch(); 

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(
        (userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email, 
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        }).catch((error) => alert(error));

    };

    const register = () => {
        console.log(name)
        if (!name) {
            return alert('Please enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user
                .updateProfile({
                    displayName: name, 
                    photoURL: profilePic,
                }) 
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid, 
                        displayName: name, 
                        photoURL: profilePic
                    })
                ); 
            }).catch(error => alert(error));     
        })};

    return (
        <div className="login">
            <img 
                src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
                alt=""
            />

            <form>
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name (required if new)" 
                    type="text">
                </input>

                <input 
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder={name[0]}
                    type="text"> 
                </input>
                <input 
                    value = {email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email" 
                    type="email">
                </input>

                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password" 
                    type="password"></input>
                <button onClick={loginToApp} type="submit">Sign In</button>
            </form>
            <p>Not a member? 
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default login