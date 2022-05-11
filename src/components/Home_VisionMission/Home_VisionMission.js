import React, { Component } from 'react';
import './Home_VisionMission.scss';
import vmIcon1 from '../../assets/images/vm_icon1.png';
import vmIcon2 from '../../assets/images/vm_icon2.png';
import jpmIcon from '../../assets/images/jp_morgan_icon.png';
import hsbcIcon from '../../assets/images/hsbc_icon.png';
import csIcon from '../../assets/images/credit_suisse_icon.png';
import macquarieIcon from '../../assets/images/macquarie_icon.png';

export class Home_VisionMission extends Component {
  render() {
    return (
      <div className='home_vm_wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='home_vm_left'>
                <h4>OUR</h4>
                <h2>VISION & MISSION</h2>
                <div className='home_vm_content mt-xl-4 mt-3'>
                  <div className='home_vm_contentbox1'>
                    A mission statement is a literal quote stating what a brand
                    or company is setting out to do. This lets the public know
                    the product and service it provides, who it makes it for,
                    and why it’s doing it. A vision statement is a brand looking
                    toward the future and saying what it hopes to achieve
                    through its mission statement.
                  </div>
                  <div className='home_vm_contentbox2'>
                    This is more conceptual, as it’s a glimpse into what the
                    brand can become in the eyes of the consumer and the value
                    it will bring in longevity.
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>
              <div
                className='home_vm_right wow fadeInUp'
                data-wow-duration='2s'
              >
                <div className='vm_right_box1'>
                  <div className='home_vm_right_inner'>
                    <div className='vm_iconbox mb-xl-3'>
                      <img src={vmIcon1} alt='' />
                    </div>
                    <div className='vm_right_cont'>
                    Free Flexi provides finacial support in form of loan to
                    startups as well as to individuals. We have been helping
                    customers to providing loan and 1% cashback on the amount.
                    Here you get the opportunity to source coustomers in
                    different products & multiple location in India virtually.
                    We are open for Personal loan, Business Loan, Home Loan,
                    Mortgage Loan, SME loans and many more products line. 
                    </div>
                  </div>
                </div>
                <div className='vm_right_box2 gradient_bg'>
                  <div className='vm_iconbox mb-xl-3'>
                    <img src={vmIcon2} alt='' />
                  </div>
                  <div className='vm_right_cont'>
                    Also,get the opportunity to access the online leads available
                    with us. We provide all types of loan product’s leads for
                    your respective cities in India. WE'RE DIFFERENT THAN THE
                    REST Here, we serve you the best in the market, become our
                    Bank DSA Partner & Join our Loan DSA Program.
                    We are open for Bank DSA registration for
                    Personal Loan, Mortgage Loan, Home Loan, Business Loan, and
                    many more loan products. 
                    {/* Our goal is to reach all the DSAs
                    across India and provide the leads for all registered Banks. */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home_VisionMission;
