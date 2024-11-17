import React, { useState, useEffect } from 'react';
import { Link } from 'react-feather'
import { IoMenu } from "react-icons/io5";

const dropdown = () => {
  return (
    <div>
      <div className="drawer drawer-start">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4"><IoMenu className='mr-4 text-3xl'/></label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      
          </ul>
        </div>
      </div>
    </div>
  )
}

export default dropdown
