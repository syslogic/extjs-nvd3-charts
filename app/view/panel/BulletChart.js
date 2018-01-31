/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#bulletChart
**/

Ext.define('NVD3Charts.view.panel.BulletChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.BulletChart'],
    name: 'PanelBulletChart',
    alias: ['widget.PanelBulletChart'],
    controller: 'bulletchart',
    layout: 'fit',
    items: [{
        xtype: 'BulletChart',
        store: Ext.create('NVD3Charts.store.BulletChart'),
        chartOptions: {

        },
        chartFn: function(chart) {

        }
    }],
    getGraph: function() {
        return this.items.items[0];
    }
});
