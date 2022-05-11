import React , {Component} from 'react' ;
import './Enterprise_GradeSecurity.scss';
import efIcon from '../../assets/images/extensive_firewall_icon.png';
import encryptionIcon from '../../assets/images/encryption_icon.png';
import securedIcon from '../../assets/images/secured_icon.png';
import zerotrustIcon from '../../assets/images/zerotrust_icon.png';
import multifactorIcon from '../../assets/images/multifactor_icon.png';
import biometricIcon from '../../assets/images/biometric_icon.png';

export class Enterprise_GradeSecurity extends Component {
    render (){
        return (
            <div className="epg_security_section">
                <div className="container">
                    <div className="epg_security_inner">
                        <div className="epg_securitybox epg_security_left">
                            <div className="epg_security_box">
                                <h2>Enterprise <br/>Grade Security</h2>
                                <div className="epg_security_cont">Storing your crypto with Trofi ensures that your assets are held in our state-of-the-art storage system. Our application is equipped with top security measures including the implementation of the most promising technology in private key security - MPC</div>
                            </div>
                            <div className="epg_security_typelist">
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="2s">
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={efIcon} alt="" />
                                            </div>
                                            Extensive<br/> Firewall  Server<br /> Architecture
                                        </div>
                                    </li>
                                    <li className="epgs_top_115 wow fadeInUp" data-wow-duration="2s">
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={encryptionIcon} alt="" />
                                            </div>
                                            Encryption at<br/> REST, Memory <br/>and on Sensitive <br/>Data
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="epg_securitybox epg_security_right">
                        <div className="epg_security_typelist">
                                <ul>
                                    <li className="wow fadeInUp" data-wow-duration="2s">
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={securedIcon} alt="" />
                                            </div>
                                            Secured with <br/>Multi-Party<br/> Computation<br/> (MPC) Technology
                                        </div>
                                    </li>
                                    <li className="epgs_top_115">
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={zerotrustIcon} alt="" />
                                            </div>
                                            Zero-Trust<br/> Security<br/> Approach
                                        </div>
                                    </li>
                                    <li>
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={multifactorIcon} alt="" />
                                            </div>
                                            Multi Factor <br/>Authentication
                                        </div>
                                    </li>
                                    <li className="epgs_top_115 wow fadeInUp" data-wow-duration="2s">
                                        <div className="epgs_listbox">
                                            <div className="epgs_listicon">
                                                <img src={biometricIcon} alt="" />
                                            </div>
                                            Biometric <br/>Identify <br/>Verification
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Enterprise_GradeSecurity;