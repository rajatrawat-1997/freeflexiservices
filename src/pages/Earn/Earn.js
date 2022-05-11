import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Earn.scss';
import { NavLink,Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import account_icon from '../../assets/images/account_icon.png';
import ethereum_icon from '../../assets/images/ethereum_icon.png';
import usdt_logo from '../../assets/images/usdt_logo.png';
import fun_icon from '../../assets/images/fun_icon.png';
import LockedEarn from '../../pages/LockedEarn/LockedEarn';

class Earn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDays:0,
            currencyType:'',
            status:false
        }

    }

    handleDays = (event) =>{
     var selectDays = event.currentTarget.dataset.daysNum;
     this.setState({ selectDays:selectDays})

    }

    handleClickUsdtScreen=()=>{
       this.setState({status:true,currencyType:"BTC",percentage:"45%"}) 
    }


    render () {
         const from = {pathname: '/locked-earn',state:{ currencyType:this.state.currencyType,percentage:this.state.percentage,selectDays:this.state.selectDays}};

        if (this.state.status) { // if true the user will be redirected to /dashboard
        return <Redirect to={from} />;
        }
    
        
        return (
            <div>
                <Header />
            
                <div className="middleCon">
                    <div className="middleCon_Inner">

                   
                        <div className="container">
                        <div class="pageHD_BoxWrap d-flex"><div class="pageHD">Earn</div></div>
                            <div className="topHD_bannerBox mb-3">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="circle_iconBox d-flex justify-content-center align-items-center"><img src={account_icon} alt=""/></div>
                                        <div className="usted_logoTxt">
                                            <div>
                                                <div className="eb_title">Account Balance</div>
                                                <div className="eb_value">$208.24</div>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                            <div className="er_whiteBox mb-3">
                                <ul className="no_active_cb">
                                    <li>
                                        <span className="mr-15"><img src={ethereum_icon} alt="" /></span>
                                        <span className="mr-15"><img src={usdt_logo} alt="" /></span>
                                        <span>2 Active Crypto Balance</span>
                                    </li>
                                    <li>
                                        <span className="mr-15" style={{color : '#575757'}}>Your crypto balance automatically earns</span>
                                        <span className="fw_sb mr-15">Flexible Earn Rates</span>
                                        <span><NavLink to="/comming-soon" className="lm">Learn more</NavLink></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="er_whiteBox">
                                <div className="lockedEarn_topSec">
                                    <div className="lockedEarn_HD mb-2">Locked Earn</div>
                                    <div className="lockedEarn_title">Earn more at a higher Locked Earn Rate</div>
                                </div>
                                <div className="lockedEarn_box mb-3">
                                    <div className="lockedEarn_box_HD d-flex align-item-center mb-1">
                                        <div className="d-flex align-items-center"><img src={fun_icon} alt="" /></div>                                        
                                        <div className="lockedEarn_HD">Fun</div>
                                    </div>
                                    <div className="lockedEarn_contSec">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="lockedEarn_contInner">
                                                    <div className="mb-3">Annualized Interest Rate</div>
                                                    <h2 >45.00%</h2>
                                                </div>                                                
                                            </div>
                                            <div className="col-xl-6 col-lg-5">
                                                <div class="lockedEarn_contInner">
                                                    <div className="mb-3">Duration</div>
                                                    <ul className="lockedEarn_durationList">
                                                        <li><Button className="default_btn">Day 14</Button></li>
                                                        <li><Button className="default_btn">Day 30</Button></li>
                                                        <li><Button className="default_btn">Day 60</Button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3">
                                                <div className="mt-3">                                                
                                                    <Button className="default_btn fw_btn subscribe_btn mt_27">Subscribe</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lockedEarn_box mb-3">
                                    <div className="lockedEarn_box_HD d-flex align-item-center mb-1">
                                        <div className="d-flex align-items-center"><img src={usdt_logo} alt="" /></div>                                        
                                        <div className="lockedEarn_HD">USDT</div>
                                    </div>
                                    <div className="lockedEarn_contSec">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4">
                                                <div className="lockedEarn_contInner">
                                                    <div className="mb-3">Annualized Interest Rate</div>
                                                    <h2>45.00%</h2>
                                                </div>                                                
                                            </div>
                                            <div className="col-xl-6 col-lg-5">
                                                <div class="lockedEarn_contInner">
                                                    <div className="mb-3">Duration</div>
                                                    <ul className="lockedEarn_durationList">
                                                        <li data-days-num={14} onClick={this.handleDays}><Button className="default_btn">Day 14</Button></li>
                                                        <li data-days-num={30} onClick={this.handleDays}><Button className="default_btn">Day 30</Button></li>
                                                        <li data-days-num={60} onClick={this.handleDays}><Button className="default_btn">Day 60</Button></li>
                                                        <li data-days-num={90} onClick={this.handleDays}><Button className="default_btn">Day 90</Button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-3">
                                                <div className="mt-3">                                                
                                                    <Button className="default_btn fw_btn subscribe_btn mt_27" onClick={this.handleClickUsdtScreen}>Subscribe</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
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
export default Earn;