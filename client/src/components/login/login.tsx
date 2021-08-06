import * as React from 'react'; 
import './login.css'
import { Room, Close } from '@material-ui/icons'
import { useRef, useState } from 'react';
import axios from 'axios';

type Props = { 
  setShowLogin: (showLogin: boolean) => void,
myStorage: {setItem: (key: string, value: string) => void}, 
setCurrentUser: (currentUser: string) => void 
}


export default function Login({setShowLogin, myStorage, setCurrentUser}: Props) {
  const [error, setError] = useState(false);

  const nameRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      username: nameRef.current.value,
      password: passRef.current.value
    };
    try {
      const res = await axios.post('http://localhost:3001/routes/users/login', user);
      myStorage.setItem('user', res.data.username);
      setCurrentUser(res.data.username);
      setShowLogin(false);
    } catch (e) {
      console.log(e)
      setError(true);
    }
  }

  return (
    <div className='loginContainer'>
      <div className='logo'>
        Movie Mapper
        <Room />
      </div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' ref={nameRef}/>
        <input type='password' placeholder='password' ref={passRef}/>
        <button className='loginButton'>Login</button>
        {error &&
        <span className='failure'>Something went wrong!</span>
        }
      </form>
      <Close className='loginClose' onClick={()=>setShowLogin(false)}/>
    </div>
  )
}