let d3 = require('d3');
export class TableBuilder{
	constructor(url){
		this.load(url);
		this.table = d3.select('body').append('table').attr('class','table');
		this.tableHeader = this.table.append('thead');
		this.tableBody = this.table.append('tbody');
			
		}
		
	load(url){
		d3.csv(url, (data) => {
			this.data = data;
			this.redraw();
			});
		
		}

	redraw(){
		this.rows = this.tableBody.selectAll('tr').data(this.data);
		this.rows.enter().append('tr');
		this.rows.exit().remove();

		this.rows.selectAll('td').data(d=>d3.values(d)).enter()
		.append('td').text(d=>d);
		this.tableBody.selectAll('tr').sort((a,b) => d3.ascending(a.Group, b.Group))
	}
}	
	
