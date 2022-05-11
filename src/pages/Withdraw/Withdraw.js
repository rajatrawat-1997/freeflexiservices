import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, NavbarText } from 'reactstrap';
import './Withdraw.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import swap_icon from '../../assets/images/Swap_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';
import infoIcon from '../../assets/images/info_icon.png';
import whiteSwap_icon from '../../assets/images/white_swrapIcon.png';
import QRcode_image from '../../assets/images/QRcode_img.png';
import uploadFile_icon from '../../assets/images/uploadFile_icon.png';
import location_icon from '../../assets/images/location_icon.png';
import ethereumIcon from '../../assets/images/ethereum_icon.png';
import getLocalData from "../../shared/localStorage/getData";
import combinedServices from "../../shared/services/user-service";
import Select from 'react-select';

export default class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            walletName:'USD',
            walletDetails:{},
            sellDropdown:[],
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
        this.setState({ dropdownOpen:!this.state.dropdownOpen })
    }
    getWalletBalance = async() =>{

        let data = {
            walletType:this.state.walletType,
            userId: this.state.userId
        }

        var response = await combinedServices.getWalletBalance(data);
       
        if (response.status) {
            var responseData = response.data
            this.setState({
                walletDetails: responseData.payload

            });

        }


    }

    onChangeWalletType = async (selectedOption) => {

       
        let walletType = selectedOption.value;


        this.setState({ walletType:walletType,walletName:selectedOption.iconName});
        let data = {
            walletType:walletType,
            userId:this.state.userId
        }

        let response = await combinedServices.getWallet(data);

        if (response.status) {

            this.setState({
                walletDetails: response.data

            });

        }
        this.getWalletBalance();
    }
    selectBox = () =>{

        return (
            <>

            <div className="transfer_subHD pr-30 pl-30">Withdrawal method</div>
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
                                            <Input type="checkbox"  className="checked" />{' '}USTD
                                            </Label>
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup check className="form-group d-flex justify-content-between">
                                            <Label check className="checkbox_29 d-flex align-items-center">
                                            <Input type="checkbox"  />{' '}PAX
                                            </Label>
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup check className="form-group d-flex justify-content-between">
                                            <Label check className="checkbox_29 d-flex align-items-center">
                                            <Input type="checkbox"  />{' '}TUSD
                                            </Label>
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup check className="form-group d-flex justify-content-between">
                                            <Label check className="checkbox_29 d-flex align-items-center">
                                            <Input type="checkbox"  />{' '}HUSD
                                            </Label>
                                        </FormGroup>
                                    </li>
                                    <li>
                                        <FormGroup check className="form-group d-flex justify-content-between">
                                            <Label check className="checkbox_29 d-flex align-items-center">
                                            <Input type="checkbox"  />{' '}BUSD
                                            </Label>
                                        </FormGroup>
                                    </li>
                                </ul>
                            </div>
                            </>
        )
    }

    HtmlAccordingToWalletType = () => {
        
        return(
        <Form>
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
                                   
                                    {this.state.walletName == "USD" &&
                                    <div className="exchangeRate_note mb-3">USD represent US Dollars and USD stablecoins. which are interchangeable (1:1) You may either withdraw one of the USD stable coins or withdraw USD to your bank account</div>
                                    }
                                </div>
                            </div>
                        </div>
                        {this.state.walletName == "USD" &&
                         <this.selectBox/>
                        }
                        
                        
                        <div className="transfer_subHD">
                            <div className="pr-30 pl-30">
                                <div className="row">
                                    <div className="col-6">Recipient’s address</div>
                                    <div className="col-6 depositeProtocol_Txt">Withdrawal protocol ERC20</div>
                                </div>
                            </div>                                            
                        </div>
                        <div className="pr-30 pl-30">
                            <div className="">
                            <FormGroup>
                                <Input type="text" name="mw_ammount" className="withdraw_inputfield maplocation_field" placeholder="Enter or paste address" />
                               
                            </FormGroup>                                              
                            </div>
                        </div>
                        <div className="transfer_subHD pr-30 pl-30">Amount</div>
                        <div className="pr-30 pl-30">
                            <div className="mwa_fieldBox">
                                <FormGroup className="mb-3">
                                    <Input type="text" name="mw_ammount" className="withdraw_inputfield mwa_field" placeholder="Minimum withdrawal amount 5.00000000" />
                                    <span className="max_txt">Max</span>
                                </FormGroup>
                                <div className="available_amout mb-4">Available 
                                {this.state. walletDetails &&
                                    <span>{this.state.walletDetails.balance}</span> 
                                }
                                    <span>{this.state.walletName}</span>
                                    <span className="infomation_icon">
                                        <img src={infoIcon} alt="" />
                                    </span>
                                </div>
                                <div class="alert alert-primary alert_primaryBox">
                                    <div>Daily withdrawal limit: $1,000.00, Withdrawal limit used: $0.00, Remaining withdrawal limit 1,000.00 {this.state.walletName} $</div>
                                    <div className="mt-3"><NavLink to="javaScript:;">Verify now to increase your limit</NavLink></div>
                                </div>                                              
                            </div>
                        </div>
                        <div className="transfer_subHD pr-30 pl-30">
                            <div className="row">
                                <div className="col-6">Transaction fee</div>
                                <div className="col-6 d-flex justify-content-end">2.00 {this.state.walletName}</div>
                            </div>
                        </div>
                        <div className="pr-30 pl-30 attention_listWrap">
                            <div className="attention_subHD">Attention:</div>
                            <ol>
                                <li>Please review and confirm your withdrawal details.</li>
                                <li>To ensure the safety of your assets, your withdrawal request will be reviewed by the platform and approved within 24 hours</li>
                            </ol>
                        </div>
                        <div className="transfer_subHD pr-30 pl-30 postFee_amountSec">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">Post-fee amount</div>
                                <div className="col-sm-6 col-xs-12 post_fee">0.000000000 <span>{this.state.walletName} $</span></div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="continueBtn_wrap">
                <Button className="continue_btn">Withdraw</Button>
            </div>
        </Form>
        );

       
    }

    render(){
        
    
    return (
        <div>
            <Header />
            <div className="middleCon">
                <div className="middleCon_Inner">
                    <div className="whiteBox_wrappers">
                        <div className="pageHD_BoxWrap d-flex justify-content-between align-items-center">
                            <div className="pageHD_lftBox">
                                <div className="pageHD">Withdraw</div>
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