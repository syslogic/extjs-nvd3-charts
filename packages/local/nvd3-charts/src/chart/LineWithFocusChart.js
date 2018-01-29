/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.LineWithFocusChart', {
    extend: 'NVD3.chart.BasicChart',
    xtype: ['LineWithFocusChart'],
    config: {chartType: 'lineWithFocusChart'}
});