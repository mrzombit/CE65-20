import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";
import OptionCell from "./biztoolCell/optionCell";
import BiztoolRow from "./biztoolRow";

const BiztoolTable = (props) => {
  const eachTable = props.eachTable;
  const columnStyles = props.tableStyle.column.map((each) => ({
    width: each.width,
    color: each.color,
    type: each.type,
    backgroundColor: each.backgroundColor,
  }));

  const widthArr = props.tableStyle.column.map((each) => each.width)
  const [showOption, setShowOption] = useState(false)

  return (
    <div key={eachTable._id} className="mb-4 table-overflow-style">
      <div key={`${eachTable._id}-div2`}name="Column Headers" className="d-flex" onMouseEnter={() => setShowOption(true)} onMouseLeave={() => setShowOption(false)}>
        {(props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
          props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
          props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) ?
          <OptionCell
            showOption={showOption}
            isTable={true}
            colIndex={'option'}
            tableType={props.type}
            address={
              {
                tableId: eachTable._id,
                rowId: '',
              }}
            handleTableOptionFunction={props.handleTableOptionFunction}
          /> :
          <OptionCell
            showOption={false}
            isTable={true}
            colIndex={'option'}
            tableType={props.type}
            address={props.address}
          />
        }
        {props.tableStyle.column.map((eachColumn, index) => (
          <div key={`${index}`}>
            {index === 0 && props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
              props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
              props.type !== BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
              <div className="wrapper"
              >
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </div>
                <input
                  type='text'
                  className="biztool-header-cell-input biztool-header-cell column border border-dark"
                  style={{
                    width: `${columnStyles[index].width}px`,
                  }}
                  value={eachTable.name ? eachTable.name : eachColumn.title}
                  onChange={e => props.tableHeaderOnChange(props.type, eachTable._id, e.target.value)}
                />
              </div>
            }
            {index === 0 && (props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution ||
              props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment ||
              props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) &&
              <div
                type='text'
                className="biztool-header-cell column border border-dark"
                style={{
                  width: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.name ? eachTable.name : eachColumn.title}
              </div>
            }
            {index !== 0 && (
              <div
                className="biztool-header-cell column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachColumn.title}
              </div>
            )}
          </div>
        ))}
      </div>

      {props.type === BIZTOOL_PAGE_CONFIG.totalInvestment.type.page &&
        eachTable.investments.map((eachRow) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.operationCost.type.page &&
        eachTable.fixed_costs.map((eachRow) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.revenue.type.service &&
        eachTable.services.map((eachRow) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.revenue.type.product &&
        eachTable.products.map((eachRow) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            handleFunction={props.handleFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
        eachTable.debt_issuances.map((eachRow) => (
          <BiztoolRow
            setRepaymentPopupStateFunction={props.setRepaymentPopupStateFunction}
            handleRowOptionFunction={props.handleRowOptionFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
        eachTable.equity_contributions.map((eachRow) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: eachTable._id,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}
      {props.type === BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
        eachTable.equity_repayments.map((eachRow, index) => (
          <BiztoolRow
            handleRowOptionFunction={props.handleRowOptionFunction}
            key={eachRow._id}
            type={props.type}
            data={eachRow}
            onCellChange={props.onCellChange}
            address={
              {
                tableId: `${index}`,
                rowId: eachRow._id,
              }}
            tableStyle={props.tableStyle}
          />
        ))}

      <div className="d-flex">
        <OptionCell
          showOption={false}
          isTable={true}
          colIndex={'option'}
          tableType={props.type}
          address={props.address}
        />
        <button type="button"
          className="text-start add-row-button"
          style={{ width: `${widthArr.reduce((partialSum, a) => partialSum + a, 0)}px` }}
          onClick={() => props.addRowHandle(props.type, eachTable._id)}
        >+ เพิ่มรายการใหม่</button>
      </div>
    </div>
  );
};

export default BiztoolTable;
