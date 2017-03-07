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
                  'BulletChart': 'onHashtag',
             'DiscreteBarChart': 'onHashtag',
                    'LineChart': 'onHashtag',
                 'ScatterChart': 'onHashtag',
             'StackedAreaChart': 'onHashtag',
              'StackedBarChart': 'onHashtag',
    'HorizontalStackedBarChart': 'onHashtag',
             'LinePlusBarChart': 'onHashtag',
          'CumulativeLineChart': 'onHashtag',
          'CandlestickBarChart': 'onHashtag',
           'LineWithFocusChart': 'onHashtag',
                     'PieChart': 'onHashtag',
                'SunburstChart': 'onHashtag'
    },

    /** switching the Card Layout */
    onHashtag: function() {
        var hash = window.location.hash.replace('#', '');
        if(typeof(this.application.viewport.items.items) !== 'undefined') {
            var ct = this.application.viewport.items.items[0];
            var cards = ct.items.items;
            
            /** notice: return false equals continue withing the scope of Ext.each(). */
            Ext.each(cards, function(panel, i) {
                if(panel.name === 'Panel' + hash) {
                    ct.setActiveItem(i);
                    var chartPanel = panel.items.items[0];
                    var data = panel.store.proxy.reader.rawData;
                    //<debug>
                    	Ext.log({msg: 'current viewIndex is ' + i + ' -> ' + hash, level: 'info'});
                    //</debug>
                    chartPanel.renderChartData(data);
                    return false;
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