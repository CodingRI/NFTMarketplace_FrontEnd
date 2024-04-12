import React,{useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';

//--IMPORT icons
import {MdNotifications} from "react-icons/md"
import {BsSearch} from "react-icons/cg"
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

//IMPORT internal styling
import Style from "./Navbar.module.css"; 
import {Discover,HelpCenter, Notification, Profile, SideBar} from "./index"
import {Button} from "../Component_index"
import images from "../../img"
const Navbar = () => {
    const [discover, setdiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotifcation] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);


  return (
    <div>
      
    </div>
  )
}

export default Navbar
