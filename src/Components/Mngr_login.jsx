import React from 'react'
import './Mgnr_login.css'
import Profile from './images/login_logo.jpg'
import Mail from './images/GMAIL.png'
import Pass from './images/KEY.png'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/authProvider'
// import Employee from './Employee'
// import axios from '../api/axios'
// const login_url = '/auth'

function Mngr_login() {
    const {setAuth} = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true); 
        // try {
        //     const response = await axios.post(login_url, json.stringify({user,pwd}),
        //     {
        //         headers: {'Content-Type': 'application/json'},
        //         withCredentials: true
        //     }
        //     );
        //     console.log(json.stringify(response?.data))
        //     const accessToken = response?.data?.accessToken;
        //     const roles=response?.data?.roles;
        //     setAuth({user, pwd, roles, accessToken})
           
        // } catch (error) {
        //    if(!error?.response) {
        //         setErrMsg ('No server response')
        //    } else if(errMsg.response?.status ===400){
        //     setErrMsg('missing username or password')
        //    }else if(errMsg.response?.status ===401){
        //     setErrMsg('Unauthorized');
        //    }else{
        //     setErrMsg('login failed');
        //    }
        //    errRef.current.focus();
        // }
        
    }
    return (
        <>

            {success ? (
                <section>
                    <h1>you are logged in!</h1>
                    
                    <br />
                    <p>go to home page</p>
                </section>
           ) : (
                <section>
                    <div className='main'>
                        <div className='sub-main'>
                            <div className="img_container">
                                <div className="img">
                                    <img src={Profile} alt="profile" className='profile' />
                                </div>
                            </div>
                            <div className="heading">
                                <h1>Manager Login Page</h1>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="gmail">
                                    <div className="mail-container">
                                        <img src={Mail} alt="Gmail" className='gmail-img' />
                                        <input
                                            type="text"
                                            placeholder='Enter gmail'
                                            className='iput-gmail'
                                            ref={userRef}
                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={user}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="pword">
                                    <div className="pword-container">
                                        <img src={Pass} alt="password" className='gmail-img' />
                                        <input
                                            type="password"
                                            placeholder='password'
                                            className='iput-pword'
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="login">
                                    <div className="sub-login">
                                        <Link to="/Employee">
                                        <button type='submit' className='login-button'>Login</button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </form>
                            <div className="f-pword">
                                <Link to="/Employee">Forgot password</Link>
                            </div>

                        </div>

                    </div>
                </section>
            )
            }
        </>
    )

}

export default Mngr_login
