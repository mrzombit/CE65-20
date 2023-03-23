import React from 'react'
import BizSidebar from '../../../components/bizTools/bizSidebar/bizSidebar'
import StatementHearder from '../../../components/statement/statementHearder';
import "./statementsPage.css";

const profitLossStatement = () => {
  return (
    <div className='d-flex'> 
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <StatementHearder title="Profit and Loss Statement"/>
      </div>
    </div>
  );
};

export default profitLossStatement;

