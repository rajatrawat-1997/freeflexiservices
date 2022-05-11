import React , {Component} from 'react' ;
import './LockedEarn_Table.scss';
import { Table } from 'reactstrap';

export class LockedEarn_Table extends Component {
    render (){
        return (
            <table className="table_fw">
                <tbody>
                    <tr>
                        <td>Interest start accruing</td>
                        <td>08/03/2021</td>
                    </tr>
                    <tr>
                        <td>Maturity</td>
                        <td>08/03/2021</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default LockedEarn_Table;