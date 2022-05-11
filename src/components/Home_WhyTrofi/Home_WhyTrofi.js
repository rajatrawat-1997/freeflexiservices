import React, { Component } from "react";
import "./Home_WhyTrofi.scss";
import { NavLink } from "react-router-dom";
// import treasuryLogo from "../../assets/images/treasury_logo.png";
import treasuryLogo from "../../assets/images/refer-friend.png";


export class Home_WhyTrofi extends Component {
  render() {
    return (
      <div className="home_whytrofi_section">
        <div className="container">
          <div className="home_whytrofy_boxwrap">
            <div className="home_whytrofy_box home_whytrofy_left">
              <div className="home_whytrofy_boxinner">
                <div className="treasurylogo_box">
                  <img src={treasuryLogo} alt="" />
                </div>
                {/* <div>Money Services Business</div>
                <div className="amber_tl_text">
                  <NavLink to="#">
                    Click here and search “FreeFlexi services limited”
                  </NavLink>
                </div> */}
              </div>
            </div>
            <div className="home_whytrofy_box home_whytrofy_right">
              <div className="home_whytrofy_cont">
                <h2 className="mb-2">Why FreeFlexi ?</h2>
                <div className="mb-3">
                 If you are salleried person you are getting salery of 30K you can apply here and get benefits.
                </div>
                <div className="mb-3">
                 We provide loans with 1% plus case no third party no hidden charges, no agent no fake.
                </div>
                <div className="mb-3"> Zero processing fee  and so many other benefits, Eaily got loan and cashback, Everything is transparent</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home_WhyTrofi;
