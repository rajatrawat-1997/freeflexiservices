import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './SignIn.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import combinedServices from "../../shared/services/user-service";
import setLocalData from "../../shared/localStorage/setData";


export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            successMessage: '',
            errorMessage: ''
        }
    }

    handleChange = e => {
        let errors = this.state.errors ;
        if(errors[e.target.name]){
            errors[e.target.name] ='';
            this.setState({errors})
        }
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmitSignIn = async (e) => {
        e.preventDefault();
        if (this.validateForm() === false) {
            return;
        } else {
            let fields = this.state;
            var remember_me = document.querySelector('#opt1:checked') ? true : false;
            const data = {
                email: fields['email'],
                password: fields['password']
            };

            let response = await combinedServices.login(data);
            if (response.status) {
                var userDetails = response.data ;
                userDetails.token = response.token ;
                var kycData = {
                    email:userDetails.email
                }
                let kycResponse = await combinedServices.getUserKycStatus(kycData);
                let kycResponseData = kycResponse.data;
                console.log(kycResponseData)
                userDetails.inquiryStatus = (kycResponseData?kycResponseData.inquiryStatus :'' );
                setLocalData("user_info",userDetails);
                this.setState({
                    status: response.status,
                    successMessage: response.msg,
                    errorMessage: ''
                })
                setTimeout(() => {
                    this.setState({ successMessage: '' })
                    if (userDetails.inquiryStatus == "completed") {

                        window.location.href = '/home';
                    } else {

                        window.location.href = '/account_verification';
                    }
                }, 1000)

            } else {

                this.setState({
                    status: response.status,
                    errorMessage: response.msg,
                    successMessage: ''
                })

                setTimeout(() => {
                    this.setState({ errorMessage: '' })
                }, 10000)

            }



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
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }
        this.setState({
            errors: errors
        });
        return formIsValid
    }




    render() {

        return (
            <div className="signInBg">
                <div className="signInBox-wrapper">
                    <div className="signInBox">
                        <div className="signIn-logoBox d-flex justify-content-center align-items-center">
                            <NavLink to="/"><img alt="" src={logo} /></NavLink>
                        </div>
                        <Form onSubmit={this.handleSubmitSignIn}>
                            <FormGroup>
                                <Label className="formLabel" for="email">Email <span className="asterisk_mark">*</span></Label>
                                <Input type="email" name="email" id="email" className="signIn-filed" placeholder="Email" onChange={this.handleChange} />
                                {this.state.errors.email && (
                                    <div className="errorMsg">{this.state.errors.email}</div>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <Label className="formLabel" for="password">Password <span className="asterisk_mark">*</span></Label>
                                <Input type="password" name="password" id="password" className="signIn-filed" placeholder="Password" onChange={this.handleChange} />
                                {this.state.errors.password && (
                                    <div className="errorMsg">{this.state.errors.password}</div>
                                )}
                            </FormGroup>
                            <FormGroup check className="form-group d-flex justify-content-between">
                                <Label check className="rm">
                                    <Input type="checkbox" id="opt1" />{' '}
                                Remember me
                                </Label>
                                <NavLink to="/forget-password" className="fp">Forget Password?</NavLink>
                            </FormGroup>

                            {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
                            {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
                            <Button className="signIn-btn">Login</Button>
                        </Form>
                    </div>
                    <div className="dont-have-acc d-flex justify-content-center">
                        Don’t have an account? &nbsp;
                        <NavLink to="/sign-up" className="su-HD">Sign Up</NavLink>
                    </div>
                </div>

                <div className="copyRight-sec">
                    <Footer />
                </div>

            </div>
        );
    }
}
export default SignIn;