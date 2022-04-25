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
// Вход в админку(не нужен)
var enterAdm = require('./enter_adm');
var enterP = require('./enter');
(function name() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, trx_usdt_balanceB, trx_usdt_balanceS, trx_usdt_balanceBstr, trx_usdt_balanceBnum, trx_usdt_balanceSstr, trx_usdt_balanceSnum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    // Входим в админку
                    return [4 /*yield*/, enterP.enterThree(driver)];
                case 1:
                    // Входим в админку
                    _a.sent();
                    return [4 /*yield*/, console.log('enter success')];
                case 2:
                    _a.sent();
                    // Проверка TRX/USDT, выбор пары
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click()];
                case 3:
                    // Проверка TRX/USDT, выбор пары
                    _a.sent();
                    return [4 /*yield*/, console.log('trx_usdt')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, awaity.market(driver)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, selectors.balanceBuy(driver).getText()];
                case 7:
                    trx_usdt_balanceB = _a.sent();
                    console.log('balance = ', trx_usdt_balanceB);
                    return [4 /*yield*/, selectors.balanceSell(driver).getText()];
                case 8:
                    trx_usdt_balanceS = _a.sent();
                    console.log('balance = ', trx_usdt_balanceS);
                    // Приведение баланса Buy в число(берёт как строку)
                    trx_usdt_balanceB = trx_usdt_balanceB.slice(0, -4);
                    console.log(trx_usdt_balanceB);
                    trx_usdt_balanceBstr = trx_usdt_balanceB.replace(/[\s,]/g, '');
                    console.log(trx_usdt_balanceBstr);
                    trx_usdt_balanceBnum = +trx_usdt_balanceBstr;
                    console.log(typeof trx_usdt_balanceBnum, trx_usdt_balanceBnum);
                    // Приведение баланса Sell в число(берёт как строку)
                    trx_usdt_balanceS = trx_usdt_balanceS.slice(0, -4);
                    console.log(trx_usdt_balanceS);
                    trx_usdt_balanceSstr = trx_usdt_balanceS.replace(/[\s,]/g, '');
                    console.log(trx_usdt_balanceSstr);
                    trx_usdt_balanceSnum = +trx_usdt_balanceSstr;
                    console.log(typeof trx_usdt_balanceSnum, trx_usdt_balanceSnum);
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
