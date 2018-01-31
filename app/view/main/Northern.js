/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.view.main.Northern', {
    extend: 'Ext.toolbar.Toolbar',
    name: 'ToolbarNorthern',
    requires: ['Ext.form.Label'],
    alias: ['widget.ToolbarNorthern'],
    collapsible: false,
    split: false,
    height: 40,
    border: 0,
    style: {borderBottom: '1px solid #157FCC !important', background: '#F5F5F5', color: '#157FCC'},
    items: [
        {xtype: 'label', text: 'NVD3.js Bindings for Sencha ExtJS', padding: 8}, '->',
        {xtype: 'label', html: '<a class="github" href="https://github.com/syslogic/extjs-nvd3-charts" target="_blank"><img src="resources/images/octocat.png"></a>', paddingTop: 9, width: 22},
        {xtype: 'label', html: '<a class="gplus" href="https://plus.google.com/106963082057954766426?rel=author" target="_blank"><img src="resources/images/gplus.png"></a>', paddingTop: 6, width: 20},
        {xtype: 'label', html: '<a class="paypal" href="https://www.paypal.me/syslogic" target="_blank"><img src="resources/images/paypal.png"></a>', paddingTop: 9, width: 20}
    ]
});
