import React, {Component} from 'react';
import {NavLink,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './ReferFriend.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReferFriendImage from '../../assets/images/refer-friend.png';

import FbIcon from '../../assets/images/rf_fbIcon.png';
import TwIcon from '../../assets/images/rf_trIcon.png';
import LnIcon from '../../assets/images/rf_lnIcon.png';
import UrlIcon from '../../assets/images/rf_urlIcon.png';
import combinedServices from "../../shared/services/user-service";
import getLocalData from "../../shared/localStorage/getData";


export class ReferFriend extends Component {

    constructor(props){
        super(props);
        this.state = {
            dropdownOpen:false,
            errors:{},
            userId:'',
            status:false,
            message:''
    
          };
      }
     toggle = () => {
        this.setState({dropdownOpen:!this.state.dropdownOpen})
     }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentDidMount = async () => {

        if (getLocalData('user_info', 'isLogin')) {
            let user_info = getLocalData("user_info", "all");
            console.log(user_info)
            this.setState({userId:user_info.userData._id,inquiryStatus:user_info.userData.inquiryStatus})
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.validateForm() === false) {
            return;
        } else {
            let fields = this.state;
            const data = {
                email:fields['email'],
                userId:this.state.userId
            };
            let response = await combinedServices.generateReferralCode(data);
    
            this.setState({
                status:response.status,
                message:response.msg.msg
            })
        }

    }


    validateForm = () => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
        }
        this.setState({
            errors: errors
        });
        return formIsValid
    }
        
     render(){
        return (
            <div>
                <Header />
                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                            <div className="pageHD_BoxWrap d-flex">
                                <div className="pageHD">refer a friend</div>                        
                            </div>
                            <div className="referFriend_wrapper">
                                <div className="rf_topBanner">
                                    <div className="row">
                                        <div className="col-xl-6 col-md-7 rf_leftBox">
                                            <div className="rf_leftBoxInner">
                                                <h2>Invite friends and earn Bitcoin</h2>
                                                <div>For each friend that will top up $100 or more, you’ll both get $10 worth of BTC.</div>
                                                <div className="howItWork_txt mt-xl-5 mt-3">
                                                    <a href="/how-it-works" className="">How it Works</a>
                                                </div>                                                
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-md-5 rf_rightBox">
                                            <div className="rf_topImage">
                                                <img src={ReferFriendImage} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rf_formWrapper">
                                   <Form onSubmit={this.handleSubmit}>
                                        <div className="d-flex justify-content-between rf_fieldBox_wrapper">                                            
                                            <FormGroup className="rf_fieldBox">
                                                <Input type="email" name="email" className="rf_filed" placeholder="Enter the email of your friend" onChange={this.handleChange}/>                                            
                                            </FormGroup>
                                            <Button className="rf_send_btn" >Send</Button>
                                            
                                        </div>

                                        {this.state.errors.email && (
                                    <div className="errorMsg">{this.state.errors.email}</div>
                                )} 
                                {this.state.status ? <div className="successMsg">{this.state.message}</div> :<div className="errorMessage">{this.state.message}</div>}

                                        <div className="rf_shareBtn_box">
                                            <ul>
                                                <li><NavLink to="#" className="rf_shareBtn"><img src={FbIcon} alt=""/>Share</NavLink></li>
                                                <li><NavLink to="#" className="rf_shareBtn"><img src={TwIcon} alt=""/>Tweet</NavLink></li>
                                                <li><NavLink to="#" className="rf_shareBtn"><img src={LnIcon} alt=""/>Post</NavLink></li>
                                                <li><NavLink to="#" className="rf_shareBtn"><img src={UrlIcon} alt=""/>Copy URL</NavLink></li>
                                            </ul>
                                        </div>                                       
                                    </Form>
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

export default ReferFriend;