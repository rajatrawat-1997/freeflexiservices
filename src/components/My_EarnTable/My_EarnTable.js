import React , {Component} from 'react' ;
import './My_EarnTable.scss';
import { Table } from 'reactstrap';
import wt_usd_icon from '../../assets/images/wt_usd_icon.png';
import wt_eth_icon from '../../assets/images/wt_eth_icon.png';
import wt_btc_icon from '../../assets/images/wt_btc_icon.png';
import wt_chz_icon from '../../assets/images/wt_chz_icon.png';

export class My_EarnTable extends Component {
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
                            <td><div className="wt_blacktxt">Flexible Earn Balance</div>0.00000000</td>
                            <td><div className="wt_blacktxt">Locked Earn Balance</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Accrued Interest</div>0.00003155</td>
                            <td className="text-right"><div className="wt_bluetxt">1.00048664</div>= 1.00 USD</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_eth_icon} alt="" /></div>
                                <div className="wt_iconName">ETH</div>
                            </td>
                            <td><div className="wt_blacktxt">Flexible Earn Balance</div>0.00000000</td>
                            <td><div className="wt_blacktxt">Locked Earn Balance</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Accrued Interest</div>0.00003155</td>
                            <td className="text-right"><div className="wt_bluetxt">1.00048664</div>= 1.00 USD</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_btc_icon} alt="" /></div>
                                <div className="wt_iconName">BTC</div>
                            </td>
                            <td><div className="wt_blacktxt">Flexible Earn Balance</div>0.00000000</td>
                            <td><div className="wt_blacktxt">Locked Earn Balance</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Accrued Interest</div>0.00003155</td>
                            <td className="text-right"><div className="wt_bluetxt">1.00048664</div>= 1.00 USD</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_chz_icon} alt="" /></div>
                                <div className="wt_iconName">CHZ</div>
                            </td>
                            <td><div className="wt_blacktxt">Flexible Earn Balance</div>0.00000000</td>
                            <td><div className="wt_blacktxt">Locked Earn Balance</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Accrued Interest</div>0.00003155</td>
                            <td className="text-right"><div className="wt_bluetxt">1.00048664</div>= 1.00 USD</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="wt_icon"><img src={wt_usd_icon} alt="" /></div>
                                <div className="wt_iconName">USD</div>
                            </td>
                            <td><div className="wt_blacktxt">Flexible Earn Balance</div>0.00000000</td>
                            <td><div className="wt_blacktxt">Locked Earn Balance</div>1.000048664</td>
                            <td><div className="wt_blacktxt">Accrued Interest</div>0.00003155</td>
                            <td className="text-right"><div className="wt_bluetxt">1.00048664</div>= 1.00 USD</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
}

export default My_EarnTable;