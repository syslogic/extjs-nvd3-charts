/**
 * NVD3 for Sencha ExtJS
 * @copyright Copyright 2017 by Martin Zeitler, All rights reserved.
 * @author https://plus.google.com/+MartinZeitler
 * @see https://d3js.org & https://nvd3.org
**/

Ext.define('NVD3Charts.store.ScatterChart', {
    extend: 'Ext.data.Store',
    storeId: 'ScatterChart',
    alias: ['store.ScatterChart'],
    model: 'NVD3Charts.model.None',
    data: [{
        "key": "Group 0",
        "values": [
            {"x":"0.49","y":"0.62","size":"0.23"},
            {"x":"0.28","y":"0.19","size":"0.75"},
            {"x":"0.31","y":"0.85","size":"0.49"},
            {"x":"0.74","y":"0.99","size":"0.29"},
            {"x":"0.39","y":"0.86","size":"0.88"},
            {"x":"0.04","y":"0.06","size":"0.15"},
            {"x":"0.42","y":"0.06","size":"0.64"},
            {"x":"0.50","y":"0.73","size":"0.83"},
            {"x":"0.72","y":"0.11","size":"0.42"},
            {"x":"0.21","y":"0.44","size":"0.12"},
            {"x":"0.59","y":"0.96","size":"0.12"},
            {"x":"0.31","y":"0.05","size":"0.82"},
            {"x":"0.44","y":"0.93","size":"0.93"},
            {"x":"0.30","y":"0.39","size":"0.31"},
            {"x":"0.92","y":"0.43","size":"0.43"},
            {"x":"0.43","y":"0.09","size":"0.59"},
            {"x":"0.60","y":"0.12","size":"0.10"},
            {"x":"0.03","y":"0.08","size":"0.85"},
            {"x":"0.58","y":"0.86","size":"0.45"},
            {"x":"0.22","y":"0.50","size":"0.39"},
            {"x":"0.08","y":"0.12","size":"0.20"},
            {"x":"0.90","y":"0.44","size":"0.52"},
            {"x":"0.86","y":"0.70","size":"0.96"},
            {"x":"0.56","y":"0.58","size":"0.44"},
            {"x":"0.76","y":"0.78","size":"0.36"},
            {"x":"0.94","y":"0.85","size":"0.38"},
            {"x":"0.66","y":"0.77","size":"0.80"},
            {"x":"0.18","y":"0.44","size":"0.75"},
            {"x":"0.80","y":"0.05","size":"0.65"},
            {"x":"0.32","y":"0.41","size":"0.70"},
            {"x":"0.81","y":"0.35","size":"0.36"},
            {"x":"0.09","y":"0.36","size":"0.90"},
            {"x":"0.03","y":"0.08","size":"0.21"},
            {"x":"0.75","y":"0.11","size":"0.23"},
            {"x":"0.61","y":"0.42","size":"0.38"},
            {"x":"0.22","y":"0.25","size":"0.42"},
            {"x":"0.77","y":"0.77","size":"0.85"},
            {"x":"0.17","y":"1.00","size":"0.99"},
            {"x":"0.73","y":"0.78","size":"0.67"},
            {"x":"0.09","y":"0.56","size":"0.71"}
        ]
    }, {
        "key": "Group 1",
        "values": [
            {"x":"0.90","y":"0.29","size":"0.99"},
            {"x":"0.59","y":"0.10","size":"0.15"},
            {"x":"0.67","y":"0.67","size":"0.48"},
            {"x":"0.29","y":"0.32","size":"0.55"},
            {"x":"0.95","y":"0.15","size":"0.78"},
            {"x":"0.81","y":"0.38","size":"0.91"},
            {"x":"0.64","y":"0.18","size":"0.84"},
            {"x":"0.53","y":"0.39","size":"0.78"},
            {"x":"0.66","y":"0.84","size":"0.53"},
            {"x":"0.66","y":"0.75","size":"0.48"},
            {"x":"0.65","y":"0.49","size":"0.90"},
            {"x":"0.52","y":"0.39","size":"0.84"},
            {"x":"0.77","y":"0.90","size":"0.08"},
            {"x":"0.85","y":"0.72","size":"0.88"},
            {"x":"0.17","y":"0.85","size":"0.02"},
            {"x":"0.40","y":"0.25","size":"0.08"},
            {"x":"0.37","y":"0.53","size":"0.52"},
            {"x":"0.29","y":"0.47","size":"0.82"},
            {"x":"0.36","y":"0.40","size":"0.98"},
            {"x":"0.21","y":"0.52","size":"0.83"},
            {"x":"0.97","y":"0.66","size":"0.33"},
            {"x":"0.92","y":"0.37","size":"0.59"},
            {"x":"0.73","y":"0.62","size":"0.29"},
            {"x":"0.16","y":"0.08","size":"0.52"},
            {"x":"0.15","y":"0.48","size":"0.64"},
            {"x":"0.80","y":"0.86","size":"0.48"},
            {"x":"0.48","y":"0.07","size":"0.73"},
            {"x":"0.28","y":"0.58","size":"0.23"},
            {"x":"0.40","y":"0.45","size":"0.69"},
            {"x":"0.99","y":"0.14","size":"0.54"},
            {"x":"0.11","y":"0.33","size":"0.15"},
            {"x":"0.99","y":"0.39","size":"0.32"},
            {"x":"0.51","y":"0.91","size":"0.35"},
            {"x":"0.76","y":"0.08","size":"0.05"},
            {"x":"0.90","y":"0.60","size":"0.93"},
            {"x":"0.30","y":"0.98","size":"0.09"},
            {"x":"0.25","y":"0.32","size":"0.03"},
            {"x":"0.69","y":"0.66","size":"0.07"},
            {"x":"0.14","y":"0.86","size":"0.50"},
            {"x":"0.56","y":"0.34","size":"0.69"}
        ]
    },{
        "key": "Group 2",
        "values": [
            {"x":"0.24","y":"0.59","size":"0.09"},
            {"x":"0.38","y":"0.83","size":"0.24"},
            {"x":"0.88","y":"0.98","size":"0.65"},
            {"x":"0.14","y":"0.84","size":"0.60"},
            {"x":"0.21","y":"0.85","size":"0.08"},
            {"x":"0.50","y":"0.20","size":"0.18"},
            {"x":"0.05","y":"0.18","size":"0.82"},
            {"x":"0.49","y":"0.48","size":"0.05"},
            {"x":"0.94","y":"0.15","size":"0.01"},
            {"x":"0.66","y":"0.47","size":"0.10"},
            {"x":"0.69","y":"0.41","size":"0.13"},
            {"x":"0.56","y":"0.17","size":"0.75"},
            {"x":"0.69","y":"0.49","size":"0.99"},
            {"x":"0.99","y":"0.67","size":"0.90"},
            {"x":"0.87","y":"0.21","size":"1.00"},
            {"x":"0.20","y":"0.44","size":"0.33"},
            {"x":"0.07","y":"0.41","size":"0.45"},
            {"x":"0.18","y":"0.75","size":"0.20"},
            {"x":"0.07","y":"0.25","size":"0.30"},
            {"x":"0.34","y":"0.11","size":"0.66"},
            {"x":"0.75","y":"0.45","size":"0.64"},
            {"x":"0.94","y":"0.77","size":"0.48"},
            {"x":"0.65","y":"0.17","size":"0.52"},
            {"x":"0.66","y":"0.92","size":"0.49"},
            {"x":"0.10","y":"0.68","size":"0.38"},
            {"x":"0.20","y":"0.14","size":"0.45"},
            {"x":"0.70","y":"0.58","size":"0.13"},
            {"x":"0.84","y":"0.46","size":"0.96"},
            {"x":"0.38","y":"0.60","size":"0.62"},
            {"x":"0.84","y":"0.48","size":"0.16"},
            {"x":"0.27","y":"0.15","size":"0.31"},
            {"x":"0.89","y":"0.12","size":"0.69"},
            {"x":"0.63","y":"0.77","size":"0.13"},
            {"x":"0.70","y":"0.87","size":"0.31"},
            {"x":"0.07","y":"0.93","size":"0.16"},
            {"x":"0.40","y":"0.32","size":"0.45"},
            {"x":"0.50","y":"0.97","size":"0.88"},
            {"x":"0.29","y":"0.87","size":"0.05"},
            {"x":"0.55","y":"0.33","size":"0.50"},
            {"x":"0.05","y":"0.56","size":"0.95"}
        ]
    },{
        "key": "Group 3",
        "values": [
            {"x":"0.67","y":"0.30","size":"0.54"},
            {"x":"0.28","y":"0.08","size":"0.96"},
            {"x":"0.79","y":"0.11","size":"0.39"},
            {"x":"0.08","y":"0.94","size":"0.42"},
            {"x":"0.20","y":"0.25","size":"0.37"},
            {"x":"0.58","y":"0.16","size":"0.38"},
            {"x":"0.21","y":"0.80","size":"0.92"},
            {"x":"0.35","y":"0.85","size":"0.57"},
            {"x":"0.35","y":"0.36","size":"0.28"},
            {"x":"0.42","y":"0.53","size":"0.57"},
            {"x":"0.26","y":"0.76","size":"0.70"},
            {"x":"0.05","y":"0.96","size":"0.22"},
            {"x":"0.39","y":"0.13","size":"0.07"},
            {"x":"0.71","y":"0.62","size":"0.64"},
            {"x":"0.33","y":"0.01","size":"0.28"},
            {"x":"0.75","y":"0.32","size":"0.24"},
            {"x":"0.60","y":"0.58","size":"0.62"},
            {"x":"0.67","y":"0.15","size":"0.22"},
            {"x":"0.83","y":"0.89","size":"0.86"},
            {"x":"0.08","y":"0.46","size":"0.53"},
            {"x":"0.65","y":"0.58","size":"0.35"},
            {"x":"0.35","y":"0.85","size":"0.41"},
            {"x":"0.93","y":"0.77","size":"1.00"},
            {"x":"0.95","y":"0.92","size":"0.98"},
            {"x":"0.68","y":"0.33","size":"0.35"},
            {"x":"0.57","y":"0.72","size":"0.53"},
            {"x":"0.54","y":"0.66","size":"0.71"},
            {"x":"0.97","y":"0.52","size":"0.86"},
            {"x":"0.71","y":"0.41","size":"0.10"},
            {"x":"0.43","y":"0.78","size":"0.47"},
            {"x":"0.68","y":"0.43","size":"0.58"},
            {"x":"0.39","y":"0.58","size":"0.52"},
            {"x":"0.80","y":"0.46","size":"0.71"},
            {"x":"0.70","y":"0.95","size":"0.18"},
            {"x":"0.08","y":"0.30","size":"0.84"},
            {"x":"0.53","y":"0.52","size":"0.69"},
            {"x":"0.92","y":"0.11","size":"0.69"},
            {"x":"0.35","y":"0.85","size":"0.29"},
            {"x":"0.94","y":"0.92","size":"0.38"},
            {"x":"0.30","y":"0.53","size":"0.55"}
        ]
    }],
    autoLoad: true,
    pageSize: 100,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            idProperty: 'id',
            rootProperty: '[0]'
        }
    }
});