import React, { useState, useEffect } from 'react';
import { Link } from 'react-feather'
import { IoMenu } from "react-icons/io5";

const dropdown = () => {
  return (
    <div>
      <div className="drawer drawer-start sm:flex md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4"><IoMenu className='mr-4 text-3xl'/></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="secondnav bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="flex items-start">
              <a href="#">
                <img
                  className="Logo_image2"
                   src="https://alfiaduct.com/wp-content/uploads/2024/11/logo2.png"
                  alt="logo_image"
                />
                <h2 className="flex flex-row text-[#EDEADE] text-xl font-bold gap-2">
                  Kabeer <span className="text-[#e60b4d] text-xl font-bold">Ahmed</span>
                </h2>
              </a>
            </div>

           <div className='navigation'>
           <li>
              <a className='text-lg ' href="#">HOME</a>
            </li>
            <li>
              <a className='text-lg ' href="#">ABOUT</a>
            </li>
            <li>
              <a className='text-lg ' href="#">SKILLS</a>
            </li>
            <li>
              <a className='text-lg ' href="#">PROJECTS</a>
            </li>
            <li>
              <a className='text-lg ' href="#">CLIENTS</a>
            </li>
            <li>
              <a className='text-lg ' href="#">CONTACT</a>
            </li>
           </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default dropdown
