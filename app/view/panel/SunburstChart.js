/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.SunburstChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.SunburstChart'],
    name: 'PanelSunburstChart',
    alias: ['widget.PanelSunburstChart'],
    layout: 'fit',
    items: [{
        xtype: 'SunburstChart',
        store: Ext.create('NVD3Charts.store.SunburstChart'),
        chartFn: function(chart) {
            
        }
    }]
});