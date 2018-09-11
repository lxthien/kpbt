'use strict';

var $ = require('jquery');

var news = require('./pages/news');
var global = require('./global/global');

var app = {
    init: function () {
        news.init();
        global.init();
    }
};

// initialize app
$(document).ready(function () {
    app.init();
});