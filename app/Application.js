/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define("NVD3Charts.Application", { /* Ext.application({ */
    extend: 'Ext.app.Application',
    requires: ['NVD3Charts.overrides.layout.container.Container', 'NVD3.Charts'],
    controllers: ['Root', 'Main','BaseChart', 'BarChart', 'BulletChart', 'CumulativeLineChart', 'HorizontalStackedBarChart', 'LineChart', 'LinePlusBarChart', 'LineWithFocusChart', 'PieChart', 'ScatterChart', 'StackedAreaChart', 'StackedBarChart'],
    autoCreateViewport: 'NVD3Charts.view.main.Main',
    name: 'NVD3Charts',
    defaultToken: '#',
    launch: function() {
        //<debug>
            Ext.log({msg: NVD3Charts.getApplication().getName() + ' was launched.', level: 'info'});
		//</debug>
    	this.viewport = this.getMainView();
    }
});