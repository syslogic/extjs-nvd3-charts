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


    describe('Application', function() {

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

    describe('Controllers', function() {

        beforeEach(function() {
            controller = NVD3Charts.getApplication().getRootController();
        });

        describe('controller.Root', function () {
            it('instanced', function(done) {
                setTimeout(function() {
                    done();
                }, 1000);
                expect(controller).not.toBeNull();
            });

            it('routes defined', function(done) {
                Object.size = function(obj) {
                    var size = 0, key;
                    for (key in obj) {
                        if (obj.hasOwnProperty(key)) {size++;}
                    }
                    return size;
                };
                expect(controller).not.toBeNull();
                expect(controller.getRoutes()).not.toBeNull();
                expect(Object.size(controller.getRoutes().__proto__)).toBeGreaterThan(0);
                done();
            });
        });

        describe('controller.Main', function () {
            beforeEach(function() {
                controller = NVD3Charts.getApplication().getMainController();
                expect(controller).not.toBeNull();
                store=null;
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
            describe('store.HistoricalBarChart', function () {
                it('instanced', function() {
                    store = controller.getHistoricalBarChart();
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
         });
        describe('main.Main', function () {
            it('instanced', function() {
                view = NVD3Charts.app.getMainView();
                expect(view).not.toBeNull();
            });
        });
        describe('main.Northern', function () {
            it('instanced', function() {
                view = NVD3Charts.app.getMainView().items.items[0];
                expect(view).not.toBeNull();
            });
        });
        describe('main.MainTabpanel', function () {
            it('instanced', function() {
                view = Ext.ComponentQuery.query('panel[name=MainTabpanel]')[0];
                expect(view).not.toBeNull();
            });
        });

        describe('panel', function () {
            
            beforeEach(function() {
                Ext.log({msg: 'beforeEach', level: 'verbose'});
                view = null;
             });
            
            afterEach(function(done) {
                Ext.log({msg: 'afterEach', level: 'verbose'});
                done();
              }, 1000);

            var OnTabChange = function(name) {

                var controller = NVD3Charts.app.getRootController();
                var tabpanel = Ext.ComponentQuery.query('panel[name=MainTabpanel]')[0];
                var panel = Ext.ComponentQuery.query('[name=Panel'+name+']')[0];

                controller.redirectTo('#'+name);
                controller.fireEvent('onhashtag');
                expect(panel).not.toBeNull();

                if(panel.items.items.length > 1) {
                    for(i=0; i < panel.items.items.length; i++) {
                        if(typeof(panel.getGraph) === 'function'){
                            var graph = panel.getGraph(i);
                            Ext.log({msg: '> '+graph.id, level: 'info'});
                            expect(graph.svg).not.toBeNull();
                        }
                    }
                } else  {
                     if(typeof(panel.getGraph) === 'function'){
                        var graph = panel.getGraph();
                        Ext.log({msg: '> '+graph.id, level: 'info'});
                        expect(graph.svg).not.toBeNull();
                    }
                }
                return panel;
            };

            describe('panel.LineChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('LineChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.LineWithFocusChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('LineWithFocusChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.CumulativeLineChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('CumulativeLineChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.LinePlusBarChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('LinePlusBarChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.Sparkline', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('Sparkline');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.SparklinePlus', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('SparklinePlus');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.ScatterChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('ScatterChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.StackedAreaChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('StackedAreaChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.DiscreteBarChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('DiscreteBarChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.HistoricalBarChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('HistoricalBarChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.MultiBarChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('MultiBarChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.MultiBarHorizontalChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('MultiBarHorizontalChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.BoxPlotChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('BoxPlotChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.PieChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('PieChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.BulletChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('BulletChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.SunburstChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('SunburstChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.CandlestickBarChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('CandlestickBarChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.ParallelCoordinatesChart', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('ParallelCoordinatesChart');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

            describe('panel.ForceDirectedGraph', function () {
                it('instanced', function(done) {
                    var panel = OnTabChange('ForceDirectedGraph');
                    Ext.log({msg: 'panel '+panel.id, level: 'info'});
                    expect(panel).not.toBeNull();
                    setTimeout(done, 800);
                });
            });

        });
    });
});
