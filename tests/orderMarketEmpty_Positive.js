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
        var driver, pzm_tdel_modal_buy, pzm_tdel_cup_buy, pzm_tdel_modal_sell, pzm_tdel_cup_sell, btt_usdt_modal_buy, btt_usdt_cup_buy, btt_usdt_modal_sell, btt_usdt_cup_sell, tdel_usdt_modal_buy, tdel_usdt_cup_buy, tdel_usdt_modal_sell, tdel_usdt_cup_sell, pzm_usdt_modal_buy, pzm_usdt_cup_buy, pzm_usdt_modal_sell, pzm_usdt_cup_sell, bnb_tdel_modal_buy, bnb_tdel_cup_buy, bnb_tdel_modal_sell, bnb_tdel_cup_sell, bnb_usdt_modal_buy, bnb_usdt_cup_buy, bnb_usdt_modal_sell, bnb_usdt_cup_sell, trx_usdt_modal_buy, trx_usdt_cup_buy, trx_usdt_modal_sell, trx_usdt_cup_sell, trx_tdel_modal_buy, trx_tdel_cup_buy, trx_tdel_modal_sell, trx_tdel_cup_sell, ltc_usdt_modal_buy, ltc_usdt_cup_buy, ltc_usdt_modal_sell, ltc_usdt_cup_sell, eth_tdel_modal_buy, eth_tdel_cup_buy, eth_tdel_modal_sell, eth_tdel_cup_sell, eth_usdt_modal_buy, eth_usdt_cup_buy, eth_usdt_modal_sell, eth_usdt_cup_sell, btc_usdt_modal_buy, btc_usdt_cup_buy, btc_usdt_modal_sell, btc_usdt_cup_sell, eth_btc_modal_buy, eth_btc_cup_buy, eth_btc_modal_sell, eth_btc_cup_sell, btc_tdel_modal_buy, btc_tdel_cup_buy, btc_tdel_modal_sell, btc_tdel_cup_sell;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
                    return [4 /*yield*/, enterP.enterThree(driver)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, console.log('enter success')];
                case 2:
                    _a.sent();
                    // Проверка PZM/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click()];
                case 3:
                    // Проверка PZM/TDEL
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 4:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 5:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 7:
                    pzm_tdel_modal_buy = _a.sent();
                    if (pzm_tdel_modal_buy = true) {
                        console.log('buy pzm_tdel modal success');
                    }
                    else {
                        console.log('buy pzm_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 8:
                    pzm_tdel_cup_buy = _a.sent();
                    if (pzm_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy pzm_tdel cup success');
                    }
                    else {
                        console.log('buy pzm_tdel cup fail');
                    }
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 9:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 12:
                    pzm_tdel_modal_sell = _a.sent();
                    if (pzm_tdel_modal_sell = true) {
                        console.log('sell pzm_tdel modal success');
                    }
                    else {
                        console.log('sell pzm_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 13:
                    pzm_tdel_cup_sell = _a.sent();
                    if (pzm_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell pzm_tdel cup success');
                    }
                    else {
                        console.log('sell pzm_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 14:
                    _a.sent();
                    // Проверка BTT/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click()];
                case 15:
                    // Проверка BTT/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 16:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 17:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 19:
                    btt_usdt_modal_buy = _a.sent();
                    if (btt_usdt_modal_buy = true) {
                        console.log('buy btt_usdt modal success');
                    }
                    else {
                        console.log('buy btt_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 20:
                    btt_usdt_cup_buy = _a.sent();
                    if (btt_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy btt_usdt cup success');
                    }
                    else {
                        console.log('buy btt_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 21:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 22:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 25:
                    btt_usdt_modal_sell = _a.sent();
                    if (btt_usdt_modal_sell = true) {
                        console.log('sell btt_usdt modal success');
                    }
                    else {
                        console.log('sell btt_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 26:
                    btt_usdt_cup_sell = _a.sent();
                    if (btt_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell btt_usdt cup success');
                    }
                    else {
                        console.log('sell btt_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 27:
                    _a.sent();
                    // Проверка TDEL/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click()];
                case 28:
                    // Проверка TDEL/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 29:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 30:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 32:
                    tdel_usdt_modal_buy = _a.sent();
                    if (tdel_usdt_modal_buy = true) {
                        console.log('buy tdel_usdt modal success');
                    }
                    else {
                        console.log('buy tdel_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 33:
                    tdel_usdt_cup_buy = _a.sent();
                    if (tdel_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy tdel_usdt cup success');
                    }
                    else {
                        console.log('buy tdel_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 34:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 35:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 38:
                    tdel_usdt_modal_sell = _a.sent();
                    if (tdel_usdt_modal_sell = true) {
                        console.log('sell tdel_usdt modal success');
                    }
                    else {
                        console.log('sell tdel_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 39:
                    tdel_usdt_cup_sell = _a.sent();
                    if (tdel_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell tdel_usdt cup success');
                    }
                    else {
                        console.log('sell tdel_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 40:
                    _a.sent();
                    // Проверка PZM/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click()];
                case 41:
                    // Проверка PZM/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 42:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 43:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 45:
                    pzm_usdt_modal_buy = _a.sent();
                    if (pzm_usdt_modal_buy = true) {
                        console.log('buy pzm_usdt modal success');
                    }
                    else {
                        console.log('buy pzm_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 46:
                    pzm_usdt_cup_buy = _a.sent();
                    if (pzm_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy pzm_usdt cup success');
                    }
                    else {
                        console.log('buy pzm_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 47:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 48:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 49:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 51:
                    pzm_usdt_modal_sell = _a.sent();
                    if (pzm_usdt_modal_sell = true) {
                        console.log('sell pzm_usdt modal success');
                    }
                    else {
                        console.log('sell pzm_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 52:
                    pzm_usdt_cup_sell = _a.sent();
                    if (pzm_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell pzm_usdt cup success');
                    }
                    else {
                        console.log('sell pzm_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 53:
                    _a.sent();
                    // Проверка BNB/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click()];
                case 54:
                    // Проверка BNB/TDEL
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 55:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 56:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 57:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 58:
                    bnb_tdel_modal_buy = _a.sent();
                    if (bnb_tdel_modal_buy = true) {
                        console.log('buy bnb_tdel modal success');
                    }
                    else {
                        console.log('buy bnb_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 59:
                    bnb_tdel_cup_buy = _a.sent();
                    if (bnb_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy bnb_tdel cup success');
                    }
                    else {
                        console.log('buy bnb_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 60:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 61:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 62:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 63:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 64:
                    bnb_tdel_modal_sell = _a.sent();
                    if (bnb_tdel_modal_sell = true) {
                        console.log('sell bnb_tdel modal success');
                    }
                    else {
                        console.log('sell bnb_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 65:
                    bnb_tdel_cup_sell = _a.sent();
                    if (bnb_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell bnb_tdel cup success');
                    }
                    else {
                        console.log('sell bnb_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 66:
                    _a.sent();
                    // Проверка BNB/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click()];
                case 67:
                    // Проверка BNB/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 68:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 69:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 70:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 71:
                    bnb_usdt_modal_buy = _a.sent();
                    if (bnb_usdt_modal_buy = true) {
                        console.log('buy bnb_usdt modal success');
                    }
                    else {
                        console.log('buy bnb_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 72:
                    bnb_usdt_cup_buy = _a.sent();
                    if (bnb_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy bnb_usdt cup success');
                    }
                    else {
                        console.log('buy bnb_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 73:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 74:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 75:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 76:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 77:
                    bnb_usdt_modal_sell = _a.sent();
                    if (bnb_usdt_modal_sell = true) {
                        console.log('sell bnb_usdt modal success');
                    }
                    else {
                        console.log('sell bnb_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 78:
                    bnb_usdt_cup_sell = _a.sent();
                    if (bnb_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell bnb_usdt cup success');
                    }
                    else {
                        console.log('sell bnb_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 79:
                    _a.sent();
                    // Проверка TRX/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click()];
                case 80:
                    // Проверка TRX/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 81:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 82:
                    // Покупка
                    _a.sent();
                    driver.sleep(1000);
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 83:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 84:
                    trx_usdt_modal_buy = _a.sent();
                    if (trx_usdt_modal_buy = true) {
                        console.log('buy trx_usdt modal success');
                    }
                    else {
                        console.log('buy trx_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 85:
                    trx_usdt_cup_buy = _a.sent();
                    if (trx_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy trx_usdt cup success');
                    }
                    else {
                        console.log('buy trx_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 86:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 87:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 88:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 89:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 90:
                    trx_usdt_modal_sell = _a.sent();
                    if (trx_usdt_modal_sell = true) {
                        console.log('sell trx_usdt modal success');
                    }
                    else {
                        console.log('sell trx_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 91:
                    trx_usdt_cup_sell = _a.sent();
                    if (trx_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell trx_usdt cup success');
                    }
                    else {
                        console.log('sell trx_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 92:
                    _a.sent();
                    // Проверка TRX/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click()];
                case 93:
                    // Проверка TRX/TDEL
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 94:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 95:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 96:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 97:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 98:
                    trx_tdel_modal_buy = _a.sent();
                    if (trx_tdel_modal_buy = true) {
                        console.log('buy trx_tdel modal success');
                    }
                    else {
                        console.log('buy trx_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 99:
                    trx_tdel_cup_buy = _a.sent();
                    if (trx_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy trx_tdel cup success');
                    }
                    else {
                        console.log('buy trx_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 100:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 101:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 102:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 103:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 104:
                    trx_tdel_modal_sell = _a.sent();
                    if (trx_tdel_modal_sell = true) {
                        console.log('sell trx_tdel modal success');
                    }
                    else {
                        console.log('sell trx_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 105:
                    trx_tdel_cup_sell = _a.sent();
                    if (trx_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell trx_tdel cup success');
                    }
                    else {
                        console.log('sell trx_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 106:
                    _a.sent();
                    // Проверка LTC/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click()];
                case 107:
                    // Проверка LTC/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 108:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 109:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 110:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 111:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 112:
                    ltc_usdt_modal_buy = _a.sent();
                    if (ltc_usdt_modal_buy = true) {
                        console.log('buy ltc_usdt modal success');
                    }
                    else {
                        console.log('buy ltc_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 113:
                    ltc_usdt_cup_buy = _a.sent();
                    if (ltc_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy ltc_usdt cup success');
                    }
                    else {
                        console.log('buy ltc_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 114:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 115:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 116:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 117:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 118:
                    ltc_usdt_modal_sell = _a.sent();
                    if (ltc_usdt_modal_sell = true) {
                        console.log('sell ltc_usdt modal success');
                    }
                    else {
                        console.log('sell ltc_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 119:
                    ltc_usdt_cup_sell = _a.sent();
                    if (ltc_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell ltc_usdt cup success');
                    }
                    else {
                        console.log('sell ltc_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 120:
                    _a.sent();
                    // Проверка ETH/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click()];
                case 121:
                    // Проверка ETH/TDEL
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 122:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 123:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 124:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 125:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 126:
                    eth_tdel_modal_buy = _a.sent();
                    if (eth_tdel_modal_buy = true) {
                        console.log('buy eth_tdel modal success');
                    }
                    else {
                        console.log('buy eth_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 127:
                    eth_tdel_cup_buy = _a.sent();
                    if (eth_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy eth_tdel cup success');
                    }
                    else {
                        console.log('buy eth_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 128:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 129:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 130:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 131:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 132:
                    eth_tdel_modal_sell = _a.sent();
                    if (eth_tdel_modal_sell = true) {
                        console.log('sell eth_tdel modal success');
                    }
                    else {
                        console.log('sell eth_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 133:
                    eth_tdel_cup_sell = _a.sent();
                    if (eth_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell eth_tdel cup success');
                    }
                    else {
                        console.log('sell eth_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 134:
                    _a.sent();
                    // Проверка ETH/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click()];
                case 135:
                    // Проверка ETH/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 136:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 137:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 138:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 139:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 140:
                    eth_usdt_modal_buy = _a.sent();
                    if (eth_usdt_modal_buy = true) {
                        console.log('buy eth_usdt modal success');
                    }
                    else {
                        console.log('buy eth_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 141:
                    eth_usdt_cup_buy = _a.sent();
                    if (eth_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy eth_usdt cup success');
                    }
                    else {
                        console.log('buy eth_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 142:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 143:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 144:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 145:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 146:
                    eth_usdt_modal_sell = _a.sent();
                    if (eth_usdt_modal_sell = true) {
                        console.log('sell eth_usdt modal success');
                    }
                    else {
                        console.log('sell eth_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 147:
                    eth_usdt_cup_sell = _a.sent();
                    if (eth_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell eth_usdt cup success');
                    }
                    else {
                        console.log('sell eth_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 148:
                    _a.sent();
                    // Проверка BTC/USDT
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click()];
                case 149:
                    // Проверка BTC/USDT
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 150:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 151:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 152:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 153:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 154:
                    btc_usdt_modal_buy = _a.sent();
                    if (btc_usdt_modal_buy = true) {
                        console.log('buy btc_usdt modal success');
                    }
                    else {
                        console.log('buy btc_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 155:
                    btc_usdt_cup_buy = _a.sent();
                    if (btc_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy btc_usdt cup success');
                    }
                    else {
                        console.log('buy btc_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 156:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 157:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 158:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 159:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 160:
                    btc_usdt_modal_sell = _a.sent();
                    if (btc_usdt_modal_sell = true) {
                        console.log('sell btc_usdt modal success');
                    }
                    else {
                        console.log('sell btc_usdt modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 161:
                    btc_usdt_cup_sell = _a.sent();
                    if (btc_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell btc_usdt cup success');
                    }
                    else {
                        console.log('sell btc_usdt cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 162:
                    _a.sent();
                    // Проверка ETH/BTC
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-eth_btc")).click()];
                case 163:
                    // Проверка ETH/BTC
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 164:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 165:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 166:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 167:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 168:
                    eth_btc_modal_buy = _a.sent();
                    if (eth_btc_modal_buy = true) {
                        console.log('buy eth_btc modal success');
                    }
                    else {
                        console.log('buy eth_btc modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 169:
                    eth_btc_cup_buy = _a.sent();
                    if (eth_btc_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy eth_btc cup success');
                    }
                    else {
                        console.log('buy eth_btc cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 170:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 171:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 172:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 173:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 174:
                    eth_btc_modal_sell = _a.sent();
                    if (eth_btc_modal_sell = true) {
                        console.log('sell eth_btc modal success');
                    }
                    else {
                        console.log('sell eth_btc modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 175:
                    eth_btc_cup_sell = _a.sent();
                    if (eth_btc_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell eth_btc cup success');
                    }
                    else {
                        console.log('sell eth_btc cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 176:
                    _a.sent();
                    // Проверка BTC/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click()];
                case 177:
                    // Проверка BTC/TDEL
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 178:
                    _a.sent();
                    // Покупка
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 179:
                    // Покупка
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 180:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 181:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 182:
                    btc_tdel_modal_buy = _a.sent();
                    if (btc_tdel_modal_buy = true) {
                        console.log('buy btc_tdel modal success');
                    }
                    else {
                        console.log('buy btc_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 183:
                    btc_tdel_cup_buy = _a.sent();
                    if (btc_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.") {
                        console.log('buy btc_tdel cup success');
                    }
                    else {
                        console.log('buy btc_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 184:
                    _a.sent();
                    // Продажа
                    return [4 /*yield*/, selectors.sell_100(driver).click()];
                case 185:
                    // Продажа
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 186:
                    _a.sent();
                    return [4 /*yield*/, selectors.sell_button(driver).click()];
                case 187:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("b-toast")).isDisplayed()];
                case 188:
                    btc_tdel_modal_sell = _a.sent();
                    if (btc_tdel_modal_sell = true) {
                        console.log('sell btc_tdel modal success');
                    }
                    else {
                        console.log('sell btc_tdel modal fail');
                    }
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText()];
                case 189:
                    btc_tdel_cup_sell = _a.sent();
                    if (btc_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.") {
                        console.log('sell btc_tdel cup success');
                    }
                    else {
                        console.log('sell btc_tdel cup fail');
                    }
                    return [4 /*yield*/, driver.sleep(2000)];
                case 190:
                    _a.sent();
                    // Конец теста
                    return [4 /*yield*/, console.log('test over')];
                case 191:
                    // Конец теста
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
