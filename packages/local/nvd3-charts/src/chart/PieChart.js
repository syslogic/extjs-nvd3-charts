/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#pieChart
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.PieChart', {
    extend: 'NVD3.chart.BasicChart',
    xtype: ['PieChart'],
    config: {chartType: 'pieChart'}
});
