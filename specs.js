/**
 * Jasmine 2.9.1 Specs Description
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/106963082057954766426
 * @see https://jasmine.github.io/2.5/introduction
**/

/*
    # Matchers:
    expect( ).toBe();
    expect( ).toBeCloseTo();
    expect( ).toBeDefined();
    expect( ).toBeFalsy();
    expect( ).toBeGreaterThan();
    expect( ).toBeLessThan();
    expect( ).toBeNaN();
    expect( ).toBeNull();
    expect( ).toBeTruthy();
    expect( ).toBeUndefined();
    expect( ).toContain();
    expect( ).toEqual();
    expect( ).toHaveBeenCalled();
    expect( ).toHaveBeenCalledWith();
    expect( ).toMatch();
    expect( ).toThrow();
    expect( ).toThrowError();

    # Console Reporter:
    var ConsoleReporter = jasmineRequire.ConsoleReporter();
    consoleReporter = new ConsoleReporter({
        timer: new jasmine.Timer,
        showColors: false, 
        onComplete: function() {},
        print: function() {
            console.dir.apply(console, arguments);
        }
    });
    jasmine.getEnv().addReporter(consoleReporter);
*/

/* global Ext, NVD3Charts, expect, d3, nv */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('NVD3Charts', function() {

    var app = null, controller = null, model = null, store = null, view = null, tabpanel = null, toolbar = null;

    beforeEach(function(done) {
        expect(Ext).toBeDefined();
        setTimeout(function() {
            // value = 0;
            done();
        }, 600);
    });

    afterEach(function() {

    });

    describe('ExtJS Application', function() {

        /* synchronous call */
        it('configured', function() {

            expect(Ext.Loader).toBeDefined();

            Ext.Loader.setConfig({
                disableCaching: false,
                enabled: true,
                paths: {
                    'NVD3Charts': 'app',
                    'NVD3Charts.overrides.layout.Container': 'overrides/layout/Container.js'
                }
            });

            Ext.require('Ext.panel.Panel');
            Ext.require('Ext.toolbar.Toolbar');
            Ext.require('Ext.form.Label');
            Ext.require('Ext.menu.Menu');
            Ext.require('Ext.tip.ToolTip');
            Ext.require('NVD3Charts.Application');
        });

        /* asynchronous call - wait for onReady event */
        it('launched', function(done) {
            Ext.onReady(function() {
                app = NVD3Charts.getApplication();
                if(typeof(app) !== 'undefined'){
                    expect(app.launched).toBeTruthy();
                    done();
                } else {
                    app = Ext.application({
                        name: 'NVD3Charts',
                        extend: 'NVD3Charts.Application',
                        appProperty: 'jasmine',
                        launch: function() {
                            expect(NVD3Charts.app).toBeDefined();
                            expect(NVD3Charts.app.launched).toBeTruthy();
                            done();
                        }
                    });
                }
            });
        });
    });

    describe('D3.js', function() {
        it('is loaded', function() {
            expect(window.d3).toBeDefined();
        });
    });

    describe('NVD3.js', function() {
        it('is loaded', function() {
            expect(window.nv).toBeDefined();
        });
    });

    describe('Controllers', function() {

        beforeEach(function() {
            controller = null;
        });

        afterEach(function() {});

        describe('controller.Root', function () {
            it('instanced', function(done) {

                setTimeout(function() {
                    done();
                }, 1000);

                controller = NVD3Charts.getApplication().getRootController();
                expect(controller).not.toBeNull();
            });

            it('instanced & has routes defined', function(done) {

                setTimeout(function() {
                    done();
                }, 1000);

                controller = NVD3Charts.getApplication().getRootController();
                expect(controller).not.toBeNull();
                expect(controller.routes).not.toBeNull();
            });
        });

        describe('controller.Main', function () {

            beforeEach(function() {
                controller = NVD3Charts.getApplication().getMainController();
                expect(controller).not.toBeNull();
                store=null;
            });
            afterEach(function(){

            });

            describe('store.BoxPlotChart', function () {
                it('instanced', function() {
                    store = controller.getBoxPlotChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.BulletChart', function () {
                it('instanced', function() {
                    store = controller.getBulletChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.CandlestickBarChart', function () {
                it('instanced', function() {
                    store = controller.getCandlestickBarChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.CumulativeLineChart', function () {
                it('instanced', function() {
                    store = controller.getCumulativeLineChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.DiscreteBarChart', function () {
                it('instanced', function() {
                    store = controller.getDiscreteBarChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.LineChart', function () {
                it('instanced', function() {
                    store = controller.getLineChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.LinePlusBarChart', function () {
                it('instanced', function() {
                    store = controller.getLinePlusBarChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.LineWithFocusChart', function () {
                it('instanced', function() {
                    store = controller.getLineWithFocusChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.MultiBarChart', function () {
                it('instanced', function() {
                    store = controller.getMultiBarChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.MultiBarHorizontalChart', function () {
                it('instanced', function() {
                    store = controller.getMultiBarHorizontalChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.PieChart', function () {
                it('instanced', function() {
                    store = controller.getPieChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.ScatterChart', function () {
                it('instanced', function() {
                    store = controller.getScatterChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.Sparkline', function () {
                it('instanced', function() {
                    store = controller.getSparkline();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.StackedAreaChart', function () {
                it('instanced', function() {
                    store = controller.getStackedAreaChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.SunburstChart', function () {
                it('instanced', function() {
                    store = controller.getSunburstChart();
                    expect(store).not.toBeNull();
                });
            });

            describe('store.ParallelCoordinatesChart', function () {
                it('instanced', function() {
                    store = controller.getParallelCoordinatesChart();
                    expect(store).not.toBeNull();
                });
            });
            describe('store.ForceDirectedGraph', function () {
                it('instanced', function() {
                    store = controller.getForceDirectedGraph();
                    expect(store).not.toBeNull();
                });
            });
        });
    });

    describe('Views', function() {

        beforeEach(function() {
            view = null;
            toolbar = null;
            tabpanel = null;
        });
        afterEach(function() {});

        describe('main.Main', function () {
            it('instanced', function() {
                view = NVD3Charts.app.getMainView();
                expect(view).not.toBeNull();
            });
        });
        describe('main.Northern', function () {
            it('instanced', function() {
                toolbar = NVD3Charts.app.getMainView().items.items[0];
                expect(toolbar).not.toBeNull();
            });
        });

        describe('main.MainTabpanel', function () {

            // execute timeoutPromise and wait for it to resolve ...
            beforeEach(function() {

            });
            afterEach(function() {});

            var timeoutPromise = new Promise(function(resolve, reject){
                setTimeout(resolve, 4000);
            });

            var OnTabChange = function(name, callback) {

                var controller = NVD3Charts.app.getRootController();
                var tabpanel = Ext.ComponentQuery.query('panel[name=MainTabpanel]')[0];
                var panel = Ext.ComponentQuery.query('[name=Panel'+name+']')[0];

                controller.redirectTo('#'+name);
                //controller.fireEvent('onhashtag');
                expect(panel).not.toBeNull();

                if(panel.items.items.length > 1) {
                    for(i=0; i < panel.items.items.length; i++) {
                        if(typeof(panel.getGraph) === 'function'){
                            var graph = panel.getGraph(i);
                            Ext.log({msg: 'graph '+graph.id, level: 'info'});
                            expect(graph.svg).not.toBeNull();
                        }
                    }
                } else  {
                     if(typeof(panel.getGraph) === 'function'){
                        var graph = panel.getGraph();
                        Ext.log({msg: 'graph '+graph.id, level: 'info'});
                        expect(graph.svg).not.toBeNull();
                    }
                }
                callback();
            };

            it('instanced', function() {
                var panel = Ext.ComponentQuery.query('panel[name=MainTabpanel]')[0];
                expect(panel).not.toBeNull();
            });

            describe('panel.LineChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('LineChart', done);
                    });
                });
            });

            describe('panel.LineWithFocusChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('LineWithFocusChart', done);
                    });
                });
            });

            describe('panel.LinePlusBarChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('LinePlusBarChart', done);
                    });
                });
            });

            describe('panel.Sparkline', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('Sparkline', done);
                    });
                });
            });

            describe('panel.SparklinePlus', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('SparklinePlus', done);
                    });
                });
            });

            describe('panel.ScatterChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('ScatterChart', done);
                    });
                });
            });

            describe('panel.StackedAreaChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('StackedAreaChart', done);
                    });
                });
            });

            describe('panel.DiscreteBarChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('DiscreteBarChart', done);
                    });
                });
            });

            describe('panel.MultiBarChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('MultiBarChart', done);
                    });
                });
            });

            describe('panel.MultiBarHorizontalChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('MultiBarHorizontalChart', done);
                    });
                });
            });

            describe('panel.CumulativeLineChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('CumulativeLineChart', done);
                    });
                });
            });

            describe('panel.BoxPlotChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('BoxPlotChart', done);
                    });
                });
            });

            describe('panel.PieChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('PieChart', done);
                    });
                });
            });

            describe('panel.BulletChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('BulletChart', done);
                    });
                });
            });

            describe('panel.SunburstChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('SunburstChart', done);
                    });
                });
            });

            describe('panel.CandlestickBarChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('CandlestickBarChart', done);
                    });
                });
            });

            describe('panel.ParallelCoordinatesChart', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('ParallelCoordinatesChart', done);
                    });
                });
            });

            describe('panel.ForceDirectedGraph', function () {
                it('instanced', function(done) {
                    timeoutPromise.then(function() {
                        OnTabChange('ForceDirectedGraph', done);
                    });
                });
            });

        });
    });
});
