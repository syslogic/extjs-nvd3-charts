/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.LineChart', {
    extend: 'Ext.data.Store',
    storeId: 'LineChart',
    alias: ['store.LineChart'],
    model: 'NVD3Charts.model.None',
    data: (function() {
        var sin = [], cos = [];
        for (var i = 0; i < 200; i++) {
            sin.push({x: i, y: Math.sin(i/10)});
            cos.push({x: i, y: .5 * Math.cos(i/10)});
        }
        return [
            {key: 'Sine',  values: sin, color: '#FF7F0eE'},
            {key: 'Cosine', values: cos, color: '#2CA02C'}
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