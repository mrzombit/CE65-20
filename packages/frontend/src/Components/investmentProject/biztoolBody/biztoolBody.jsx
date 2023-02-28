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
            handleFunction={props.handleFuncitn.handleSeriveFunction}
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
            handleFunction={props.handleFuncitn.handleProductFunction}
          />
          <BiztoolTableList
            data={props.productTableData}
            type="revenue-product"
            tableStyle={props.tableStyle.productTableStyle} 
            onChangeHandle={props.onChangeHandle.onProductChangeHandle}
            />
        </div>
      </div>}
      {props.type != "revenue" && <div className='biztool-body-flex '>
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