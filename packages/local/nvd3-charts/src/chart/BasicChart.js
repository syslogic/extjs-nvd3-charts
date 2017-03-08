/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.BasicChart', {
    extend: 'Ext.Component',
    requires: [],
    alias: ['widget.BasicChart'],
    html: '<svg class="nvd3-svg"/>',
    height: '100%',
    width: '100%',
    plain: true,

    config: {
        svg: null,
        chart: null,
        chartType: null,
        chartOptions: [],
        chartData: [],

        /** the default chartFn() */
        chartFn: function(chart) {},

        /** the default animation duration */
        chartAnimDuration: 400,

        /** the default store */
        store: false
    },

    /** a list of (currently) valid chartTypes */
    validChartTypes: [
        'boxPlotChart', 'bulletChart', 'candlestickBarChart', 'cumulativeLineChart', 'discreteBarChart',
        'historicalBarChart', 'lineChart', 'linePlusBarChart', 'lineWithFocusChart', 'multiBarChart', 'multiBarHorizontalChart',
        'pieChart', 'scatterChart', 'stackedAreaChart', 'sunburstChart'
    ],

    /** initChartComponent(), that's the bound method. */
    initChartComponent: function() {

        var me = this, dom = null;

        // check, if a chartType was configured
        if (! me.getChartType()) {
            Ext.log({msg: 'no chartType has been configured.', level: 'warn'});
            return false;
        }

        // check, if the chartType is of type function
        var chartType = me.getChartType();
        if(typeof(nv.models[chartType]) !== 'function' || !Ext.Array.contains(this.validChartTypes, chartType)) {
            Ext.log({msg: 'an invalid chartType has been configured: ' + chartType, level: 'warn'});
            return false;
        }

        // create a simple chart and apply the configured chartOptions
        me.chart = nv.models[chartType]();
        var options = me.getChartOptions();
        if (! options) {
            Ext.log({msg: 'no chartOptions have been configured for chartType '+ chartType + '.', level: 'warn'});
            return false;
        } else {
            me.chart.options(options);
        }

        // call the chartFn()
        var chartFn = me.getChartFn();
        if (Ext.isFunction(chartFn)) {chartFn(me.chart);}

        // bind the chart events
        me.bindChartEvents();

        // get a handle to the DOM node
        if (me.innerElement) {dom = me.innerElement.dom;}
        else if(typeof(me.el) !== 'undefined') {dom = me.el.dom;}
        else {return false;}

        // get a handle to the SVG surface
        this.svg = dom.firstChild;

        if(this.svg !== null || this.chart !== null) {

            // call the D3 library
            d3.select(this.svg).datum(this.getChartData()).transition().duration(this.chartAnimDuration).call(this.chart);

            // update the chart size when the window is resized;
            // improvement: this could happen a tad delayed.
            nv.utils.windowResize(this.chart.update);

            // fire the chartLoaded event.
            me.fireEvent('chartLoaded', this.chart);

            //<debug>
                Ext.log({msg: 'the ' + chartType + ' has been attached as #' + dom.id + '.', level: 'verbose'});
            //</debug>
            return this.chart;

        }
    },

    /** onStoreLoaded() */
    onStoreLoaded: function(store, records, success, operation) {

        // var chart = this.getChart();
        var data = store.proxy.reader.rawData;

        // update the chart
        if (! data || data.length === 0) {
            Ext.log({msg: 'onStoreLoaded() has no data.', level: 'warn'});
            return false;
        } else {

            // apply the data
            this.setChartData(data);

            // another attempt to get a handle to the SVG surface (because .isVisible() was false before, before it had been rendered).
            if(this.svg === null) {this.svg = this.el.dom.firstChild;}

            // redraw the chart
            if(this.svg !== null && this.chart !== null) {
                d3.select(this.svg).datum(data).transition().duration(this.chartAnimDuration).call(this.chart);
            } else {
                if(this.chart === null) {Ext.log({msg: 'this.chart === null', level: 'error'});}
                if(this.svg   === null) {Ext.log({msg: 'this.svg === null', level: 'error'});}                
            }
        }
    },

    /** initComponent() */
    initComponent: function() {

        this.callParent(arguments);

        // when the NVD3 library is loaded:
        if(typeof(nv) !== 'undefined') {

            // create a dummy store, unless configured with a store.
            if (! this.store) {
                this.store = Ext.create('Ext.data.Store', {
                    proxy: {type: 'memory', reader: {type: 'json', rootProperty: '[0]'}},
                    model: Ext.create('Ext.data.Model', {fields:[]}),
                    autoLoad: true
                });
            } else {
                
                // bind to the configured store's load event
                this.store.addListener('load', this.onStoreLoaded, this);

                // create a NVD3 chart and bind it.
                nv.addGraph(Ext.bind(this.initChartComponent, this));
            }

        } else {
            Ext.log({msg: 'the NVD3.js library is not loaded.', level: 'error'});
        }
    },

    /** bindChartEvents() */
    bindChartEvents: function() {

        var me = this;

        if (me.chart.dispatch) {
            if (me.chart.dispatch.tooltipShow) {
                me.chart.dispatch.on('tooltipShow.directive', function (e) {me.fireEvent('tooltipShow', e);});
                me.chart.dispatch.on('tooltipShow.directive', Ext.Function.bind(me.fireEvent('tooltipShow', this)));
            }
            if (me.chart.dispatch.tooltipHide) {me.chart.dispatch.on('tooltipHide.directive', function (e) {me.fireEvent('tooltipHide', e);});}
            if (me.chart.dispatch.beforeUpdate) {me.chart.dispatch.on('beforeUpdate.directive', function (e) {me.fireEvent('beforeUpdate', e);});}
            if (me.chart.dispatch.renderEnd) {me.chart.dispatch.on('renderEnd.directive', function (e) {me.fireEvent('renderEnd', e);});}
            if (me.chart.dispatch.stateChange) {me.chart.dispatch.on('stateChange.directive', function (e) {me.fireEvent('stateChange', e);});}
            if (me.chart.dispatch.changeState) {me.chart.dispatch.on('changeState.directive', function (e) {me.fireEvent('changeState', e);});}
        }

        if (me.chart.lines) {
            me.chart.lines.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.lines.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            me.chart.lines.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
        }

        if (me.chart.bars) {
            me.chart.bars.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.bars.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            me.chart.bars.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
        }

        if (me.chart.stacked && me.chart.stacked.dispatch) {
            me.chart.stacked.dispatch.on('areaClick.toggle.directive', function (e) {me.fireEvent('areaClick', e);});
            // me.chart.stacked.dispatch.on('tooltipShow.directive', function (e) {me.fireEvent('tooltipShow', e);});
            // me.chart.stacked.dispatch.on('tooltipHide.directive', function (e) {me.fireEvent('tooltipHide', e);});
        }

        if (me.chart.interactiveLayer) {
            if (me.chart.interactiveLayer.elementMouseout) {me.chart.interactiveLayer.dispatch.on('elementMouseout.directive', function (e) {me.fireEvent('elementMouseout', e);});}
            if (me.chart.interactiveLayer.elementMousemove) {me.chart.interactiveLayer.dispatch.on('elementMousemove.directive', function (e) {me.fireEvent('elementMousemove', e);});}
        }

        if (me.chart.discretebar) {
            me.chart.discretebar.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.discretebar.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            me.chart.discretebar.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
            me.chart.discretebar.dispatch.on('elementDblClick.directive', function (e) {me.fireEvent('elementDblClick', e);});
        }

        if (me.chart.pie) {
            me.chart.pie.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.pie.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            me.chart.pie.dispatch.on('elementClick.directive', function(e) {me.fireEvent('elementClick', e);});
        }

        if (me.chart.scatter) {
            me.chart.scatter.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.scatter.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
        }

        /** TODO */
        if (me.chart.bullet) {
            me.chart.bullet.dispatch.on('elementMousemove.tooltip.directive', function (e) {me.fireEvent('elementMousemove', e);});
            me.chart.bullet.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            me.chart.bullet.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
        }

        if (me.chart.legend) {
            me.chart.legend.dispatch.on('stateChange.legend.directive', function (e) {me.fireEvent('stateChange', e);});
            me.chart.legend.dispatch.on('legendClick.directive', function (d, i) {me.fireEvent('legendClick', d, i);});
            me.chart.legend.dispatch.on('legendDblclick.directive', function (d, i) {me.fireEvent('legendDblclick', d, i);});
            me.chart.legend.dispatch.on('legendMouseover.directive', function (d, i) {me.fireEvent('legendMouseover', d, i);});
        }

        if (me.chart.controls) {
            if (me.chart.controls.legendClick) {
                me.chart.controls.dispatch.on('legendClick.directive', function (d, i) {me.fireEvent('legendClick', d, i);});
            }
        }

        /** TODO */
        if (me.chart.sunburst) {

        }

        /** TODO */
        if (me.chart.candlestickbar) {

        }
    }
    
});