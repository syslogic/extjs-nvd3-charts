/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.StackedBarChart', {
    extend: 'Ext.container.Container',
    name: 'PanelStackedBarChart',
    alias: ['widget.PanelStackedBarChart'],
    store: Ext.create('NVD3Charts.store.StackedBarChart'),
    layout: 'fit',
    items: [{
        xtype: 'StackedBarChart',
        chartFn: function(chart) {
            chart.xAxis.tickFormat(d3.format(',f'));
            chart.yAxis.tickFormat(d3.format(',.1f'));
        }
    }]
});