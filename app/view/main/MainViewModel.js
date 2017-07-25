/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: ['viewmodel.main'],
    data: {
        titleDiscreteBarChart: 'Discrete Bar',
        titleLineChart: 'Line',
        titleScatterChart: 'Scattered',
        titleStackedAreaChart: 'Stacked Area',
        titleMultiBarChart: 'Stacked Bar, v',
        titleMultiBarHorizontalChart: 'Stacked Bar, h',
        titleLinePlusBarChart: 'Line Plus Bar',
        titleCumulativeLineChart: 'Cumulative Line',
        titleLineWithFocusChart: 'Line With Focus',
        titlePieChart: 'Pie',
        titleBulletChart: 'Bullet',
        titleSunburstChart: 'Sunburst',
        titleCandlestickBarChart: 'CandlestickBar',
        titleSparklinePlus: 'Sparkline',
        titleBoxPlotChart: 'Box Plot'
    }
});