/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext */

Ext.define('NVD3.chart.Chart', {
    requires: [
        'NVD3.chart.BoxPlotChart',
        'NVD3.chart.BulletChart',
        'NVD3.chart.CandleStickBarChart',
        'NVD3.chart.CumulativeLineChart',
        'NVD3.chart.DiscreteBarChart',
        'NVD3.chart.ForceDirectedGraph',
        'NVD3.chart.HistoricalBarChart',
        'NVD3.chart.LineChart',
        'NVD3.chart.LinePlusBarChart',
        'NVD3.chart.LineWithFocusChart',
        'NVD3.chart.MultiBarChart',
        'NVD3.chart.MultiBarHorizontalChart',
        'NVD3.chart.ParallelCoordinates',
        'NVD3.chart.PieChart',
        'NVD3.chart.ScatterChart',
        'NVD3.chart.SparklinePlus',
        'NVD3.chart.StackedAreaChart',
        'NVD3.chart.SunburstChart'
    ],
    constructor: function(config) {
        this.initConfig(config);
    }
});
