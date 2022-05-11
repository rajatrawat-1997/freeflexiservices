import React, { Component } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home_TopBanner from "../../components/Home_TopBanner/Home_TopBanner";
import Home_WhyTrofi from "../../components/Home_WhyTrofi/Home_WhyTrofi";
import Enterprise_GradeSecurity from "../../components/Enterprise_GradeSecurity/Enterprise_GradeSecurity";
import Home_Feature from "../../components/Home_Feature/Home_Feature";

import Home_VisionMission from "../../components/Home_VisionMission/Home_VisionMission";
import WOW from "wowjs";

export class Home extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }
  render() {
    return (
      <div className="home_wrappers">
        <Header />
        <div className="middleCon">
          <div className="middleCon_Inner">
            <Home_TopBanner />
            <div className="home_interest_section">
              <ul>
                <li>
                  <div className="home_interest_box">
                    <h3>Zero processing Fee</h3>
                    <div className="d-flex">
                      <div className="home_interest_value">0%</div>
                      <div>
                        Processing <br />
                        Fee on Loan
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="home_interest_box">
                    <h3>Get Cashback</h3>
                    <div className="d-flex">
                      <div className="home_interest_value">1%</div>
                      <div>
                        Cashback
                        <br />
                        Loan + 1% cashback
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="home_interest_box">
                    <h3>Cheap Interet rate</h3>
                    <div className="d-flex">
                      <div className="home_interest_value">10.25%</div>
                      <div>
                        Interest <br />
                        Paid Out Daily
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              id="home_whytrofi"
              className="wow fadeIn"
              data-wow-duration="2s"
            >
              <Home_WhyTrofi />
            </div>
            {/* <div id="epg_security">
              <Enterprise_GradeSecurity />
            </div> */}
            <div id="home_product">
              <Home_Feature />
            </div>
            <div id="home_visionmission">
              <Home_VisionMission />
            </div>
          </div>
        </div>
        <div className="copyRight-sec al_Footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Home;
