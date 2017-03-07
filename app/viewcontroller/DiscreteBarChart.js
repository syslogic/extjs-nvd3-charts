/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
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