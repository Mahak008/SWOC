import React, {useState} from 'react';
import {Link} from 'react-scroll';
import Sticky from 'react-stickynode';
import {FaBars, FaFileContract, FaNewspaper, FaClipboardList} from 'react-icons/fa';
import {BsFillPersonPlusFill} from 'react-icons/bs';
import {IoWalletSharp} from 'react-icons/io5';
import {MdNotificationImportant} from 'react-icons/md';
import {AiFillSetting} from 'react-icons/ai'
import {Web3Button} from '@web3modal/react';

function SideNavbar() {
  const [Sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!Sidebar)

  const links = [
    {
      id: 1,
      title: "Add Employee",
      link: "/addemp",
      icon: (
        <>
          <BsFillPersonPlusFill size = {25} />
        </>
      ),
    },
    {
      id: 2,
      title: "Employee List",
      link: "/emplist",
      icon: (
        <>
          <FaClipboardList size = {25} />
        </>
      )
    },
    {
      id: 3,
      title: "Pay Salary",
      link: "/empsal",
      icon: (
        <>
          <IoWalletSharp size = {25} />
        </>
      )
    },
    {
      id: 4,
      title: "Contract Balance",
      link: "/contractbal",
      icon: (
        <>
          <FaFileContract size = {25} />
        </>
      )
    },
    {
      id: 5,
      title: "Notifications",
      link: "/",
      icon: (
        <>
          <MdNotificationImportant size = {25} />
        </>
      )
    },
    {
      id: 6,
      title: "Latest News",
      link: "/",
      icon: (
        <>
          <FaNewspaper size = {25} />
        </>
      )
    },
    {
      id: 7,
      title: "Settings",
      link: "/",
      icon: (
        <>
          <AiFillSetting size = {25} />
        </>
      )
    },
  ]

  return (
    <>
      <Sticky enabled={true} top={50} bottomBoundary={0}>
        <div className = "bg-black h-14 flex justify-between items-center cursor-pointer px-5 shadow-md z-50">
          <Link to = "#" className = "">
            <FaBars onClick = {showSidebar} size = {25} />
          </Link>
          <button className = "pl-8 py-4 text-xl font-bold">
            <Web3Button balance="show" icon="hide" label="Connect Wallet" />
          </button>
        </div>
      </Sticky>

      <nav className = {Sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className = "w-full">
          {
            links.map(({id, title, link, icon}) => (
              <li key = {id}>
                <Link to = {link} smooth duration={50} className = "flex justify-start items-center py-2 px-4 h-14 my-2 rounded-lg text-xl text-blue-400 bg-white font-semibold hover:bg-blue-400 hover:text-white cursor-pointer" onClick = {showSidebar}>
                  {icon}
                  <span className = "ml-4">{title}</span>
                </Link>        
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}

export default SideNavbar