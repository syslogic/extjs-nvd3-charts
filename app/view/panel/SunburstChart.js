/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#sunburst
**/

Ext.define('NVD3Charts.view.panel.SunburstChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelSunburstChart',
    alias: ['widget.PanelSunburstChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'SunburstChart',
        store: Ext.create('NVD3Charts.store.SunburstChart'),
        chartOptions: {},
        chartFn: function(chart) {}
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
