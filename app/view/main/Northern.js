/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.view.main.Northern', {
    extend: 'Ext.toolbar.Toolbar',
    name: 'ToolbarNorthern',
    requires: ['Ext.form.Label', 'NVD3Charts.view.main.Bitcoins'],
    alias: ['widget.ToolbarNorthern'],
    collapsible: false,
    split: false,
    height: 40,
    border: 0,
    style: {borderBottom: '1px solid #157FCC !important', background: '#F5F5F5', color: '#157FCC'},
    items: [
        {xtype: 'label', text: 'NVD3.js Bindings for Sencha ExtJS', padding: 8}, '->',
        {xtype: 'label', html: '<a class="btc" href="https://github.com/syslogic/extjs-nvd3-charts" target="_blank"><img src="resources/images/octocat.png"></a>', padding: 8, width: 24},
        {xtype:  'tool', name: 'ToolBitcoins', cls: 'x-tool-bitcoin', qtip: 'donate some tokens.', type: 'bitcoin', callback:'showWindow', padding: 8, width: 24},
        {xtype: 'label', html: '<a class="gplus" href="https://plus.google.com/106963082057954766426?rel=author" target="_blank"><img src="resources/images/gplus.png"></a>', padding: 8, width: 24}
    ]
});
