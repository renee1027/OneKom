$(function () {
    $('#container').highcharts({
        chart: {
        	backgroundColor: '#00000000',
            type: 'column'
        },
        title: {
            text: 'FCB Points',
            style: {
                color: '#ffffff',
                fontSize: '20px'
            }
        },
        xAxis: {
        	max: 3,
        	labels: {
	        	style: {
    	            color: '#ffffff',
        	        fontSize: '12px'
            	}
            },
            categories: [
                '#1',
                '#2',
                '#3',
                '#4'
            ],
            crosshair: true
        },
        yAxis: {    	
            min: 0,
            labels: {
	        	style: {
    	            color: '#ffffff',
        	        fontSize: '12px'
            	},
            	enabled: false
            },
            title: {
            	text: null
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0"></td>' +
            '<td style="padding:0"><b> {point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        credits: {
        	enabled: false
        },
        exporting: {
        	enabled: false
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false,
                colorByPoint: true,
                colors: ['#c12127', '#2a333c', '#ffffff', '#8f9299']
            }
        },
        series: [{
            name: 'Thomas',
            color: '#ffffff',
            data: [86, 61, 76, 41]
        }]
    });
});