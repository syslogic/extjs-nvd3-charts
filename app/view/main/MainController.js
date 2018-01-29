/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

/* global NVD3Charts */

Ext.define('NVD3Charts.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [],
    alias: ['controller.main'],
    views: [
        'main.Main',
        'main.Northern',
        'main.TabPanel',
        'panel.DiscreteBarChart',
        'panel.LineChart',
        'panel.ScatterChart',
        'panel.StackedAreaChart',
        'panel.StackedBarChart',
        'panel.HorizontalStackedBarChart',
        'panel.CandlestickBarChart',
        'panel.LinePlusBarChart',
        'panel.CumulativeLineChart',
        'panel.LineWithFocusChart',
        'panel.Sparkline',
        'panel.SparklinePlus',
        'panel.PieChart',
        'panel.BulletChart',
        'panel.SunburstChart',
        'panel.ForceDirectedGraph',
        'panel.ParallelCoordinates'
    ],

    /* Event Listeners */
    listeners: {
        chartLoaded: 'chartLoaded'
    },
    chartLoaded: function(){
        //<debug>
            Ext.log({msg: 'chartLoaded.', level: 'info'});
        //</debug>
    }
});
