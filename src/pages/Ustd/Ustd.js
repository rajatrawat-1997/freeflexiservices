import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Ustd.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Flexible_earn_table from '../../components/Flexible_earn_table/Flexible_earn_table';
import EarnIntrest_Tab from '../../components/EarnInrest_Tab/EarnIntrest_Tab';
import usdt_logo from '../../assets/images/usdt_logo.png';

export class Ustd extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                            <div className="topHD_bannerBox mb-3">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="circle_iconBox d-flex justify-content-center align-items-center"><img src={usdt_logo} alt=""/></div>
                                        
                                        <div className="usted_logoTxt">USDT</div>
                                    </div>
                                    <div>
                                        <div className="eb_title">Earn balance</div>
                                        <div className="eb_value">1.00048664</div>
                                    </div>
                                </div>
                            </div>
                            <div className="er_whiteBox mb-3">
                                <Flexible_earn_table />
                            </div>
                            <div className="earn_tabsWrapper">
                                <EarnIntrest_Tab />
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
export default Ustd;