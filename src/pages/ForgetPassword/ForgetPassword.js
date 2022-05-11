import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './ForgetPassword.scss';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import combinedServices from "../../shared/services/user-service";


export class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            successMessage:'',
            errorMessage:''

            
        }
       
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmitForgotPsw = async(e) =>{
        e.preventDefault();
        if (this.validateForm() === false) {
            return;
        }else{
             let fields = this.state;
             var data = {
                email:fields['email']
             }


             let response = await combinedServices.forgotPassword(data);
             console.log(response)
              if(response.status){
                
                this.setState({
                    status: response.status,
                    successMessage: response.msg,
                    errorMessage: ''
                })
                setTimeout(() => {
                    this.setState({ successMessage: '' })
                }, 10000)


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
      
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
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
                        <Form onSubmit={this.handleSubmitForgotPsw}>
                            <FormGroup>
                                <Label className="formLabel" for="email">Email <span className="asterisk_mark">*</span></Label>
                                <Input type="email" name="email" onChange={this.handleChange} id="email" className="signIn-filed" placeholder="Email" />
                                {this.state.errors.email && (
                                <div className="errorMsg">{this.state.errors.email}</div>
                                )}
                            </FormGroup>
                             {this.state.errorMessage ? <div className="errorMessage">{this.state.errorMessage}</div> : ''}
                            {this.state.successMessage ? <div className="successMsg">{this.state.successMessage}</div> : ''}
                            <Button className="signIn-btn">Forget Password</Button>
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
export default ForgetPassword;