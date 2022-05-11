import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignUp.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import combinedServices from "../../shared/services/user-service";

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            success: {},
            successMessage: '',
            errorMessage: '',
            submitButton: false,
            timer: null,
            counter: 60,
            counterStatus: false,
            sendButtonStatus: true
        }
    }
    handleChange = e => {
        //set form value in field and remove validation after fill particular field value
        let fields = this.state.fields;
        let errors = this.state.errors;
        fields[e.target.name] = e.target.value;
        if(errors[e.target.name]){
            errors[e.target.name] = '' ;
            this.setState({errors});
        }
        this.setState({ fields, errors });
        if (fields['fname'] && fields['lname'] && fields['email'] && fields['verificationCode'] && fields['password'] && fields['confirmpassword']) {
            if (document.querySelector('#opt1:checked')) {
                this.setState({ submitButton: false });
            } else {
                this.setState({ submitButton: true });
            }
        }
    }
    startTimer = () => {
        let timer = setInterval(this.showSendButton,500);
        this.setState({ timer });
    }

    showSendButton =() =>{

        if (this.state.counter === 1) {
            console.log("finish time")
            clearInterval(this.state.timer)
            this.setState({ sendButtonStatus:true});

        } else {
            this.setState({counter: this.state.counter - 1 });
        }


    }
   
    //handleChangeSendCode use for send verification codeon email
    handleChangeSendCode = async (e) => {
        let fields = this.state.fields;
        let errors = {};
        let success = {};
        
            var data = {
                email: document.getElementById("email").value,
            }
            
            let response = await combinedServices.sendVerificationCode(data);
            if (response.status) {
                success["verificationCode"] = response.msg
                this.setState({sendButtonStatus:false})
                this.startTimer();
            } else {
                errors["verificationCode"] = response.msg
                this.setState({sendButtonStatus:true})
            }
            
            this.setState({
                errors: errors,
                success: success,
            });
            setTimeout(() => {
                this.setState({ errors: '', success: '' })
            }, 10000)
        
    }

    componentWillUnmount = () => {
        clearInterval(this.state.timer);
    }
    
    handleChangeTermAndCondition = () => {
        let fields = this.state.fields;
        if (fields['fname'] && fields['lname'] && fields['email'] && fields['verificationCode'] && fields['password'] && fields['confirmpassword']) {
            if (document.querySelector('#opt1:checked')) {
                this.setState({ submitButton: false });
            } else {
                this.setState({ submitButton: true });
            }
        }
    }

    //signup and wallet create 
    handleSubmitSignUp = async (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = this.state.fields;
            const data = {
                firstName: fields['fname'],
                lastName: fields['lname'],
                email: fields['email'],
                verificationCode: fields['verificationCode'],
                password: fields['confirmpassword'],
                referralCode: fields['referralCode'] ? fields['referralCode'] : ''
            };
            let response = await combinedServices.userSignUp(data);
            if (response.status) {
                var userDetails = response.data;
                let walletETHData = {
                    walletType: "ethereum",
                    password: "Admin@12345",
                    userId: userDetails._id
                }
                let walletBTCData = {
                    walletType: "bitcoin",
                    password: "Admin@12345",
                    userId: userDetails._id
                }

                let ethWalletResponse = await combinedServices.createWallet(walletETHData);
                let btcWalletResponse = await combinedServices.createWallet(walletBTCData);
                this.setState({
                    status: response.status,
                    successMessage: response.msg
                })
                setTimeout(() => {
                    window.location.href = '/sign-in';
                    this.setState({ successMessage: '', errorMessage: '' })
                }, 5000)
            } else {

                this.setState({
                    status: response.status,
                    errorMessage: response.msg
                })

                setTimeout(() => {
                    this.setState({ errorMessage: '', successMessage: '' })
                }, 10000)
            }
        } else {
            return;
        }
    }

    validatePassword=(password)=>{
       
        var errors='';
        if (password.length < 8) {
            errors = "Your password must be at least 8 characters.";
        }else if (password.search(/[a-z]/i) < 0) {
            errors = "Your password must contain at least one letter.";
        }else if (password.search(/[0-9]/) < 0) {
            errors= "Your password must contain at least one digit."; 
        }

        return errors;
        
        
    }

    //validation for signup
    validateForm = () => {
        let fields = this.state.fields;
        let errors = {};
        var formIsValid = true;
        if (!fields["fname"]) {
            formIsValid = false;
            errors["fname"] = "Please enter your first name.";
        }
        if (!fields["lname"]) {
            formIsValid = false;
            errors["lname"] = "Please enter your last name.";
        }
        if (fields["fname"]) {

            var regex = /[^a-zA-Z]/g;
            if (regex.test(fields["fname"])) {
                formIsValid = false;
                errors["fname"] = "Numbers and special characters not allow in first name.";
            }

        }
        if (fields["lname"]) {

            var regex = /[^a-zA-Z]/g;
            if (regex.test(fields["lname"])) {
                formIsValid = false;
                errors["lname"] = "Numbers and special characters not allow in last name.";
            }

        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
        }

        if (fields["email"] !== "") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["email"])) {
                formIsValid = false;
                errors["email"] = "Please enter valid email.";
            }

        }


        if (!fields["verificationCode"]) {
            formIsValid = false;
            errors["verificationCode"] = "Please enter your verification code.";
        }

        if (!fields["password"]) {
            
                formIsValid = false;
                errors["password"] = "Please enter password.";
        }

        if(fields["password"]){
            
            if(this.validatePassword(fields["password"])!=''){
                formIsValid = false;
                errors["password"] = this.validatePassword(fields["password"]);

            }
            
        }

        if (!fields["confirmpassword"]) {
            formIsValid = false;
            errors["confirmpassword"] = "Please enter your confirm password.";
        }


        if (fields["password"] && fields["confirmpassword"]) {
            if (fields["password"] != fields["confirmpassword"]) {
                formIsValid = false;
                errors["confirmpassword"] = "Password and confirm password  do not match.";

            }

        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }



    render() {
        var sendCodeButtonHtml = '';
        

            if (!this.state.sendButtonStatus) {

                sendCodeButtonHtml = '';

            } else {

                sendCodeButtonHtml = <Button className="verific-code" onClick={this.handleChangeSendCode}>Send Code</Button>
            }




    



        return (
            <div className="signInBg">
                <div className="signInBox-wrapper">
                    <div className="signInBox">
                        <div className="signIn-logoBox d-flex justify-content-center align-items-center">
                            <NavLink to="/"><img alt="" src={logo} /></NavLink>
                        </div>
                        <Form name="signUpform" onSubmit={this.handleSubmitSignUp}>
                            <FormGroup>
                                <Label className="formLabel" for="fname">First Name <span className="asterisk_mark">*</span></Label>
                                <Input type="text" name="fname" id="fname" className="signIn-filed" placeholder="First Name" onChange={this.handleChange} />
                                {this.state.errors.fname && (
                                    <div className="errorMsg">{this.state.errors.fname}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="lname">Last Name <span className="asterisk_mark">*</span></Label>
                                <Input type="text" name="lname" id="lname" className="signIn-filed" placeholder="Last Name" onChange={this.handleChange} />
                                {this.state.errors.lname && (
                                    <div className="errorMsg">{this.state.errors.lname}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="email">Email <span className="asterisk_mark">*</span></Label>
                                <Input type="text" name="email" id="email" className="signIn-filed" placeholder="Enter Your Email" onChange={this.handleChange} />
                                {this.state.errors.email && (
                                    <div className="errorMsg">{this.state.errors.email}</div>
                                )}
                            </FormGroup>
                            <FormGroup className="verific-codeBox">
                                <Label className="formLabel" for="VerificationCode">Verification Code <span className="asterisk_mark">*</span></Label>
                                <Input type="text" name="verificationCode" id="VerificationCode" className="signIn-filed" placeholder="Enter Verification Code" onChange={this.handleChange} />
                                {sendCodeButtonHtml}

                                {this.state.errors.verificationCode && (
                                    <div className="errorMsg">{this.state.errors.verificationCode}</div>
                                )}
                                {this.state.success.verificationCode && (
                                    <div className="successMsg">{this.state.success.verificationCode}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="password">Password <span className="asterisk_mark">*</span></Label>
                                <Input type="password" name="password" id="password" className="signIn-filed" placeholder="Enter Password" onChange={this.handleChange} />
                                {this.state.errors.password && (
                                    <div className="errorMsg">{this.state.errors.password}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="confirmpassword">Confirm Password <span className="asterisk_mark">*</span></Label>
                                <Input type="password" name="confirmpassword" id="confirmpassword" className="signIn-filed" placeholder="Enter Password" onChange={this.handleChange} />
                                {this.state.errors.confirmpassword && (
                                    <div className="errorMsg">{this.state.errors.confirmpassword}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="referralCode">Referral Code (Optional)</Label>
                                <Input type="password" name="referralCode" id="referralCode" className="signIn-filed" placeholder="Enter Code" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup check className="form-group d-flex justify-content-between">
                                <Label check className="rm">
                                    <Input type="checkbox" id="opt1" onChange={this.handleChangeTermAndCondition} />{' '}
                                I have read and accepted Terms of Service and Privacy Policy
                                </Label>
                            </FormGroup>

                            {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
                            {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
                            <Button disabled={this.state.submitButton} className="signIn-btn">Sign up</Button>
                        </Form>
                    </div>
                    <div className="dont-have-acc d-flex justify-content-center">
                        Already have an account?  &nbsp;
                        <NavLink to="/sign-in" className="su-HD">Login</NavLink>
                    </div>
                </div>

                <div className="copyRight-sec signUp-cr-wrap">
                    <Footer />
                </div>

            </div>
        );
    }
}
export default SignUp;