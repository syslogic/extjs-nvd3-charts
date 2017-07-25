/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.StackedAreaChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.StackedAreaChart'],
    name: 'PanelStackedAreaChart',
    alias: ['widget.PanelStackedAreaChart'],
    layout: 'fit',
    items: [{
        xtype: 'StackedAreaChart',
        store: Ext.create('NVD3Charts.store.StackedAreaChart'),
        chartOptions: {
            x: function(d) { return d[0]; },
            y: function(d) { return d[1]; },
            clipEdge: true,
            useInteractiveGuideline: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)); });
            chart.yAxis.tickFormat(d3.format(',.2f'));
        }
    }]
});