import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div>
            <header style={{ borderBottom: "3px solid rgb(212, 212, 212)", }}>
                <a style={{ color: "#24252A", marginRight: '400px', marginLeft: 'auto', fontSize: '20px' }}>Karanveer Sharma</a>
                <nav className='dsc'>
                    <button>
                        <Link className='nav_link1' to="/" >Home</Link>
                    </button>
                    <button>
                        <Link className='nav_link2' to="/about" >About</Link></button>
                    <button>
                        <Link className='nav_link3' to="/skills" >Skills</Link>
                    </button>
                    <button>
                        <Link className='nav_link4' to="/projects" >Projects</Link>
                    </button>
                </nav>
                <nav className='btn'>
                    <button class="cta" href="#" style={{ borderRadius: '25px', marginLeft: '40px', overflow: 'hidden' }}>Contact</button>
                    <div class="dropdown-content">
                        <a href="#">+91 9592728868</a>
                        <a href="#">karanveer1029y@gmail.com</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
