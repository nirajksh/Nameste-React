import { logo } from "../Constant"
const Header =()=>{

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