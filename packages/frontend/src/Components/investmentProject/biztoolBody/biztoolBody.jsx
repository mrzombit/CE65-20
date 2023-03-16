import React, { useEffect } from 'react'
import BiztoolAddTable from '../biztoolAddTable/biztoolAddTable'
import BiztoolTableList from './biztoolTableList/biztoolTableList'
import BIZTOOL_PAGE_CONFIG from '../../../pages/bizTools/pageConfig'
// import "./biztoolBody.css" 

const BiztoolBody = (props) => {

  useEffect(() => {
    console.log(`body !${JSON.stringify(props.tableData)}`);
  }, [])

  return (
    <div className='biztool-body border border-dark p-2'>
      {props.type.page == BIZTOOL_PAGE_CONFIG.revenue.type.page && <div className='biztool-body-flex '>
        <div >
          <div className='revenue-table-header'>บริการ/การผลิต</div>
          <BiztoolAddTable
            type={props.type.service}
            title="+ ตารางใหม่"
            handleFunction={props.handleFunction.addTableHandleServiceFunction}
          />
          <BiztoolTableList
            data={props.tableData.service_tables}
            type={props.type.service}
            tableStyle={props.tableStyle.serviceTableStyle} 
            onChangeHandle={props.onChangeHandle.onServiceChangeHandle}
            />
        </div>
        <div>
          <div className='revenue-table-header'>การขายสินค้า</div>
          <BiztoolAddTable
            type={props.type.product}
            title="+ ตารางใหม่"
            handleFunction={props.handleFunction.addTableHandleProductFunction}
          />
          <BiztoolTableList
            data={props.tableData.product_tables}
            type={props.type.product}
            tableStyle={props.tableStyle.productTableStyle} 
            onChangeHandle={props.onChangeHandle.onProductChangeHandle}
            />
        </div>
      </div>}

      {props.type.page == BIZTOOL_PAGE_CONFIG.miscellaneous.type.page && <div className='biztool-body-flex '>
        <div >
          <div className='miscellaneous-table-header'>ผู้ถือหุ้น</div>
          <BiztoolTableList
            data={props.tableData.equity_contribution_tables}
            type={props.type.equityContribution}
            tableStyle={props.tableStyle.equityContributionTableStyle} 
            onChangeHandle={props.onChangeHandle.onEquityContributionChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>ผู้รับปันผล</div>
          <BiztoolTableList
            data={props.tableData.equity_repayment_tables}
            type={props.type.equityRepayment}
            tableStyle={props.tableStyle.equityRepaymentTableStyle} 
            onChangeHandle={props.onChangeHandle.onEquityRepaymentChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>เงินกู้และการชำระเงินกู้</div>
          <BiztoolTableList
            data={props.tableData.debt_issuance_tables}
            type={props.type.debtIssuance}
            tableStyle={props.tableStyle.debtIssuanceTableStyle} 
            onChangeHandle={props.onChangeHandle.onDebtIssuanceChangeHandle}
            />
        </div>
      </div>}

      {props.type.page != BIZTOOL_PAGE_CONFIG.revenue.type.page && 
        props.type.page != BIZTOOL_PAGE_CONFIG.miscellaneous.type.page && 
        props.type.page != BIZTOOL_PAGE_CONFIG.miscellaneous.type.page && 
        props.type.page != BIZTOOL_PAGE_CONFIG.projectConfig.type.page && 
        props.type.page != BIZTOOL_PAGE_CONFIG.ffc.type.page && 
        props.type.page != BIZTOOL_PAGE_CONFIG.statement.type.page && 
        <div className='biztool-body-flex '>
        <BiztoolTableList
          data={props.tableData}
          type={props.type.page}
          tableStyle={props.tableStyle} 
          onChangeHandle={props.onChangeHandle}
          />
      </div>}
    </div>
  )
}

export default BiztoolBody