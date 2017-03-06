/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.menu.Charts', {
    extend: 'Ext.menu.Menu',
    alias: ['widget.MenuCharts'],
    defaults: {
        icon: 'resources/images/chart.png',
	xtype: 'menuitem'
    },
    items: [
        {viewIndex: 0, text: 'Bar Chart'},
        {viewIndex: 1, text: 'Line Chart'},
        {viewIndex: 2, text: 'Scatter Chart'},
        {viewIndex: 3, text: 'Stacked Area Chart'},
        {viewIndex: 4, text: 'Stacked Bar Chart'},
        {viewIndex: 5, text: 'Horizontal Stacked Bar Chart'},
        {viewIndex: 6, text: 'Line Plus Bar Chart'},
        {viewIndex: 7, text: 'Cumulative Line Chart'},
        {viewIndex: 8, text: 'Line With Focus Chart'},
        {viewIndex: 9, text: 'Pie Chart'},
        {viewIndex: 10, text: 'Bullet Chart' }
    ],
    listeners: {
        click: function( menu, item, e, eOpts ) {
            NVD3Charts.app.getMainController().updateActiveItem(item.viewIndex);
        }
    }
});