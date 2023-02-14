import React from 'react'

function table() {
  return (
    <div>
      <div class="bt">
      <table class="table container tb-con" >
        <thead>
          <tr>
            {/* <th scope="col">{name}</th> */}
            <th scope="col" className="t-num">Amount(THB)</th>
            <th scope="col">Account</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody >
          {/* {bizTableInvestmentData.map((d) => (
            <tr key={d.list}>
              <th className="table-secondary tb-text-normal t-text ">{d.list}</th>
              <td className="table-secondary tb-text-normal t-num">{d.amount}</td>
              <td className="table-secondary tb-text-normal t-num-c">{d.account}</td>
              <td className="table-secondary tb-text-normal t-text-c">{d.date}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default table
