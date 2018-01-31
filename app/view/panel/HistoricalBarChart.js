/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#historicalBarChart
**/

Ext.define('NVD3Charts.view.panel.HistoricalBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.HistoricalBarChart'],
    name: 'PanelHistoricalBarChart',
    alias: ['widget.PanelHistoricalBarChart'],
    controller: 'historicalbarchart',
    layout: 'fit',
    items: [{
        xtype: 'HistoricalBarChart',
        store: Ext.create('NVD3Charts.store.HistoricalBarChart'),
        chartOptions: {
            x: function(d) { return d.x; },
            y: function(d) { return d.y; },
            staggerLabels: true,
            tooltips: true,
            showValues: true
        },
        chartFn: function(chart) {
            
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
