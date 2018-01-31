/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'NVD3Charts.view.main.MainController',
        'NVD3Charts.view.main.MainTabpanel',
        'NVD3Charts.view.main.Northern'
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
            xtype: 'MainTabpanel',
            textAlign: 'left',
            tabPosition: 'right',
            tabRotation: 0
        }]
    }]
});
