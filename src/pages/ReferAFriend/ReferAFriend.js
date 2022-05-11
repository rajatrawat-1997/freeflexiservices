import React, {useState} from 'react';
import './ReferAFriend.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ReferFriend_TopBanner from '../../components/ReferFriend_TopBanner/ReferFriend_TopBanner';
import ReferFriend_HowItWorks from '../../components/ReferFriend_HowItWorks/ReferFriend_HowItWorks';
import ReferFriend_Faq from '../../components/ReferFriend_Faq/ReferFriend_Faq';

const ReferAFriend = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    return (
        <div className="referfriend_wrappers">
            <Header />
            <div className="middleCon">
                <div className="middleCon_Inner">
                    <div><ReferFriend_TopBanner /></div>
                    <div><ReferFriend_HowItWorks /></div>
                    <div><ReferFriend_Faq /></div>
                </div>
            </div>
            <div className="copyRight-sec al_Footer">
                <Footer />
            </div>
        </div>
    );
}

export default ReferAFriend;