/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

/* global NVD3Charts */

Ext.define('NVD3Charts.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [],
    alias: ['controller.main'],
    views: [
        'main.Main',
        'main.Northern',
        'main.TabPanel',
        'main.Bitcoins',
        'panel.DiscreteBarChart',
        'panel.LineChart',
        'panel.ScatterChart',
        'panel.StackedAreaChart',
        'panel.StackedBarChart',
        'panel.HorizontalStackedBarChart',
        'panel.CandlestickBarChart',
        'panel.LinePlusBarChart',
        'panel.CumulativeLineChart',
        'panel.LineWithFocusChart',
        'panel.Sparkline',
        'panel.SparklinePlus',
        'panel.PieChart',
        'panel.BulletChart',
        'panel.SunburstChart',
        'panel.ForceDirectedGraph',
        'panel.ParallelCoordinates'
    ],

    /* Event Listeners */
    listeners: {
        chartLoaded: 'chartLoaded'
    },
    chartLoaded: function(){
        //<debug>
            Ext.log({msg: 'chartLoaded.', level: 'info'});
        //</debug>
    },

    /* show/hide Windows */
    showWindow: function(event, toolEl, toolbar){

        var items = NVD3Charts.getApplication().windows;

        /* Stage One: close all other windows */
        if(Object.keys(items).length > 0){
            for(var key in items) {
                if(items[key].name !== toolEl.name){
                    if(! items[key].hidden) {items[key].close();}
                }
            }
        }

        /* Stage Two: open/close the window on demand */
        if(typeof(items[toolEl.name]) === 'undefined') {
            items[toolEl.name] = Ext.create('NVD3Charts.view.main.'+toolEl.name.replace('Tool', ''), {animateTarget: toolEl});
            items[toolEl.name].show();
        } else if(! items[toolEl.name].hidden) {
            items[toolEl.name].close();
        } else {
            items[toolEl.name].show();
        }
    }
});