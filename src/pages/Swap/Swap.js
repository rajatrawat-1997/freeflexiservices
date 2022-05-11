import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    NavbarText } from 'reactstrap';
import './Swap.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import swap_icon from '../../assets/images/Swap_icon.png';
import ethereumIcon from '../../assets/images/ethereum_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';
import combinedServices from "../../shared/services/user-service";
import Select from 'react-select';
import Select1 from 'react-select';
import dropdown from "../../shared/util/values";
import getLocalData from "../../shared/localStorage/getData";


 class Swap extends Component {
        constructor(props) {
            super(props);
            this.state = { 
                dropdownOpen:false,
                bidsPriceOfWallet:'',
                walletName:'BTC',
                availablePrice:0.00,
                userId:'',
                sellDropdown:[],
                buyDropdown:[],
                name:'pooja',
                options:[
                    {iconName:'USD',value:'USD', label:<span className="d-flex align-items-center"><img src={dollarsIcon} alt="" />USDT</span>},
                    {iconName:'ETH',value:'ethereum', label:<span className="d-flex align-items-center"><img src={ethereumIcon} alt="" />ETH</span>},
                    {iconName:'BTC',value:'bitcoin', label:<span className="d-flex align-items-center"><img src={btcIcon} alt="" />BTC</span>},
                ],
                options1:[
                    {iconName:'USD',value:'USD', label:<span className="d-flex align-items-center"><img src={dollarsIcon} alt="" />USDT</span>},
                    {iconName:'ETH',value:'ethereum', label:<span className="d-flex align-items-center"><img src={ethereumIcon} alt="" />ETH</span>},
                    {iconName:'BTC',value:'bitcoin', label:<span className="d-flex align-items-center"><img src={btcIcon} alt="" />BTC</span>},
                ],
                buyselectedOption:{iconName:'ETH',value:'ethereum', label:<span className="d-flex align-items-center"><img src={ethereumIcon} alt="" />ETH</span>},
                sellselectedOption:{iconName:'BTC',value:'bitcoin', label:<span className="d-flex align-items-center"><img src={btcIcon} alt="" />BTC</span>},
                
            }
       
        }
        componentDidMount=()=>{
            this.setState({
                sellDropdown:this.state.options,
                buyDropdown:this.state.options1,
            });
            this.handleChangeSellDropdown(this.state.sellselectedOption);
            this.handleChangeBuyDropdown(this.state.buyselectedOption);
        }
       

        handleChangeSellDropdown = (selectedOption) =>{
            var option1 = this.state.options1;
            this.setState({sellselectedOption:selectedOption});
            var newArray = [] ;
            option1.map((item)=>{
                if(item.value != selectedOption.value){
                    newArray.push(item);
                }
            })
            this.setState({buyDropdown:newArray});
            this.getSellCyptoCurrencyPrice(selectedOption) 
        }


        getSellCyptoCurrencyPrice = async(selectedOption) =>{
            var userId = '';
            if(getLocalData('user_info', 'isLogin')) {
                var user_info = getLocalData("user_info", "all")
                userId = user_info.userData._id ;
                this.setState({userId:user_info.userData._id});
            }
            
            let data = {
                walletType:selectedOption.value,
                userId:userId
            }
            var response = await combinedServices.getWalletBalance(data);
            var responseData = response.data ;
            if(responseData.walletCreated) {
                var responseData = response.data
                this.setState({
                    availablePrice: responseData.payload.balance
    
                });
    
            }else{
                this.setState({
                    availablePrice:0.00
                });
            }

        }


        handleChangeBuyDropdown = async(selectedOption) =>{
            var option = this.state.options;
            this.setState({buyselectedOption:selectedOption});
            var newArray = [] ;
            option.map((item)=>{
                if(item.value != selectedOption.value){
                    newArray.push(item);
                }
            })
            this.setState({sellDropdown:newArray});
            this.getETCWalletPrice(selectedOption);
        }


        getETCWalletPrice = async(selectedOption) =>{
            if(selectedOption.iconName=="ETH"){
                let response = await combinedServices.getCurrentPriceOfETH();            
                var responseData = response.data ;
                if(responseData.success){
                this.setState({bidsPriceOfWallet:responseData.result.bids[0][0]});
                }
            }else if(selectedOption.iconName=="BTC"){

                let response = await combinedServices.getCurrentPriceOfBTC();            
                var responseData = response.data ;
                if(responseData.success){
                this.setState({bidsPriceOfWallet:responseData.result.bids[0][0]});
                }

                
            }

            

        }

        swapDropdownOnClick = () =>{
            var buyselectedOption = this.state.buyselectedOption;
            var sellselectedOption = this.state.sellselectedOption;
            this.setState({buyselectedOption:sellselectedOption,sellselectedOption:buyselectedOption});

            this.getETCWalletPrice(this.state.sellselectedOption);
        }

        

        handleChangeCurrentCurrencyPrice = (e) =>{
          
            var buyselectedOption = this.state.buyselectedOption;
            var sellselectedOption = this.state.sellselectedOption;
            //this.convert('btc','eth',1);
            
        }


        convert=async(from,to,no)=>
        {
            let response = await combinedServices.convertPrice();
        }





        toggle = () => {
            this.setState({dropdownOpen:!this.state.dropdownOpen})
        }



    render(){
        console.log(this.state.availablePrice)
       
        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="whiteBox_wrappers">
                        <div className="pageHD_BoxWrap d-flex justify-content-between align-items-center">
                            <div className="pageHD_lftBox">
                                <div className="pageHD">Swap</div>
                            </div>
                            <div className="pageHD_rgtBox">
                                <NavLink to="/history" className="history_btn">History</NavLink>
                            </div>
                            
                        </div>
                        <Form>
                            <div className="whiteBox">                            
                                <div className="sellBox">
                                    <div className="d-flex justify-content-between mb_30">
                                        <div className="sell_HD">Sell</div>
                                       
                                        <div className="avaliableBalance_text">Available balance: <span>{this.state.availablePrice}</span></div>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-sm-8 col-7">
                                            <FormGroup>
                                                <Input type="text" 
                                                name="sellValue" 
                                                id="sellValue" 
                                                className="lightBg_filed sell_field" 
                                                placeholder="1-1,000.000" 
                                                onChange={this.handleChangeCurrentCurrencyPrice}/>
                                                <span className="max_txt">Max</span>
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <FormGroup>

                                            <div class="currency_dropBox_wrap">
                                                  
                                                
                                                <div class="lang">
                                                    <div class="autoTranslate">
                                                        <div class="righttrans">
                                                       
                                                        <Select
                                                          value={this.state.sellselectedOption}
                                                        onChange={this.handleChangeSellDropdown}
                                                         options={this.state.sellDropdown} 
                                                        
                                                         />
                                                         
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="deposit_txt">
                                    <NavLink to="/deposit" className="deposit_txtLink">Deposit</NavLink>
                                </div>
                                <div className="swap_iconBox">
                                    <span>
                                        <img src={swap_icon} alt="" onClick={this.swapDropdownOnClick}/>
                                    </span>
                                </div>
                                <div className="buyBox">
                                    <div className="d-flex justify-content-between mb_30">
                                        <div className="sell_HD">Buy</div>
                                        <div className="avaliableBalance_text">{this.state.buyselectedOption.iconName}/{this.state.sellselectedOption.iconName} $ Quote:&nbsp;
                                           {this.state.showPriceOnWalletChange ? (
                                            <span className="avaliableBalance_value">{this.state.bidsPriceOfWalletOnChange}</span>
                                           ):
                                           <span className="avaliableBalance_value">{this.state.bidsPriceOfWallet}</span>
    }
                                            <span className="buy_second_value">4s</span>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-sm-8 col-7">
                                            <FormGroup>
                                                <Input type="text" name="sellValue" id="sellValue" className="lightBg_filed" placeholder="0.001-20,000" />
                                               
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-4 col-5">
                                            <FormGroup>
                                            <div class="currency_dropBox_wrap">
                                               
                                                <div class="lang">
                                                    <div class="autoTranslate">
                                                        <div class="righttrans">
                                                       
                                                        <Select1 
                                                         value={this.state.buyselectedOption}
                                                        onChange={this.handleChangeBuyDropdown}
                                                        options={this.state.buyDropdown} />
                                                         
                                                        </div>
                                                    </div>                                                
                                                </div>
                                                </div>
                                            </FormGroup>
                                        </div>
                                    </div>
                                </div>                            
                            </div>
                            <div className="continueBtn_wrap">
                                <Button className="continue_btn">Continue</Button>
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
}

export default Swap;