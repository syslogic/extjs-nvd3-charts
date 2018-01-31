/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#discreteBarChart
**/

Ext.define('NVD3Charts.view.panel.DiscreteBarChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.DiscreteBarChart'],
    name: 'PanelDiscreteBarChart',
    alias: ['widget.PanelDiscreteBarChart'],
    controller: 'discretebarchart',
    layout: 'fit',
    items: [{
        xtype: 'DiscreteBarChart',
        store: Ext.create('NVD3Charts.store.DiscreteBarChart'),
        chartOptions: {
            x: function(d) { return d.label; },
            y: function(d) { return d.value; },
            staggerLabels: true,
            tooltips: true,
            showValues: true
        },
        chartFn: function(chart) {
            
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
