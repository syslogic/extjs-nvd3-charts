/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['main.Main'],
    
    requires: [
        'NVD3Charts.store.DiscreteBarChart',
        'NVD3Charts.store.BulletChart',
        'NVD3Charts.store.CandlestickBarChart',
        'NVD3Charts.store.CumulativeLineChart',
        'NVD3Charts.store.HorizontalStackedBarChart',
        'NVD3Charts.store.LineChart',
        'NVD3Charts.store.LinePlusBarChart',
        'NVD3Charts.store.LineWithFocusChart',
        'NVD3Charts.store.PieChart',
        'NVD3Charts.store.ScatterChart',
        'NVD3Charts.store.SparklinePlus',
        'NVD3Charts.store.StackedAreaChart',
        'NVD3Charts.store.StackedBarChart',
        'NVD3Charts.store.SunburstChart'
    ],

    refs: [
        {ref: 'tabPanel',                       selector: 'panel[name=TabpanelMain]'},
        
        {ref: 'panelDiscreteBarChart',          selector: 'PanelDiscreteBarChart'},
        {ref: 'panelLineChart',                 selector: 'PanelLineChart'},
        {ref: 'panelScatterChart',              selector: 'PanelScatterChart'},
        {ref: 'panelStackedAreaChart',          selector: 'PanelStackedAreaChart'},
        {ref: 'panelStackedBarChart',           selector: 'PanelStackedBarChart'},
        {ref: 'panelHorizontalStackedBarChart', selector: 'PanelHorizontalStackedBarChart'},
        {ref: 'panelLinePlusBarChart',          selector: 'PanelLinePlusBarChart'},
        {ref: 'panelCumulativeLineChart',       selector: 'PanelCumulativeLineChart'},
        {ref: 'panelLineWithFocusChart',        selector: 'PanelLineWithFocusChart'},
        {ref: 'panelPieChart',                  selector: 'PanelPieChart'},
        {ref: 'panelBulletChart',               selector: 'PanelBulletChart'},
        {ref: 'panelSunburstChart',             selector: 'PanelSunburstChart'},
        {ref: 'panelCandlestickBarChart',       selector: 'PanelCandlestickBarChart'},
        {ref: 'panelSparklinePlus',             selector: 'PanelSparklinePlus'},
        
        {ref: 'discreteBarChart',               selector: 'DiscreteBarChart'},
        {ref: 'lineChart',                      selector: 'LineChart'},
        {ref: 'scatterChart',                   selector: 'ScatterChart'},
        {ref: 'stackedAreaChart',               selector: 'StackedAreaChart'},
        {ref: 'stackedBarChart',                selector: 'StackedBarChart'},
        {ref: 'horizontalStackedBarChart',      selector: 'HorizontalStackedBarChart'},
        {ref: 'linePlusBarChart',               selector: 'LinePlusBarChart'},
        {ref: 'cumulativeLineChart',            selector: 'CumulativeLineChart'},
        {ref: 'lineWithFocusChart',             selector: 'LineWithFocusChart'},
        {ref: 'pieChart',                       selector: 'PieChart'},
        {ref: 'bulletChart',                    selector: 'BulletChart'},
        {ref: 'sunburstChart',                  selector: 'SunburstChart'},
        {ref: 'candlestickBarChart',            selector: 'CandlestickBarChart'},
        {ref: 'sparklinePlus',                  selector: 'SparklinePlus'}
    ]
});