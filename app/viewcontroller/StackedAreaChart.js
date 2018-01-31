/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.StackedAreaChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.stackedareachart'],
    stores: ['StackedAreaChart'],
    views: ['panel.StackedAreaChart'],
    init: function() {
        this.control({
            "PanelStackedAreaChart": {
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
