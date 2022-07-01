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
var enterP = require('./enter');
(function name() {
    return __awaiter(this, void 0, void 0, function () {
        function stakan(driver) { return driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")); }
        var driver, cup_text;
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
                    // let warning_popup = driver.findElement(By.className("toast-body"));
                    // console.log('Proverka ', warning_popup, ' and Length= ', warning_popup.length);
                    // Проверка PZM/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click();
                    // await selectors.market(driver).click();
                    // await selectors.buy_100(driver).click();
                    // await selectors.buy_button(driver).click();
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL success');
                    // } else {
                    //     console.log('PZM/TDEL fail');
                    // }
                    // await driver.findElement(By.className("toast-body"));
                    // await driver.sleep(2000);
                    // await selectors.sell_100(driver).click();
                    // await selectors.sell_button(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTT/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка TDEL/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка PZM/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BNB/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BNB/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка TRX/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // Проверка TRX/TDEL
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click()];
                case 3:
                    // let warning_popup = driver.findElement(By.className("toast-body"));
                    // console.log('Proverka ', warning_popup, ' and Length= ', warning_popup.length);
                    // Проверка PZM/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click();
                    // await selectors.market(driver).click();
                    // await selectors.buy_100(driver).click();
                    // await selectors.buy_button(driver).click();
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL success');
                    // } else {
                    //     console.log('PZM/TDEL fail');
                    // }
                    // await driver.findElement(By.className("toast-body"));
                    // await driver.sleep(2000);
                    // await selectors.sell_100(driver).click();
                    // await selectors.sell_button(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTT/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка TDEL/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка PZM/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BNB/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BNB/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка TRX/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // Проверка TRX/TDEL
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(2000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, selectors.market(driver).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_100(driver).click()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, selectors.buy_button(driver).click()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(1000)];
                case 11:
                    _a.sent();
                    cup_text = stakan(driver).getText();
                    console.log(cup_text);
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL buy success');
                    // } else {
                    //     console.log('PZM/TDEL buy fail');
                    // }
                    //await selectors.sell_100(driver).click();
                    //await selectors.sell_button(driver).click();
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL sell success');
                    // } else {
                    //     console.log('PZM/TDEL sell fail');
                    // }
                    // // Проверка LTC/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTC/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/BTC
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_btc")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTC/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    return [4 /*yield*/, console.log('test over')];
                case 12:
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL buy success');
                    // } else {
                    //     console.log('PZM/TDEL buy fail');
                    // }
                    //await selectors.sell_100(driver).click();
                    //await selectors.sell_button(driver).click();
                    // if (warning_popup.length > 0)
                    // {
                    //     console.log('PZM/TDEL sell success');
                    // } else {
                    //     console.log('PZM/TDEL sell fail');
                    // }
                    // // Проверка LTC/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTC/USDT
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка ETH/BTC
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_btc")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    // // Проверка BTC/TDEL
                    // await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click();
                    // await selectors.market(driver).click();
                    // await driver.sleep(2000);
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
