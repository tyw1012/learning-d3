export class TableBuilder{
	constructor(rows){
		let d3 = require('d3');

		this.header = rows.shift();
		this.data = rows;

		let table = d3.select('body').append('table').attr('class', 'table');
		
		let tableHeader = table.append('thead').append('tr');
		let tableBody = table.append('tbody');

		this.header.forEach(function(value){
			tableHeader.append('th').text(value);
			});

		this.data.forEach((row)=>{
			let tableRow = tableBody.append('tr');

			row.forEach((value)=>{
				tableRow.append('td').text(value);	
			});
			
		});
		
		return table
	}
}