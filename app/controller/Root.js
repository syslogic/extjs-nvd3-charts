/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017-2018 by Martin Zeitler, Bavaria.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.Root', {
    extend: 'Ext.app.Controller',
    requires: [],
    routes: {
                        '': 'onHashtag',
            'BoxPlotChart': 'onHashtag',
             'BulletChart': 'onHashtag',
     'CandlestickBarChart': 'onHashtag',
     'CumulativeLineChart': 'onHashtag',
        'DiscreteBarChart': 'onHashtag',
               'LineChart': 'onHashtag',
           'MultiBarChart': 'onHashtag',
 'MultiBarHorizontalChart': 'onHashtag',
'ParallelCoordinatesChart': 'onHashtag',
      'HistoricalBarChart': 'onHashtag',
      'ForceDirectedGraph': 'onHashtag',
        'LinePlusBarChart': 'onHashtag',
      'LineWithFocusChart': 'onHashtag',
                'PieChart': 'onHashtag',
            'ScatterChart': 'onHashtag',
               'Sparkline': 'onHashtag',
           'SparklinePlus': 'onHashtag',
        'StackedAreaChart': 'onHashtag',
           'SunburstChart': 'onHashtag'
    },

    /** switching the Tabs */
    onHashtag: function() {
        var hash = window.location.hash.replace('#', '');
        if(typeof(this.application.viewport.items.items) !== 'undefined') {
            var ct = this.application.viewport.items.items[  1  ];
            var tabPanel = ct.items.items[0];
            var tabs = tabPanel.items.items;
            /** note: within the scope of Ext.each() "return false" equals "continue". */
            Ext.each(tabs, function(tab, i) {
                if(tab.name === 'Tab' + hash) {
                    tabPanel.setActiveItem(i);
                    var panel = tab.items.items[0];
                    if(panel.items.items.length > 1) {
                        for(i=0; i < panel.items.items.length; i++) {
                            panel.items.items[i].items.items[0].store.load();
                        }
                    } else  {
                        panel.items.items[0].store.load();
                    }
                    //<debug>
                    	Ext.log({msg: 'onHashtag("' + hash + '") -> switching to index ' + i + '.', level: 'debug'});
                    //</debug>
                    return false;
                }
            });
        }
    },

    listen: {
        controller: {
            '*': {
                unmatchedroute : 'onUnmatchedRoute',
                chartLoaded: 'onChartLoaded',
                onhashtag : 'onHashtag'
            }
        }
    },

    /** unmatched route */
    onUnmatchedRoute: function(hash) {
        //<debug>
            Ext.log({msg: 'onUnmatchedRoute(' + hash.replace('#', '') + ')', level: 'warn'});
        //</debug>
    },

    /** chart loaded */
    onChartLoaded: function(x) {
        //<debug>
            Ext.log({msg: 'onChartLoaded: ' + x, level: 'debug'});
        //</debug>
    }
});
