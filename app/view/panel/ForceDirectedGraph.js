/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3, NVD3Charts */

Ext.define('NVD3Charts.view.panel.ForceDirectedGraph', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.ForceDirectedGraph'],
    name: 'PanelForceDirectedGraph',
    alias: ['widget.PanelForceDirectedGraph'],
    layout: 'fit',
    items: [{
        xtype: 'ForceDirectedGraph',
        store: Ext.create('NVD3Charts.store.ForceDirectedGraph'),
        chartOptions: {
            color: d3.scale.category20(),
            nodeExtras: (function(node) {
                node.append("text")
                    .attr("dx", 12).attr("dy", ".4em")
                    .text(function(d) { return d.name; });
            })
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