/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.CumulativeLineChart', {
    extend: 'Ext.container.Container',
    name: 'PanelCumulativeLineChart',
    alias: ['widget.PanelCumulativeLineChart'],
    store: Ext.create('NVD3Charts.store.CumulativeLineChart'),
    layout: 'fit',
    items: [{
        xtype: 'CumulativeLineChart',
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d) { return d[0]; },
            y: function(d) { return d[1]/100; },
            useInteractiveGuideline: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(function(d) {
                return d3.time.format('%x')(new Date(d));
            });
            chart.yAxis.tickFormat(d3.format(',.1%'));
        }
    }]
});