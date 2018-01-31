/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.MultiBarHorizontalChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.multibarhorizontalchart'],
    stores: ['MultiBarHorizontalChart'],
    views: ['panel.MultiBarHorizontalChart'],
    init: function() {
        this.control({
            "PanelMultiBarHorizontalChart": {
                elementMouseover: 'onElementMouseover',
                elementMouseout: 'onElementMouseout',
                tooltipShow: 'onTooltipShow',
                tooltipHide: 'onTooltipHide',
                elementClick: 'onElementClick',
                legendMouseover: 'onLegendMouseover',
                stateChange: 'onStateChange'
            }
        });
    }
});
