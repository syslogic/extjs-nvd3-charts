/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.store.BulletChart', {
    extend: 'Ext.data.Store',
    storeId: 'BulletChart',
    alias: ['store.BulletChart'],
    model: 'NVD3Charts.model.None',
    data: {
        "title": "Revenue",
        "subtitle": "US$, in thousands",
        "ranges": [150, 225, 300],
        "measures": [220],
        "markers": [250]
    },
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
