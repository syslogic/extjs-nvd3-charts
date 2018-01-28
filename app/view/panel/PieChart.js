/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.PieChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.PieChart'],
    name: 'PanelPieChart',
    alias: ['widget.PanelPieChart'],
    layout: 'fit',
    items: [{
        xtype: 'PieChart',
        store: Ext.create('NVD3Charts.store.PieChart'),
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            showLabels: true,
            padAngle: .06,
            cornerRadius: 4,
            donut: true
        },
        chartFn: function(chart) {
            
        }
    }]
});