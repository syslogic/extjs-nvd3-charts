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
        var sin = [], sin2 = [], cos = [], rand = [], rand2 = [];
        for (var i = 0; i < 500; i++) {
            sin.push({  x: i, y: i % 10 === 5 ? null : Math.sin(i / 10) });
            sin2.push({ x: i, y: Math.sin(i / 5) * 0.4 - 0.25});
            cos.push({  x: i, y: .5 * Math.cos(i / 10)});
            rand.push({ x: i, y: Math.random() / 10});
            rand2.push({x: i, y: Math.cos(i / 10) + Math.random() / 10 })
        }
        return [
            {values: sin, area: true, key: "Sine Wave", color: "#ff7f0e", strokeWidth: 4, classed: 'dashed'},
            {values: cos, key: "Cosine Wave", color: "#2ca02c"},
            {values: rand, key: "Random Points", color: "#2222ff"},
            {values: rand2, key: "Random Cosine", color: "#667711", strokeWidth: 3.5},
            {values: sin2, area: true, key: "Fill opacity", color: "#EF9CFB", fillOpacity: .1}
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