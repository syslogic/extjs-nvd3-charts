/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @license MIT License
**/

/* global NVD3Charts, d3 */

Ext.define('NVD3Charts.view.main.MainTabpanel', {
    extend: 'Ext.tab.Panel',
    requires: ['NVD3Charts.view.MainViewModel'],
    name: 'MainTabpanel',
    alias: ['widget.TabpanelMain', 'widget.MainTabpanel'],
    activeTab: false,
    title: false,
    bodyPadding: 0,
    viewmodel: {type: 'main'},
    /** the default resize animation duration */
    config: {resizeAnimDuration: 200},
    bodyStyle:{'border-width': '0px', 'text-align':'center', 'padding': '12px'},
    defaults: {layout: 'fit', cls: 'x-btn-text-icon',  bodyPadding: 0, iconAlign: 'left', textAlign: 'left'},
    items: [
        {tabIndex:  1, name: 'TabLineChart',                title: 'Line',            items: [{xtype: 'PanelLineChart'}]},
        {tabIndex:  2, name: 'TabLineWithFocusChart',       title: 'Line With Focus', items: [{xtype: 'PanelLineWithFocusChart'}]},
        {tabIndex:  3, name: 'TabCumulativeLineChart',      title: 'Cumulative Line', items: [{xtype: 'PanelCumulativeLineChart'}]},
        {tabIndex:  4, name: 'TabLinePlusBarChart',         title: 'Line Plus Bar',   items: [{xtype: 'PanelLinePlusBarChart'}]},
        {tabIndex:  5, name: 'TabSparkline',                title: 'Sparkline',       items: [{xtype: 'PanelSparkline'}]},
        {tabIndex:  6, name: 'TabSparklinePlus',            title: 'Sparkline Plus',  items: [{xtype: 'PanelSparklinePlus'}]},
        {tabIndex:  7, name: 'TabScatterChart',             title: 'Scattered',       items: [{xtype: 'PanelScatterChart'}]},
        {tabIndex:  8, name: 'TabStackedAreaChart',         title: 'Stacked Area',    items: [{xtype: 'PanelStackedAreaChart'}]},
        {tabIndex:  9, name: 'TabDiscreteBarChart',         title: "Discrete Bar",    items: [{xtype: 'PanelDiscreteBarChart'}]},
        {tabIndex: 10, name: 'TabHistoricalBarChart',       title: "Historical Bar",  items: [{xtype: 'PanelHistoricalBarChart'}]},
        {tabIndex: 11, name: 'TabMultiBarChart',            title: 'Stacked Bar, v',  items: [{xtype: 'PanelMultiBarChart'}]},
        {tabIndex: 12, name: 'TabMultiBarHorizontalChart',  title: 'Stacked Bar, h',  items: [{xtype: 'PanelMultiBarHorizontalChart'}]},
        {tabIndex: 13, name: 'TabBoxPlotChart',             title: 'Box Plot',        items: [{xtype: 'PanelBoxPlotChart'}]},
        {tabIndex: 14, name: 'TabPieChart',                 title: 'Pie',             items: [{xtype: 'PanelPieChart'}]},
        {tabIndex: 15, name: 'TabBulletChart',              title: 'Bullet',          items: [{xtype: 'PanelBulletChart'}]},
        {tabIndex: 16, name: 'TabSunburstChart',            title: 'Sunburst',        items: [{xtype: 'PanelSunburstChart'}]},
        {tabIndex: 17, name: 'TabCandlestickBarChart',      title: 'CandlestickBar',  items: [{xtype: 'PanelCandlestickBarChart'}]},
        {tabIndex: 18, name: 'TabParallelCoordinatesChart', title: 'Parallel',        items: [{xtype: 'PanelParallelCoordinatesChart'}]},
        {tabIndex: 19, name: 'TabForceDirectedGraph',       title: 'Force Directed',  items: [{xtype: 'PanelForceDirectedGraph'}]}
    ],
    listeners: {
        tabchange: function(tabPanel, tab){
            NVD3Charts.getApplication().getRootController().redirectTo(tab.name.replace('Tab', ''));
        },
        /* scaling the chart on tab-panel resize, top-down. */
        resize: function(tabPanel, width, height){
            var tab = tabPanel.activeTab.items.items[0];
            var offset = tabPanel.getTabBar().getWidth();
            if(typeof(tab.getGraphCount) === 'function' && tab.getGraphCount() > 1) {

                /* it now considers hbox & vbox layouts*/
                var graphCount = tab.getGraphCount();
                for(i=0; i < graphCount; i++) {
                    var direction = tab.getLayout().direction;
                    if(direction === 'horizontal') {
                        this.updateGraph(tab.getGraph(i), width/graphCount, offset, height);
                    } else if(direction === 'vertical') {
                        this.updateGraph(tab.getGraph(i), width, offset, height/graphCount);
                    }
                }
            } else if(typeof(tab.getGraph) === 'function') {
                this.updateGraph(tab.getGraph(), width, offset, height);
            }
        }
    },
    updateGraph: function(graph, width, offset, height) {
        if(graph.getSvg() !== null) {
            graph.chart.width(width-offset).height(height);
            d3.select(graph.getSvg())
            .attr('width', width-offset)
            .attr('height', height)
            .transition().duration(this.resizeAnimDuration)
            .call(graph.chart);
        }
    },
    setTextAlign: function(direction) {

    },
    getPanelSize: function(){
        var offset = this.getTabBar().getWidth();
        var width = this.getWidth();
        var height = this.getHeight();
        return [width-offset, height];
    }
});
