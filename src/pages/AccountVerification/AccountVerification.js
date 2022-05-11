import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AccountVerification.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Flexible_earn_table from '../../components/Flexible_earn_table/Flexible_earn_table';
import EarnIntrest_Tab from '../../components/EarnInrest_Tab/EarnIntrest_Tab';
import blue_check_icon from '../../assets/images/blue_check_icon.png';
import white_dotes_icon from '../../assets/images/white_dotes_icon.png';
import combinedServices from "../../shared/services/user-service";
import getLocalData from "../../shared/localStorage/getData";
import Kyc from '../../components/Kyc/Kyc';
export default class AccountVerification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            successMessage: '',
            errorMessage: '',
            userDetails: {},
            fields: {},
            userExitStatus: false,
            accountDetails: {},
            accountId: '',

        }

    }

    componentDidMount = async () => {

        if (getLocalData('user_info', 'isLogin')) {
            let user_info = getLocalData("user_info", "all")
            let fields = this.state.fields;
            let userDetails = user_info.userData;
            this.setState({ userDetails: user_info.userData })
            if (userDetails.inquiryStatus == "completed") {
                this.setState({ userExitStatus: true })
            } else {

                this.setState({ userExitStatus: false })
            }

        }
    }


    handleChange = e => {
        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[e.target.name] = e.target.value;
        if(errors[e.target.name]){
            errors[e.target.name] = '';
            this.setState({ errors});
        }
        this.setState({fields});

    }


    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = this.state.fields;
            const data = {
                firstName: this.state.userDetails.firstName,
                lastName: this.state.userDetails.lastName,
                email: this.state.userDetails.email,
                mob: fields['mob'],
                dob: fields['dob'],
                street: fields['street'],
                zip: fields['zip'],
                city: fields['city'],
                country: fields['country'],
                state: fields['state']
            };

            let response = await combinedServices.saveKYCdata(data);
            console.log(response)

            if (response.status) {
                this.setState({
                    status: response.status,
                    successMessage: response.msg
                })
                setTimeout(() => {
                    this.setState({ successMessage: '' })
                    window.location.href = '/identity_verification';
                }, 5000)
            } else {

                this.setState({
                    status: response.status,
                    errorMessage: response.data.message
                })

                setTimeout(() => {
                    this.setState({ errorMessage: '' })
                }, 5000)


            }


        } else {
            return;
        }
    }


    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        var formIsValid = true;

        if (!fields["mob"]) {
            formIsValid = false;
            errors["mob"] = "Please enter your mobile number.";
        }

        if (!fields["dob"]) {
            formIsValid = false;
            errors["dob"] = "Please enter your dob.";
        }

        if (!fields["zip"]) {
            formIsValid = false;
            errors["zip"] = "Please enter your zip.";
        }
        if (!fields["country"]) {
            formIsValid = false;
            errors["country"] = "Please select country.";
        }
        if (!fields["state"]) {
            formIsValid = false;
            errors["state"] = "Please select state.";
        }
        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "Please select city.";
        }
        if (!fields["street"]) {
            formIsValid = false;
            errors["street"] = "Please enter your street.";
        }


        this.setState({
            errors: errors
        });
        return formIsValid;
    }



    render() {

        return (
            <div>

                <Header />


                <div className="middleCon">
                    <div className="middleCon_Inner">
                        <div className="container">
                            <div class="pageHD_BoxWrap d-flex"><div class="pageHD">Account Verification</div></div>
                            <div className="topHD_bannerBox mb-3">
                                <div className="kyc_topBannerBox  d-flex justify-content-center">
                                    <div className="kyc_topBanner_HD">
                                        <div className="white_checkIcon_box">
                                            <img src={blue_check_icon} alt="" />
                                        </div>
                                        <div className="">Personal <br></br>information</div>
                                    </div>
                                    <div className="white_doteWrap">
                                        <img src={white_dotes_icon} alt="" />
                                    </div>
                                    <div className="kyc_topBanner_HD">
                                        <div className="white_checkIcon_box">
                                            <img style={{ display: 'none' }} src={blue_check_icon} alt="" />
                                        </div>
                                        <div>Identity <br/>Verification</div>
                                    </div>
                                </div>
                            </div>
                            <Form onSubmit={this.handleSubmit}>
                                <div className="accountVerific_whiteBox">
                                    <div className="account_kyc_secHD">PERSONAL INFORMATION</div>

                                    <div className="personal_infoBox">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="fname">First Name <span className="asterisk_mark">*</span></Label>
                                                    <Input type="text" name="fname" value={this.state.userDetails.firstName} rid="fname" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="lname">Last Name <span className="asterisk_mark">*</span></Label>
                                                    <Input type="text" name="lname" id="lname" value={this.state.userDetails.lastName} className="signIn-filed" placeholder="" onChange={this.handleChange} onChange={this.handleChange} />
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="mob_no">Mobile Number <span className="asterisk_mark">*</span></Label>
                                                    <Input type="text" name="mob" id="mob_no" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                    {this.state.errors.mob && (
                                                        <div className="errorMsg">{this.state.errors.mob}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="dob">Date Of Birth <span className="asterisk_mark">*</span></Label>
                                                    <Input type="date" name="dob" id="dob" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                    {this.state.errors.dob && (
                                                        <div className="errorMsg">{this.state.errors.dob}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="email">Email Address <span className="asterisk_mark">*</span></Label>
                                                    <Input type="email" disabled name="email" value={this.state.userDetails.email} id="email" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="country">Country <span className="asterisk_mark">*</span></Label>
                                                    <Input type="select" name="country" className="signIn-filed select_icon" id="" onChange={this.handleChange}>
                                                        <option>Select Country</option>
                                                        <option>Albania</option>
                                                        <option>Andorra</option>
                                                        <option>Bahrain</option>
                                                        <option>Mexico</option>
                                                        <option>Canada</option>
                                                    </Input>
                                                    {this.state.errors.country && (
                                                        <div className="errorMsg">{this.state.errors.country}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="state">State <span className="asterisk_mark">*</span></Label>
                                                    <Input type="select" name="state" className="signIn-filed select_icon" id="" onChange={this.handleChange}>
                                                        <option>Select State</option>
                                                        <option>Tirana</option>
                                                        <option>Andorra</option>
                                                        <option>Bahrain</option>
                                                        <option>Mexico</option>
                                                        <option>Canada</option>
                                                    </Input>
                                                    {this.state.errors.state && (
                                                        <div className="errorMsg">{this.state.errors.state}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="street">Street <span className="asterisk_mark">*</span></Label>
                                                    <Input type="text" name="street" id="street" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                    {this.state.errors.street && (
                                                        <div className="errorMsg">{this.state.errors.street}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="city">City <span className="asterisk_mark">*</span></Label>
                                                    <Input type="select" name="city" className="signIn-filed select_icon" id="" onChange={this.handleChange}>
                                                        <option>Select City</option>
                                                        <option>Albania</option>
                                                        <option>Andorra</option>
                                                        <option>Bahrain</option>
                                                        <option>Mexico</option>
                                                        <option>Canada</option>
                                                    </Input>
                                                    {this.state.errors.city && (
                                                        <div className="errorMsg">{this.state.errors.city}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                            <div className="col-sm-6">
                                                <FormGroup>
                                                    <Label className="formLabel" for="zip">Zip <span className="asterisk_mark">*</span></Label>
                                                    <Input type="text" name="zip" id="zip" className="signIn-filed" placeholder="" onChange={this.handleChange} />
                                                    {this.state.errors.zip && (
                                                        <div className="errorMsg">{this.state.errors.zip}</div>
                                                    )}
                                                </FormGroup>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
                                {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
                                <div class="continueBtn_wrap">

                                    <button disabled={this.state.userExitStatus ? true : false} class="continue_btn btn btn-secondary">Continue</button>
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

