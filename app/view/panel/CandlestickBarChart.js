/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#candlestickBarChart
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.CandlestickBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelCandlestickBarChart',
    alias: ['widget.PanelCandlestickBarChart'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'CandleStickBarChart',
        store: Ext.create('NVD3Charts.store.CandlestickBarChart'),
        chartOptions: {
            x: function(d) {return d['date']},
            y: function(d) {return d['close']},
            margin: {left: 75, right: 32, bottom: 50}
        },
        chartFn: function(chart) {
            chart.xAxis
                .axisLabel("Dates")
                .tickFormat(function(d) {
                    return d3.time.format('%x')(new Date(new Date() - (20000 * 86400000) + (d * 86400000)));
                });
            chart.yAxis
                .axisLabel('Stock Price')
                .tickFormat(function(d,i){ return '$' + d3.format(',.1f')(d); });
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
