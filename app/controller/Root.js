/**
 * NVD3.js Bindings for Sencha ExtJS
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
                 'BoxPlotChart': 'onHashtag',
                  'BulletChart': 'onHashtag',
          'CandlestickBarChart': 'onHashtag',
          'CumulativeLineChart': 'onHashtag',
             'DiscreteBarChart': 'onHashtag',
                    'LineChart': 'onHashtag',
      'MultiBarHorizontalChart': 'onHashtag',
             'LinePlusBarChart': 'onHashtag',
           'LineWithFocusChart': 'onHashtag',
                     'PieChart': 'onHashtag',
                 'ScatterChart': 'onHashtag',
                'SparklinePlus': 'onHashtag',
             'StackedAreaChart': 'onHashtag',
              'StackedBarChart': 'onHashtag',
                'SunburstChart': 'onHashtag'
    },

    /** switching the Tabs */
    onHashtag: function() {
        var hash = window.location.hash.replace('#', '');
        if(typeof(this.application.viewport.items.items) !== 'undefined') {

            var ct = this.application.viewport.items.items[  1  ];
            var tabPanel = ct.items.items[0];
            var tabs = tabPanel.items.items;

            /** notice: return false equals continue withing the scope of Ext.each(). */
            Ext.each(tabs, function(tab, i) {
                if(tab.name === 'Tab' + hash) {
                    tabPanel.setActiveItem(i);
                    var chart = tab.items.items[0].items.items[0];
                    chart.store.load();
                    //<debug>
                    	Ext.log({msg: 'switching to tabIndex ' + i + ' -> ' + hash, level: 'info'});
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
                chartLoaded: 'onChartLoaded'
            }
        }
    },

    /** unmatched route */
    onUnmatchedRoute: function(hash) {
        //<debug>
            Ext.log({msg: 'onUnmatchedRoute: ' + hash.replace('#', ''), level: 'warn'});
        //</debug>
    },

    /** chart loaded */
    onChartLoaded: function(x) {
        //<debug>
            Ext.log({msg: 'onChartLoaded: ' + x, level: 'verbose'});
        //</debug>
    }
});