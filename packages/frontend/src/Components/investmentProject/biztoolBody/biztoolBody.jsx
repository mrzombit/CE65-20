import React from 'react'
import BiztoolAddTable from '../biztoolAddTable/biztoolAddTable'
import BiztoolTableList from './biztoolTableList/biztoolTableList'
import "./biztoolBody.css"

const BiztoolBody = (props) => {
  return (
    // <div className='biztool-body m-2'>
    <div className='biztool-body border border-dark p-2'>
      {props.type == "revenue" && <div className='biztool-body-flex '>
        <div >
          <div className='revenue-table-header'>บริการ/การผลิต</div>
          <BiztoolAddTable
            type={`${props.type}-service`}
            title="+ ตารางใหม่"
            handleFunction={props.handleFunction.addTableHandleServiceFunction}
          />
          <BiztoolTableList
            data={props.serviceTableData}
            type="revenue-service"
            tableStyle={props.tableStyle.serviceTableStyle} 
            onChangeHandle={props.onChangeHandle.onServiceChangeHandle}
            />
        </div>
        <div>
          <div className='revenue-table-header'>การขายสินค้า</div>
          <BiztoolAddTable
            type={`${props.type}-product`}
            title="+ ตารางใหม่"
            handleFunction={props.handleFunction.addTableHandleProductFunction}
          />
          <BiztoolTableList
            data={props.productTableData}
            type="revenue-product"
            tableStyle={props.tableStyle.productTableStyle} 
            onChangeHandle={props.onChangeHandle.onProductChangeHandle}
            />
        </div>
      </div>}

      {props.type.page == "miscellaneous" && <div className='biztool-body-flex '>
        <div >
          <div className='miscellaneous-table-header'>ผู้ถือหุ้น</div>
          <BiztoolTableList
            data={props.tableData.equity_contribution_tables}
            type={props.type.equityContribution}
            tableStyle={props.tableStyle.shareholderTableStyle} 
            onChangeHandle={props.onChangeHandle.onShareholderChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>ผู้รับปันผล</div>
          <BiztoolTableList
            data={props.tableData.equity_repayment_tables}
            type={props.type.equityRepayment}
            tableStyle={props.tableStyle.dividendRecipientTableStyle} 
            onChangeHandle={props.onChangeHandle.onDividendRecipientChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>เงินกู้และการชำระเงินกู้</div>
          <BiztoolTableList
            data={props.tableData.debt_issuance_tables}
            type={props.type.debtIssuance}
            tableStyle={props.tableStyle.loanTableStyle} 
            onChangeHandle={props.onChangeHandle.onLoanChangeHandle}
            />
        </div>
      </div>}

      {/* {(props.type.page == "operation-cost") && <div className='biztool-body-flex '>
        <BiztoolTableList
          data={props.tableData}
          type={props.type.operationCost}
          tableStyle={props.tableStyle} 
          onChangeHandle={props.onChangeHandle}
          />
      </div>} */}

      {(props.type.page != "revenue" && props.type != "miscellaneous" && props.type.page != "project-config") && <div className='biztool-body-flex '>
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