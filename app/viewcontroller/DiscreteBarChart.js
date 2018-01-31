/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.DiscreteBarChart', {
    extend: 'NVD3Charts.viewcontroller.BaseChart',
    alias: ['controller.discretebarchart'],
    stores: ['DiscreteBarChart'],
    views: ['panel.DiscreteBarChart'],
    init: function() {
        this.control({
            "PanelDiscreteBarChart": {
                elementMouseover: 'onElementMouseover',
                elementMouseout: 'onElementMouseout',
                tooltipShow: 'onTooltipShow',
                tooltipHide: 'onTooltipHide',
                elementClick: 'onElementClick'
            }
        });
    }
});
