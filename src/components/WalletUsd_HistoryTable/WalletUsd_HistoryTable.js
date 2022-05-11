import React , {Component} from 'react' ;
import './WalletUsd_HistoryTable.scss';
import DataTable from 'react-data-table-component';

const data = [
    { id: 1, date: '21  Jul 2021   18:11', description: 'Flexible Earn Interest', amount: '0.0412', balance: '1000.04012'},
    { id: 2, date: '20  Jul 2021   18:11', description: 'Transfer', amount: '-12000', balance: '1000'},
    { id: 3, date: '18  Jul 2021   18:11', description: 'Flexible Earn Interest', amount: '0.0412', balance: '8974'},
    { id: 4, date: '15  Jul 2021   18:11', description: 'Flexible Earn Interest', amount: '0.0412', balance: '1000.04012'},
    { id: 5, date: '12  Jul 2021   18:11', description: 'Transfer', amount: '-12000', balance: '8950'},
  
  ];
  const columns = [
    {
      name: 'Date',
      selector: 'date',
      sortable: true,
    },
    {
      name: 'Description',
      selector: 'description',
      sortable: true,
    },
    {
      name: 'Amount',
      selector: 'amount',
      cell: row => <div data-tag="allowRowEvents"><div>{row.amount}</div></div>,
      sortable: true,
    },
    {
      name: 'Balance',
      selector: 'balance',      
      sortable: true,
    },
  ];

export class WalletUsd_HistoryTable extends Component {
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

export default WalletUsd_HistoryTable;