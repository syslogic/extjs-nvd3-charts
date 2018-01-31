/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
**/

Ext.define('NVD3Charts.viewcontroller.BaseChart', {
    extend: 'Ext.app.ViewController',
    requires: [],
    stores: [],

    onElementMouseover: function(event) {
        //<debug>
            Ext.log({msg: 'onElementMouseover', level: 'debug'});
            console.log(event);
        //</debug>
    },
    onElementMouseout: function(event) {
        //<debug>
            Ext.log({msg: 'onElementMouseout', level: 'debug'});
            console.log(event);
        //</debug>
    },
    onElementClick: function(event) {
        //<debug>
            Ext.log({msg: 'onElementClick', level: 'debug'});
            console.log(event);
        //</debug>
    },

    onTooltipShow: function(event) {
        //<debug>
            Ext.log({msg: 'onTooltipShow', level: 'debug'});
            console.log(event);
        //</debug>
    },
    onTooltipHide: function(event) {
        //<debug>
            Ext.log({msg: 'onTooltipHide', level: 'debug'});
            console.log(event);
        //</debug>
    },

    onLegendMouseover: function(e) {
        //<debug>
            Ext.log({msg: 'onLegendMouseover', level: 'debug'});
            console.log(event);
        //</debug>
    },

    onStateChange: function(e) {
        //<debug>
            Ext.log({msg: 'onStateChange', level: 'debug'});
            console.log(event);
        //</debug>
    }
});
