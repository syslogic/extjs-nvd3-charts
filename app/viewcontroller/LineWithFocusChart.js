/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.viewcontroller.LineWithFocusChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.linewithfocuschart'],
    stores: ['LineWithFocusChart'],
    views: ['panel.LineWithFocusChart'],
    init: function() {
        this.control({
            "PanelLineWithFocusChart": {
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