import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, UncontrolledDropdown, DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ButtonDropdown,
    NavbarText } from 'reactstrap';
import './RecordHistory.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import swap_icon from '../../assets/images/Swap_icon.png';
import dollarsIcon from '../../assets/images/dollars_icon.png';
import btcIcon from '../../assets/images/btc_icon.png';

const RecordHistory = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    return (
        <div>
            <Header />
            <div className="middleCon">
                <h1>Test</h1>
            </div>
            <div className="copyRight-sec al_Footer">
                <Footer />
            </div>
        </div>
    );
}

export default RecordHistory;