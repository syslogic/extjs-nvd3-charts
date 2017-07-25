/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.CumulativeLineChart', {
    extend: 'NVD3.chart.BasicChart',
    xtype: ['CumulativeLineChart'],
    config: {chartType: 'cumulativeLineChart'}
});