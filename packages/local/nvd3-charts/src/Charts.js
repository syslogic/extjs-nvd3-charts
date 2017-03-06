/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext */

Ext.define('NVD3.Charts', {
    requires: [
        'NVD3.chart.DiscreteBarChart',
        'NVD3.chart.BulletChart',
        'NVD3.chart.CumulativeLineChart',
        'NVD3.chart.MultiBarHorizontalChart',
        'NVD3.chart.SunburstChart',
        'NVD3.chart.LineChart',
        'NVD3.chart.LinePlusBarChart',
        'NVD3.chart.LineWithFocusChart',
        'NVD3.chart.PieChart',
        'NVD3.chart.ScatterChart',
        'NVD3.chart.StackedAreaChart',
        'NVD3.chart.MultiBarChart'
    ],
    constructor: function(config) {
        this.initConfig(config);
    }
});