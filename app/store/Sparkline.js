/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

/* TODO: this store would require some data, which renders. */
Ext.define('NVD3Charts.store.Sparkline', {
    extend: 'Ext.data.Store',
    storeId: 'Sparkline',
    alias: ['store.Sparkline'],
    model: 'NVD3Charts.model.None',
    data: (function() {
        var sin = [];
        for (var i = 0; i < 500; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
        }
        return sin;
    })(),
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
