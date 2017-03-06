/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.StackedAreaChart', {
    extend: 'Ext.container.Container',
    name: 'PanelStackedAreaChart',
    alias: ['widget.PanelStackedAreaChart'],
    store: Ext.create('NVD3Charts.store.StackedAreaChart'),
    layout: 'fit',
    items: [{
        xtype: 'StackedAreaChart',
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