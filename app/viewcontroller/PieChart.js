/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.PieChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.piechart'],
    stores: ['PieChart'],
    views: ['panel.PieChart', 'panel.PieChartRegular', 'panel.PieChartDonut'],
    init: function() {
        this.control({
            "PanelPieChart": {
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
