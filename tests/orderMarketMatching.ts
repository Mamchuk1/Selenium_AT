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

(async function matching() {
    const driver = new Builder().forBrowser('chrome').build();
    const driverTwo = new Builder().forBrowser('chrome').build();

    await enterP.enterThree(driver);
    console.log('enter success');
    // Взятие балансов
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click();
    let pzm_tdel_balanceB = await selectors.balanceBuy(driver).getText();
    console.log('balance buy = ', pzm_tdel_balanceB);
    let pzm_tdel_balanceS = await selectors.balanceSell(driver).getText();
    console.log('balance sell = ', pzm_tdel_balanceS);

    // Приведение баланса Buy в число
    pzm_tdel_balanceB = pzm_tdel_balanceB.slice(0, -4);
    console.log(pzm_tdel_balanceB);
    let pzm_tdel_balanceBstr = pzm_tdel_balanceB.replace(/[\s,]/g, '');
    console.log(pzm_tdel_balanceBstr);
    let pzm_tdel_balanceBnum:number = +pzm_tdel_balanceBstr;

})
