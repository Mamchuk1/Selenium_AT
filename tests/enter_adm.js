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
exports.AdmJoin = void 0;
var selenium_webdriver_1 = require("selenium-webdriver");
Promise.resolve().then(function () { return require('chromedriver'); });
var data_1 = require("./datas/data");
//import speakeasy from "@levminer/speakeasy";
var speakeasy = require('speakeasy');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var secret = speakeasy.generateSecret();
var token1 = speakeasy.totp({
    secret: 'IFHHAMJ6HFESGLDPIRAHOUBDNZ6XOQ3SIF4VCYTGIA6DKP3SORAA',
    encoding: 'base32'
});
var selectors = require('./datas/selectors');
var awaity = require('./datas/awaity');
require('./datas/data');
function AdmJoin(driver) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // вход в админку
                return [4 /*yield*/, driver.manage().window().maximize()];
                case 1:
                    // вход в админку
                    _a.sent();
                    return [4 /*yield*/, driver.get(data_1.urlAdmDev)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, driver.sleep(5000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[1]/div/input")).sendKeys('royihi4866@jasmne.com')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[2]/div/input")).sendKeys('qwery123')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[3]/div/input")).sendKeys(token1)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[3]/div/div/button")).click()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.AdmJoin = AdmJoin;
