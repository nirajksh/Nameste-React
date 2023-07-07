import { useState } from "react"
import { Link } from "react-router-dom"
import { logo } from "../Constant"
const Header =()=>{
  const [login ,setLogin] =useState(true)

    const Title = ()=>{
        return (
          <Link to="/">
            <img  className="h-28 p-2" src= {logo}alt='logo'/>
            </Link>
          
        )
    }

    
    return (
      <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50" >
        <Title/> 
        <div>{
          login?<button onClick={()=>setLogin(false)}>login</button>:<button onClick={()=>setLogin(true)}>logout</button>}
          
        </div>
        <div className='navbar'style={{margin:"5px",padding:"5px"}}>
          <ul  className="flex py-10">
            <Link to="/about"><li className="px-2">About</li></Link>
            <Link to="/contact"> <li className="px-2">Contact</li></Link>
            <Link to="/offer"><li className="px-2">Offer</li></Link>
            <Link to="/cart"><li className="px-2">Cart</li></Link>
           

          </ul>

        </div>
      </div>
    )
}

export default Header;