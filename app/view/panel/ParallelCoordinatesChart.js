/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
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
                {key: "economy (mpg)", format: d3.format("0.5f"), tooltip: "Parameter 1"},
                {key: "cylinders", format: d3.format("1.0f"), tooltip: "Parameter 2"},
                {key: "displacement (cc)", format: d3.format("g"), tooltip: "Parameter 3"},
                {key: "power (hp)", format: d3.format("d"), tooltip: "Parameter 4"},
                {key: "weight (lb)", format: d3.format(""), tooltip: "Parameter 5"},
                {key: "0-60 mph (s)", format: d3.format("%"), tooltip: "Parameter 6"},
                {key: "year", format: d3.format("p"), tooltip: "Parameter 7"}
            ]
        },
        chartFn: function(chart) {

        }
    }]
});