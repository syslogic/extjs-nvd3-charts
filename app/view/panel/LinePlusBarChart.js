/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.LinePlusBarChart', {
    extend: 'Ext.container.Container',
    name: 'PanelLinePlusBarChart',
    alias: ['widget.PanelLinePlusBarChart'],
    store: Ext.create('NVD3Charts.store.LinePlusBarChart'),
    layout: 'fit',
    items: [{
        xtype: 'LinePlusBarChart',
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d,i) { return i; },
            y: function(d) { return d[1]; },
            margin: {top: 30, right: 60, bottom: 50, left: 70}
        },
        chartFn: function(chart) {
            var store = NVD3Charts.app.getMainController().getLinePlusBarChart().store;
            var data = store.proxy.reader.rawData;
            chart.xAxis.showMaxMin(false).tickFormat(function(d) {
               var dx = data[0].values[d] && data[0].values[d][0] || 0;
               return d3.time.format('%x')(new Date(dx));
            });
            chart.y1Axis.tickFormat(d3.format(',f'));
            chart.y2Axis.tickFormat(function(d) { return '$' + d3.format(',f')(d); });
            chart.bars.forceY([0]);
        }
    }]
});