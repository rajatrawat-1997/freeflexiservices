import React , {Component} from 'react' ;
import './EarnIntrest_Table.scss';
import { Table } from 'reactstrap';

export class EarnIntrest_Table extends Component {
    render (){
        return (
            <table className="table_fw">
                <thead>
                    <tr>
                        <th>Total Interest</th>
                        <th className="align_rgt amout_black" style={{color : '#0a339d'}}>0.00048664</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Interest</td>
                        <td className="align_rgt amout_black">Distribution</td>
                    </tr>
                    <tr className="border_0">
                        <td>0.00012278</td>
                        <td className="align_rgt">07/11/2021</td>
                    </tr>
                    <tr className="border_0">
                        <td>0.00012249</td>
                        <td className="align_rgt">07/10/2021</td>
                    </tr>
                    <tr>
                        <td>0.00012083</td>
                        <td className="align_rgt">07/09/2021</td>
                    </tr>
                    <tr className="border_0">
                        <td>0.00012054</td>
                        <td className="align_rgt">07/08/2021</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default EarnIntrest_Table;