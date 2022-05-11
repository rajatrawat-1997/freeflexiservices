import React , {Component} from 'react' ;
import './ReferFriend_HowItWorks.scss';
import GetUrlIcon  from '../../assets/images/get_url_icon.png';
import InviteFriendIcon  from '../../assets/images/invite_friend_icon.png';
import EarnCryptoIcon  from '../../assets/images/earn_crypto_icon.png';

export class ReferFriend_HowItWorks extends Component {
    render (){
        return (
            <div className="rf_howItWork_section">
                <div className="container">
                    <div className="rf_sectionHD d-flex justify-content-center">
                        <h2>How It Works</h2>
                    </div>
                    <div className="rf_howItWork_process">
                        <div className="row mlr_25">
                            <div className="col-md-4 plr_25">
                                <div className="rf_howItWork_box">
                                    <div class="rf_processNo">1</div>
                                    <div className="rf_processImage">
                                        <img src={GetUrlIcon} alt="Get Url" />
                                    </div>
                                    <h3>Get Your Link</h3>
                                    <p>Sign in to your Trofi account and copy your unique link.</p>
                                </div>
                            </div>
                            <div className="col-md-4 plr_25">
                                <div className="rf_howItWork_box">
                                    <div class="rf_processNo">2</div>
                                    <div className="rf_processImage">
                                        <img src={InviteFriendIcon} alt="Get Url" />
                                    </div>
                                    <h3>Invite Friends</h3>
                                    <p>Have your friends open a Trofiaccount using your link.</p>
                                </div>
                            </div>
                            <div className="col-md-4 plr_25">
                                <div className="rf_howItWork_box">
                                    <div class="rf_processNo">3</div>
                                    <div className="rf_processImage">
                                        <img src={EarnCryptoIcon} alt="Get Url" />
                                    </div>
                                    <h3>Earn Crypto</h3>
                                    <p>Once a friend tops up $100, you’ll both get $10 worth of BTC within 30 days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ReferFriend_HowItWorks;