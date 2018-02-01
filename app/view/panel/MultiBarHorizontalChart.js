/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#multiBarHorizontalChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.MultiBarHorizontalChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelMultiBarHorizontalChart',
    alias: ['widget.PanelMultiBarHorizontalChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'MultiBarHorizontalChart',
        store: Ext.create('NVD3Charts.store.MultiBarHorizontalChart'),
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            margin: {top: 2, right: 2, bottom: 2, left: 2},
            showValues: true,
            tooltips: true,
            showControls: false
        },
        chartFn: function(chart) {
            chart.yAxis.tickFormat(d3.format(',.2f'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
