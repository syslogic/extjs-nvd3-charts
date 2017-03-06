/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    requires: ['Ext.tip.ToolTip'],
    views: [
        'main.Main',
        'menu.Charts',
        'panel.BarChart',
        'panel.LineChart',
        'panel.ScatterChart',
        'panel.StackedAreaChart',
        'panel.StackedBarChart',
        'panel.HorizontalStackedBarChart',
        'panel.LinePlusBarChartl',
        'panel.CumulativeLineChart',
        'panel.LineWithFocusChart',
        'panel.PieChart',
        'panel.BulletChart'
    ],

    /* Event Listeners */
    listeners: {
		chartLoaded: 'chartLoaded'
    },

    initComponent: function() {
        this.callParent(arguments);
    }
});