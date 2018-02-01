/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#sparkline
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.SparklinePlus', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelSparklinePlus',
    alias: ['widget.PanelSparklinePlus'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'SparklinePlus',
        store: Ext.create('NVD3Charts.store.Sparkline'),
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d, i) { return d.x; },
            y: function(d, i) {  return d.y; }
        },
        chartFn: function(chart) {

        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
