/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.BarChart', {
    extend: 'NVD3Charts.controller.BaseChart',
    requires: ['NVD3Charts.store.BarChart'],
    stores: ['BarChart'],
    init: function() {
        this.control({
            "PanelBarChart": {
                elementMouseover: 'onElementMouseover',
                elementMouseout: 'onElementMouseout',
                tooltipShow: 'onTooltipShow',
                tooltipHide: 'onTooltipHide',
                elementClick: 'onElementClick'
            }
        });
    }
});