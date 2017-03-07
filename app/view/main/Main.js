/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: ['NVD3Charts.view.main.MainController', 'NVD3Charts.view.menu.ChartTypes'],
    controller: 'main',
    xtype: 'app-main',
    layout: 'border',
    items:[{
        xtype: 'panel',
	region: 'center',
        name: 'MainContainer',
        title: 'NVD3 Bindings for Sencha ExtJS',
        titleAlign: 'left',
        layout: 'card',
        width: '100%',
        flex: 1,
        header: {
            titlePosition: 0,
            width: '100%',
            items: [
                {xtype:  'label', html: '<a class="btc" href="https://github.com/syslogic/extjs-nvd3-charts" target="_blank"><img src="resources/images/octocat.png"></a>', padding: 8, width: 24},
                {xtype:  'label', html: '<a class="btc" href="bitcoin:1LXzkLeSBGPRQZQGLNzL7LPQR8nyJDQzW7?amount=0.01&label=Martin%20Zeitler&message=a%20donation%20for%20extjs-nvd3" target="_blank"><img src="resources/images/bitcoin.png"></a>', padding: 8, width: 24},
                {xtype:  'label', html: '<a class="gplus" href="https://plus.google.com/+MartinZeitler?rel=author" target="_blank"><img src="resources/images/gplus.png"></a>', padding: 8, width: 24}
            ]
        },
        items: [
            {xtype: 'PanelBarChart'},
            {xtype: 'PanelBulletChart'},
            {xtype: 'PanelScatterChart'},
            {xtype: 'PanelStackedAreaChart'},
            {xtype: 'PanelStackedBarChart'},
            {xtype: 'PanelHorizontalStackedBarChart'},
            {xtype: 'PanelLinePlusBarChart'},
            {xtype: 'PanelCumulativeLineChart'},
            {xtype: 'PanelLineWithFocusChart'},
            {xtype: 'PanelPieChart'},
            {xtype: 'PanelBulletChart'},
            {xtype: 'PanelSunburstChart'},
            {xtype: 'PanelCandlestickBarChart'}
        ]
    }, {
        xtype: 'toolbar',
        region: 'south',
        name: 'ToolbarSouthern',
        style: {background: '#F5F5F5', border: '1px solid #CECECE', color: '#157FCC'},
        collapsible: false,
        split: true,
        height: 46,
        border: 0,
        items: ['->', {xtype: 'button', name: 'ButtonChartType', text: 'Chart Type', menu: Ext.create('NVD3Charts.view.menu.ChartTypes')}]
    }],
    initComponent: function() {
        this.callParent(arguments);
    }
});