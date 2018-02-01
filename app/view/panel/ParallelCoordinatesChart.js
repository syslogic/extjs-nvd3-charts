/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#parallelCoordinatesChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.ParallelCoordinatesChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ParallelCoordinatesChart'],
    name: 'PanelParallelCoordinatesChart',
    alias: ['widget.PanelParallelCoordinatesChart'],
    layout: 'fit',
    items: [{
        xtype: 'ParallelCoordinatesChart',
        store: Ext.create('NVD3Charts.store.ParallelCoordinatesChart'),
        chartOptions: {
            lineTension: 0.85,
            dimensionData: [
                {key: "economy (mpg)",     format: d3.format(".1f")},
                {key: "cylinders",         format: d3.format("1.0f")},
                {key: "displacement (cc)", format: d3.format(".1f")},
                {key: "power (hp)",        format: d3.format(".1f")},
                {key: "weight (lb)",       format: d3.format(".1f")},
                {key: "0-60 mph (s)",      format: d3.format(".1f")},
                {key: "year",              format: function(input) {
                    input = Math.round(input);
                    var date = d3.time.format("%y").parse(input.toString());
                    var format = d3.time.format("%Y");
                    return format(date);
                }}
            ]
        },
        chartFn: function(chart) {

        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
