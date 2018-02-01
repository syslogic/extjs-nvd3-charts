/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#boxPlot
**/

Ext.define('NVD3Charts.view.panel.BoxPlotChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelBoxPlotChart',
    alias: ['widget.PanelBoxPlotChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'BoxPlotChart',
        store: Ext.create('NVD3Charts.store.BoxPlotChart'),
        chartOptions: {

        },
        chartFn: function(chart) {

        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
