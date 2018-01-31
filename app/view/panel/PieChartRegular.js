/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#pieChart
**/

Ext.define('NVD3Charts.view.panel.PieChartRegular', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.PieChart'],
    name: 'PanelPieChartRegular',
    alias: ['widget.PanelPieChartRegular'],
    layout: 'fit',
    items: [{
        xtype: 'PieChart',
        store: Ext.create('NVD3Charts.store.PieChart'),
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            showLabels: true,
            padAngle: .06,
            cornerRadius: 4,
            donut: false
        },
        chartFn: function(chart) {
            
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
