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
import { Flamenco } from 'next/font/google';
import { ST } from 'next/dist/shared/lib/utils';
const Navbar = () => {
    const [discover, setdiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotifcation] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
      const btnText = e.target.innertext;
      if (btnText == "Discover") {
        setdiscover(true);
        setHelp(false);
        setNotifcation(false);
        setProfile(false);
      } else if (btnText == "Help Center") {
        setdiscover(false);
        setHelp(true);
        setNotifcation(false);
        setProfile(false);
      }else {
        setdiscover(false);
        setHelp(false);
        setNotifcation(false);
        setProfile(false);
      }
    }

    const openNotification = () => {
      if (!notification) {
        setNotifcation(true);
        setdiscover(false);
        setHelp(false);
        setProfile(false);
      }else {
        setNotifcation(false);
      }
    }

    const openProfile = () => {
      if(!profile) {
        setProfile(true);
        setHelp(false);
        setdiscover(false);
        setNotifcation(false);
      }else {
        setProfile(false);
      }
    }

    const openSidebar = () => {
      if(!openSideMenu) {
        setOpenSideMenu(true)
      }else {
        setOpenSideMenu(false)
      }
    }


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
          <div className={Style.navbar_container_left}>
            <div className={Style.logo}>
            <Image src = {images.logo} alt = "NFT MARKET PLACE" width={100} height={100}/>
            </div>
            <div className={Style.navbar_container_left_box_input}>
              <div className={Style.navbar_container_left_box_input_box}>
                <input  type='text' placeholder='Search NFT'/>
                <BsSearch onClick = {() => {}} className= {Style.search_con}/>
              </div>

            </div>
          </div>
          {/*END OF LEFT SECTION*/}
          <div className= {Style.navbar_container_right}>
            <div className={Style.navbar_container_right_discover}>
              {/* DISCOVER MENU */}
              <p onClick={(e) => openMenu(e)}>Discover</p>
              {discover && (
                <div className={Style.navbar_container_right_discover_box}>\
                <Discover/>
                </div>
              )}
              
            </div>

            {/* HELP CENTER MENU */}
            <div className={Style.navbar_container_right_help}>
              <p onClick={(e) => openMenu(e)}>Help Center</p>
              {help && (
                <div className={Style.navbar_container_right_help_box}>\
                <HelpCenter/>
                </div>
              )}
            </div>
            {/* NOTIFICATION */}
            <div className={Style.navbar_container_right_notify}>
              <MdNotifications className={Style.notify} onClick={() => openNotification()}/>
              {notification && <Notification/>}
            </div>

              {/* CREATE BUTTON SECTION */}
              <div className={Style.navbar_container_right_button}>
                <Button btnText="Create"/>
              </div>

              {/* USER PROFILE */}

              <div className={Style.navbar_container_right_profile_box}>
                <div className={Style.navbar_container_right_profile}>
                  <Image src = {images.user1} 
                  alt = "Profilr"
                  width={40} 
                  height={40}
                  onClick={() => openProfile()}
                  className={Style.navbar_container_right_profile}
                  />
                  {profile && <Profile/>}
                </div>
              </div>

              {/* MENU BUTTON */}
              <div className={Style.navbar_container_right_menuBtn}>
                <CgMenuRight
                className={Style.menuIcon}
                onClick={() => openSidebar()}
                />
              </div>
          </div>
      </div>  

      {/* SIDEBAR  COMPONENT */}
      {openSideMenu && (
        <div className={Style.SideBar}>
          <SideBar setOpenSideMenu = {setOpenSideMenu}/>
        </div>
      )}
    </div>
  );
};

export default Navbar
