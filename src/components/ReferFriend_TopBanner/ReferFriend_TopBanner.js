import React , {Component} from 'react' ;
import './ReferFriend_TopBanner.scss';
import { NavLink } from 'react-router-dom';
import ReferAFriendImage  from '../../assets/images/rf_banner_section_image.png';

export class ReferFriend_TopBanner extends Component {
    render (){
        return (
            <div className="rf_topbanner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 align-self-center">
                            <div className="rf_bannerHd"><span className="blue_text">invite friends</span> &<br /> earn crypto together</div>
                            <div className="rf_bannerBtn">
                                <NavLink to="#" className="history_btn">Invite Now</NavLink>
                            </div>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="">
                                <img src={ReferAFriendImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ReferFriend_TopBanner;