/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

Ext.define('NVD3Charts.view.panel.SparklineChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.SparklinePlus'],
    name: 'PanelSparklinePlus',
    alias: ['widget.PanelSparklinePlus'],
    layout: 'fit',
    items: [{
        xtype: 'SparklinePlus',
        store: Ext.create('NVD3Charts.store.SparklinePlus'),
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d) {return d[0];},
            y: function(d) {return d[1];}
        },
        chartFn: function(chart) {
            chart.xTickFormat(function(d) {return d3.time.format('%b %Y')(new Date( d * 86400000 ));})
        }
    }]
});