import React, { useState } from "react";
import "./Home_TopBanner.scss";
import { NavLink } from "react-router-dom";
import homeTopImage from "../../assets/images/refer-friend.png";

const Home_TopBanner = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    setOpen(!open);
  };
  return (
    <>
      <div className="home_topBanner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="home_topBanner_cont">
                <div className="home_topBanner_HD">
                  HERE YOU WILL <br />
                  GET LOAN WITH 1% of <br />
                  loan  amount  CASHBACK
                </div>
                <div className="home_topBanner_btn">
                  <NavLink to="/apply_form">
                      Apply Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sg_image">
                {/* <img src={homeTopImage} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home_TopBanner;
