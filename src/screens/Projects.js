import React from 'react'
import Home from './Home'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import theImage1 from "../components/images/resumepic.png"
export default function Projects() {
  return (
    <div>
    <div><Navbar/></div>
        <Card
            image={theImage1}
            name="Resume Website"
            skill1="React"
            skill2="props"
            skill3="components,screens"
            skill4="CSS"
        />
        <Card
          webs="https://github.com/krnveersharma/bookstore_management_system"
          image={theImage2}
          name="Bookstore Management"
          skill1="React"
          skill2="Css"
          skill3="Express.js"
          skill4="MongoDB"
        />
    <div><Footer/></div>
    </div>
  )
}
