/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.Root', {
    extend: 'Ext.app.Controller',
    requires: [],

    /** Routes */
    routes: {
        '': 'onHashtag',
        'BarChart': 'onHashtag',
        'LineChart': 'onHashtag',
        'ScatterChart': 'onHashtag',
        'StackedAreaChart': 'onHashtag',
        'StackedBarChart': 'onHashtag',
        'HorizontalStackedBarChart': 'onHashtag',
        'LinePlusBarChart': 'onHashtag',
	    'CumulativeLineChart': 'onHashtag',
	    'LineWithFocusChart': 'onHashtag',
        'PieChart': 'onHashtag',
        'BulletChart': 'onHashtag'
    },

    /** switching the card öayout */
    onHashtag: function() {
        var hash = window.location.hash.replace('#', '');
        if(typeof(this.application.viewport.items.items) !== 'undefined') {
            var ct = this.application.viewport.items.items[0];
            var cards = ct.items.items;
            Ext.each(cards, function(panel, i) {
                if(panel.name === 'Panel' + hash) {
                    //<debug>
                    	Ext.log({msg: 'viewIndex ' + i + ' -> #' + hash, level: 'info'});
                    //</debug>
                    panel.items.items[0].renderChartData(panel.store.proxy.reader.rawData);
                    ct.setActiveItem(i);
                    return true;
                }
            });
        }
    },

    listen: {
        controller: {
            '*': {unmatchedroute : 'onUnmatchedRoute'}
        }
    },

    /** unmatched route */
    onUnmatchedRoute: function(hash) {
        //<debug>
            Ext.log({msg: 'onUnmatchedRoute: ' + hash.replace('#', ''), level: 'warn'});
        //</debug>
    }
});