import {useState} from 'react';
import {useNavigate,Link} from "react-router-dom"
import Logo from "../logo.png";
import "./login.css";
function Login() {
    const navigate = useNavigate();
    const initialState = {
        userName:"",
        passWord:""
    }
    const [userLogin,setUserLogin]= useState(initialState);
 
     const handleChange = (e)=>{

    setUserLogin(
        {...initialState,
            [e.target.value]
            :e.target.value}
        );
     }
     const handleSubmit = (e)=>{
        e.preventDefault();
      console.log(userLogin);
      navigate("/homepage")
     }


  return (
  <div className='containerForm' > 
  <div className='imageContainer'>
  <img src={Logo} alt='' width={200}/>
    </div>  
    
        
    <form onSubmit={handleSubmit }   >
       <h3>Login</h3>
      <input type ="text" 
      name='userName'
      onChange={handleChange}
      placeholder="Enter your user name"
      
      />
      <input type ="password" 
      name='password'
      placeholder="Enter your user name" 
    
      />
         <input type ="submit" 
      name='password'
      placeholder="Enter your user name" 
      onChange={handleChange}

      />
      Or
      <Link to="/register">Register</Link>
    </form>
    </div>
  )
}

export default Login
