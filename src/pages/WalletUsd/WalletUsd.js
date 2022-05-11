import React, {Component} from 'react';
import './WalletUsd.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Flexible_EarnBox from '../../components/Flexible_EarnBox/Flexible_EarnBox';
import WalletUsd_HistoryTable from '../../components/WalletUsd_HistoryTable/WalletUsd_HistoryTable';
import usdt_logo from '../../assets/images/usdt_logo.png';

export class WalletUsd extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                        <div class="pageHD_BoxWrap d-flex"><div class="pageHD">overview</div></div>
                            <div className="topHD_bannerBox walletUsd_topwrapper">
                                <div className="wallet_topwrapper">
                                    <div className="d-flex wallet_topSec">
                                        <div className="d-flex align-items-center wallet_topBox">
                                            <div className="circle_iconBox d-flex justify-content-center align-items-center"><img src={usdt_logo} alt=""/></div>
                                            <div className="usted_logoTxt">
                                                <div>
                                                    <div className="usdt_logotext">USDT</div>
                                                    <div className="tb_title"><i>Total Balance</i></div>
                                                    <div className="eb_value">1.00048664</div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="wallet_topnav">
                                        <ul>
                                            <li><a href="/deposit">Deposit</a></li>
                                            <li><a href="/withdraw">Withdraw</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="wt_whiteBox mb-3">
                               <div>
                                   <Flexible_EarnBox />
                               </div>
                            </div> 
                            <div className="walletUsd_historytable_sec">
                                <div class="pageHD_BoxWrap d-flex">
                                    <div class="pageHD">History</div>
                                </div>
                                <WalletUsd_HistoryTable />
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
export default WalletUsd;