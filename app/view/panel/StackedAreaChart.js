/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#stackedAreaChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.StackedAreaChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelStackedAreaChart',
    alias: ['widget.PanelStackedAreaChart'],
    controller: 'chartpanel',
    layout: 'fit',
    margin: {right: 0},
    items: [{
        xtype: 'StackedAreaChart',
        store: Ext.create('NVD3Charts.store.StackedAreaChart'),
        chartOptions: {
            x: function(d) { return d[0]; },
            y: function(d) { return d[1]; },
            useInteractiveGuideline: true,
            clipEdge: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(function(d) { return d3.time.format('%x')(new Date(d)); });
            chart.yAxis.tickFormat(d3.format(',.2f'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
