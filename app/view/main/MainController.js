/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
 * @license MIT License
**/

Ext.define('NVD3Charts.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: ['controller.main'],
    requires: ['Ext.form.Label'],
    views: [
        'main.Main',
        'tab.Main',
        'window.Bitcoins',
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
        'panel.PieChart',
        'panel.BulletChart',
        'panel.SunburstChart'
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
        
        /* stage one: close all other windows */
        if(Object.keys(items).length > 0){
            for(var key in items) {
                if(items[key].name !== toolEl.name){
                    if(! items[key].hidden) {items[key].close();}
                }
            }
        }
        
        /* stage two: open/close the window on demand */
        if(typeof(items[toolEl.name]) === 'undefined') {
            items[toolEl.name] = Ext.create('NVD3Charts.view.window.'+toolEl.name.replace('Tool', ''), {animateTarget: toolEl});
            items[toolEl.name].show();
        } else if(! items[toolEl.name].hidden) {
            items[toolEl.name].close();
        } else {
            items[toolEl.name].show();
        }
    },
    
    initComponent: function() {
        this.callParent(arguments);
    }
});