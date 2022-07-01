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
var date = require("./datas/data");
// enter
var enterP = require('./enter');
(function name() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, price_html_btt_usdt, get_html_btt_usdt, price_sql_btt_usdt, get_sql_btt_usdt, price_spezsimbols_btt_usdt, get_spezsimbols_btt_usdt, price_latin_btt_usdt, get_latin_btt_usdt, price_kirill_btt_usdt, get_kirill_btt_usdt, price_big_number_btt_usdt, get_big_number_btt_usdt, price_html_pzm_tdel, get_html_pzm_tdel, price_sql_pzm_tdel, get_sql_pzm_tdel, price_spezsimbols_pzm_tdel, get_spezsimbols_pzm_tdel, price_latin_pzm_tdel, get_latin_pzm_tdel, price_kirill_pzm_tdel, get_kirill_pzm_tdel, price_big_number_pzm_tdel, get_big_number_pzm_tdel, price_html_tdel_usdt, get_html_tdel_usdt, price_sql_tdel_usdt, get_sql_tdel_usdt, price_spezsimbols_tdel_usdt, get_spezsimbols_tdel_usdt, price_latin_tdel_usdt, get_latin_tdel_usdt, price_kirill_tdel_usdt, get_kirill_tdel_usdt, price_big_number_tdel_usdt, get_big_number_tdel_usdt, price_html_pzm_usdt, get_html_pzm_usdt, price_sql_pzm_usdt, get_sql_pzm_usdt, price_spezsimbols_pzm_usdt, get_spezsimbols_pzm_usdt, price_latin_pzm_usdt, get_latin_pzm_usdt, price_kirill_pzm_usdt, get_kirill_pzm_usdt, price_big_number_pzm_usdt, get_big_number_pzm_usdt, price_html_bnb_tdel, get_html_bnb_tdel, price_sql_bnb_tdel, get_sql_bnb_tdel, price_spezsimbols_bnb_tdel, get_spezsimbols_bnb_tdel, price_latin_bnb_tdel, get_latin_bnb_tdel, price_kirill_bnb_tdel, get_kirill_bnb_tdel, price_big_number_bnb_tdel, get_big_number_bnb_tdel, price_html_trx_tdel, get_html_trx_tdel, price_sql_trx_tdel, get_sql_trx_tdel, price_spezsimbols_trx_tdel, get_spezsimbols_trx_tdel, price_latin_trx_tdel, get_latin_trx_tdel, price_kirill_trx_tdel, get_kirill_trx_tdel, price_big_number_trx_tdel, get_big_number_trx_tdel, price_html_ltc_usdt, get_html_ltc_usdt, price_sql_ltc_usdt, get_sql_ltc_usdt, price_spezsimbols_ltc_usdt, get_spezsimbols_ltc_usdt, price_latin_ltc_usdt, get_latin_ltc_usdt, price_kirill_ltc_usdt, get_kirill_ltc_usdt, price_big_number_ltc_usdt, get_big_number_ltc_usdt, price_html_trx_usdt, get_html_trx_usdt, price_sql_trx_usdt, get_sql_trx_usdt, price_spezsimbols_trx_usdt, get_spezsimbols_trx_usdt, price_latin_trx_usdt, get_latin_trx_usdt, price_kirill_trx_usdt, get_kirill_trx_usdt, price_big_number_trx_usdt, get_big_number_trx_usdt, price_html_eth_tdel, get_html_eth_tdel, price_sql_eth_tdel, get_sql_eth_tdel, price_spezsimbols_eth_tdel, get_spezsimbols_eth_tdel, price_latin_eth_tdel, get_latin_eth_tdel, price_kirill_eth_tdel, get_kirill_eth_tdel, price_big_number_eth_tdel, get_big_number_eth_tdel, price_html_eth_usdt, get_html_eth_usdt, price_sql_eth_usdt, get_sql_eth_usdt, price_spezsimbols_eth_usdt, get_spezsimbols_eth_usdt, price_latin_eth_usdt, get_latin_eth_usdt, price_kirill_eth_usdt, get_kirill_eth_usdt, price_big_number_eth_usdt, get_big_number_eth_usdt, price_html_bnb_usdt, get_html_bnb_usdt, price_sql_bnb_usdt, get_sql_bnb_usdt, price_spezsimbols_bnb_usdt, get_spezsimbols_bnb_usdt, price_latin_bnb_usdt, get_latin_bnb_usdt, price_kirill_bnb_usdt, get_kirill_bnb_usdt, price_big_number_bnb_usdt, get_big_number_bnb_usdt, price_html_btc_usdt, get_html_btc_usdt, price_sql_btc_usdt, get_sql_btc_usdt, price_spezsimbols_btc_usdt, get_spezsimbols_btc_usdt, price_latin_btc_usdt, get_latin_btc_usdt, price_kirill_btc_usdt, get_kirill_btc_usdt, price_big_number_btc_usdt, get_big_number_btc_usdt, price_html_eth_btc, get_html_eth_btc, price_sql_eth_btc, get_sql_eth_btc, price_spezsimbols_eth_btc, get_spezsimbols_eth_btc, price_latin_eth_btc, get_latin_eth_btc, price_kirill_eth_btc, get_kirill_eth_btc, price_big_number_eth_btc, get_big_number_eth_btc, price_html_btc_tdel, get_html_btc_tdel, price_sql_btc_tdel, get_sql_btc_tdel, price_spezsimbols_btc_tdel, get_spezsimbols_btc_tdel, price_latin_btc_tdel, get_latin_btc_tdel, price_kirill_btc_tdel, get_kirill_btc_tdel, price_big_number_btc_tdel, get_big_number_btc_tdel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    //btt_usdt
                    return [4 /*yield*/, enterP.enterThree(driver)];
                case 1:
                    //btt_usdt
                    _a.sent();
                    return [4 /*yield*/, awaity.market(driver)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, console.log('enter success')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click()];
                case 4:
                    _a.sent();
                    price_html_btt_usdt = date.html;
                    get_html_btt_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_btt_usdt, get_html_btt_usdt)];
                case 5:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_btt_usdt, get_html_btt_usdt)];
                case 6:
                    _a.sent(); //продажа
                    price_sql_btt_usdt = date.sql;
                    get_sql_btt_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_btt_usdt, get_sql_btt_usdt)];
                case 7:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_btt_usdt, get_sql_btt_usdt)];
                case 8:
                    _a.sent(); //продажа
                    price_spezsimbols_btt_usdt = date.spezsimbols;
                    get_spezsimbols_btt_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_btt_usdt, get_spezsimbols_btt_usdt)];
                case 9:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_btt_usdt, get_spezsimbols_btt_usdt)];
                case 10:
                    _a.sent(); //продажа
                    price_latin_btt_usdt = date.latin;
                    get_latin_btt_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_btt_usdt, get_latin_btt_usdt)];
                case 11:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_btt_usdt, get_latin_btt_usdt)];
                case 12:
                    _a.sent(); //продажа
                    price_kirill_btt_usdt = date.kirill;
                    get_kirill_btt_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_btt_usdt, get_kirill_btt_usdt)];
                case 13:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_btt_usdt, get_kirill_btt_usdt)];
                case 14:
                    _a.sent(); //продажа
                    price_big_number_btt_usdt = date.big_number;
                    get_big_number_btt_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_btt_usdt, get_big_number_btt_usdt)];
                case 15:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_btt_usdt, get_kirill_btt_usdt)];
                case 16:
                    _a.sent(); //продажа
                    //pzm_tdel
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click()];
                case 17:
                    //pzm_tdel
                    _a.sent();
                    price_html_pzm_tdel = date.html;
                    get_html_pzm_tdel = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_pzm_tdel, get_html_pzm_tdel)];
                case 18:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_pzm_tdel, get_html_pzm_tdel)];
                case 19:
                    _a.sent(); //продажа
                    price_sql_pzm_tdel = date.sql;
                    get_sql_pzm_tdel = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_pzm_tdel, get_sql_pzm_tdel)];
                case 20:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_pzm_tdel, get_sql_pzm_tdel)];
                case 21:
                    _a.sent(); //продажа
                    price_spezsimbols_pzm_tdel = date.spezsimbols;
                    get_spezsimbols_pzm_tdel = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_pzm_tdel, get_spezsimbols_pzm_tdel)];
                case 22:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_pzm_tdel, get_spezsimbols_pzm_tdel)];
                case 23:
                    _a.sent(); //продажа
                    price_latin_pzm_tdel = date.latin;
                    get_latin_pzm_tdel = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_pzm_tdel, get_latin_pzm_tdel)];
                case 24:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_pzm_tdel, get_latin_pzm_tdel)];
                case 25:
                    _a.sent(); //продажа
                    price_kirill_pzm_tdel = date.kirill;
                    get_kirill_pzm_tdel = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_pzm_tdel, get_kirill_pzm_tdel)];
                case 26:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_pzm_tdel, get_kirill_pzm_tdel)];
                case 27:
                    _a.sent(); //продажа
                    price_big_number_pzm_tdel = date.big_number;
                    get_big_number_pzm_tdel = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_pzm_tdel, get_big_number_pzm_tdel)];
                case 28:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_pzm_tdel, get_big_number_pzm_tdel)];
                case 29:
                    _a.sent(); //продажа
                    //tdel_usdt
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click()];
                case 30:
                    //tdel_usdt
                    _a.sent();
                    price_html_tdel_usdt = date.html;
                    get_html_tdel_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_tdel_usdt, get_html_tdel_usdt)];
                case 31:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_tdel_usdt, get_html_tdel_usdt)];
                case 32:
                    _a.sent(); //продажа
                    price_sql_tdel_usdt = date.sql;
                    get_sql_tdel_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_tdel_usdt, get_sql_tdel_usdt)];
                case 33:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_tdel_usdt, get_sql_tdel_usdt)];
                case 34:
                    _a.sent(); //продажа
                    price_spezsimbols_tdel_usdt = date.spezsimbols;
                    get_spezsimbols_tdel_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_tdel_usdt, get_spezsimbols_tdel_usdt)];
                case 35:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_tdel_usdt, get_spezsimbols_tdel_usdt)];
                case 36:
                    _a.sent(); //продажа
                    price_latin_tdel_usdt = date.latin;
                    get_latin_tdel_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_tdel_usdt, get_latin_tdel_usdt)];
                case 37:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_tdel_usdt, get_latin_tdel_usdt)];
                case 38:
                    _a.sent(); //продажа
                    price_kirill_tdel_usdt = date.kirill;
                    get_kirill_tdel_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_tdel_usdt, get_kirill_tdel_usdt)];
                case 39:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_tdel_usdt, get_kirill_tdel_usdt)];
                case 40:
                    _a.sent(); //продажа
                    price_big_number_tdel_usdt = date.big_number;
                    get_big_number_tdel_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_tdel_usdt, get_big_number_tdel_usdt)];
                case 41:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_tdel_usdt, get_big_number_tdel_usdt)];
                case 42:
                    _a.sent(); //продажа
                    //pzm_usdt
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click()];
                case 43:
                    //pzm_usdt
                    _a.sent();
                    price_html_pzm_usdt = date.html;
                    get_html_pzm_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_pzm_usdt, get_html_pzm_usdt)];
                case 44:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_pzm_usdt, get_html_pzm_usdt)];
                case 45:
                    _a.sent(); //продажа
                    price_sql_pzm_usdt = date.sql;
                    get_sql_pzm_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_pzm_usdt, get_sql_pzm_usdt)];
                case 46:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_pzm_usdt, get_sql_pzm_usdt)];
                case 47:
                    _a.sent(); //продажа
                    price_spezsimbols_pzm_usdt = date.spezsimbols;
                    get_spezsimbols_pzm_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_pzm_usdt, get_spezsimbols_pzm_usdt)];
                case 48:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_pzm_usdt, get_spezsimbols_pzm_usdt)];
                case 49:
                    _a.sent(); //продажа
                    price_latin_pzm_usdt = date.latin;
                    get_latin_pzm_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_pzm_usdt, get_latin_pzm_usdt)];
                case 50:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_pzm_usdt, get_latin_pzm_usdt)];
                case 51:
                    _a.sent(); //продажа
                    price_kirill_pzm_usdt = date.kirill;
                    get_kirill_pzm_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_pzm_usdt, get_kirill_pzm_usdt)];
                case 52:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_pzm_usdt, get_kirill_pzm_usdt)];
                case 53:
                    _a.sent(); //продажа
                    price_big_number_pzm_usdt = date.big_number;
                    get_big_number_pzm_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_pzm_usdt, get_big_number_pzm_usdt)];
                case 54:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_pzm_usdt, get_big_number_pzm_usdt)];
                case 55:
                    _a.sent(); //продажа
                    //bnb_tdel
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click()];
                case 56:
                    //bnb_tdel
                    _a.sent();
                    price_html_bnb_tdel = date.html;
                    get_html_bnb_tdel = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_bnb_tdel, get_html_bnb_tdel)];
                case 57:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_bnb_tdel, get_html_bnb_tdel)];
                case 58:
                    _a.sent(); //продажа
                    price_sql_bnb_tdel = date.sql;
                    get_sql_bnb_tdel = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_bnb_tdel, get_sql_bnb_tdel)];
                case 59:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_bnb_tdel, get_sql_bnb_tdel)];
                case 60:
                    _a.sent(); //продажа
                    price_spezsimbols_bnb_tdel = date.spezsimbols;
                    get_spezsimbols_bnb_tdel = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_bnb_tdel, get_spezsimbols_bnb_tdel)];
                case 61:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_bnb_tdel, get_spezsimbols_bnb_tdel)];
                case 62:
                    _a.sent(); //продажа
                    price_latin_bnb_tdel = date.latin;
                    get_latin_bnb_tdel = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_bnb_tdel, get_latin_bnb_tdel)];
                case 63:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_bnb_tdel, get_latin_bnb_tdel)];
                case 64:
                    _a.sent(); //продажа
                    price_kirill_bnb_tdel = date.kirill;
                    get_kirill_bnb_tdel = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_bnb_tdel, get_kirill_bnb_tdel)];
                case 65:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_bnb_tdel, get_kirill_bnb_tdel)];
                case 66:
                    _a.sent(); //продажа
                    price_big_number_bnb_tdel = date.big_number;
                    get_big_number_bnb_tdel = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_bnb_tdel, get_big_number_bnb_tdel)];
                case 67:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_bnb_tdel, get_big_number_bnb_tdel)];
                case 68:
                    _a.sent(); //продажа
                    //trx_tdel
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click()];
                case 69:
                    //trx_tdel
                    _a.sent();
                    price_html_trx_tdel = date.html;
                    get_html_trx_tdel = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_trx_tdel, get_html_trx_tdel)];
                case 70:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_trx_tdel, get_html_trx_tdel)];
                case 71:
                    _a.sent(); //продажа
                    price_sql_trx_tdel = date.sql;
                    get_sql_trx_tdel = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_trx_tdel, get_sql_trx_tdel)];
                case 72:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_trx_tdel, get_sql_trx_tdel)];
                case 73:
                    _a.sent(); //продажа
                    price_spezsimbols_trx_tdel = date.spezsimbols;
                    get_spezsimbols_trx_tdel = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_trx_tdel, get_spezsimbols_trx_tdel)];
                case 74:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_trx_tdel, get_spezsimbols_trx_tdel)];
                case 75:
                    _a.sent(); //продажа
                    price_latin_trx_tdel = date.latin;
                    get_latin_trx_tdel = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_trx_tdel, get_latin_trx_tdel)];
                case 76:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_trx_tdel, get_latin_trx_tdel)];
                case 77:
                    _a.sent(); //продажа
                    price_kirill_trx_tdel = date.kirill;
                    get_kirill_trx_tdel = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_trx_tdel, get_kirill_trx_tdel)];
                case 78:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_trx_tdel, get_kirill_trx_tdel)];
                case 79:
                    _a.sent(); //продажа
                    price_big_number_trx_tdel = date.big_number;
                    get_big_number_trx_tdel = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_trx_tdel, get_big_number_trx_tdel)];
                case 80:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_trx_tdel, get_big_number_trx_tdel)];
                case 81:
                    _a.sent(); //продажа
                    //ltc_usdt")).click();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click()];
                case 82:
                    //ltc_usdt")).click();
                    _a.sent();
                    price_html_ltc_usdt = date.html;
                    get_html_ltc_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_ltc_usdt, get_html_ltc_usdt)];
                case 83:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_ltc_usdt, get_html_ltc_usdt)];
                case 84:
                    _a.sent(); //продажа
                    price_sql_ltc_usdt = date.sql;
                    get_sql_ltc_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_ltc_usdt, get_sql_ltc_usdt)];
                case 85:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_ltc_usdt, get_sql_ltc_usdt)];
                case 86:
                    _a.sent(); //продажа
                    price_spezsimbols_ltc_usdt = date.spezsimbols;
                    get_spezsimbols_ltc_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_ltc_usdt, get_spezsimbols_ltc_usdt)];
                case 87:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_ltc_usdt, get_spezsimbols_ltc_usdt)];
                case 88:
                    _a.sent(); //продажа
                    price_latin_ltc_usdt = date.latin;
                    get_latin_ltc_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_ltc_usdt, get_latin_ltc_usdt)];
                case 89:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_ltc_usdt, get_latin_ltc_usdt)];
                case 90:
                    _a.sent(); //продажа
                    price_kirill_ltc_usdt = date.kirill;
                    get_kirill_ltc_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_ltc_usdt, get_kirill_ltc_usdt)];
                case 91:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_ltc_usdt, get_kirill_ltc_usdt)];
                case 92:
                    _a.sent(); //продажа
                    price_big_number_ltc_usdt = date.big_number;
                    get_big_number_ltc_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_ltc_usdt, get_big_number_ltc_usdt)];
                case 93:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_ltc_usdt, get_big_number_ltc_usdt)];
                case 94:
                    _a.sent(); //продажа
                    //trx_usdt
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click()];
                case 95:
                    //trx_usdt
                    _a.sent();
                    price_html_trx_usdt = date.html;
                    get_html_trx_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_trx_usdt, get_html_trx_usdt)];
                case 96:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_trx_usdt, get_html_trx_usdt)];
                case 97:
                    _a.sent(); //продажа
                    price_sql_trx_usdt = date.sql;
                    get_sql_trx_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_trx_usdt, get_sql_trx_usdt)];
                case 98:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_trx_usdt, get_sql_trx_usdt)];
                case 99:
                    _a.sent(); //продажа
                    price_spezsimbols_trx_usdt = date.spezsimbols;
                    get_spezsimbols_trx_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_trx_usdt, get_spezsimbols_trx_usdt)];
                case 100:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_trx_usdt, get_spezsimbols_trx_usdt)];
                case 101:
                    _a.sent(); //продажа
                    price_latin_trx_usdt = date.latin;
                    get_latin_trx_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_trx_usdt, get_latin_trx_usdt)];
                case 102:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_trx_usdt, get_latin_trx_usdt)];
                case 103:
                    _a.sent(); //продажа
                    price_kirill_trx_usdt = date.kirill;
                    get_kirill_trx_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_trx_usdt, get_kirill_trx_usdt)];
                case 104:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_trx_usdt, get_kirill_trx_usdt)];
                case 105:
                    _a.sent(); //продажа
                    price_big_number_trx_usdt = date.big_number;
                    get_big_number_trx_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_trx_usdt, get_big_number_trx_usdt)];
                case 106:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_trx_usdt, get_big_number_trx_usdt)];
                case 107:
                    _a.sent(); //продажа
                    //eth_tdel
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click()];
                case 108:
                    //eth_tdel
                    _a.sent();
                    price_html_eth_tdel = date.html;
                    get_html_eth_tdel = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_eth_tdel, get_html_eth_tdel)];
                case 109:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_eth_tdel, get_html_eth_tdel)];
                case 110:
                    _a.sent(); //продажа
                    price_sql_eth_tdel = date.sql;
                    get_sql_eth_tdel = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_eth_tdel, get_sql_eth_tdel)];
                case 111:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_eth_tdel, get_sql_eth_tdel)];
                case 112:
                    _a.sent(); //продажа
                    price_spezsimbols_eth_tdel = date.spezsimbols;
                    get_spezsimbols_eth_tdel = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_eth_tdel, get_spezsimbols_eth_tdel)];
                case 113:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_eth_tdel, get_spezsimbols_eth_tdel)];
                case 114:
                    _a.sent(); //продажа
                    price_latin_eth_tdel = date.latin;
                    get_latin_eth_tdel = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_eth_tdel, get_latin_eth_tdel)];
                case 115:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_eth_tdel, get_latin_eth_tdel)];
                case 116:
                    _a.sent(); //продажа
                    price_kirill_eth_tdel = date.kirill;
                    get_kirill_eth_tdel = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_eth_tdel, get_kirill_eth_tdel)];
                case 117:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_eth_tdel, get_kirill_eth_tdel)];
                case 118:
                    _a.sent(); //продажа
                    price_big_number_eth_tdel = date.big_number;
                    get_big_number_eth_tdel = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_eth_tdel, get_big_number_eth_tdel)];
                case 119:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_eth_tdel, get_big_number_eth_tdel)];
                case 120:
                    _a.sent(); //продажа
                    //
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click()];
                case 121:
                    //
                    _a.sent();
                    price_html_eth_usdt = date.html;
                    get_html_eth_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_eth_usdt, get_html_eth_usdt)];
                case 122:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_eth_usdt, get_html_eth_usdt)];
                case 123:
                    _a.sent(); //продажа
                    price_sql_eth_usdt = date.sql;
                    get_sql_eth_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_eth_usdt, get_sql_eth_usdt)];
                case 124:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_eth_usdt, get_sql_eth_usdt)];
                case 125:
                    _a.sent(); //продажа
                    price_spezsimbols_eth_usdt = date.spezsimbols;
                    get_spezsimbols_eth_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_eth_usdt, get_spezsimbols_eth_usdt)];
                case 126:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_eth_usdt, get_spezsimbols_eth_usdt)];
                case 127:
                    _a.sent(); //продажа
                    price_latin_eth_usdt = date.latin;
                    get_latin_eth_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_eth_usdt, get_latin_eth_usdt)];
                case 128:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_eth_usdt, get_latin_eth_usdt)];
                case 129:
                    _a.sent(); //продажа
                    price_kirill_eth_usdt = date.kirill;
                    get_kirill_eth_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_eth_usdt, get_kirill_eth_usdt)];
                case 130:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_eth_usdt, get_kirill_eth_usdt)];
                case 131:
                    _a.sent(); //продажа
                    price_big_number_eth_usdt = date.big_number;
                    get_big_number_eth_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_eth_usdt, get_big_number_eth_usdt)];
                case 132:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_eth_usdt, get_big_number_eth_usdt)];
                case 133:
                    _a.sent(); //продажа
                    //bnb_usdt
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click()];
                case 134:
                    //bnb_usdt
                    _a.sent();
                    price_html_bnb_usdt = date.html;
                    get_html_bnb_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_bnb_usdt, get_html_bnb_usdt)];
                case 135:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_bnb_usdt, get_html_bnb_usdt)];
                case 136:
                    _a.sent(); //продажа
                    price_sql_bnb_usdt = date.sql;
                    get_sql_bnb_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_bnb_usdt, get_sql_bnb_usdt)];
                case 137:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_bnb_usdt, get_sql_bnb_usdt)];
                case 138:
                    _a.sent(); //продажа
                    price_spezsimbols_bnb_usdt = date.spezsimbols;
                    get_spezsimbols_bnb_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_bnb_usdt, get_spezsimbols_bnb_usdt)];
                case 139:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_bnb_usdt, get_spezsimbols_bnb_usdt)];
                case 140:
                    _a.sent(); //продажа
                    price_latin_bnb_usdt = date.latin;
                    get_latin_bnb_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_bnb_usdt, get_latin_bnb_usdt)];
                case 141:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_bnb_usdt, get_latin_bnb_usdt)];
                case 142:
                    _a.sent(); //продажа
                    price_kirill_bnb_usdt = date.kirill;
                    get_kirill_bnb_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_bnb_usdt, get_kirill_bnb_usdt)];
                case 143:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_bnb_usdt, get_kirill_bnb_usdt)];
                case 144:
                    _a.sent(); //продажа
                    price_big_number_bnb_usdt = date.big_number;
                    get_big_number_bnb_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_bnb_usdt, get_big_number_bnb_usdt)];
                case 145:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_bnb_usdt, get_big_number_bnb_usdt)];
                case 146:
                    _a.sent(); //продажа
                    //btc_usdt
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click()];
                case 147:
                    //btc_usdt
                    _a.sent();
                    price_html_btc_usdt = date.html;
                    get_html_btc_usdt = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_btc_usdt, get_html_btc_usdt)];
                case 148:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_btc_usdt, get_html_btc_usdt)];
                case 149:
                    _a.sent(); //продажа
                    price_sql_btc_usdt = date.sql;
                    get_sql_btc_usdt = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_btc_usdt, get_sql_btc_usdt)];
                case 150:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_btc_usdt, get_sql_btc_usdt)];
                case 151:
                    _a.sent(); //продажа
                    price_spezsimbols_btc_usdt = date.spezsimbols;
                    get_spezsimbols_btc_usdt = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_btc_usdt, get_spezsimbols_btc_usdt)];
                case 152:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_btc_usdt, get_spezsimbols_btc_usdt)];
                case 153:
                    _a.sent(); //продажа
                    price_latin_btc_usdt = date.latin;
                    get_latin_btc_usdt = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_btc_usdt, get_latin_btc_usdt)];
                case 154:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_btc_usdt, get_latin_btc_usdt)];
                case 155:
                    _a.sent(); //продажа
                    price_kirill_btc_usdt = date.kirill;
                    get_kirill_btc_usdt = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_btc_usdt, get_kirill_btc_usdt)];
                case 156:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_btc_usdt, get_kirill_btc_usdt)];
                case 157:
                    _a.sent(); //продажа
                    price_big_number_btc_usdt = date.big_number;
                    get_big_number_btc_usdt = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_btc_usdt, get_big_number_btc_usdt)];
                case 158:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_btc_usdt, get_big_number_btc_usdt)];
                case 159:
                    _a.sent(); //продажа
                    //eth_btc
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_btc")).click()];
                case 160:
                    //eth_btc
                    _a.sent();
                    price_html_eth_btc = date.html;
                    get_html_eth_btc = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_eth_btc, get_html_eth_btc)];
                case 161:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_eth_btc, get_html_eth_btc)];
                case 162:
                    _a.sent(); //продажа
                    price_sql_eth_btc = date.sql;
                    get_sql_eth_btc = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_eth_btc, get_sql_eth_btc)];
                case 163:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_eth_btc, get_sql_eth_btc)];
                case 164:
                    _a.sent(); //продажа
                    price_spezsimbols_eth_btc = date.spezsimbols;
                    get_spezsimbols_eth_btc = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_eth_btc, get_spezsimbols_eth_btc)];
                case 165:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_eth_btc, get_spezsimbols_eth_btc)];
                case 166:
                    _a.sent(); //продажа
                    price_latin_eth_btc = date.latin;
                    get_latin_eth_btc = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_eth_btc, get_latin_eth_btc)];
                case 167:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_eth_btc, get_latin_eth_btc)];
                case 168:
                    _a.sent(); //продажа
                    price_kirill_eth_btc = date.kirill;
                    get_kirill_eth_btc = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_eth_btc, get_kirill_eth_btc)];
                case 169:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_eth_btc, get_kirill_eth_btc)];
                case 170:
                    _a.sent(); //продажа
                    price_big_number_eth_btc = date.big_number;
                    get_big_number_eth_btc = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_eth_btc, get_big_number_eth_btc)];
                case 171:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_eth_btc, get_big_number_eth_btc)];
                case 172:
                    _a.sent(); //продажа
                    //btc_tdel
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click()];
                case 173:
                    //btc_tdel
                    _a.sent();
                    price_html_btc_tdel = date.html;
                    get_html_btc_tdel = date.html;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_html_btc_tdel, get_html_btc_tdel)];
                case 174:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_html_btc_tdel, get_html_btc_tdel)];
                case 175:
                    _a.sent(); //продажа
                    price_sql_btc_tdel = date.sql;
                    get_sql_btc_tdel = date.sql;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_sql_btc_tdel, get_sql_btc_tdel)];
                case 176:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_sql_btc_tdel, get_sql_btc_tdel)];
                case 177:
                    _a.sent(); //продажа
                    price_spezsimbols_btc_tdel = date.spezsimbols;
                    get_spezsimbols_btc_tdel = date.spezsimbols;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_spezsimbols_btc_tdel, get_spezsimbols_btc_tdel)];
                case 178:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_spezsimbols_btc_tdel, get_spezsimbols_btc_tdel)];
                case 179:
                    _a.sent(); //продажа
                    price_latin_btc_tdel = date.latin;
                    get_latin_btc_tdel = date.latin;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_latin_btc_tdel, get_latin_btc_tdel)];
                case 180:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_latin_btc_tdel, get_latin_btc_tdel)];
                case 181:
                    _a.sent(); //продажа
                    price_kirill_btc_tdel = date.kirill;
                    get_kirill_btc_tdel = date.kirill;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_kirill_btc_tdel, get_kirill_btc_tdel)];
                case 182:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_kirill_btc_tdel, get_kirill_btc_tdel)];
                case 183:
                    _a.sent(); //продажа
                    price_big_number_btc_tdel = date.big_number;
                    get_big_number_btc_tdel = date.big_number;
                    return [4 /*yield*/, selectors.trade_buy(driver, price_big_number_btc_tdel, get_big_number_btc_tdel)];
                case 184:
                    _a.sent(); //торговля
                    return [4 /*yield*/, selectors.trade_sell(driver, price_big_number_btc_tdel, get_big_number_btc_tdel)];
                case 185:
                    _a.sent(); //продажа
                    return [2 /*return*/];
            }
        });
    });
})();
