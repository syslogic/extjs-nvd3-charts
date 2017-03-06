/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.LineWithFocusChart', {
    extend: 'Ext.container.Container',
    name: 'PanelLineWithFocusChart',
    alias: ['widget.PanelLineWithFocusChart'],
    store: Ext.create('NVD3Charts.store.LineWithFocusChart'),
    layout: 'fit',
    items: [{
        xtype: 'LineWithFocusChart',
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format(',f'));
            chart.yAxis.tickFormat(d3.format(',.2f'));
            chart.y2Axis.tickFormat(d3.format(',.2f'));
        }
    }]
});