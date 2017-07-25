/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.DiscreteBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.DiscreteBarChart'],
    name: 'PanelDiscreteBarChart',
    alias: ['widget.PanelDiscreteBarChart'],
    controller: 'discretebarchart',
    layout: 'fit',
    items: [{
        xtype: 'DiscreteBarChart',
        store: Ext.create('NVD3Charts.store.DiscreteBarChart'),
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            staggerLabels: true,
            tooltips: true,
            showValues: true
        },
        chartFn: function(chart) {
            
        }
    }]
});