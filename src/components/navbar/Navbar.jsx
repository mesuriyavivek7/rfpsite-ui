import React from 'react'


//importing css
import './navbar.css'

//importing icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>RFPNEXUS</span>

        <div className='navItems'>
            <a href='#.' className='navlink'>Home</a>
            <a href='#.' className='navlink'>About</a>
            <a href='#.' className='navlink'>Premium Services</a>
            <a href='#.' className='navlink'>Contact</a>
        </div>

        <div className='navIcons'>
            <button className='loginBtn'><LoginIcon></LoginIcon> Login</button>
            <div className='cartSec'>
                <ShoppingCartIcon></ShoppingCartIcon>
                <span className='cartCount'>1 rfp</span>
            </div> 
        </div>
    </div>
  )
}
