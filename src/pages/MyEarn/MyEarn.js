import React, {useState} from 'react';
import './MyEarn.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import My_EarnTable from '../../components/My_EarnTable/My_EarnTable';

const MyEarn = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    return (
        <div>
            <Header />
            <div className="middleCon">
                <div className="middleCon_Inner">
                    <div className="container">
                        <div className="pageHD_BoxWrap d-flex">
                            <div className="pageHD">MY EARN</div>                        
                        </div>
                        <div className="wt_whiteBox mb-3">
                            <div className="wallet_tableWrap">
                                <My_EarnTable />  
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

export default MyEarn;