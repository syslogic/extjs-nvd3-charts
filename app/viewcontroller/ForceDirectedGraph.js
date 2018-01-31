/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.ForceDirectedGraph', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.forcedirectedgraph'],
    stores: ['ForceDirectedGraph'],
    views: ['panel.ForceDirectedGraph'],
    init: function() {
        this.control({
            "PanelForceDirectedGraph": {
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
