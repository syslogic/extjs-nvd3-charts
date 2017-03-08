/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.StackedAreaChart', {
    extend: 'NVD3.chart.BasicChart',
    xtype: ['StackedAreaChart'],
    config: {chartType: 'stackedAreaChart'}
});