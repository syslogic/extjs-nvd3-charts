/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.ScatterChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ScatterChart'],
    name: 'PanelScatterChart',
    alias: ['widget.PanelScatterChart'],
    layout: 'fit',
    items: [{
        xtype: 'ScatterChart',
        store: Ext.create('NVD3Charts.store.ScatterChart'),
        chartOptions: {
	    color: d3.scale.category10().range(),
            showDistX: true,
            showDistY: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format('.02f'));
            chart.yAxis.tickFormat(d3.format('.02f'));
        }
    }]
});