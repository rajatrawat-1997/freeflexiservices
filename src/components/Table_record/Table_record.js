import React , {Component} from 'react' ;
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Table_record.scss';
import DataTable from 'react-data-table-component';



const data = [
    { id: 1, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46789', receive: '$ 14570'},
    { id: 2, date: '2021-01-03  01:59:22', transaction_id: '#455390486B', type: 'Buy', send: '$ 46722', receive: '$ 14575'},
    { id: 3, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46755', receive: '$ 14570'},
    { id: 4, date: '2021-01-05  02:59:22', transaction_id: '#455390488C', type: 'Buy', send: '$ 46752', receive: '$ 14573'},
    { id: 5, date: '2021-01-02  02:59:22', transaction_id: '#455390488B', type: 'Buy', send: '$ 46789', receive: '$ 14570'},
    { id: 6, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46789', receive: '$ 14513'},
    { id: 7, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46789', receive: '$ 14570'},
    { id: 8, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46744', receive: '$ 14570'},
    { id: 9, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46789', receive: '$ 14570'},
    { id: 10, date: '2021-01-05  02:59:22', transaction_id: '#455390486A', type: 'Buy', send: '$ 46789', receive: '$ 14570'},
  
  ];
  const columns = [
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Transaction ID',
      selector: 'transaction_id',
      sortable: true,
    },
    {
      name: 'Type',
      selector: 'type',
      cell: row => <div data-tag="allowRowEvents"><div style={{ color: '#139d1a' }}>{row.type}</div></div>,
      sortable: true,
    },
    {
      name: 'Send',
      selector: 'send',      
      sortable: true,
    },
    {
      name: 'Receive',
      selector: 'receive',
      sortable: true,
      right: true,
    },
  ];

export class Table_record extends Component {
    render (){
        return (
            <div>
                <DataTable
                    //title="Arnold Movies"
                    columns={columns}
                    data={data}
                    theme="solarized"
                    //pagination
                    highlightOnHover
                />                 
            </div>
        );
    }
}

export default Table_record;