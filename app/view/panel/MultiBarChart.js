/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#multiBarChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.MultiBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelMultiBarChart',
    alias: ['widget.PanelMultiBarChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'MultiBarChart',
        store: Ext.create('NVD3Charts.store.MultiBarChart'),
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format(',f'));
            chart.yAxis.tickFormat(d3.format(',.1f'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
