import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './EarnIntrest_Tab.scss';
import { Table } from 'reactstrap';
import EarnIntrest_Table from '../../components/EarnInrest_Table/EarnIntrest_Table';

const EarnIntrest_Tab
 = (props) => {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Flexed Earn
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Flexible Earn
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <div className="er_whiteBox earn_tabInner">
                <EarnIntrest_Table />
            </div>
        </TabPane>
        <TabPane tabId="2">
            <div className="er_whiteBox earn_tabInner">
                    <EarnIntrest_Table />
            </div>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default EarnIntrest_Tab;
