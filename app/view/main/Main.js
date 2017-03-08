/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'NVD3Charts.view.main.MainController',
        'NVD3Charts.view.main.Northern',
        'NVD3Charts.view.main.TabPanel'
    ],
    controller: 'main',
    xtype: 'app-main',
    layout: 'border',
    items:[{
        xtype: 'ToolbarNorthern',
        region: 'north',
        width: '100%'
    }, {
        xtype: 'panel',
        name: 'PanelMain',
        region:'center',
        layout: 'fit',
        border: 0,
        items: [{
            xtype: 'TabpanelMain',
            plugins: 'responsive',
            responsiveConfig: {
                tall: {tabPosition:   'left', textAlign:   'left', tabRotation: 0},
                wide: {tabPosition: 'bottom', textAlign: 'center'}
            }
        }]
    }],
    initComponent: function() {
        this.callParent(arguments);
    }
});