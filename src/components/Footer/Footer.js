import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import fbIcon from "../../assets/images/facebook_icon.png";
import twIcon from "../../assets/images/twitter_icon.png";
import liIcon from "../../assets/images/linkedin_icon.png";
import getLocalData from "../../shared/localStorage/getData";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false,
    };
  }

  componentDidMount = async () => {
    if (getLocalData("user_info", "isLogin")) {
      this.setState({ isUserLogin: true });
    }
  };

  render() {
    return (
      <div>
        {!this.state.isUserLogin ? (
          <div className="after_login_footer">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-3">
                  <div className="footer_leftBox">
                    <div className="footer_HD">
                      {" "}
                      FreeFlexi
                      <br />
                      Loan Now
                    </div>
                    <div className="d-flex">
                      <NavLink to="/apply_form" className="footer_st_btn">
                        Apply Now
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer_nav">
                    <ul>
                      <li>
                        {" "}
                        <NavLink to="/terms_condition">Terms & Condition</NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/policy">Policy</NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/swap">About Us</NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink to="/earn">Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright d-flex justify-content-center mt-xl-5 mt-3 desktop_view">
                    &copy; copyright 2021 &nbsp;
                    <NavLink to="#">FREEFLEXI</NavLink> &nbsp;|&nbsp;All Rights
                    Reserved
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer_rightBox">
                    <ul className="footer_socialList d-flex">
                      <li>
                        <a href="https://www.facebook.com/FreeFlexi-111199994828023">
                          <img src={fbIcon} alt="Facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/freeflexi">
                          <img src={twIcon} alt="Twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/company/free-flexi/?viewAsMember=true">
                          <img src={liIcon} alt="LinkedIn" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (null
        //   <div className="copyRight-box d-flex justify-content-center">
        //     &copy; copyright 2021 &nbsp;<NavLink to="#">Trofi</NavLink>
        //     &nbsp;|&nbsp;All Rights Reserved
        //   </div>
        )}
      </div>
    );
  }
}
