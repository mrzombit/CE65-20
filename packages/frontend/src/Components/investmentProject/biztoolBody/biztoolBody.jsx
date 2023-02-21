import React from 'react'
import BiztoolAddTable from '../biztoolAddTable/biztoolAddTable'
import BiztoolTableList from './biztoolTableList/biztoolTableList'

const BiztoolBody = (props) => {
  return (
    <div>
      {props.type == "revenue" && <div>
        <div>
          <div>บริการ/การผลิต</div>
          <BiztoolAddTable
            type={`${props.type}-service`}
            title="+ ตารางใหม่"
            handleFunction={props.handleSeriveFunction}
          />
          <BiztoolTableList type="revenue-service" />
        </div>
        <div>
          <div>การขายสินค้า</div>
          <BiztoolAddTable
            type={`${props.type}-product`}
            title="+ ตารางใหม่"
            handleFunction={props.handleProductFunction}
          />
          <BiztoolTableList type="revenue-product" />
        </div>
      </div>}
      {props.type != "revenue" && <div>
        <BiztoolTableList type={props.type} />
      </div>}
    </div>
  )
}

export default BiztoolBody