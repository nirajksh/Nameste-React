import { useState } from "react"
import { Link } from "react-router-dom"
import { logo } from "../Constant"
const Header =()=>{
  const [login ,setLogin] =useState(true)

    const Title = ()=>{
        return (
          <Link to="/">
            <img  className="logo"src= {logo}alt='logo'/>
            </Link>
          
        )
    }

    
    return (
      <div className='header' >
        <Title/> 
        <div>{
          login?<button onClick={()=>setLogin(false)}>login</button>:<button onClick={()=>setLogin(true)}>logout</button>}
          
        </div>
        <div className='navbar'style={{margin:"5px",padding:"5px"}}>
          <ul >
            <Link to="/about"><li >About</li></Link>
            <Link to="/contact"> <li>Contact</li></Link>
            <Link to="/offer"><li>Offer</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
           

          </ul>

        </div>
      </div>
    )
}

export default Header;