import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './LockedEarn.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import getLocalData from "../../shared/localStorage/getData";
import LockedEarn_Table from '../../components/LockedEarn_Table/LockedEarn_Table';
import combinedServices from "../../shared/services/user-service";
import {currencyConstants} from "../../shared/constants/currency-constants";
import Swal from "sweetalert2";

class LockedEarn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen:false,
            availableBalance:0.00,
            minimumAmmount:0,
            errorMessage:''
        }

    }
    componentDidMount=()=>{
       
        if(getLocalData('user_info', 'isLogin')) {
            var user_info = getLocalData("user_info", "all")
            this.setState({userId:user_info.userData._id});
        }
        this.getAvailableWalletPrice();

    }

    getAvailableWalletPrice = async() =>{
        let data = {
            walletType:currencyConstants(this.props.location.state.currencyType),
            userId:this.state.userId
        }
        var response = await combinedServices.getWalletBalance(data);
        var responseData = response.data ;
        if(responseData.walletCreated) {
            var responseData = response.data
            this.setState({
                availableBalance: responseData.payload.balance

            });


        }

    }
    handleAmount = (e) =>{
      this.setState({minimumAmmount:e.target.value});
    }

    handleSubscribe = async() =>{
        if(this.state.minimumAmmount){
            let data = {
              currency:currencyConstants(this.props.location.state.currencyType),
              userId:this.state.userId,
              amountStaked:this.state.minimumAmmount
            }
            var response = await combinedServices.fixedEarnSaveData(data)
            console.log(response)
            if(response.status) {
                var responseData = response.data
                this.setState({availableBalance: responseData.payload.balance});
                
            }
            //this.sucessMsgAlert();


        }else{
           var errorMessage ="Please enter minimum amount";
           this.errorMsgAlert(errorMessage);
        }
    
      


    }

    sucessMsgAlert = () => {
        return (
            Swal.fire({
                title: 'Success',
                type: 'Success',
                text: this.state.successMessage,
            }).then(function () {
                window.location.href="/earn";

            })


        )
    }

    errorMsgAlert = (errorMessage) => {
        Swal.fire({
            icon: 'error',
            title:'Oops...',
            text:errorMessage,
        });
    }



    
    toggle = () => {
        this.setState({ dropdownOpen:!this.state.dropdownOpen})
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
                            <div className="pageHD">Locked Earn</div>
                        </div>
                    </div>
                
                        <div className="locked_earn_wrappers">
                            <div className="le_head_section gradient_bg">
                                <div class="le_head_left">
                                    <h2 className="amberfixedearn_hd">Trofi Locked Earn {this.props.location.state.currencyType}</h2>
                                    <div className="amberfixedearn_boxwrap">
                                        <div className="amberfixedearn_box">APR<span>{this.props.location.state.percentage}</span></div>
                                        <div className="amberfixedearn_box">Tenor<span>{this.props.location.state.selectDays} days</span></div>
                                    </div>
                                </div>
                                <div class="le_head_right">
                                    <NavLink to="/comming-soon" className="rule_btn">Rule</NavLink>
                                </div>
                            </div>
                            <div className="whiteBox pr-0 pl-0 pt-0">                            
                                <div className="sellBox">                               
                                    <div>
                                        <div className="transfer_subHD mt-0 pr-30 pl-30">Amount</div>
                                        <div className="pr-30 pl-30">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <FormGroup>
                                                        <Input type="text" name="min_amount" id="sellValue" className="lightBg_filed sell_field" placeholder="Minimum amount" onChange={this.handleAmount}/>
                                                        <span className="max_txt">Max</span>
                                                    </FormGroup>
                                                </div>
                                            </div>
                                            <div className="available_amout_txtBox d-flex justify-content-between">
                                                <div className="available_amout">Available  Balance
                                                    <span>{this.state.availableBalance}</span> 
                                                    <span>{this.props.location.state.currencyType} </span>
                                                </div>
                                                <div className="deposit_txt"><NavLink to="/deposit" className="deposit_txtLink">Deposit</NavLink></div>
                                            </div>
                                            <div className="lockedearn_table_wrap">
                                                <LockedEarn_Table />
                                            </div>
                                            <div className="agreement_checkboxBox">
                                                <FormGroup check className="form-group">
                                                    <Label check className="checkbox_29">
                                                        <Input type="checkbox" className="checked" />{' '}I have read and understood the Trofi Earn Product Agreement and related risks
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                        </div>                                                   
                                        
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="continueBtn_wrap">
                            <Button className="continue_btn" onClick={this.handleSubscribe}>Subscribe</Button>
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

export default LockedEarn;