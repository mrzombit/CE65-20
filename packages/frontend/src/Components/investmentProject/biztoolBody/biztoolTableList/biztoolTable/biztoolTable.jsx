import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./biztoolTable.css";
import BIZTOOL_PAGE_CONFIG from "../../../../../pages/bizTools/pageConfig";
import BiztoolRow from "./biztoolRow";

const BiztoolTable = (props) => {
  const eachTable = props.eachTable;
  const columnStyles = props.tableStyle.column.map((each) => ({
    width: each.width,
    color: each.color,
    type: each.type,
    backgroundColor: each.backgroundColor,
  }));

  return (
    <div className="mb-4">
      <div key={eachTable._id} name="Column Headers" className="d-flex">
        {props.tableStyle.column.map((eachColumn, index) => (
          <>
            {index == 0 && props.type != BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
              props.type != BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
              props.type != BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
              <div className="wrapper">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </div>
                <input
                  type='text'
                  key={eachColumn.colId}
                  className="biztool-header-cell-input biztool-header-cell column border border-dark"
                  style={{
                    minWidth: `${columnStyles[index].width}px`,
                  }}
                  value={eachTable.name ? eachTable.name : eachColumn.title}
                  onChange={e => props.tableHeaderOnChange(props.type, eachTable._id, e.target.value)}
                />
              </div>
            }
            {index == 0 && (props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution ||
              props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment ||
              props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance) &&
              <div
                type='text'
                key={eachColumn.colId}
                className="biztool-header-cell column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachTable.name ? eachTable.name : eachColumn.title}
              </div>

            }
            {index !== 0 && (
              <div
                key={eachColumn.colId}
                className="biztool-header-cell column border border-dark"
                style={{
                  minWidth: `${columnStyles[index].width}px`,
                }}
              >
                {eachColumn.title}
              </div>
            )}
          </>
        ))}
      </div>

      {props.type == BIZTOOL_PAGE_CONFIG.totalInvestment.type.page &&
        eachTable.investments.map((eachRow) => (
          <BiztoolRow
            handleFunction={props.handleFunction}
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.operationCost.type.page &&
        eachTable.fixed_costs.map((eachRow) => (
          <BiztoolRow
            handleFunction={props.handleFunction}
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.service &&
        eachTable.services.map((eachRow) => (
          <BiztoolRow
            handleFunction={props.handleFunction}
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.product &&
        eachTable.products.map((eachRow) => (
          <BiztoolRow
            handleFunction={props.handleFunction}
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
        eachTable.debt_issuances.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
        eachTable.equity_contributions.map((eachRow) => (
          <BiztoolRow
            key={eachTable._id}
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
      {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
        eachTable.equity_repayments.map((eachRow, index) => (
          <BiztoolRow
            key={index}
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

      <button type="button"
        className="btn btn-secondary w-100 text-start"
        onClick={() => props.addRowHandle(props.type, eachTable._id)}
      >+ เพิ่มรายการใหม่</button>
    </div>
  );
};

export default BiztoolTable;
