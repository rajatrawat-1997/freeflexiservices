import React, {useState} from 'react';
import './History.scss';
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Table_record from '../../components/Table_record/Table_record';
import { Table } from 'reactstrap';

const History = (props) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);  
    return (
        <div>
            <Header />
            <div className="middleCon">
                <div className="middleCon_Inner">
                    <div className="container">
                        <div className="pageHD_BoxWrap d-flex">
                            <div className="pageHD">History</div>                        
                        </div>
                        <div className="history_tableWrap">
                            <Table_record />                        
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

export default History;