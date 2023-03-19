import React from 'react'
import './Emp_login.css'
import Profile from './images/login_logo.jpg'
import Mail from './images/GMAIL.png'
import Pass from './images/KEY.png'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from '../context/authProvider'
function Emp_login() {

    const {setAuth} = useContext(AuthContext)
    const userRef = useRef();
    // const errRef = useRef();
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
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true); 
    }
    return (
      <>
      {
        success?(<section>
                <h1>successfully logged in </h1>
                <h2>welcome to employee page</h2>
        </section>
        ):(
            <div className='main'>
            <div className='sub-main'>
                <div className="img_container">
                    <div className="img">
                        <img src={Profile} alt="profile" className='profile' />
                    </div>
                </div>
                    <div className="heading">
                        <h1>Employee Login Page</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                    <div className="gmail">
                        <div className="mail-container">
                        <img src={Mail} alt="Gmail" className='gmail-img' />
                        <input 
                            type="text" 
                            placeholder='Enter gmail' 
                            className='iput-gmail'
                            autoComplete='off'
                            ref={userRef}
                            onChange={(e)=> setUser(e.target.value)}
                            value= {user}
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
                            onChange={(e)=> setPwd(e.target.value)}
                            value= {pwd}
                            required
                        />
                        </div>
                    </div>
                    <div className="login">
                        <div className="sub-login">
                            <button type= 'submit' className='login-button'>Login</button>
                        </div>
                    </div>
                    </form>
                    <div className="f-pword">
                        <Link to="/Employee">Forgot password</Link>
                    </div>
            </div>

        </div>
        )

      }
      </>
    )
}

export default Emp_login
