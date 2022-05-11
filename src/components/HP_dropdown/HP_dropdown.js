import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, Button } from 'reactstrap';
import './HP_dropdown.scss';
import headerpf from '../../assets/images/profile_icon.png';
import getLocalData from "../../shared/localStorage/getData";
import removeLocalData from "../../shared/localStorage/removeData";

const HP_dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setUserLogin] = useState(getLocalData('user_info', 'isLogin'));
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const logoutUser = () => {
            
    removeLocalData("user_info");
   
    window.location.href='/';
   };

  return (

    <div className="hp_dropWrap">
      {!isLogin &&
        <div className="beforelogin_option d-flex">
            <div className="d-flex">
              
              {/* <NavLink href="/sign-in" className="logintxt">Login</NavLink> */}
              <Button className="getstarted_btn"  href="/apply_form">Apply Form</Button>
            </div>
        </div>
      }
       {isLogin &&
        <div className="afterlogin_option">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret className="hp_dropBtn">
                <span className="hpf-image">
                    <img src={headerpf} alt="" />
                </span>
                <span className="user-name">Maria Smith</span>
            </DropdownToggle>
            <DropdownMenu>        
                <DropdownItem><NavLink href="/comming-soon">Profile</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/refer-friend" >Refer-a-friend</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/identity_verification">Identity Verification</NavLink></DropdownItem>
                <DropdownItem><NavLink onClick={logoutUser}>Log Out</NavLink></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
}
    </div>
  );
}

export default HP_dropdown;