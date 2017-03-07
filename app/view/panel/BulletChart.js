/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.panel.BulletChart', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.viewcontroller.BulletChart'],
    name: 'PanelBulletChart',
    alias: ['widget.PanelBulletChart'],
    store: Ext.create('NVD3Charts.store.BulletChart'),
    controller: 'bulletchart',
    layout: 'fit',
    items: [{xtype: 'BulletChart'}]
});