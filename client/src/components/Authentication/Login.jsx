import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router';

function Login({setUser}) {

  const[username,setUsername] =useState("")
  const [password, setPassword] =useState("")
  const [msg,setMsg]= useState(null);
  const navigate =useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    fetch("/login",{
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({username, password}),
    }).then((r)=>{
      if(r.ok){
        r.json().then((user)=>setUser(user));
        navigate('/');
      }
      else
      setMsg("Invalid Username or Password")
    })
  }

  return (
    <div>
      <h1>Please Login</h1>
      <div className="signup">
      <form onSubmit={handleSubmit} className='form-control'>
        <input 
        type="text"
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        

        <input 
        type="password"
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
        />
        {msg?(<div className="error-msg">
          <h5 className="error-text">Invalid username or password!!.</h5>
        </div>
        ):(null)}
        <button className='btn' type='submit'>Log in</button>
      </form>
      </div>
      </div>
  )
}

export default Login