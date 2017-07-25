/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.LineChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.LineChart'],
    name: 'PanelLineChart',
    alias: ['widget.PanelLineChart'],
    layout: 'fit',
    items: [{
        xtype: 'LineChart',
        store: Ext.create('NVD3Charts.store.LineChart'),
        chartOptions: {
            x: function(d, i) { return i; },
            showXAxis: true,
            showYAxis: true,
            transitionDuration: 250
        },
        chartFn: function(chart) {
            chart.xAxis.axisLabel('Time (ms)').tickFormat(d3.format(',r'));
            chart.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format('.02f'));
        }
    }]
});