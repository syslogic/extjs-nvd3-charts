/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

/* global Ext, d3 */

Ext.define('NVD3.chart.BasicChart', {
    extend: 'Ext.Component',
    alias: ['widget.BasicChart'],
    config: {
        chart: null,
        height: '100%',
        width: '100%',
        chartAnimDuration: 600,
        chartType: null,
        chartData: [],
        chartOptions: [],
        chartFn: function(chart){}
    },
    
    /** apply properties */
    applyChartProperties: function(chart, options, chartFn) {
        chart.options(options);
        if (Ext.isFunction(chartFn)) {chartFn(chart);}
    },
    
    /** render the data */
    renderChartData: function(data) {
        
        var dom;
        if (this.innerElement) {dom = this.innerElement.dom;}
        else {dom = this.el.dom;}

        // update the chartData
        if (! data || data.length === 0) {
            Ext.Logger.warn('AbstractChart.renderChartData() called without data.');
            return false;
        } else {
            this.setChartData(data);
        }

        // redraw the chart
        var svg = dom.firstChild, chart = this.getChart();
        if(svg === null) {d3.select(dom).append('svg'); svg = dom.firstChild;}
        if(chart !== null) {
            d3.select(svg).datum(data).transition().duration(this.chartAnimDuration).call(chart);
            this.setChart(chart);
        }
    },
    
    /** bind NVD3 events */
    bindEvents: function(chart) {
        
        var me = this;
        
        if (chart.dispatch) {
            if (chart.dispatch.tooltipShow) {chart.dispatch.on('tooltipShow.directive', function (e) {me.fireEvent('tooltipShow', e);});}
            if (chart.dispatch.tooltipHide) {chart.dispatch.on('tooltipHide.directive', function (e) {me.fireEvent('tooltipHide', e);});}
            if (chart.dispatch.beforeUpdate) {chart.dispatch.on('beforeUpdate.directive', function (e) {me.fireEvent('beforeUpdate', e);});}
            if (chart.dispatch.renderEnd) {chart.dispatch.on('renderEnd.directive', function (e) {me.fireEvent('renderEnd', e);});}
            if (chart.dispatch.stateChange) {chart.dispatch.on('stateChange.directive', function (e) {me.fireEvent('stateChange', e);});}
            if (chart.dispatch.changeState) {chart.dispatch.on('changeState.directive', function (e) {me.fireEvent('changeState', e);});}
	}
        
        if (chart.lines) {
            chart.lines.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.lines.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            chart.lines.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
	}
        
        if (chart.bars) {
            chart.bars.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.bars.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            chart.bars.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
	}

	if (chart.stacked && chart.stacked.dispatch) {
            chart.stacked.dispatch.on('areaClick.toggle.directive', function (e) {me.fireEvent('areaClick', e);});
	    // chart.stacked.dispatch.on('tooltipShow.directive', function (e) {me.fireEvent('tooltipShow', e);});
	    // chart.stacked.dispatch.on('tooltipHide.directive', function (e) {me.fireEvent('tooltipHide', e);});
	}

	if (chart.interactiveLayer) {
            if (chart.interactiveLayer.elementMouseout) {chart.interactiveLayer.dispatch.on('elementMouseout.directive', function (e) {me.fireEvent('elementMouseout', e);});}
            if (chart.interactiveLayer.elementMousemove) {chart.interactiveLayer.dispatch.on('elementMousemove.directive', function (e) {me.fireEvent('elementMousemove', e);});}
	}

	if (chart.discretebar) {
            chart.discretebar.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.discretebar.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            chart.discretebar.dispatch.on('elementClick.directive', function (e) {me.fireEvent('elementClick', e);});
            chart.discretebar.dispatch.on('elementDblClick.directive', function (e) {me.fireEvent('elementDblClick', e);});
	}

	if (chart.pie) {
            chart.pie.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.pie.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
            chart.pie.dispatch.on('elementClick.directive', function(e) {me.fireEvent('elementClick', e);});
	}

	if (chart.scatter) {
            chart.scatter.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.scatter.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
	}

        /** TODO */
	if (chart.bullet) {
            chart.bullet.dispatch.on('elementMousemove.tooltip.directive', function (e) {me.fireEvent('elementMousemove', e);});
            chart.bullet.dispatch.on('elementMouseover.tooltip.directive', function (e) {me.fireEvent('elementMouseover', e);});
            chart.bullet.dispatch.on('elementMouseout.tooltip.directive', function (e) {me.fireEvent('elementMouseout', e);});
        }

	if (chart.legend) {
            chart.legend.dispatch.on('stateChange.legend.directive', function (e) {me.fireEvent('stateChange', e);});
            chart.legend.dispatch.on('legendClick.directive', function (d, i) {me.fireEvent('legendClick', d, i);});
            chart.legend.dispatch.on('legendDblclick.directive', function (d, i) {me.fireEvent('legendDblclick', d, i);});
            chart.legend.dispatch.on('legendMouseover.directive', function (d, i) {me.fireEvent('legendMouseover', d, i);});
	}

	if (chart.controls) {
            if (chart.controls.legendClick) {
                chart.controls.dispatch.on('legendClick.directive', function (d, i) {me.fireEvent('legendClick', d, i);});
            }
	}
        
        /** TODO */
        if (chart.indentedTree) {
            
        }
    },
    
    addChart: function() {
        
        var me = this;
        
        // no chartType was defined, cannot do anything without that
        if (! me.getChartType()) {
            Ext.Logger.error('A chartType must be defined.');
            return false;
        }

        // create a basic chart
        var chart = nv.models[me.getChartType()](), options = me.getChartOptions(), dom;
        if (! options) {
            Ext.Logger.error('chartOptions is not defined for the '+ me.getChartType() +' chartType.');
            return false;
        }
        this.applyChartProperties(chart, options, me.getChartFn());

        // bind the chart events and keep a reference
        this.bindEvents(chart);
        this.setChart(chart);

        // initially append the SVG to the inner element of the container
        if (this.innerElement) {dom = this.innerElement.dom;}
        else {dom = this.el.dom;}
        d3.select(dom).append('svg')
            .datum(this.getChartData())
            .transition().duration(this.chartAnimDuration)
            .call(chart);

        // update the chart size when the window is resized
        nv.utils.windowResize(function() {
            chart.update();
        });

        // fire a chartLoaded event for controllers to use.
        me.fireEvent('chartLoaded', chart);
        return chart;
    },
    
    /** initComponent() */
    initComponent: function() {
        if(typeof(nv) !== 'undefined') {nv.addGraph(Ext.bind(this.addChart, this));}
        else {Ext.Logger.error('NVD3 is not loaded.');}
    }
});