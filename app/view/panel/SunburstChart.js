/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.SunburstChart', {
    extend: 'Ext.container.Container',
    name: 'PanelSunburstChart',
    alias: ['widget.PanelSunburstChart'],
    store: Ext.create('NVD3Charts.store.SunburstChart'),
    layout: 'fit',
    items: [{xtype: 'SunburstChart'}]
});