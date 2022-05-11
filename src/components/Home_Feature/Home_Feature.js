import React, { Component } from 'react';
import './Home_Feature.scss';
import homeSwapImage from '../../assets/images/home_swapImage.png';
import earnHandImage from '../../assets/images/home_earn_hand.png';
import loanImage from '../../assets/images/home_loan_image.png';
import enhancedEarnImage from '../../assets/images/home_ee_image.png';
import homeAutomatedImage from '../../assets/images/home_automated.png';
import homePortfolioImage from '../../assets/images/home_portfolio_image.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export class Home_Feature extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1280 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 1280, min: 992 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 992, min: 575 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 575, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        <div className='home_feature'>
          <div className='container'>
            <div className='home_feature_topsection'>
              <h2>SERVICES OFFERING</h2>
              <div>
                We offer a complete suite of wealth management FreeFlexi
                services, including multiple application for evry need, One-time
                application for a credit line, EMI compromises Principal+
                Interest, and Choice to pay as EMI, Part pre-payment charges
                applicable, No part pre-payment charges, zero processing fee for
                each application
              </div>
            </div>
            <div
              className='home_feature_boxwarppers wow fadeIn'
              data-wow-duration='2s'
            >
              <div className='home_feature_listwrap'>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  itemClass='carousel_item_padding_15'
                >
                  <div className='home_feature_list gradient_bg home_swap_product'>
                    <div className='home_feature_box'>
                      <h4 className='feature_comingsoon'></h4>
                      <h3>KOTAK</h3>
                      <div className='d-flex justify-content-between'>
                        <div>ROC</div>
                        <div>13-15%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>PF</div>
                        <div>2%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>AMC</div>
                        <div>0.255%</div>
                      </div>
                   <div className="home_swap_icon"><img src={homeSwapImage} alt=" " /></div> 
                    </div>
                  </div>
                  <div className='home_feature_list home_earn_product'>
                    <div className='home_feature_box'>
                      <h4 className='feature_comingsoon'></h4>
                      <h3>Tata captain </h3>
                      <div className='d-flex justify-content-between'>
                        <div>ROC</div>
                        <div>13-15%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>PF</div>
                        <div>2%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>AMC</div>
                        <div>0.255%</div>
                      </div>
                      <div className='earnhand_icon'>
                        <img src={earnHandImage} alt=' ' />
                      </div>
                    </div>
                  </div>
                  <div className='home_feature_list gradient_bg home_loan_product'>
                    <div className='home_feature_box'>
                      <h4 className='feature_comingsoon'></h4>
                      <h3>Bajaj finserv </h3>
                      <div className='d-flex justify-content-between'>
                        <div>ROC</div>
                        <div>13-15%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>PF</div>
                        <div>2%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>AMC</div>
                        <div>0.255%</div>
                      </div>
                      <div className='home_loan_icon'>
                        <img src={loanImage} alt=' ' />
                      </div>
                    </div>
                  </div>
                  <div className='home_feature_list home_enhanced_earn'>
                    <div className='home_feature_box'>
                    <h4 className='feature_comingsoon'></h4>
                      <h3>Icici</h3>
                      <div className='d-flex justify-content-between'>
                        <div>ROC</div>
                        <div>13-15%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>PF</div>
                        <div>2%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>AMC</div>
                        <div>0.255%</div>
                      </div>
                      <div className='home_ee_icon'>
                        <img src={enhancedEarnImage} alt=' ' />
                      </div>
                    </div>
                  </div>
                  <div className='home_feature_list gradient_bg home_enhanced_earn'>
                    <div className='home_feature_box'>
                    <h4 className='feature_comingsoon'></h4>
                      <h3>AXIS</h3>
                      <div className='d-flex justify-content-between'>
                        <div>ROC</div>
                        <div>13-15%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>PF</div>
                        <div>2%</div>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div>AMC</div>
                        <div>0.255%</div>
                      </div>
                      <div className='home_ee_icon'>
                      <img src={homePortfolioImage} alt=' ' />
                      </div>
                    </div>
                  </div>
                  {/* <div className='home_feature_list gradient_bg home_automated_product'>
                    <div className='home_feature_box'>
                      <h4 className='feature_comingsoon'></h4>
                      <h3>
                        Automated <br />
                        Strategies{' '}
                      </h3>
                      <div className='home_automated_icon'>
                        <img src={homeAutomatedImage} alt=' ' />
                      </div>
                    </div>
                  </div> */}
                  {/* <div className='home_feature_list home_portfolio_reporting'>
                    <div className='home_feature_box'>
                      <h4 className='feature_comingsoon'>(COMING SOON)</h4>
                      <h3>
                        Portfolio <br />
                        reporting{' '}
                      </h3>
                      <div className=' home_portfolio_icon'>
                        <img src={homePortfolioImage} alt=' ' />
                      </div>
                    </div>
                  </div> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home_Feature;
