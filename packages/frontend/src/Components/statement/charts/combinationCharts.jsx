
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Chart } from 'primereact/chart';
import incomeChartPage from '../../../pages/checkBiz/statementsPage/chartPages/incomeChartPage';

export default function CombinationCharts(props) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	let totalServiceRevenue = props.total_service_revenue;
	let totalFixedCost = props.total_fixed_cost;

	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
		const data = {
			labels: ['2023', '2024', '2025', '2026',], //รวม กระแสเงินสุทธิ แต่ละปั
			datasets: [
				// {
				// 	type: 'line',
				// 	label: 'สุทธิ',
				// 	borderColor: documentStyle.getPropertyValue('--blue-500'),
				// 	borderWidth: 2,
				// 	fill: false,
				// 	tension: 0.4,
				// 	data: [7000, 8500, 5000, 8000,],
				// },
				// {
				// 	type: 'line',
				// 	label: 'สุทธิ',
				// 	borderColor: documentStyle.getPropertyValue('--blue-500'),
				// 	borderWidth: 2,
				// 	fill: false,
				// 	tension: 0.4,
				// 	data: [40, 15, 22, 8,],
				// },
				{
					type: 'bar',
					label: 'กระแสเงินสดรับ',
					data: [2, 84, 24, 75],
					// data: [],
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgb(75, 192, 192)',
					borderWidth: 1,			
				},
				{
					type: 'bar',
					label: 'กระแสเงินสดจ่าย',
					data: [4000, 3200, 2400, 1400], 
					// data: [],
					backgroundColor:'rgba(153, 102, 255, 0.2)',
					borderColor:'rgb(153, 102, 255)',
					borderWidth: 1
				}
			]
		};
		const options = {
			maintainAspectRatio: false,
			aspectRatio: 0.6,
			plugins: {
				legend: {
					labels: {
						color: textColor
					}
				}
			},
			scales: {
				x: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				},
				y: {
					ticks: {
						color: textColorSecondary
					},
					grid: {
						color: surfaceBorder
					}
				}
			}
		};

		let shallowData = data

		shallowData = shallowData.datasets.map(d => {
			if (d.label == "กระแสเงินสดรับ") {
				d.data = totalServiceRevenue
			}
			if (d.label == "กระแสเงินสดจ่าย") {
				d.data = totalFixedCost
			}
			// if (d.label == "สุทธิ") {
		
			// }
			// console.log( arr +"(-)" + arr2 )
			return shallowData
		})

		// console.log("OLD : " + JSON.stringify(data))
		// console.log("NEW : " + (JSON.stringify(shallowData)))

		// alert(JSON.stringify(shallowData))


		setChartData(shallowData[0]);
		setChartOptions(options);
	}, [totalServiceRevenue,totalFixedCost]);

	return (
		<div className="card">
			<Chart type="line" data={chartData} options={chartOptions} />
		</div>
	)
}
