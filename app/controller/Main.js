/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.controller.Main', {
    extend: 'Ext.app.Controller',
    views: ['main.Main'],
    
    refs: [
        {ref: 'cardContainer',             selector: 'panel[name=MainContainer]'},
        {ref: 'barChart',                  selector: 'PanelBarChart'},
        {ref: 'lineChart',                 selector: 'PanelLineChart'},
        {ref: 'scatterChart',              selector: 'PanelScatterChart'},
        {ref: 'stackedAreaChart',          selector: 'PanelStackedAreaChart'},
        {ref: 'stackedBarChart',           selector: 'PanelStackedBarChart'},
        {ref: 'horizontalStackedBarChart', selector: 'PanelHorizontalStackedBarChart'},
        {ref: 'linePlusBarChart',          selector: 'PanelLinePlusBarChart'},
        {ref: 'cumulativeLineChart',       selector: 'PanelCumulativeLineChart'},
        {ref: 'lineWithFocusChart',        selector: 'PanelLineWithFocusChart'},
        {ref: 'pieChart',                  selector: 'PanelPieChart'},
        {ref: 'bulletChart',               selector: 'PanelBulletChart'},
        {ref: 'sunburstChart',             selector: 'PanelSunburstChart'}
    ],
    
    updateActiveItem: function(viewIndex) {
        var cardContainer = this.getCardContainer();
        cardContainer.layout.setActiveItem(viewIndex);
        var chartPanel = null;
        switch(viewIndex) {
             case 0: chartPanel = this.getBarChart(); break;
             case 1: chartPanel = this.getLineChart(); break;
             case 2: chartPanel = this.getScatterChart(); break;
             case 3: chartPanel = this.getStackedAreaChart(); break;
             case 4: chartPanel = this.getStackedBarChart(); break;
             case 5: chartPanel = this.getHorizontalStackedBarChart(); break;
             case 6: chartPanel = this.getLinePlusBarChart(); break;
             case 7: chartPanel = this.getCumulativeLineChart(); break;
             case 8: chartPanel = this.getLineWithFocusChart(); break;
             case 9: chartPanel = this.getPieChart(); break;
            case 10: chartPanel = this.getBulletChart(); break;
            case 11: chartPanel = this.getSunburstChart(); break;
        }
        
        if(typeof(chartPanel) !== 'undefined' && typeof(chartPanel.store) !== 'undefined') {
            document.location.hash = chartPanel.name.replace("Panel", "#");
        } else if(typeof(chartPanel) !== 'undefined' && typeof(chartPanel.store) === 'undefined') {
            Ext.log({msg: 'Panel '+ chartPanel.name.replace("Panel", "#") + '  has no store.', level: 'warn'});
        } else {
            Ext.log({msg: 'viewIndex ' + viewIndex + ' -> neither chartPanel nor store available.', level: 'warn'});
        }
    }
});