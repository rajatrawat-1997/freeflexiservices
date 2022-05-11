import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter, Redirect } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignIn } from "./pages/SignIn/SignIn";
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Swap from './pages/Swap/Swap';
import History from './pages/History/History';
import Ustd from './pages/Ustd/Ustd';
import Earn from './pages/Earn/Earn';
import Transfer from './pages/Transfer/Transfer';
import Deposit from './pages/Deposit/Deposit';
import Withdraw from './pages/Withdraw/Withdraw';
import AccountVerification from './pages/AccountVerification/AccountVerification';
import IdentityVerification from './pages/IdentityVerification/IdentityVerification';
import Wallet from './pages/Wallet/Wallet';
import CommingSoon from './pages/CommingSoon/CommingSoon';
import WalletUsd from './pages/WalletUsd/WalletUsd';
import MyEarn from './pages/MyEarn/MyEarn';
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition';
import ReferFriend from './pages/ReferFriend/ReferFriend';
import ReferAFriend from './pages/ReferAFriend/ReferAFriend';
import LockedEarn from './pages/LockedEarn/LockedEarn';
import getLocalData from "./shared/localStorage/getData";
import history from "./shared/history";
import TermsCondition from "./pages/TermCondition/index";
import Policy from "./pages/Policy/index";
import ApplyForm from "./pages/ApplyForm";

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserLogin: false
    }
  }
  componentDidMount = () => {

    if (getLocalData('user_info', 'isLogin')) {
       this.setState({isUserLogin:true});
    }
  }

  render() {

    return (
      <React.Fragment>
        <Router >
          <Switch>
            {/* <Route exact path="/sign-in" component={(SignIn)} />
            <Route exact path="/sign-up" component={(SignUp)} /> */}
            <Route exact path="/" component={(Home)} />
 
            {/* <Route exact path="/forget-password" component={(ForgetPassword)} />
            <Route exact path="/reset-password/:id" component={(ResetPassword)} />
            <Route exact path="/swap" component={(Swap)} /> */}
            {/* {this.state.isUserLogin ?
              <Route exact path="/refer-friend" component={(ReferFriend)} /> :
              <Route exact path="/refer-friend" component={(ReferAFriend)} />
            } */}
            {/* <Route exact path="/how-it-works" component={(ReferAFriend)} />
            <Route exact path="/history" component={(History)} />
            <Route exact path="/ustd" component={(Ustd)} />
            <Route exact path="/earn" component={(Earn)} />
            <Route exact path="/transfer" component={(Transfer)} />
            <Route exact path="/deposit" component={(Deposit)} />
            <Route exact path="/account_verification" component={(AccountVerification)} />
            <Route exact path="/identity_verification" component={(IdentityVerification)} /> */}
            <Route exact path="/terms_condition" component={TermsCondition} />
            <Route exact path="/policy" component={Policy} />
            <Route exact path="/apply_form" component={ApplyForm} />
            {/* <Route exact path="/myearn" component={(MyEarn)} />
            <Route exact path="/withdraw" component={(CommingSoon)} />
            <Route exact path="/locked-earn" component={(LockedEarn)} />
            <Route exact path="/comming-soon" component={(CommingSoon)} />
            <Route exact path="/products" component={(CommingSoon)} />
            <Route exact path="/support" component={(CommingSoon)} /> */}
          
          </Switch>
        </Router>
      </React.Fragment>
    );

  }
}

export default AppRoutes;
