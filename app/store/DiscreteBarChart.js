/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.DiscreteBarChart', {
    extend: 'Ext.data.Store',
    storeId: 'DiscreteBarChart',
    alias: ['store.DiscreteBarChart'],
    model: 'NVD3Charts.model.None',
    data:[{
        key: "Cumulative Return",
        values: [
            {"label": "A", "value": -29.765957771107},
            {"label": "B", "value":   0.0},
            {"label": "C", "value":  32.807804682612},
            {"label": "D", "value": 196.45946739256},
            {"label": "E", "value":   0.19434030906893},
            {"label": "F", "value": -98.079782601442},
            {"label": "G", "value": -13.925743130903},
            {"label": "H", "value":  -5.1387322875705}
        ]
    }],
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