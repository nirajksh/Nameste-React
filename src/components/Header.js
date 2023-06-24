import { useState } from "react"
import { logo } from "../Constant"
const Header =()=>{
  const [login ,setLogin] =useState(true)

    const Title = ()=>{
        return (
          <a href='/'>
            <img  className="logo"src= {logo}alt='logo'/>
          </a>
        )
    }

    
    return (
      <div className='header'>
        <Title/> 
        <div>{
          login?<button onClick={()=>setLogin(false)}>login</button>:<button onClick={()=>setLogin(true)}>logout</button>}
          
        </div>
        <div className='navbar'>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Offer</li>
            <li>Cart</li>

          </ul>

        </div>
      </div>
    )
}

export default Header;