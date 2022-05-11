import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './AccountVerification.scss';
import { NavLink,Redirect } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReferFriend_TopBanner from '../../components/ReferFriend_TopBanner/ReferFriend_TopBanner';
import ReferFriend_HowItWorks from '../../components/ReferFriend_HowItWorks/ReferFriend_HowItWorks';
import ReferFriend_Faq from '../../components/ReferFriend_Faq/ReferFriend_Faq';

export default class CommingSoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectDays:0,
            currencyType:'',
            status:false
        }

    }

    render () {
      
        return (
            <div>
                <Header />
                  <div className="middleCon signInBg Commingsoon_wrapper">
                    <div className="middleCon_Inner">
                        <div className="container">
                            <div className="CommingSoon_box">
                            <div className="pageHD_BoxWrap">
                                <div className="pageHD">Comming Soon</div>    
                                <div className="commingsoon_homebtn"><a href="/">Home</a></div>                                       

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
