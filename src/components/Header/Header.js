import React, { useState } from "react";
import "./Header.scss";
import HP_dropdown from "../../components/HP_dropdown/HP_dropdown";
// import headerlogo from '../../assets/images/headerlogo.png';
import headerlogo from "../../assets/images/logofreeflexi.png";
import getLocalData from "../../shared/localStorage/getData";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navItemHtml = () => {
    var isLogin = getLocalData("user_info", "isLogin");

    if (isLogin) {
      return (
        <>
          {/* <NavItem>
            <NavLink>Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/earn">Earn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/swap">Swap</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/deposit">Deposit</NavLink>
          </NavItem> */}
        </>
      );
    } else {
      return (
        <>
          <NavItem>
            <NavLink href="/#home_product">Services</NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="header_caret_icon">
              About
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href="/#home_visionmission">
                  Our Vision & Mission
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href="/#home_whytrofi">Why FreeFlexi?</NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <NavItem>
          <NavLink href="/#home_visionmission">
                  Our Vision & Mission
                </NavLink>
          </NavItem>
          <NavItem> <NavLink href="/#home_whytrofi">Why FreeFlexi?</NavLink></NavItem>
        </>
      );
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner d-flex justify-content-between">
          <div className="header-left">
            <Navbar color="" light expand="md">
              <NavbarBrand href="/">
                <img src={headerlogo} alt="" width={120} height={46} />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  {navItemHtml()}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div className="header-right d-flex align-items-center">
            <HP_dropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
