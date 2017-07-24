import {TableBuilder} from './table-builder';
import {BasicChart}	from './basic-chart';

let d3 = require('d3');

export default function(){
	let chart = new BasicChart();
	let svg = chart.svg;

	let sine = d3.range(0,10).map((k) =>[0.5*k*Math.PI, Math.sin(0.5*k*Math.PI)]);

	let x = d3.scale.linear().range([0, chart.width/2 -(chart.margin.left + chart.margin.right)])
			.domain(d3.extent(sine, (d) => d[0]));
	let y = d3.scale.linear().range([chart.height/2 - (chart.margin.top + chart.margin.bottom), 0])
			.domain([-1, 1]);

	let line = d3.svg.line().x((d)=>x(d[0])).y((d)=>y(d[1]));

	let g = svg.append('g');
	g.append('path').datum(sine).attr('d',line).attr({stroke:'steelblue', 'stroke-width':2, fill:'none'});

	g.append('path').datum(sine).attr('d',line.interpolate('step-before')).attr({stroke:'black', 'stroke-width':1, fill:'none'});

	let g2 = svg.append('g').attr('transform', `translate(

		${(chart.width/2 + (chart.margin.left + chart.margin.right))} , ${chart.margin.top})`);
	let area = d3.svg.area().x((d) => x(d[0])).y0(chart.height/2).y1((d)=>y(d[1])).interpolate('basis');

	g2.append('path').datum(sine).attr('d',area).attr({fill: 'steelblue', 'fill-opacity': 0.4});

	
	g2.append('path').datum(sine).attr('d', line.interpolate('basis')).attr({stroke: 'steelblue', 'stroke-width': 2, fill: 'none'});

	let arc = d3.svg.arc();
	let g3 = svg.append('g').attr('transform', 'translate(' + (chart.margin.left+chart.margin.right)
									+ ',' + (chart.height/2 + (chart.margin.top+chart.margin.bottom))+')');
	g3.append('path').attr('d', arc({outerRadius : 100, innerRadius: 50, startAngle: -Math.PI*0.25, endAngle: Math.PI*0.25}))
						.attr('tranform', 'translate(150,150)').attr('fill', 'lightslategray');

}
export function renderDailyShowGuestTable(){
	let url = 'http://cdn.rawgit.com/fivethirtyeight/data/master/daily-show-guests/daily_show_guests.csv';
	let table = new TableBuilder(url);	
}