"use strict";
exports.__esModule = true;
Promise.resolve().then(function () { return require('chromedriver'); });
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var selectors = require('./datas/selectors');
var awaity = require('./datas/awaity');
// Вход в админку(не нужен)
var enterAdm = require('./enter_adm');
var enterP = require('./enter');
