/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.ChartModels', {
    extend: 'Ext.data.Store',
    storeId: 'ChartModels',
    alias: ['store.ChartModels'],
    model: Ext.create('Ext.data.Model', {
        fields: [
            {name: 'index', type:    'int'},
            {name: 'xtype', type: 'string'}
        ]
    }),
    data: [
        {index:  0, xtype: 'PanelBarChart'},
        {index:  1, xtype: 'PanelBulletChart'},
        {index:  2, xtype: 'PanelScatterChart'},
        {index:  3, xtype: 'PanelStackedAreaChart'},
        {index:  4, xtype: 'PanelStackedBarChart'},
        {index:  5, xtype: 'PanelHorizontalStackedBarChart'},
        {index:  6, xtype: 'PanelLinePlusBarChart'},
        {index:  7, xtype: 'PanelCumulativeLineChart'},
        {index:  8, xtype: 'PanelLineWithFocusChart'},
        {index:  9, xtype: 'PanelPieChart'},
        {index: 10, xtype: 'PanelBulletChart'},
        {index: 11, xtype: 'PanelSunburstChart'},
        {index: 12, xtype: 'PanelCandlestickBarChart'}
    ],
    autoLoad: true,
    pageSize: 100,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            idProperty: 'id',
            rootProperty: '[0]'
        }
    }
});