/**
 * Jasmine 2.5.2 Specs Description
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

/* global Ext, NVD3Charts, expect */

jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe('NVD3Charts', function() {

    var app = null, controller = null, model = null, store = null, view = null;
    
    beforeEach(function() {});
    afterEach(function() {});

    describe('JavaScript Framework', function() {
        it('ExtJS 5.1.0', function() {
            expect(Ext).toBeDefined();
            expect(Ext.getVersion()).toBeTruthy();
            expect(Ext.getVersion().major).toEqual(5);
            expect(Ext.getVersion().minor).toBeGreaterThan(0);
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

        beforeEach(function() {controller = null;});
        afterEach(function() {});

        describe('controller.Root', function () {
            it('instanced', function() {
                controller = NVD3Charts.getApplication().getRootController();
                expect(controller).not.toBeNull();

                /* TODO: test application routes */
                it('has routes', function() {
                    expect(controller.routes).not.toBeNull();
                });
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

            describe('store.ServerInfo', function () {
                it('instanced', function() {
                    store = controller.getServerInfoStore();
                    expect(store).not.toBeNull();
                });
            });

            /*
                describe('onViewportRendered()', function () {
                    it('has been called', function() {
                        spyOn(controller, 'onViewportRendered');
                        controller.onViewportRendered();
                        expect(controller.onViewportRendered).toHaveBeenCalled();
                    });
                });
            */
        });
    });

    describe('Views', function() {

        beforeEach(function() {view = null;});
        afterEach(function() {});

        describe('main.Main', function () {
            it('instanced', function() {
                view = NVD3Charts.app.getMainMainView();
                expect(view).not.toBeNull();
            });
        });
    });	
});