import React from 'react'
// import { Heart, User } from 'lucide-react'
import logo from '../assets/LOGO.png'
import { useState } from 'react'
import {  Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      let b= document.getElementById("menu-button");
      if(b) b.style="position: absolute; top:10px; right: 10px;"
    }
    else{
      let b= document.getElementById("menu-button");
      if(b) b.style=""
    }
  }
  return (
    <header className="sticky top-0 z-50 bg-green-500 shadow-md px-6 py-4 flex items-center justify-between">

      <Link to="/"><img className='h-10 w-auto' src={logo} alt='logo' /></Link>

      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <Link to="/" className="hover:text-white-700 ">Accueil</Link>
        <Link to="/bien" className="hover:text-white-700">Biens</Link>
        <Link to="/apropos" className="hover:text-white-700">À propos</Link>
        <Link to="/inscription" className="hover:text-white-700">S'inscrire</Link>
        <Link to="/connexion" className="hover:text-white-700">Se connecter</Link>
        <Link to="/contact" className="hover:text-white-700">Contact</Link>
      </nav>

      {/* <div className="flex items-center space-x-6">
          <div className="relative cursor-pointer">
            <Heart className="w-6 h-6 text-gray-700 hover:text-red-500" />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              2
            </span>
          </div>
          <button className="flex items-center space-x-2 border border-green-700 px-4 py-2 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition">
            <User className="w-5 h-5" />
            <span>Connexion</span>
          </button>

        </div> */}
      <button onClick={toggleMenu} className="md:hidden" id="menu-button">
        {menuOpen ? <X size={24} color="white" />
          : <Menu size={24} color='white' />}
      </button>
      {menuOpen && (
        <div className='md:hidden space-y-3'>
          <Link to="/" className="block hover:text-white-700">Accueil</Link>
          <Link to="/bien" className="block hover:text-white-700">Biens</Link>
          <Link to="/apropos" className="block hover:text-white-700">À propos</Link>
          <Link to="/inscription" className="block hover:text-white-700">S'inscrire</Link>
          <Link to="/connexion" className="block hover:text-white-700">Se connecter</Link>
          <Link to="/contact" className="block hover:text-white-700">Contact</Link>
        </div>
      )}

    </header>
  )
}

export default Header
