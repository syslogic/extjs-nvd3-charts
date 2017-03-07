/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.menu.ChartTypes', {
    extend: 'Ext.menu.Menu',
    alias: ['widget.MenuChartTypes'],
    defaults: {xtype: 'menuitem'},
    items: [
        {viewIndex:  0, text: 'Bar'},
        {viewIndex:  1, text: 'Line'},
        {viewIndex:  2, text: 'Scatter'},
        {viewIndex:  3, text: 'Stacked Area'},
        {viewIndex:  4, text: 'Stacked Bar'},
        {viewIndex:  5, text: 'Horizontal Stacked Bar'},
        {viewIndex:  6, text: 'Line Plus Bar'},
        {viewIndex:  7, text: 'Cumulative Line'},
        {viewIndex:  8, text: 'Line With Focus'},
        {viewIndex:  9, text: 'Pie'},
        {viewIndex: 10, text: 'Bullet'},
        {viewIndex: 11, text: 'Sunburst'},
        {viewIndex: 12, text: 'Candlestick'}
    ],
    listeners: {
        click: function(menu, item, e, eOpts) {
            NVD3Charts.app.getMainController().updateActiveItem(item.viewIndex);
        }
    }
});