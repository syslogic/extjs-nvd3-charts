/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.BoxPlotChart', {
    extend: 'Ext.data.Store',
    storeId: 'BoxPlotChart',
    alias: ['store.BoxPlotChart'],
    model: 'NVD3Charts.model.None',
    data: [{
        label: "Sample A",
        values: {Q1: 120, Q2: 150, Q3: 200, whisker_low: 115, whisker_high: 210, outliers: [50, 100, 225]}
      }, {
        label: "Sample B",
        values: {Q1: 300, Q2: 350, Q3: 400, whisker_low: 225, whisker_high: 425, outliers: [175]}
      }, {
        label: "Sample C",
        values: {Q1: 50,  Q2: 100, Q3: 125, whisker_low: 25,  whisker_high: 175, outliers: [0]}
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