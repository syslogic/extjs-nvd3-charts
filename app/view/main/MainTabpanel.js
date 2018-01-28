/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

/* global NVD3Charts */

Ext.define('NVD3Charts.view.main.MainTabpanel', {
    extend: 'Ext.tab.Panel',
    requires: ['NVD3Charts.view.MainViewModel'],
    name: 'MainTabpanel',
    alias: ['widget.TabpanelMain', 'widget.MainTabpanel'],
    activeTab: false,
    title: false,
    bodyPadding: 0,
    viewmodel: {type: 'main'},
    bodyStyle:{'border-width': '0px', 'text-align':'center', 'padding': '12px'},
    defaults: {layout: 'fit', cls: 'x-btn-text-icon',  bodyPadding: 0, iconAlign: 'left', textAlign: 'left'},
    items: [
        {tabIndex:  1, name: 'TabLineChart',                title: 'Line',            items: [{xtype: 'PanelLineChart'}]},
        {tabIndex:  2, name: 'TabLineWithFocusChart',       title: 'Line With Focus', items: [{xtype: 'PanelLineWithFocusChart'}]},
        {tabIndex:  3, name: 'TabLinePlusBarChart',         title: 'Line Plus Bar',   items: [{xtype: 'PanelLinePlusBarChart'}]},
        {tabIndex:  4, name: 'TabSparkline',                title: 'Sparkline',       items: [{xtype: 'PanelSparkline'}]},
        {tabIndex:  5, name: 'TabSparklinePlus',            title: 'Sparkline Plus',  items: [{xtype: 'PanelSparklinePlus'}]},
        {tabIndex:  6, name: 'TabScatterChart',             title: 'Scattered',       items: [{xtype: 'PanelScatterChart'}]},
        {tabIndex:  7, name: 'TabStackedAreaChart',         title: 'Stacked Area',    items: [{xtype: 'PanelStackedAreaChart'}]},
        {tabIndex:  8, name: 'TabDiscreteBarChart',         title: "Discrete Bar",    items: [{xtype: 'PanelDiscreteBarChart'}]},
        {tabIndex:  9, name: 'TabMultiBarChart',            title: 'Stacked Bar, v',  items: [{xtype: 'PanelMultiBarChart'}]},
        {tabIndex: 10, name: 'TabMultiBarHorizontalChart',  title: 'Stacked Bar, h',  items: [{xtype: 'PanelMultiBarHorizontalChart'}]},
        {tabIndex: 11, name: 'TabCumulativeLineChart',      title: 'Cumulative Line', items: [{xtype: 'PanelCumulativeLineChart'}]},
        {tabIndex: 12, name: 'TabBoxPlotChart',             title: 'Box Plot',        items: [{xtype: 'PanelBoxPlotChart'}]},
        {tabIndex: 13, name: 'TabPieChart',                 title: 'Pie',             items: [{xtype: 'PanelPieChart'}]},
        {tabIndex: 14, name: 'TabBulletChart',              title: 'Bullet',          items: [{xtype: 'PanelBulletChart'}]},
        {tabIndex: 15, name: 'TabSunburstChart',            title: 'Sunburst',        items: [{xtype: 'PanelSunburstChart'}]},
        {tabIndex: 16, name: 'TabCandlestickBarChart',      title: 'CandlestickBar',  items: [{xtype: 'PanelCandlestickBarChart'}]},
        {tabIndex: 17, name: 'TabParallelCoordinatesChart', title: 'Parallel',        items: [{xtype: 'PanelParallelCoordinatesChart'}]},        
        {tabIndex: 18, name: 'TabForceDirectedGraph',       title: 'Force Directed',  items: [{xtype: 'PanelForceDirectedGraph'}]}
    ],
    listeners: {
        tabchange: function(tabPanel, tab){
            NVD3Charts.getApplication().getRootController().redirectTo(tab.name.replace('Tab', ''));
        }
    },
    setTextAlign: function(direction) {

    },
    initComponent: function(){
        this.callParent(arguments);
    }
});