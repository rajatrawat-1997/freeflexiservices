import React , {Component} from 'react' ;
import './Flexible_earn_table.scss';
import { Table } from 'reactstrap';

export class Flexible_earn_table extends Component {
    render (){
        return (
            <table className="table_fw">
                <tbody>
                    <tr>
                        <td>Flexible Earn balance</td>
                        <td className="align_rgt amout_black">1.00048664</td>
                    </tr>
                    <tr>
                        <td>Fixed Earn balance</td>
                        <td className="align_rgt amout_black">0.00000000</td>
                    </tr>
                    <tr>
                        <td>Yesterday’s interest</td>
                        <td className="align_rgt amout_black">0.00012278</td>
                    </tr>
                    <tr>
                        <td>Total interest</td>
                        <td className="align_rgt amout_black">0.00048664</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Flexible_earn_table;