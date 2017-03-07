/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.BarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.BarChart'],
    name: 'PanelBarChart',
    alias: ['widget.PanelBarChart'],
    store: Ext.create('NVD3Charts.store.BarChart'),
    controller: 'barchart',
    layout: 'fit',
    items: [{
        xtype: 'BarChart',
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            staggerLabels: true,
            tooltips: true,
            showValues: true
        }
    }]
});