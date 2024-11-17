import React, { useState, useEffect } from 'react';
import { HiMenu } from "react-icons/hi";
import Dropdown from './dropdown';
import { IoMdHome } from "react-icons/io";

const Header = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuClick = (section) => {
    setActiveSection(section);
  }

  return (
    <header className={`header ${hasShadow ? 'shadow' : ''}`} id="header">
      <nav className="NavBar">
        <div className="flex items-center">
          <a href="#">
            <img
              className="Logo_image"
              src="/images/logo1.png"
              alt="logo_image"
            />
            <h2 className="text-[#EDEADE] text-2xl font-bold">
              Kabeer <span className="text-[#e60b4d] text-2xl font-bold">Ahmed</span>
            </h2>
          </a>
        </div>
        <Dropdown className="sm:flex md:hidden" />

        <ul className="hidden lg:flex">
          <li>
            <a href="#" onClick={() => menuClick('home')} className={activeSection === 'home' ? 'active' : ''}>HOME</a>
          </li>
          <li>
            <a href="#" onClick={() => menuClick('about')} className={activeSection === 'about' ? 'active' : ''}>ABOUT</a>
          </li>
          <li>
            <a href="#" onClick={() => menuClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>SKILLS</a>
          </li>
          <li>
            <a href="#" onClick={() => menuClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</a>
          </li>
          <li>
            <a href="#" onClick={() => menuClick('clients')} className={activeSection === 'clients' ? 'active' : ''}>CLIENTS</a>
          </li>
          <li>
            <a href="#" onClick={() => menuClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a>
          </li>
          <a className="CallToAction" href="#">
            GET A QUOTE
          </a>
        </ul>

        <span id="MenuIcon" className="material-symbols-outlined lg:hidden">
          menu
        </span>
      </nav>
    </header>
  );
};

export default Header;
