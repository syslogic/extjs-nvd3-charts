# NVD3.js Bindings as Sencha ExtJS Package

## Similar Projects and/or Alternatives
* [OpenCharts-For-Sencha-Touch-and-ExtJS](https://github.com/woodenconsulting/OpenCharts-For-Sencha-Touch-and-ExtJS)
* [angularjs-nvd3-directives](https://github.com/angularjs-nvd3-directives/angularjs-nvd3-directives)


## Live Example
* click [here](http://nvd3.randomized.eu) to see the example ExtJS Application in action.

## Built With
* [Oracle NetBeans 8.2](http://www.oracle.com/technetwork/developer-tools/netbeans/index.html) (Development Environment)
* [Sencha ExtJS 5.1.1.451](https://docs.sencha.com/extjs/5.1.1/index.html) (JavaScript Framework)
* [Sencha Cmd 6.2.1.29](https://docs.sencha.com/cmd/index.html) (JavaScript Compiler)
* [NVD3 1.8.5](https://github.com/novus/nvd3) (reusable D3 charting library)

## Basic Directory Structure

The relevant locations within the structure are:

    Example Application: / app

    The Package: / packages / local / nvd3-charts

## Getting Started

a) change the local path to the desired location, for example:
    
    cd /home/github

b) clone this repository with:

    git clone git@github.com:syslogic/extjs-nvd3-charts.git

c) place the ExtJS 5.1.x Framework at the following location:

    /ext

d) place the the ExtJS Crisp Theme at the following location:

    /resources/themes/ext-theme-crisp

## The available Package Classes and xTypes

NVD3.chart.BasicChart              xtype: NONE
NVD3.chart.BoxPlotChart            xtype: BoxPlotChart
NVD3.chart.BulletChart             xtype: BulletChart
NVD3.chart.CandlestickBarChart     xtype: CandlestickBarChart
NVD3.chart.CumulativeLineChart     xtype: CumulativeLineChart
NVD3.chart.DiscreteBarChart        xtype: DiscreteBarChart
NVD3.chart.HistoricalBarChart      xtype: HistoricalBarChart
NVD3.chart.LineChart               xtype: LineChart
NVD3.chart.LinePlusBarChart        xtype: LinePlusBarChart
NVD3.chart.LineWithFocusChart      xtype: LineWithFocusChart
NVD3.chart.MultiBarChart           xtype: MultiBarChart
NVD3.chart.MultiBarHorizontalChart xtype: MultiBarHorizontalChart
NVD3.chart.PieChart                xtype: PieChart
NVD3.chart.ScatterChart            xtype: ScatterChart
NVD3.chart.StackedAreaChart        xtype: StackedAreaChart
NVD3.chart.SunburstChart           xtype: SunburstChart

## The available Chart Events

* elementMouseover
* elementMouseout
* tooltipShow
* tooltipHide
* elementClick
* legendMouseover
* stateChange

## Common CLI Commands

To refresh the application bootstrap:

    cd /
    sencha app refresh

To build the PKG archive:

    cd /packages/local/nvd3-charts
    sencha package build

## Including the Package in your Application

This adds the package dependency (and goes to /app.json):

    requires: ['nvd3-charts'],

This adds the name-space NVD3.chart (and goes to /app/Application.js):

    requires: ['NVD3.Charts'],

## MIT License

Copyright (c) 2017 Martin Zeitler, IT Solution Development, Bavaria.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
