/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#lineChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.LineChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelLineChart',
    alias: ['widget.PanelLineChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'LineChart',
        store: Ext.create('NVD3Charts.store.LineChart'),
        chartOptions: {
            showXAxis: true,
            showYAxis: true,
            useInteractiveGuideline: true,
            transitionDuration: 250
        },
        chartFn: function(chart) {
            chart.xAxis.axisLabel('Time (ms)').tickFormat(d3.format(',r'));
            chart.yAxis.axisLabel('Voltage (v)').tickFormat(d3.format('.02f'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
