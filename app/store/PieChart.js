/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.store.PieChart', {
    extend: 'Ext.data.Store',
    storeId: 'PieChart',
    alias: ['store.PieChart'],
    model: 'NVD3Charts.model.None',
    data: [
        {"label": "One",   "value": 29.765957771107},
        {"label": "Two",   "value": 5.0},
        {"label": "Three", "value": 32.807804682612},
        {"label": "Four",  "value": 196.45946739256},
        {"label": "Five",  "value": 0.19434030906893},
        {"label": "Six",   "value": 98.079782601442},
        {"label": "Seven", "value": 13.925743130903},
        {"label": "Eight", "value": 5.1387322875705}
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
