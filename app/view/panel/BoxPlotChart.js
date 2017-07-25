/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.BoxPlotChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.BoxPlotChart'],
    name: 'PanelBoxPlotChart',
    alias: ['widget.PanelBoxPlotChart'],
    controller: 'boxplotchart',
    layout: 'fit',
    items: [{
        xtype: 'BoxPlotChart',
        store: Ext.create('NVD3Charts.store.BoxPlotChart'),
        chartFn: function(chart) {
            
        }
    }]
});