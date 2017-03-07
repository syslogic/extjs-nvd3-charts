/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define("NVD3Charts.Application", { /* Ext.application({ */
    extend: 'Ext.app.Application',
    name: 'NVD3Charts',
    defaultToken: '#',
    requires: ['NVD3Charts.overrides.layout.container.Container', 'NVD3.Charts'],
    controllers: ['Root', 'Main'],
    // 'BaseChart', 'BarChart', 'BulletChart', 'CandleStickChart', 'CumulativeLineChart', 'HorizontalStackedBarChart', 'LineChart', 'LinePlusBarChart', 'LineWithFocusChart', 'PieChart', 'ScatterChart', 'StackedAreaChart', 'StackedBarChart', 'SunburstChart'
    autoCreateViewport: 'NVD3Charts.view.main.Main',
    launch: function() {
        //<debug>
            Ext.log({msg: 'Application was launched.', level: 'info'});
        //</debug>
    	this.viewport = this.getMainView();
    }
});