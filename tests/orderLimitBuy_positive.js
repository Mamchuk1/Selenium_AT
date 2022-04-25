"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var selenium_webdriver_1 = require("selenium-webdriver");
Promise.resolve().then(function () { return require('chromedriver'); });
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var selectors = require('./datas/selectors');
var awaity = require('./datas/awaity');
// enter
var enterP = require('./enter');
(function name() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, balancB, balancS, balancBStr, balancBstr, balancSStr, balancSstr, price, get, balancBAfterB_1, balancBAfterBStr_1, balancSAfterB_1, balancSAfterBStr_1, balancBAfterBstr, balancSAfterBstr, t, arrayData, i, min, max, price_1, get_1, totalB, balancBAfterB, balancBAfterBStr, balancSAfterB, balancSAfterBStr, price_decimal, get_decimal, balancBAfterB_decimal, balancBAfterBStr_decimal, balancSAfterB_decimal, balancSAfterBStr_decimal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, enterP.enterThree(driver)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, awaity.market(driver)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, console.log('enter success')];
                case 3:
                    _a.sent();
                    //выбор пары
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click()];
                case 4:
                    //выбор пары
                    _a.sent();
                    return [4 /*yield*/, awaity.market(driver)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 6:
                    balancB = _a.sent();
                    return [4 /*yield*/, selectors.balancSell(driver).getText()];
                case 7:
                    balancS = _a.sent();
                    //перевод строк в числа
                    //перевод balancB
                    balancB = balancB.slice(0, -4);
                    balancBStr = balancB.replace(/[\s.]/g, '');
                    balancBStr = balancBStr.replace(/\,/g, '.');
                    balancBstr = +balancBStr;
                    //перевод balancS
                    balancS = balancS.slice(0, -4);
                    balancSStr = balancS.replace(/[\s.]/g, '');
                    balancSStr = balancSStr.replace(/\,/g, '.');
                    balancSstr = +balancSStr;
                    price = 1;
                    get = 1;
                    return [4 /*yield*/, selectors.trade_buy(driver, price, get)];
                case 8:
                    _a.sent(); //торговля
                    return [4 /*yield*/, driver.sleep(5000)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 10:
                    balancBAfterB_1 = _a.sent();
                    balancBAfterB_1 = balancBAfterB_1.slice(0, -4);
                    balancBAfterBStr_1 = balancBAfterB_1.replace(/[\s.]/g, '');
                    balancBAfterBStr_1 = balancBAfterBStr_1.replace(/\,/g, '.');
                    balancBAfterB_1 = +balancBAfterB_1;
                    return [4 /*yield*/, selectors.balancSell(driver).getText()];
                case 11:
                    balancSAfterB_1 = _a.sent();
                    balancSAfterB_1 = balancSAfterB_1.slice(0, -4);
                    balancSAfterBStr_1 = balancSAfterB_1.replace(/[\s.]/g, '');
                    balancSAfterBStr_1 = balancSAfterBStr_1.replace(/\,/g, '.');
                    balancSAfterB_1 = +balancSAfterB_1;
                    t = 2;
                    arrayData = [];
                    i = 0;
                    _a.label = 12;
                case 12:
                    if (!(i < t)) return [3 /*break*/, 22];
                    min = 0.1;
                    max = 0.2;
                    price_1 = min - 0.05 + Math.random() * (max - min + 1);
                    get_1 = min - 0.05 + Math.random() * (max - min + 1);
                    totalB = get_1 * price_1;
                    return [4 /*yield*/, console.log(totalB, 'totalB')];
                case 13:
                    _a.sent();
                    if (!(balancBstr > totalB)) return [3 /*break*/, 19];
                    return [4 /*yield*/, console.log('trade_buy posible')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, selectors.trade_buy(driver, price_1, get_1)];
                case 15:
                    _a.sent(); //торговля
                    return [4 /*yield*/, driver.sleep(5000)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 17:
                    balancBAfterB = _a.sent();
                    balancBAfterB = balancBAfterB.slice(0, -4);
                    balancBAfterBStr = balancBAfterB.replace(/[\s.]/g, '');
                    balancBAfterBStr = balancBAfterBStr.replace(/\,/g, '.');
                    balancBAfterBstr = +balancBAfterBStr;
                    return [4 /*yield*/, selectors.balancSell(driver).getText()];
                case 18:
                    balancSAfterB = _a.sent();
                    balancSAfterB = balancSAfterB.slice(0, -4);
                    balancSAfterBStr = balancSAfterB.replace(/[\s.]/g, '');
                    balancSAfterBStr = balancSAfterBStr.replace(/\,/g, '.');
                    balancSAfterBstr = +balancSAfterBStr;
                    return [3 /*break*/, 21];
                case 19:
                    if (!(balancBStr < totalB)) return [3 /*break*/, 21];
                    return [4 /*yield*/, console.log('totalB > balancB; trade_buy imposible')];
                case 20:
                    _a.sent();
                    _a.label = 21;
                case 21:
                    i++;
                    return [3 /*break*/, 12];
                case 22:
                    price_decimal = 0.00000001;
                    get_decimal = 0.00000001;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_decimal, get_decimal)];
                case 23:
                    _a.sent(); //торговля
                    return [4 /*yield*/, driver.sleep(5000)];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, selectors.balancBuy(driver).getText()];
                case 25:
                    balancBAfterB_decimal = _a.sent();
                    balancBAfterB_decimal = balancBAfterB_decimal.slice(0, -4);
                    balancBAfterBStr_decimal = balancBAfterB_decimal.replace(/[\s.]/g, '');
                    balancBAfterBStr_decimal = balancBAfterBStr_decimal.replace(/\,/g, '.');
                    balancBAfterB_decimal = +balancBAfterB_decimal;
                    return [4 /*yield*/, selectors.balancSell(driver).getText()];
                case 26:
                    balancSAfterB_decimal = _a.sent();
                    balancSAfterB_decimal = balancSAfterB_decimal.slice(0, -4);
                    balancSAfterBStr_decimal = balancSAfterB_decimal.replace(/[\s.]/g, '');
                    balancSAfterBStr_decimal = balancSAfterBStr_decimal.replace(/\,/g, '.');
                    balancSAfterB_decimal = +balancSAfterB_decimal;
                    // логи
                    console.log();
                    return [2 /*return*/];
            }
        });
    });
})();
