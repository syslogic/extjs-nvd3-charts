/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.HorizontalStackedBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.HorizontalStackedBarChart'],
    name: 'PanelHorizontalStackedBarChart',
    alias: ['widget.PanelHorizontalStackedBarChart'],
    layout: 'fit',
    items: [{
        xtype: 'HorizontalStackedBarChart',
        store: Ext.create('NVD3Charts.store.HorizontalStackedBarChart'),
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
    }]
});