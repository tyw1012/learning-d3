import {TableBuilder} from './table-builder';
import {BasicChart}	from './basic-chart';

let d3 = require('d3');

export default function(){
	let svg = new BasicChart().chart;
	svg.append('text').text('A picture!').attr({x: 10, y: 150, 'text-anchor' : 'start'});
	svg.append('line').attr({x1: 10, y1: 10, x2: 100, y2:100, stroke:'blue',
								'stroke-width': 3});
	svg.append('rect').attr({x:200, y: 50, width: 300, height: 400});
	svg.select('rect').attr({stroke: 'green', 'stroke-width': 0.5, fill: 'white',
								rx: 40, ry: 40});
	svg.append('circle').attr({cx: 350, cy: 250, r: 100, fill: 'green', 'fill-opacity': 0.5,
								stroke: 'steelblue', 'stroke-width':2});
	svg.append('ellipse').attr({cx: 350, cy: 250, rx: 150, ry: 70, fill: 'green', 'fill-opacity':0.3,
								stroke: 'steelblule', 'stroke-width':0.7});
	svg.append('ellipse').attr({cx:350, cy:250, rx: 20, ry: 70});
	svg.selectAll('ellipse, circle').attr('transform', `translate(150,0) scale(1.2) rotate(-45, ${350/1.2}, ${250/1.2}) skewY(20)`);
	svg.append('path').attr({d: 'M 100 100 L 300 100 L 200 300 z', stroke:'black', 'stroke-width':2, 
								fill: 'red', 'fill-opacity': 0.7});
	}

export function renderDailyShowGuestTable(){
	let url = 'http://cdn.rawgit.com/fivethirtyeight/data/master/daily-show-guests/daily_show_guests.csv';
	let table = new TableBuilder(url);	
}