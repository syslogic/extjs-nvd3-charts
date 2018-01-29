/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.ParallelCoordinates', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ParallelCoordinates'],
    name: 'PanelParallelCoordinates',
    alias: ['widget.PanelParallelCoordinates'],
    layout: 'fit',
    items: [{
        xtype: 'ForceDirectedGraph',
        store: Ext.create('NVD3Charts.store.ParallelCoordinates'),
        chartOptions: {
            color: d3.scale.category20(),
            x: function(d) {return d[0];},
            y: function(d) {return d[1];},            
            dimensionNames: ["economy (mpg)", "cylinders", "displacement (cc)", "power (hp)", "weight (lb)", "0-60 mph (s)", "year"],
            dimensionFormats: [d3.format("0.5f"), d3.format("e"), d3.format("g"), d3.format("d"), d3.format(""), d3.format("%"), d3.format("p")],
            lineTension: 0.85
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});