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
        xtype: 'ParallelCoordinates',
        store: Ext.create('NVD3Charts.store.ParallelCoordinates'),
        chartOptions: {
            lineTension: 0.85,
            dimensionData: [
                {key: "economy (mpg)",     format: d3.format(".1f")},
                {key: "cylinders",         format: d3.format("1.0f")},
                {key: "displacement (cc)", format: d3.format("g")},
                {key: "power (hp)",        format: d3.format("d")},
                {key: "weight (lb)",       format: d3.format("")},
                {key: "0-60 mph (s)",      format: d3.format(".1f")},
                {key: "year",              format: function(input) {
                    var date = d3.time.format("%y").parse(input.toString());
                    var format = d3.time.format("%Y");
                    return format(date);
                }}
            ]
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});