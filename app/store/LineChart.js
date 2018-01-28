/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.LineChart', {
    extend: 'Ext.data.Store',
    storeId: 'LineChart',
    alias: ['store.LineChart'],
    model: 'NVD3Charts.model.None',
    data: (function() {
        var sin = [], cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }
        return [
          {key:   'Sine Wave', color: '#ff7f0e', values: sin},
          {key: 'Cosine Wave', color: '#2ca02c', values: cos}
        ];
    })(),
    autoLoad: false,
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