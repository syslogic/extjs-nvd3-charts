/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#cumulativeLineChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.CumulativeLineChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelCumulativeLineChart',
    alias: ['widget.PanelCumulativeLineChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'CumulativeLineChart',
        store: Ext.create('NVD3Charts.store.CumulativeLineChart'),
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d) { return d[0]; },
            y: function(d) { return d[1]/100; },
            useInteractiveGuideline: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(function(d) {return d3.time.format('%x')(new Date(d));});
            chart.yAxis.tickFormat(d3.format(',.1%'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
