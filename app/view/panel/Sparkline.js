/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#sparkline
**/

/* global d3, NVD3Charts */

Ext.define('NVD3Charts.view.panel.Sparkline', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ChartPanel'],
    name: 'PanelSparkline',
    alias: ['widget.PanelSparkline'],
    controller: 'chartpanel',
    layout: 'fit',
    items: [{
        xtype: 'Sparkline',
        store: Ext.create('NVD3Charts.store.Sparkline'),
        chartOptions: {
            color: d3.scale.category10().range(),
            x: function(d, i) { return d.x; },
            y: function(d, i) {  return d.y; }
        },
        chartFn: function(chart) {
            var tabPanel= NVD3Charts.getApplication().getMainController().getTabPanel();
            var size = tabPanel.getPanelSize();
            chart.width(size[0]).height(size[1]);
            d3.select('#svg').attr('width', size[0]).attr('height', size[1]).transition().duration(0).call(chart);
        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
