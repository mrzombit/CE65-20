import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function CombinationCharts(props) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});

	let totalRevenue = props.totalRevenue;
	let totalFixedCost = props.total_fixed_cost;

	// let totalRevenue_MIN = props.totalRevenue_MIN;

	// let netIncome = totalRevenue.map((revenue, index) => revenue - totalFixedCost[index]);
	// let netIncome_MIN = totalRevenue_MIN.map((revenue, index) => revenue - totalFixedCost[index]);

	


	// let pj_period = [];
	// for (let i = 1; i < projection_period + 1; i++) {
	// 	pj_period.push(`${i}`);
	// }

	// for (let i = 1; i < projection_period + 1; i++) {
	// 	totalServiceRevenue.push(totalServiceRevenue[0]);
	// }

	// let atta = 1
	// for (let i = 1; i < projection_period + 1; i++) {
	// 	atta += 0.07
	// 	totalFixedCost.push(totalFixedCost[0] * atta);
	// }

	useEffect(() => {
		// console.log(pj_period)
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
		if (props.data_type === "revenue") {
			const data = {
				labels: ["2020", "2021", "2022", "2023"],
				datasets: [
					{
						type: 'line',
						label: 'กำไร(ขาดทุน)',
						borderColor: documentStyle.getPropertyValue('--blue-500'),
						borderWidth: 2,
						fill: false,
						tension: 0.4,
						data: [50, 25, 12, 48]
					},
					{
						type: 'line',
						label: 'กำไร(ขาดทุน)-min',
						// borderColor: documentStyle.getPropertyValue('--blue-500'),
						borderColor: "#cccccc",
						borderWidth: 2,
						fill: false,
						tension: 0.4,
						data: [0, 0, 0, 0]
					},
					{
						type: 'bar',
						label: 'กระแสเงินสดรับ',
						data: [2, 84, 24, 75],
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgb(75, 192, 192)',
						borderWidth: 1,
					},
					{
						type: 'bar',
						label: 'กระแสเงินสดจ่าย',
						data: [4000, 3200, 2400, 1400],
						backgroundColor: 'rgba(153, 102, 255, 0.2)',
						borderColor: 'rgb(153, 102, 255)',
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
				// if (data.labels !== pj_period) {
				// 	shallowData.labels = pj_period
				// }
				if (d.label === "กระแสเงินสดรับ") {
					d.data = totalRevenue
				}
				if (d.label === "กระแสเงินสดจ่าย") {
					d.data = totalFixedCost
				}
				// if (d.label === "กำไร(ขาดทุน)") {
				// 	d.data = netIncome
				// }
				// if (d.label === "กำไร(ขาดทุน)-min") {
				// 	d.data = netIncome_MIN
				// }
				return shallowData
			})




			setChartData(shallowData[0]);
			setChartOptions(options);
		}
		if (props.data_type === "expense") {
			const data = {
				labels: ['ช่างทำผม 1', 'ช่างทำผม 2', 'ค่าน้ำ', 'ค่าไฟ'],
				datasets: [
					{
						type: 'bar',
						label: 'กระแสเงินสดจ่าย',
						data: [15000, 15000, 7000, 3000],
						backgroundColor: 'rgba(75, 192, 192, 0.2)',
						borderColor: 'rgb(75, 192, 192)',
						borderWidth: 1,
					},
					// {
					// 	type: 'bar',
					// 	label: 'กระแสเงินสดจ่าย',
					// 	data: [400, 320, 240, 140],
					// 	backgroundColor: 'rgba(153, 102, 255, 0.2)',
					// 	borderColor: 'rgb(153, 102, 255)',
					// 	borderWidth: 1
					// }
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



			setChartData(data);
			setChartOptions(options);
		}
	}, [totalRevenue, totalFixedCost]);

	return (
		<div className="card">
			<Chart type="line" data={chartData} options={chartOptions} />
		</div>
	)
}
