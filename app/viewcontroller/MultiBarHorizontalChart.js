/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
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