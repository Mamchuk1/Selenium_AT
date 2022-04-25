import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');

// Вход в админку(не нужен)
let enterAdm = require('./enter_adm');
let enterP = require('./enter');

(async function name() {
    const driver = new Builder().forBrowser('chrome').build();

    // Входим в админку
    await enterP.enterThree(driver);
    await console.log('enter success');

    // Проверка TRX/USDT, выбор пары
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click();
    await console.log('trx_usdt');
    await awaity.market(driver);
    await driver.sleep(5000);
    // Взятие балансов Buy, Sell
    let trx_usdt_balanceB = await selectors.balanceBuy(driver).getText();
    console.log('balance = ', trx_usdt_balanceB);
    let trx_usdt_balanceS = await selectors.balanceSell(driver).getText();
    console.log('balance = ',trx_usdt_balanceS);

    // Приведение баланса Buy в число(берёт как строку)
    trx_usdt_balanceB = trx_usdt_balanceB.slice(0, -4);
    console.log(trx_usdt_balanceB);
    let trx_usdt_balanceBstr = trx_usdt_balanceB.replace(/[\s,]/g, '');
    console.log(trx_usdt_balanceBstr);
    // trx_usdt_balanceBstr = trx_usdt_balanceBstr.replace(/\,/g, '.');
    // console.log(trx_usdt_balanceBstr);
    let trx_usdt_balanceBnum:number = +trx_usdt_balanceBstr;
    console.log(typeof trx_usdt_balanceBnum, trx_usdt_balanceBnum);

    // Приведение баланса Sell в число(берёт как строку)
    trx_usdt_balanceS = trx_usdt_balanceS.slice(0, -4);
    console.log(trx_usdt_balanceS);
    let trx_usdt_balanceSstr = trx_usdt_balanceS.replace(/[\s,]/g, '');
    console.log(trx_usdt_balanceSstr);
    // trx_usdt_balanceSstr = trx_usdt_balanceSstr.replace(/\,/g, '.');
    // console.log(trx_usdt_balanceSstr);
    let trx_usdt_balanceSnum:number = +trx_usdt_balanceSstr;
    console.log(typeof trx_usdt_balanceSnum, trx_usdt_balanceSnum);

    await selectors.market(driver).click();
    
})();