import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, NavbarText } from 'reactstrap';
import './Transfer.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import swap_icon from '../../assets/images/Swap_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';
import infoIcon from '../../assets/images/info_icon.png';
import whiteSwap_icon from '../../assets/images/white_swrapIcon.png'
const Transfer = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    return (
        <div>
            <Header />
            <div className="middleCon">
                <div className="middleCon_Inner">
                    <div className="whiteBox_wrappers">
                    <div className="pageHD_BoxWrap d-flex justify-content-between align-items-center">
                        <div className="pageHD_lftBox">
                            <div className="pageHD">Transfer</div>
                        </div>
                        <div className="pageHD_rgtBox">
                            <NavLink to="/history" className="history_btn">History</NavLink>
                        </div>
                    </div>
                    <Form>
                        <div className="whiteBox pr-0 pl-0">                            
                            <div className="sellBox">
                                <div className="d-flex justify-content-between item-align-center transferSwrapBox pr-30 pl-30">
                                    <div className="transferFrom">
                                        <div className="transferToFrom_HD mb-2">From</div>
                                        <div className="transfer_UserName">John deo</div>
                                    </div>
                                    <div className="transferSWrap">
                                        <div className="transferSWrap_iconBox">
                                            <div className="transferSWrap_icon"><img src={whiteSwap_icon} alt="" /></div>
                                        </div>                                                                                
                                    </div>
                                    <div className="transferTo">
                                        <div className="transferToFrom_HD mb-2">To</div>
                                        <div className="transfer_UserName">Mark Ponting</div>
                                    </div>
                                </div>                                
                                <div>
                                    <div className="transfer_subHD pr-30 pl-30">Current</div>
                                    <div className="pr-30 pl-30">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <FormGroup>
                                                    <div class="currency_dropBox_wrap">
                                                            <div class="lang">
                                                            <div class="autoTranslate">
                                                                <div class="righttrans">
                                                                    <div class="langTrans"> 
                                                                        <a href="javaScript:;" class="changeLink">
                                                                            <span className="d-flex align-items-center"> <img src={btcIcon} alt="" /> BTC </span>                                                        
                                                                        </a>
                                                                        <div class="dropDownLang">
                                                                            <ul>
                                                                                <li>
                                                                                    <a class="langvalue" href="javaScript:;">
                                                                                        <span className="d-flex align-items-center"><img src={dollarsIcon} alt="" /> USD </span>
                                                                                    </a>
                                                                                </li>
                                                                                <li> 
                                                                                    <a class="langvalue" href="javaScript:;">
                                                                                        <span className="d-flex align-items-center"><img src={btcIcon} alt="" /> BTC </span>
                                                                                    </a>
                                                                                </li>                                                                
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </FormGroup>                                        
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div className="transfer_subHD pr-30 pl-30">Transfer Amount</div>
                                    <div className="pr-30 pl-30">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <FormGroup>
                                                    <Input type="text" name="sellValue" id="sellValue" className="lightBg_filed sell_field" placeholder="Pleaae enter amount" />
                                                    <span className="max_txt">Max</span>
                                                </FormGroup>
                                            </div>
                                        </div>
                                    </div>                                   
                                    <div className="available_amout pr-30 pl-30">Available 
                                        <span>0.00000000</span> 
                                        <span>USD $</span>
                                        <span className="infomation_icon">
                                            <img src={infoIcon} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="continueBtn_wrap">
                            <Button className="continue_btn">Transfer</Button>
                        </div>
                    </Form>
                </div>
            
                </div>
            </div>
            <div className="copyRight-sec al_Footer">
                <Footer />
            </div>
        </div>
    );
}

export default Transfer;