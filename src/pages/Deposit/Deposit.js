import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, NavbarText } from 'reactstrap';
import './Deposit.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import swap_icon from '../../assets/images/Swap_icon.png';
import ethereumIcon from '../../assets/images/ethereum_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';
import infoIcon from '../../assets/images/info_icon.png';
import whiteSwap_icon from '../../assets/images/white_swrapIcon.png';
import QRcode_image from '../../assets/images/QRcode_img.png';
import uploadFile_icon from '../../assets/images/uploadFile_icon.png';
import QRCode from "react-qr-code";
import getLocalData from "../../shared/localStorage/getData";
import combinedServices from "../../shared/services/user-service";
import Select from 'react-select';

// import fileupload_test from '../../components/fileupload_test/fileupload_test';

export default class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: true,
            walletAddress: '',
            userId: '',
            walletDetails: [],
            sellDropdown:[],
            copySuccess: '',
            options:[
                    {iconName:'USD',value:'USD', label:<span className="d-flex align-items-center"><img src={dollarsIcon} alt="" />USDT</span>},
                    {iconName:'ETH',value:'ethereum', label:<span className="d-flex align-items-center"><img src={ethereumIcon} alt="" />ETH</span>},
                    {iconName:'BTC',value:'bitcoin', label:<span className="d-flex align-items-center"><img src={btcIcon} alt="" />BTC</span>},
                ],
            sellselectedOption:{iconName:'USD',value:'USD', label:<span className="d-flex align-items-center"><img src={dollarsIcon} alt="" />USDT</span>},
    
        }

    }
    componentDidMount = async () => {
        let user_info = getLocalData("user_info", "all")
        if (getLocalData('user_info', 'isLogin')) {
            this.setState({ userId: user_info.userData._id })
        }
        this.setState({
                sellDropdown:this.state.options
                
            });

    }
    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    onChangeWalletType = async (selectedOption) => {
        let walletType = selectedOption.value;
       
        this.setState({ walletType:walletType,walletName:selectedOption.iconName});
        let data = {
            walletType:selectedOption.value,
            userId: this.state.userId
        }

        let response = await combinedServices.getWallet(data);
        if (response.status) {

            this.setState({
                walletDetails: response.data

            });

        }
    }

    copyToClipboard = (e) => {
        if(this.state.walletDetails.address){
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
        }


    };

    checkboxHtml =()=>{

        return(
            <>
            <div className="transfer_subHD pr-30 pl-30">Top-up options</div>
            <div className="pr-30 pl-30">
                <div className="row">
                    <div className="col-sm-12">
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" className="checked" />{' '}Stablecoin
                                </Label>
                        </FormGroup>
                    </div>
                </div>
            </div>
            <div className="transfer_subHD pr-30 pl-30">Select</div>
            <div className=" checkBox_list pr-30 pl-30">
                <ul>
                    <li>
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" className="checked" />{' '}USDT
                                </Label>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" />{' '}PAX
                                </Label>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" />{' '}TUSD
                                </Label>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" />{' '}HUSD
                                </Label>
                        </FormGroup>
                    </li>
                    <li>
                        <FormGroup check className="form-group d-flex justify-content-between">
                            <Label check className="checkbox_29 d-flex align-items-center">
                                <Input type="checkbox" />{' '}BUSD
                                </Label>
                        </FormGroup>
                    </li>
                </ul>
            </div>
          </>
        )
    }


    HtmlAccordingToWalletType = () => {
        var html = '';
        
            html = <Form>
                <div className="whiteBox pr-0 pl-0">
                    <div className="sellBox">
                        <div className="">
                            <div className="pr-30 pl-30">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <FormGroup>
                                        <div class="currency_dropBox_wrap deposit_currency_dropbox">
                                                <div class="lang">
                                                    <div class="autoTranslate">
                                                        <div class="righttrans">
                                                            
                                                               
                                                               
                                                                    

                                                                    <Select
                                                          value={this.state.sellselectedOption}
                                                        onChange={this.onChangeWalletType}
                                                         options={this.state.sellDropdown} 
                                                        
                                                         />
                                                                

                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </FormGroup>
                                        {this.state.walletName =="USD" &&
                                        <div className="exchangeRate_note mb-65">USD represent US Dollars and USD stablecoins. Stablecoin transfers are marked with a 1:1 exchnage rate</div>
                                          }
                                    </div>
                                </div>
                            </div>
                            
                            {this.state.walletName =="USD" &&
    
                            <this.checkboxHtml/>
                            }
                            
                            
                            
                            <div className="transfer_subHD">
                                <div className="pr-30 pl-30">
                                    <div className="row">
                                        <div className="col-6">Deposit address</div>
                                        <div className="col-6 depositeProtocol_Txt">Deposit protocol ERC20</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="upload_fileBox">
                                    <FormGroup>

                                        <input type="text" ref={(textarea) => this.textArea = textarea} name="filename" value={this.state.walletDetails.address ? this.state.walletDetails.address:''} className="lightBg_filed upload_filenameField" placeholder="" />
                                        {this.state.copySuccess ? (
                                            <div className="filedeposit_add">
                                                <span className="fileupload_icon">{this.state.copySuccess}</span>
                                            </div>
                                        ) : <div className="filedeposit_add">

                                                <span className="fileupload_icon" onClick={this.copyToClipboard}><img src={uploadFile_icon} alt="" /></span>
                                            </div>}

                                    </FormGroup>
                                </div>
                                <div className="QR_code_secction">
                                    <div className="QR_code_img d-flex justify-content-center"><QRCode value={this.state.walletDetails.address ? this.state.walletDetails.address : 'hey'} /></div>
                                    <div>Deposit QR Code</div>
                                </div>
                                <div className="depositBotoom_note">
                                    <NavLink to="javaScript:;"><b>Minimum amount per deposit: 0.0001 {this.state.walletName}.</b></NavLink>&nbsp;
                                     Deposit less than this amount will neither be processed nor refunded.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="continueBtn_wrap">
                    <Button className="continue_btn">Save QR Code</Button>
                </div>
            </Form>

       
        return html;

    }



    render() {

        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="whiteBox_wrappers">
                            <div className="pageHD_BoxWrap d-flex justify-content-between align-items-center">
                                <div className="pageHD_lftBox">
                                    <div className="pageHD">Deposit</div>
                                </div>
                                <div className="pageHD_rgtBox">
                                    <NavLink to="/history" className="history_btn">History</NavLink>
                                </div>
                            </div>

                            <this.HtmlAccordingToWalletType />


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
