import React from 'react'
import BizSidebar from '../../../components/bizTools/bizSidebar/bizSidebar'
import StatementHearder from '../../../components/statement/statementHearder';
import "./statementsPage.css";

const customStatementPage = () => {
  return (
    <div className='d-flex'> 
      <BizSidebar />
      <div className="p-4 biztool-body-width">
        <StatementHearder title="Custom Statement"/>
      </div>
    </div>
  );
};

export default customStatementPage;
