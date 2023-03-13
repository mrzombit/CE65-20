import React from 'react'
import BiztoolAddTable from '../biztoolAddTable/biztoolAddTable'
import BiztoolTableList from './biztoolTableList/biztoolTableList'


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
            data={props.tableData.serviceData}
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
            data={props.tableData.productData}
            type="revenue-product"
            tableStyle={props.tableStyle.productTableStyle} 
            onChangeHandle={props.onChangeHandle.onProductChangeHandle}
            />
        </div>
      </div>}

      {props.type == "miscellaneous" && <div className='biztool-body-flex '>
        <div >
          <div className='miscellaneous-table-header'>ผู้ถือหุ้น</div>
          <BiztoolTableList
            data={props.tableData.shareholderData}
            type="miscellaneous-shareholder"
            tableStyle={props.tableStyle.shareholderTableStyle} 
            onChangeHandle={props.onChangeHandle.onShareholderChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>ผู้รับปันผล</div>
          <BiztoolTableList
            data={props.tableData.dividendRecipientData}
            type="miscellaneous-dividendRecipient"
            tableStyle={props.tableStyle.dividendRecipientTableStyle} 
            onChangeHandle={props.onChangeHandle.onDividendRecipientChangeHandle}
            />
        </div>
        <div>
          <div className='miscellaneous-table-header'>เงินกู้และการชำระเงินกู้</div>
          <BiztoolTableList
            data={props.tableData.loanData}
            type="miscellaneous-loan"
            tableStyle={props.tableStyle.loanTableStyle} 
            onChangeHandle={props.onChangeHandle.onLoanChangeHandle}
            />
        </div>
      </div>}

      {(props.type == "operation-cost") && <div className='biztool-body-flex '>
        <BiztoolTableList
          data={props.tableData}
          type={props.type}
          tableStyle={props.tableStyle} 
          onChangeHandle={props.onChangeHandle}
          />
      </div>}

      {(props.type != "revenue" && props.type != "miscellaneous" && props.type != "operation-cost") && <div className='biztool-body-flex '>
        <BiztoolTableList
          data={props.tableData}
          type={props.type}
          tableStyle={props.tableStyle} 
          onChangeHandle={props.onChangeHandle}
          />
      </div>}
    </div>
  )
}

export default BiztoolBody