import React from 'react'
import {IoIosHome} from 'react-icons/io'
import {MdCategory} from 'react-icons/md' 
import { Link, useLocation } from 'react-router-dom'


export default function Sidebar() {
    const location = useLocation()

    const NavItems = [
        {
            tab: "Home",
            url: "/",
            icon: <IoIosHome/>
        },
        {
            tab: "Category",
            url: "/category",
            icon: <MdCategory/>   
        }
    ]

  return (
    <>
    <div className="bg-primary p-3 d-flex text-white justify-content-between align-items-center">
        <span>Admin name</span>
        <button className="btn btn-outline-light">LogOut</button>
    </div>
    <ul className="nav flex-column pt-4">
      {
        NavItems.map((val, key) => 
        <li key={key} className= {`nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>
         
        <Link className='nav-link d-flex align-items-center gap-3' to={val.url}>
            <span>{val.icon}</span>
            <span>{val.tab}</span>
        </Link>
      </li>)
      }
    </ul>
    </>
  )
}
