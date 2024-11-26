import React from 'react'
import './Footer.css'
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://twitter.com/"><BsTwitter/></a>
        <a href="https://www.youtube.com/"><BsYoutube/></a>
      </div>
    </footer>
  )
}

export default Footer