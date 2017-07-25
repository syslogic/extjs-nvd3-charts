/**
 * NVD3.js Bindings for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define("NVD3Charts.Application", { /* Ext.application({ */
    extend: 'Ext.app.Application',
    requires: ['NVD3Charts.overrides.layout.container.Container', 'NVD3.chart.Chart'],
    autoCreateViewport: 'NVD3Charts.view.main.Main',
    defaultToken: '#DiscreteBarChart',
    controllers: ['Root', 'Main'],
    name: 'NVD3Charts',
    launch: function() {
        //<debug>
            Ext.log({msg: 'the Application was launched.', level: 'verbose'});
        //</debug>
    	this.viewport = this.getMainView();

        /* define an array, in order to manage overlay windows. */
        if(typeof(this.windows) !== 'object') {this.windows=[];}
    }
});
