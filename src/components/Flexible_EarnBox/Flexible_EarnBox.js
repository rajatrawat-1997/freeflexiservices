import React , {Component} from 'react' ;
import './Flexible_EarnBox.scss';

export class Flexible_EarnBox extends Component {
    render (){
        return (
            <div>
                <div className="flexible_earnBox_wrappers">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 p_lr_25">
                            <div className="flexible_earnBox">
                                <div>Fixed Earn</div>
                                <h2>1.00048664</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 p_lr_25">
                            <div className="flexible_earnBox">
                                <div>Accrued Interest</div>
                                <h2>0.00000000</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 p_lr_25">
                            <div className="flexible_earnBox">
                                <div>Pending Withdrawals</div>
                                <h2>0.00012278</h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 p_lr_25">
                            <div className="flexible_earnBox">
                                <div>Available Balance</div>
                                <h2>0.00048664</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flexible_EarnBox;