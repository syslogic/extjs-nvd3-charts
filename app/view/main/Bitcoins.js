/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.main.Bitcoins', {
    extend: 'Ext.window.Window',
    requires: [],
    alias: ['window.Bitcoins'],
    title: 'Bitcoin Address: 19uySyXrtqQ71PFZWHb2PxBwtNitg2Dp6b',
    style: 'background: #0078A5;',
    closeAction: 'hide',
    layout: 'border',
    animateTarget: false,
    resizable: false,
    modal: true,
    padding: 10,
    width:  520,
    height: 560,
    border: 0,
    items: [{
        xtype: 'panel',
        region: 'center',
        cls: 'x-panel-bitcoins',
        html: '<a href="bitcoin:19uySyXrtqQ71PFZWHb2PxBwtNitg2Dp6b" target="_blank"><img src="resources/images/19uySyXrtqQ71PFZWHb2PxBwtNitg2Dp6b.png" height="493px" width="493px"></a>',
        border: 0,
        flex: 1
    }],
    initComponent: function(){
        NVD3Charts.getApplication().windows.bitcoins=this;
        this.callParent(arguments);
    }
});
