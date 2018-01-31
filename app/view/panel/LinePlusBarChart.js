/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global NVD3Charts, d3 */

Ext.define('NVD3Charts.view.panel.LinePlusBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.LinePlusBarChart'],
    name: 'PanelLinePlusBarChart',
    alias: ['widget.PanelLinePlusBarChart'],
    layout: 'fit',
    items: [{
        xtype: 'LinePlusBarChart',
        store: Ext.create('NVD3Charts.store.LinePlusBarChart'),
        chartOptions: {
            color: d3.scale.category10().range(),
            // x: function(d, i) {return d[0];},
            x: function(d){return d[0];},
            y: function(d) {return d[1];},
            margin: {top: 30, right: 60, bottom: 50, left: 70},
            legendRightAxisHint:' [Using Right Axis]'
        },
        chartFn: function(chart) {
            var store = NVD3Charts.app.getMainController().getLinePlusBarChart().store;
            var data = store.proxy.reader.rawData;
            chart.xAxis.tickFormat(function(d) {
                return d3.time.format('%x')(new Date(d));
            }).showMaxMin(false);

            chart.y2Axis.tickFormat(function(d) {
            	return '$' + d3.format(',f')(d);
            });

            chart.bars.forceY([0]).padData(false);
            chart.x2Axis.tickFormat(function(d) {
                return d3.time.format('%x')(new Date(d));
            }).showMaxMin(false);
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});