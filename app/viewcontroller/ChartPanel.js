/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.ChartPanel', {
    extend: 'Ext.app.ViewController',
    alias: ['controller.chartpanel'],
    views: [
        'panel.BoxPlotChart',
        'panel.BulletChart',
        'panel.CandlestickBarChart',
        'panel.CumulativeLineChart',
        'panel.DiscreteBarChart',
        'panel.HistoricalBarChart',
        'panel.LineChart',
        'panel.LinePlusBarChart',
        'panel.LineWithFocusChart',
        'panel.MultiBarChart',
        'panel.MultiBarHorizontalChart',
        'panel.ParallelCoordinatesChart',
        'panel.ForceDirectedGraph',
        'panel.PieChart',
        'panel.ScatterChart',
        'panel.Sparkline',
        'panel.SparklinePlus',
        'panel.StackedAreaChart',
        'panel.SunburstChart'
        
    ],
    init: function() {
        
    }
});
