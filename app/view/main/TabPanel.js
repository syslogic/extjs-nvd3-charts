/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.TabPanel', {
    extend: 'Ext.tab.Panel',
    requires: [],
    name: 'TabpanelMain',
    alias: ['widget.TabpanelMain', 'widget.TabMain'],
    title: false,
    activeTab: false,
    bodyPadding: 0,
    bodyStyle:{'border-width': '0px', 'text-align':'center', 'padding': '12px'},
    defaults: {layout: 'fit', cls: 'x-btn-text-icon',  bodyPadding: 0, iconAlign: 'left', textAlign: 'left'},
    items: [
        {tabIndex:  0, name: 'TabDiscreteBarChart',          title: 'Discrete Bar',    items: [{xtype: 'PanelDiscreteBarChart'}]},
        {tabIndex:  1, name: 'TabLineChart',                 title: 'Line',            items: [{xtype: 'PanelLineChart'}]},
        {tabIndex:  2, name: 'TabScatterChart',              title: 'Scattered',       items: [{xtype: 'PanelScatterChart'}]},
        {tabIndex:  3, name: 'TabStackedAreaChart',          title: 'Stacked Area',    items: [{xtype: 'PanelStackedAreaChart'}]},
        {tabIndex:  4, name: 'TabStackedBarChart',           title: 'Stacked Bar, v',  items: [{xtype: 'PanelStackedBarChart'}]},
        {tabIndex:  5, name: 'TabHorizontalStackedBarChart', title: 'Stacked Bar, h',  items: [{xtype: 'PanelHorizontalStackedBarChart'}]},
        {tabIndex:  6, name: 'TabLinePlusBarChart',          title: 'Line Plus Bar',   items: [{xtype: 'PanelLinePlusBarChart'}]},
        {tabIndex:  7, name: 'TabCumulativeLineChart',       title: 'Cumulative Line', items: [{xtype: 'PanelCumulativeLineChart'}]},
        {tabIndex:  8, name: 'TabLineWithFocusChart',        title: 'Line With Focus', items: [{xtype: 'PanelLineWithFocusChart'}]},
        {tabIndex:  9, name: 'TabPieChart',                  title: 'Pie',             items: [{xtype: 'PanelPieChart'}]},
        {tabIndex: 10, name: 'TabBulletChart',               title: 'Bullet',          items: [{xtype: 'PanelBulletChart'}]},
        {tabIndex: 11, name: 'TabSunburstChart',             title: 'Sunburst',        items: [{xtype: 'PanelSunburstChart'}]},
        {tabIndex: 12, name: 'TabCandlestickBarChart',       title: 'CandlestickBar',  items: [{xtype: 'PanelCandlestickBarChart'}]},
        {tabIndex: 13, name: 'TabSparklinePlus',             title: 'Sparkline',       items: [{xtype: 'PanelSparklinePlus'}]}
    ],
    listeners: {
        tabchange: function(tabPanel, tab){
            NVD3Charts.getApplication().getRootController().redirectTo(tab.name.replace('Tab', ''));
        }
    },
    setTextAlign: function(direction) {
        
    }
});