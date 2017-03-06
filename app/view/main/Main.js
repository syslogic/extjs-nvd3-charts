/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
	'NVD3Charts.view.main.MainController',
	'NVD3Charts.view.menu.Charts',
        'Ext.form.Label'
    ],
    layout: 'border',
    xtype: 'app-main',
    controller: 'main',
    items:[{
        xtype: 'panel',
	region: 'center',
        name: 'MainContainer',
        title: 'NVD3 for Sencha ExtJS',
        titleAlign: 'left',
        layout: 'card',
        width: '100%',
        flex: 1,
        header: {
            titlePosition: 0,
            width: '100%',
            items: [{
                xtype: 'button',
                name: 'select_chart_type',
                text: 'Select Chart Type',
                menu: Ext.create('NVD3Charts.view.menu.Charts')
            }]
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
            {xtype: 'PanelBulletChart'}
        ]
    }, {
        xtype: 'toolbar',
	region: 'south',
        name: 'ToolbarSouthern',
        style: {background: '#F5F5F5', border: '1px solid #CECECE', color: '#157FCC'},
        items: ['->', {xtype: 'label', html: '<a class="gplus" href="https://plus.google.com/+MartinZeitler?rel=author" target="_blank"><img src="resources/images/gplus.png"></a>', padding: 8, width: 16}, {xtype: 'label',  html: '<a class="btc" href="bitcoin:1LXzkLeSBGPRQZQGLNzL7LPQR8nyJDQzW7?amount=0.1&label=Martin%20Zeitler&message=a%20donation%20for%20extjs-nvd3" target="_blank"><img src="resources/images/bitcoin.png"></a>', padding: 8, width: 32}],
        collapsible: false,
        split: true,
        height: 48,
        border: 0
    }],
    initComponent: function() {
        this.callParent(arguments);
    }
});