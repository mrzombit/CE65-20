export default function KCalculator(allData, myInvest) {
    const debts = allData.debt_issuance_tables[0].debt_issuances.map(each => {
        return each.amount
    }) //array
    let totalDebts = 0
    totalDebts = debts.reduce((partialSum, a) => partialSum + a, 0)
    const invests = allData.equity_contribution_tables[0].equity_contributions .map(each => {
        return each.amount
    }) //array

    let totalInvests = 0
    totalInvests = invests.reduce((partialSum, a) => partialSum + a, 0)
    const totalAmount = totalDebts+totalInvests
    const share = (myInvest*100)/totalAmount
    return totalAmount!==0?share:0
}