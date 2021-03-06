/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://nvd3-community.github.io/nvd3/examples/documentation.html#pieChart
**/

Ext.define('NVD3Charts.view.panel.PieChart', {
    extend: 'Ext.container.Container',
    requires: [
        'NVD3Charts.viewcontroller.ChartPanel',
        'NVD3Charts.view.panel.PieChartRegular',
        'NVD3Charts.view.panel.PieChartDonut'
    ],
    name: 'PanelPieChart',
    alias: ['widget.PanelPieChart'],
    controller: 'chartpanel',
    layout: 'hbox',
    defaults: {height: '100%', flex: 1},
    items: [
        {xtype: 'PanelPieChartRegular'},
        {xtype: 'PanelPieChartDonut'}
    ],
    getGraphCount: function() {
        return this.items.items.length;
    },
    getGraph: function(index) {
        return this.items.items[index].getGraph();
    }
});
