import React , {Component} from 'react' ;
import './Wallet_table.scss';
import { Table } from 'reactstrap';
import wt_usd_icon from '../../assets/images/wt_usd_icon.png';
import wt_eth_icon from '../../assets/images/wt_eth_icon.png';
import wt_btc_icon from '../../assets/images/wt_btc_icon.png';
import wt_chz_icon from '../../assets/images/wt_chz_icon.png';

export class Wallet_table extends Component {
    render (){
        return (
            <div className="wallet_tableWrap">
                <table className="table_fw">                
                    <tbody>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_usd_icon} alt="" /></div>
                                <div className="wt_iconName">USD</div>
                            </td>
                            <td><div className="wt_blacktxt">Fixed Earn</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Interest</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Orders</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Withdrawals</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Available Balance</div>0.00003155</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_eth_icon} alt="" /></div>
                                <div className="wt_iconName">ETH</div>
                            </td>
                            <td><div className="wt_blacktxt">Fixed Earn</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Interest</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Orders</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Withdrawals</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Available Balance</div>0.00003155</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_btc_icon} alt="" /></div>
                                <div className="wt_iconName">BTC</div>
                            </td>
                            <td><div className="wt_blacktxt">Fixed Earn</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Interest</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Orders</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Withdrawals</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Available Balance</div>0.00003155</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_chz_icon} alt="" /></div>
                                <div className="wt_iconName">CHZ</div>
                            </td>
                            <td><div className="wt_blacktxt">Fixed Earn</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Interest</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Orders</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Withdrawals</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Available Balance</div>0.00003155</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_usd_icon} alt="" /></div>
                                <div className="wt_iconName">USD</div>
                            </td>
                            <td><div className="wt_blacktxt">Fixed Earn</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Interest</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Orders</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Pending Withdrawals</div>0.00003155</td>
                            <td><div className="wt_blacktxt">Available Balance</div>0.00003155</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default Wallet_table;