/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.SparklinePlus', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.SparklinePlus'],
    name: 'PanelSparklinePlus',
    alias: ['widget.PanelSparklinePlus'],
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