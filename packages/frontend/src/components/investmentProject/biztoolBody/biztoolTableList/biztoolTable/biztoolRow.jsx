import React from 'react'
import BIZTOOL_PAGE_CONFIG from '../../../../../pages/bizTools/pageConfig'
import InputCell from './biztoolCell/inputCell'
import DropdownCell from './biztoolCell/dropdownCell';
import NumbersTableCell from './biztoolCell/numbersTableCell';
import PaymentsTable from './biztoolCell/paymentsTable';
import RepaymentsTable from './biztoolCell/repaymentsTable';
import SeasonalTrendsTable from './biztoolCell/seasonalTrendsTable';

const BiztoolRow = (props) => {

    const columnStyles = props.tableStyle.column.map((each) => ({
        width: each.width,
        color: each.color,
        type: each.type,
        backgroundColor: each.backgroundColor,
    }));

    return (
        <div>
            {props.type == BIZTOOL_PAGE_CONFIG.totalInvestment.type.page &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.amount}
                        colIndex={1}
                        type="money"
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <DropdownCell
                        data={props.data.account_id}
                        tableType={props.type}
                        colIndex={2}
                        type="asset-account-dropdown"
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                    <InputCell
                        data={props.data.start_date}
                        tableType={props.type}
                        colIndex={3}
                        type="date"
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[3].width} />

                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.operationCost.type.page &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.amount}
                        type="money"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <DropdownCell
                        data={{ cost_increase: props.data.cost_increase, cost_increase_period_id: props.data.cost_increase_period_id }}
                        type="cost-increase-dropdown"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                    <DropdownCell
                        data={props.data.period_id}
                        type="period-dropdown"
                        colIndex={3}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[3].width} />
                    <NumbersTableCell
                        data={props.data.numbers}
                        type="numbers-table"
                        colIndex={4}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[4].width} />
                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.service &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.unit}
                        type="number"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <InputCell
                        data={props.data.unit_name}
                        type="text"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                    <InputCell
                        data={props.data.serve_per_unit}
                        type="number"
                        colIndex={3}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[3].width} />
                    <InputCell
                        data={props.data.revenue_per_service}
                        type="money"
                        colIndex={4}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[4].width} />
                    <InputCell
                        data={props.data.cost_per_service}
                        type="percent"
                        colIndex={5}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[5].width} />
                    <DropdownCell
                        data={{ cost_increase: props.data.price_increase, cost_increase_period_id: props.data.price_increase_period_id }}
                        type="cost-increase-dropdown"
                        colIndex={6}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[6].width} />
                    <DropdownCell
                        data={{ cost_increase: props.data.cost_increase, cost_increase_period_id: props.data.cost_increase_period_id }}
                        type="cost-increase-dropdown"
                        colIndex={7}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[7].width} />
                    <InputCell
                        data={props.data.start_date}
                        type="date"
                        colIndex={8}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[8].width} />
                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.revenue.type.product &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.days_of_inventory.months}
                        type="number"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <InputCell
                        data={props.data.revenue_per_unit}
                        type="money"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                    <InputCell
                        data={props.data.cost_per_service}
                        type="percent"
                        colIndex={3}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[3].width} />
                    <DropdownCell
                        data={{ cost_increase: props.data.price_increase, cost_increase_period_id: props.data.price_increase_period_id }}
                        type="cost-increase-dropdown"
                        colIndex={4}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[4].width} />
                    <DropdownCell
                        data={{ cost_increase: props.data.cost_increase, cost_increase_period_id: props.data.cost_increase_period_id }}
                        type="cost-increase-dropdown"
                        colIndex={5}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[5].width} />
                    <InputCell
                        data={props.data.start_date}
                        type="date"
                        colIndex={6}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[6].width} />
                    <SeasonalTrendsTable
                        data={props.data.seasonal_trends}
                        type="seasonal-trends-table"
                        colIndex={7}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[7].width} />
                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityContribution &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.amount}
                        type="number"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <InputCell
                        data={props.data.date}
                        type="date"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.equityRepayment &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.share}
                        type="percent"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <RepaymentsTable
                        data={props.data.repayment}
                        type="repayments-table"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                </div>
            }
            {props.type == BIZTOOL_PAGE_CONFIG.miscellaneous.type.debtIssuance &&
                <div className='d-flex'>
                    <InputCell
                        data={props.data.name}
                        type="text"
                        colIndex={0}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[0].width} />
                    <InputCell
                        data={props.data.amount}
                        type="money"
                        colIndex={1}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[1].width} />
                    <InputCell
                        data={props.data.start_date}
                        type="date"
                        colIndex={2}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[2].width} />
                    <InputCell
                        data={props.data.apr}
                        type="percent"
                        colIndex={3}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[3].width} />
                    <DropdownCell
                        data={props.data.period_id}
                        type="period-dropdown"
                        colIndex={4}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[4].width}
                    />
                    <PaymentsTable
                        data={props.data.payments}
                        type="payments-table"
                        colIndex={5}
                        tableType={props.type}
                        onCellChange={props.onCellChange}
                        address={props.address}
                        width={columnStyles[5].width} />
                </div>
            }
        </div>
    )
}

export default BiztoolRow