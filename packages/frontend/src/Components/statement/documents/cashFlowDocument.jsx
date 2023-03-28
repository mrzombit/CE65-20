import React from "react";
import "../statement.css";
import CHECKBIZ_CONFIG from "../../checkbiz/checkbizData/checkbizConfig";

const cashFlowDocument = () => {
  const yearRange = [1, 2, 3, 4];
  const inittialCashFlowData = CHECKBIZ_CONFIG.cashflow

  return (
    <div className="">
      <table class="table container table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">รายการ</th>
            {yearRange.map((i) => (
              <th scope="col">{"ปีที่ " + i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {inittialCashFlowData.list.map((item, i) => (
            <>
              <tr>
                <th>{item.name}</th>
                {item.total.map((d) => (
                  <td>{d}</td>
                ))}
              </tr>

              {item.data.map((d) => (
                <tr>
                  <td>{d.name}</td>
                  {d.val.map((dd) => (
                    <td>{dd}</td>
                  ))}
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default cashFlowDocument;
