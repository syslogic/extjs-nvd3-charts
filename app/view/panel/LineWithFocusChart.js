/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
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
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format(',f'));
            chart.yAxis.tickFormat(d3.format(',.2f'));
            chart.y2Axis.tickFormat(d3.format(',.2f'));
        }
    }]
});