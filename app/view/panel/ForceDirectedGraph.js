/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

/* global d3 */

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
            x: function(d) {return d[0];},
            y: function(d) {return d[1];},
            nodeExtras: (function(node) {
                  node.append("text")
                    .attr("dx", 12).attr("dy", ".4em")
                    .text(function(d) { return d.name; });
            })
        },
        chartFn: function(chart) {

        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});