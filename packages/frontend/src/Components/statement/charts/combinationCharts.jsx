
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function CombinationCharts(props) {
	const [chartData, setChartData] = useState({});
	const [chartOptions, setChartOptions] = useState({});
	console.log(props.tableData)
	useEffect(() => {
		const documentStyle = getComputedStyle(document.documentElement);
		const textColor = documentStyle.getPropertyValue('--text-color');
		const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
		const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
		const data = {
			labels: ['2023', '2024', '2025', '2026',], //รวม กระแสเงินสุทธิ แต่ละปั
			datasets: [
				{
					type: 'line',
					label: 'Dataset 1',
					borderColor: documentStyle.getPropertyValue('--blue-500'),
					borderWidth: 2,
					fill: false,
					tension: 0.4,
					data: [50, 25, 12, 48,] //รวม กระแสเงินสดรับ แต่ละปี
				},
				{
					type: 'bar',
					label: 'Dataset 2',
					data: [21, 84, 24, 75],
					backgroundColor:
						'rgba(153, 102, 255, 0.2)',
					borderColor:
						'rgb(153, 102, 255)',
					borderWidth: 1
				},
				{
					type: 'bar',
					label: 'Dataset 3',
					data: [41, 52, 24, 74], //รวม กระแสเงินสดจ่าย แต่ละปี
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgb(75, 192, 192)',
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

		setChartData(data);
		setChartOptions(options);
	}, []);

	return (
		<div className="card">
			<Chart type="line" data={chartData} options={chartOptions} />
		</div>
	)
}
