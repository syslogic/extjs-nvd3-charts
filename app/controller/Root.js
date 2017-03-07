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
        'CandleStickChart': 'onHashtag',
        'LineWithFocusChart': 'onHashtag',
        'PieChart': 'onHashtag',
        'BulletChart': 'onHashtag',
        'SunburstChart': 'onHashtag'
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
                    	Ext.log({msg: 'viewIndex is ' + i + ' -> ' + hash, level: 'info'});
                    //</debug>
                    ct.setActiveItem(i);
                    var chartPanel = panel.items.items[0];
                    var data = panel.store.proxy.reader.rawData;
                    chartPanel.renderChartData(data);
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