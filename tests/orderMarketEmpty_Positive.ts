import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');


let enterP = require('./enter');
(async function name() {
    const driver = new Builder().forBrowser('chrome').build();

    await enterP.enterThree(driver);  
    await console.log('enter success');

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
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click();
    await driver.sleep(2000);
    await selectors.market(driver).click();
    await driver.sleep(5000);
    await selectors.buy_100(driver).click();
    await driver.sleep(5000);
    await selectors.buy_button(driver).click();
    await driver.sleep(1000);
    function stakan(driver) { return driver.findElement(By.xpath ("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")); }
    await driver.sleep(1000);
    let cup_text = stakan(driver).getText();
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

    await console.log('test over');
})();