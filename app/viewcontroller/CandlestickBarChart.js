/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.viewcontroller.CandlestickBarChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.candlestickbarchart'],
    stores: ['CandlestickBarChart'],
    views: ['panel.CandlestickBarChart'],
    init: function() {
        this.control({
            "PanelCandlestickBarChart": {
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