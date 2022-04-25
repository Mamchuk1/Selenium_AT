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

    await enterP.enterThree(driver);  
    await console.log('enter success');
    
    // Проверка PZM/TDEL
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let pzm_tdel_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (pzm_tdel_modal_buy = true)
    {
        console.log('buy pzm_tdel modal success');
    } else {
        console.log('buy pzm_tdel modal fail');
    }
    let pzm_tdel_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (pzm_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy pzm_tdel cup success');
    } else {
        console.log('buy pzm_tdel cup fail');
    }

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let pzm_tdel_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (pzm_tdel_modal_sell = true)
    {
        console.log('sell pzm_tdel modal success');
    } else {
        console.log('sell pzm_tdel modal fail');
    }
    let pzm_tdel_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (pzm_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell pzm_tdel cup success');
    } else {
        console.log('sell pzm_tdel cup fail');
    }
    await driver.sleep(2000);

    // Проверка BTT/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let btt_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btt_usdt_modal_buy = true)
    {
        console.log('buy btt_usdt modal success');
    } else {
        console.log('buy btt_usdt modal fail');
    }
    let btt_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btt_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy btt_usdt cup success');
    } else {
        console.log('buy btt_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let btt_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btt_usdt_modal_sell = true)
    {
        console.log('sell btt_usdt modal success');
    } else {
        console.log('sell btt_usdt modal fail');
    }
    let btt_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btt_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell btt_usdt cup success');
    } else {
        console.log('sell btt_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка TDEL/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let tdel_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (tdel_usdt_modal_buy = true)
    {
        console.log('buy tdel_usdt modal success');
    } else {
        console.log('buy tdel_usdt modal fail');
    }
    let tdel_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (tdel_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy tdel_usdt cup success');
    } else {
        console.log('buy tdel_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let tdel_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (tdel_usdt_modal_sell = true)
    {
        console.log('sell tdel_usdt modal success');
    } else {
        console.log('sell tdel_usdt modal fail');
    }
    let tdel_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (tdel_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell tdel_usdt cup success');
    } else {
        console.log('sell tdel_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка PZM/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let pzm_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (pzm_usdt_modal_buy = true)
    {
        console.log('buy pzm_usdt modal success');
    } else {
        console.log('buy pzm_usdt modal fail');
    }
    let pzm_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (pzm_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy pzm_usdt cup success');
    } else {
        console.log('buy pzm_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let pzm_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (pzm_usdt_modal_sell = true)
    {
        console.log('sell pzm_usdt modal success');
    } else {
        console.log('sell pzm_usdt modal fail');
    }
    let pzm_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (pzm_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell pzm_usdt cup success');
    } else {
        console.log('sell pzm_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка BNB/TDEL
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let bnb_tdel_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (bnb_tdel_modal_buy = true)
    {
        console.log('buy bnb_tdel modal success');
    } else {
        console.log('buy bnb_tdel modal fail');
    }
    let bnb_tdel_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (bnb_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy bnb_tdel cup success');
    } else {
        console.log('buy bnb_tdel cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let bnb_tdel_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (bnb_tdel_modal_sell = true)
    {
        console.log('sell bnb_tdel modal success');
    } else {
        console.log('sell bnb_tdel modal fail');
    }
    let bnb_tdel_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (bnb_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell bnb_tdel cup success');
    } else {
        console.log('sell bnb_tdel cup fail');
    }
    await driver.sleep(2000);

    // Проверка BNB/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let bnb_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (bnb_usdt_modal_buy = true)
    {
        console.log('buy bnb_usdt modal success');
    } else {
        console.log('buy bnb_usdt modal fail');
    }
    let bnb_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (bnb_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy bnb_usdt cup success');
    } else {
        console.log('buy bnb_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let bnb_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (bnb_usdt_modal_sell = true)
    {
        console.log('sell bnb_usdt modal success');
    } else {
        console.log('sell bnb_usdt modal fail');
    }
    let bnb_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (bnb_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell bnb_usdt cup success');
    } else {
        console.log('sell bnb_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка TRX/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let trx_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (trx_usdt_modal_buy = true)
    {
        console.log('buy trx_usdt modal success');
    } else {
        console.log('buy trx_usdt modal fail');
    }
    let trx_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (trx_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy trx_usdt cup success');
    } else {
        console.log('buy trx_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let trx_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (trx_usdt_modal_sell = true)
    {
        console.log('sell trx_usdt modal success');
    } else {
        console.log('sell trx_usdt modal fail');
    }
    let trx_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (trx_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell trx_usdt cup success');
    } else {
        console.log('sell trx_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка TRX/TDEL
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let trx_tdel_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (trx_tdel_modal_buy = true)
    {
        console.log('buy trx_tdel modal success');
    } else {
        console.log('buy trx_tdel modal fail');
    }
    let trx_tdel_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (trx_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy trx_tdel cup success');
    } else {
        console.log('buy trx_tdel cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let trx_tdel_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (trx_tdel_modal_sell = true)
    {
        console.log('sell trx_tdel modal success');
    } else {
        console.log('sell trx_tdel modal fail');
    }
    let trx_tdel_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (trx_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell trx_tdel cup success');
    } else {
        console.log('sell trx_tdel cup fail');
    }
    await driver.sleep(2000);

    // Проверка LTC/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let ltc_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (ltc_usdt_modal_buy = true)
    {
        console.log('buy ltc_usdt modal success');
    } else {
        console.log('buy ltc_usdt modal fail');
    }
    let ltc_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (ltc_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy ltc_usdt cup success');
    } else {
        console.log('buy ltc_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let ltc_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (ltc_usdt_modal_sell = true)
    {
        console.log('sell ltc_usdt modal success');
    } else {
        console.log('sell ltc_usdt modal fail');
    }
    let ltc_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (ltc_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell ltc_usdt cup success');
    } else {
        console.log('sell ltc_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка ETH/TDEL
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let eth_tdel_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_tdel_modal_buy = true)
    {
        console.log('buy eth_tdel modal success');
    } else {
        console.log('buy eth_tdel modal fail');
    }
    let eth_tdel_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy eth_tdel cup success');
    } else {
        console.log('buy eth_tdel cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let eth_tdel_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_tdel_modal_sell = true)
    {
        console.log('sell eth_tdel modal success');
    } else {
        console.log('sell eth_tdel modal fail');
    }
    let eth_tdel_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell eth_tdel cup success');
    } else {
        console.log('sell eth_tdel cup fail');
    }
    await driver.sleep(2000);

    // Проверка ETH/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let eth_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_usdt_modal_buy = true)
    {
        console.log('buy eth_usdt modal success');
    } else {
        console.log('buy eth_usdt modal fail');
    }
    let eth_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy eth_usdt cup success');
    } else {
        console.log('buy eth_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let eth_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_usdt_modal_sell = true)
    {
        console.log('sell eth_usdt modal success');
    } else {
        console.log('sell eth_usdt modal fail');
    }
    let eth_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell eth_usdt cup success');
    } else {
        console.log('sell eth_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка BTC/USDT
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let btc_usdt_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btc_usdt_modal_buy = true)
    {
        console.log('buy btc_usdt modal success');
    } else {
        console.log('buy btc_usdt modal fail');
    }
    let btc_usdt_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btc_usdt_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy btc_usdt cup success');
    } else {
        console.log('buy btc_usdt cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let btc_usdt_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btc_usdt_modal_sell = true)
    {
        console.log('sell btc_usdt modal success');
    } else {
        console.log('sell btc_usdt modal fail');
    }
    let btc_usdt_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btc_usdt_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell btc_usdt cup success');
    } else {
        console.log('sell btc_usdt cup fail');
    }
    await driver.sleep(2000);

    // Проверка ETH/BTC
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_btc")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let eth_btc_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_btc_modal_buy = true)
    {
        console.log('buy eth_btc modal success');
    } else {
        console.log('buy eth_btc modal fail');
    }
    let eth_btc_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_btc_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy eth_btc cup success');
    } else {
        console.log('buy eth_btc cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let eth_btc_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (eth_btc_modal_sell = true)
    {
        console.log('sell eth_btc modal success');
    } else {
        console.log('sell eth_btc modal fail');
    }
    let eth_btc_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (eth_btc_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell eth_btc cup success');
    } else {
        console.log('sell eth_btc cup fail');
    }
    await driver.sleep(2000);

    // Проверка BTC/TDEL
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click();
    await selectors.market(driver).click();

    // Покупка
    await selectors.buy_100(driver).click();
    await driver.sleep(1000);
    await selectors.buy_button(driver).click();
    let btc_tdel_modal_buy: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btc_tdel_modal_buy = true)
    {
        console.log('buy btc_tdel modal success');
    } else {
        console.log('buy btc_tdel modal fail');
    }
    let btc_tdel_cup_buy: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[6]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btc_tdel_cup_buy = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('buy btc_tdel cup success');
    } else {
        console.log('buy btc_tdel cup fail');
    }
    await driver.sleep(2000);

    // Продажа
    await selectors.sell_100(driver).click();
    await driver.sleep(1000);
    await selectors.sell_button(driver).click();
    let btc_tdel_modal_sell: boolean = await driver.findElement(By.className("b-toast")).isDisplayed();
    if (btc_tdel_modal_sell = true)
    {
        console.log('sell btc_tdel modal success');
    } else {
        console.log('sell btc_tdel modal fail');
    }
    let btc_tdel_cup_sell: string = await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div/div/div[4]/div/div[3]/div/table/tbody/tr/td/div/div")).getText();
    if (btc_tdel_cup_sell = "Здесь пока пусто. Создайте ордер.")
    {
        console.log('sell btc_tdel cup success');
    } else {
        console.log('sell btc_tdel cup fail');
    }
    await driver.sleep(2000);

    // Конец теста
    await console.log('test over');
})();