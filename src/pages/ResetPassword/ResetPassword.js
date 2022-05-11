import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ResetPassword.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import combinedServices from "../../shared/services/user-service";
import history from "../../shared/history";


export class ResetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors :{},
            successMessage : "",
            errorMessage : ""
            
        }
       
    }

  

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;

        if (this.validateForm() === false) {
        return;
        } else {
            const yourParamName = history.location.pathname ;
            const youradminUrl  = yourParamName.split('/') ;
            var token = youradminUrl[2];
            let fields = this.state;
           
            
            const data = {
            token:token,
            password:fields['password'],
            confirmPassword:fields['confirmpassword']
            
            };

             
            

            let response = await combinedServices.resetPassword(data);
           
            if(response.status){
             this.setState({
                    status: response.status,
                    successMessage: response.msg,
                    errorMessage: ''
                })

             setTimeout(() => {
                    this.setState({ successMessage: '' })
                }, 10000)


window.location.href = '/sign-in'; 
             
            }else{
                
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
      
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
        }
        if (!fields["confirmpassword"]) {
            formIsValid = false;
            errors["confirmpassword"] = "Please enter your confirm Password.";
        }
        if (fields["password"] && fields["confirmpassword"]) {
            if(fields["password"] != fields["confirmpassword"]){
                formIsValid = false;
                errors["confirmpassword"] = "Password and confirm password  do not match.";

            }
           
        }
       
        this.setState({
            errors: errors
        });
        return formIsValid
    }


    render () {
        return (
            <div className="signInBg">
                <div className="signInBox-wrapper">
                    <div className="signInBox">
                        <div className="signIn-logoBox d-flex justify-content-center align-items-center">
                            <NavLink to="/"><img  alt="" src={logo} /></NavLink>                        
                        </div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label className="formLabel" for="password">New Password</Label>
                                <Input type="password" name="password" id="password" className="signIn-filed" placeholder="Password" onChange={this.handleChange}/>
                                {this.state.errors.password && (
                                <div className="errorMsg">{this.state.errors.password}</div>
                            )}
                            </FormGroup>
                             
                            <FormGroup>
                                <Label className="formLabel" for="confirmpassword">Confirm Password</Label>
                                <Input type="password" name="confirmpassword" id="confirmpassword" className="signIn-filed" onChange={this.handleChange} placeholder="Password" />
                                 {this.state.errors.confirmpassword && (
                                <div className="errorMsg">{this.state.errors.confirmpassword}</div>
                             )}
                            </FormGroup>
                            {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
                            {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
                            
                            <Button className="signIn-btn">Reset Password</Button>
                        </Form>                    
                    </div>
                </div>
                
                <div className="copyRight-sec">
                    <Footer />
                </div>
                
            </div>
        );
    }
}
export default ResetPassword;