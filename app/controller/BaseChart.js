/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.BaseChart', {
    extend: 'Ext.app.Controller',
    requires: [],
    stores: [],
    
    onElementMouseover: function(e) {
        console.log('onElementMouseover');
        console.log(e);
    },
    onElementMouseout: function(e) {
        console.log('onElementMouseout');
        console.log(e);
    },
    onElementClick: function(e) {
        console.log('onElementClick');
        console.log(e);
    },
    
    onTooltipShow: function(e) {
        console.log('onTooltipShow');
        console.log(e);
    },
    onTooltipHide: function(e) {
        console.log('onTooltipHide');
        console.log(e);
    },

    onLegendMouseover: function(e) {
        console.log('onLegendMouseover');
        console.log(e);
    },
    
    onStateChange: function(e) {
        console.log('onStateChange');
        console.log(e);
    }
    
});