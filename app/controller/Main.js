/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['main.Main'],

    requires: [
        'NVD3Charts.store.BoxPlotChart',
        'NVD3Charts.store.BulletChart',
        'NVD3Charts.store.CandlestickBarChart',
        'NVD3Charts.store.CumulativeLineChart',
        'NVD3Charts.store.DiscreteBarChart',
        'NVD3Charts.store.LineChart',
        'NVD3Charts.store.LinePlusBarChart',
        'NVD3Charts.store.LineWithFocusChart',
        'NVD3Charts.store.MultiBarChart',
        'NVD3Charts.store.MultiBarHorizontalChart',
        'NVD3Charts.store.ParallelCoordinatesChart',
        'NVD3Charts.store.ForceDirectedGraph',
        'NVD3Charts.store.PieChart',
        'NVD3Charts.store.ScatterChart',
        'NVD3Charts.store.Sparkline',
        'NVD3Charts.store.StackedAreaChart',
        'NVD3Charts.store.SunburstChart'
    ],

    refs: [

        /* Panels */
        {ref: 'tabPanel',                       selector: 'panel[name=MainTabpanel]'},
        {ref: 'panelBoxPlotChart',              selector: 'PanelBoxPlotChart'},
        {ref: 'panelBulletChart',               selector: 'PanelBulletChart'},
        {ref: 'panelCandlestickBarChart',       selector: 'PanelCandlestickBarChart'},
        {ref: 'panelCumulativeLineChart',       selector: 'PanelCumulativeLineChart'},
        {ref: 'panelDiscreteBarChart',          selector: 'PanelDiscreteBarChart'},
        {ref: 'panelLineChart',                 selector: 'PanelLineChart'},
        {ref: 'panelLinePlusBarChart',          selector: 'PanelLinePlusBarChart'},
        {ref: 'panelLineWithFocusChart',        selector: 'PanelLineWithFocusChart'},
        {ref: 'panelMultiBarChart',             selector: 'PanelMultiBarChart'},
        {ref: 'panelMultiBarHorizontalChart',   selector: 'PanelMultiBarHorizontalChart'},
        {ref: 'panelPieChart',                  selector: 'PanelPieChart'},
        {ref: 'panelScatterChart',              selector: 'PanelScatterChart'},
        {ref: 'panelSparkline',                 selector: 'PanelSparkline'},
        {ref: 'panelSparklinePlus',             selector: 'PanelSparklinePlus'},
        {ref: 'panelStackedAreaChart',          selector: 'PanelStackedAreaChart'},
        {ref: 'panelSunburstChart',             selector: 'PanelSunburstChart'},
        {ref: 'panelParallelCoordinatesChart',  selector: 'PanelParallelCoordinatesChart'},
        {ref: 'panelForceDirectedGraph',        selector: 'PanelForceDirectedGraph'},

        /* Charts */
        {ref: 'boxPlotChart',                   selector: 'BoxPlotChart'},
        {ref: 'bulletChart',                    selector: 'BulletChart'},
        {ref: 'candlestickBarChart',            selector: 'CandlestickBarChart'},
        {ref: 'cumulativeLineChart',            selector: 'CumulativeLineChart'},
        {ref: 'discreteBarChart',               selector: 'DiscreteBarChart'},
        {ref: 'lineChart',                      selector: 'LineChart'},
        {ref: 'linePlusBarChart',               selector: 'LinePlusBarChart'},
        {ref: 'lineWithFocusChart',             selector: 'LineWithFocusChart'},
        {ref: 'multiBarChart',                  selector: 'MultiBarChart'},
        {ref: 'multiBarHorizontalChart',        selector: 'MultiBarHorizontalChart'},
        {ref: 'pieChart',                       selector: 'PieChart'},
        {ref: 'scatterChart',                   selector: 'ScatterChart'},
        {ref: 'sparkline',                      selector: 'Sparkline'},
        {ref: 'sparklinePlus',                  selector: 'SparklinePlus'},
        {ref: 'stackedAreaChart',               selector: 'StackedAreaChart'},
        {ref: 'sunburstChart',                  selector: 'SunburstChart'}
    ]
});
