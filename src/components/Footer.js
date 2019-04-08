import React from 'react'
import Linkedin from './Linkedin.png'
import Github from './Github.png'
import './footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <a href="https://www.linkedin.com/in/builtbycooper/"  target="_blank" rel="noopener noreferrer" className="Footer-link">
        <img className="Footer-logo" src={Linkedin} />
      </a>
      <a href="https://www.github.com/cooperbuilt"  target="_blank" rel="noopener noreferrer" className="Footer-link">
        <img className="Footer-logo" src={Github} />
      </a>
    </footer>
  )
}

export default Footer
