/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#sparkline
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.SparklinePlus', {
    extend: 'NVD3.chart.BasicChart',
    xtype: ['SparklinePlus'],
    config: {chartType: 'sparklinePlus'}
});
