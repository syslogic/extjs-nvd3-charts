/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.Loader.setConfig({
    disableCaching: false,
    scriptCharset: 'utf8',
    enabled: true,
    paths: {
        'Ext': 'ext/src',
        'NVD3': 'packages/local/nvd3-charts'
    }
});

Ext.application({
    extend: 'NVD3Charts.Application',
    name: 'NVD3Charts'
});
