/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#lineWithFocusChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.LineWithFocusChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.LineWithFocusChart'],
    name: 'PanelLineWithFocusChart',
    alias: ['widget.PanelLineWithFocusChart'],
    layout: 'fit',
    items: [{
        xtype: 'LineWithFocusChart',
        store: Ext.create('NVD3Charts.store.LineWithFocusChart'),
        chartOptions: {
            x: function(d) {return d.x;},
            y: function(d) {return d.y;},
            useInteractiveGuideline: true
        },
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format(',f'));
            chart.yAxis.tickFormat(d3.format(',.2f'));
            chart.y2Axis.tickFormat(d3.format(',.2f'));
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
