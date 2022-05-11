import React, {Component} from 'react';
import './Wallet.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Wallet_table from '../../components/Wallet_table/Wallet_table';
import hand_icon from '../../assets/images/hand_icon.png';
import doller_icon from '../../assets/images/doller_icon.png';

export class Wallet extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                        <div class="pageHD_BoxWrap d-flex"><div class="pageHD">Wallet</div></div>
                            <div className="topHD_bannerBox mb-3">
                                <div className="wallet_topwrapper">
                                    <div className="d-flex wallet_topSec">
                                        <div className="d-flex align-items-center wallet_topBox">
                                            <div className="circle_iconBox d-flex justify-content-center align-items-center"><img src={hand_icon} alt=""/></div>
                                            <div className="usted_logoTxt">
                                                <div>
                                                    <div className="eb_title">Total Assets ( USD)</div>
                                                    <div className="eb_value">0.00</div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div className="d-flex align-items-center wallet_topBox">
                                            <div className="circle_iconBox d-flex justify-content-center align-items-center"><img src={doller_icon} alt=""/></div>
                                            <div className="usted_logoTxt">
                                                <div>
                                                    <div className="eb_title">Available Balance</div>
                                                    <div className="eb_value">0.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wallet_topnav">
                                        <ul>
                                            <li><a href="deposit">Deposit</a></li>
                                            <li><a href="withdraw">Withdraw</a></li>
                                            <li><a href="swap">Swap</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="wt_whiteBox mb-3">
                                <div className="wallet_tableWrap">
                                    <Wallet_table />
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
export default Wallet;