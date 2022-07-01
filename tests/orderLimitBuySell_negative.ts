import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');
import * as date from './datas/data';

// enter
let enterP = require('./enter');
interface Iprimer {
    price: number;
    get: number;
    balancBstr: number;
    balancBAfterBstr: number;
}

(async function name() {
    const driver = new Builder().forBrowser('chrome').build();

//btt_usdt
    await enterP.enterThree(driver);   
    await awaity.market(driver);
    await console.log('enter success');

    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btt_usdt")).click();
    let price_html_btt_usdt = date.html;
    let get_html_btt_usdt = date.html;
    await selectors.trade_buy(driver, price_html_btt_usdt, get_html_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_html_btt_usdt, get_html_btt_usdt); //продажа

    let price_sql_btt_usdt = date.sql;
    let get_sql_btt_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_btt_usdt, get_sql_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_btt_usdt, get_sql_btt_usdt); //продажа

    let price_spezsimbols_btt_usdt = date.spezsimbols;
    let get_spezsimbols_btt_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_btt_usdt, get_spezsimbols_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_btt_usdt, get_spezsimbols_btt_usdt); //продажа

    let price_latin_btt_usdt = date.latin;
    let get_latin_btt_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_btt_usdt, get_latin_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_btt_usdt, get_latin_btt_usdt); //продажа

    let price_kirill_btt_usdt = date.kirill;
    let get_kirill_btt_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_btt_usdt, get_kirill_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_btt_usdt, get_kirill_btt_usdt); //продажа

    let price_big_number_btt_usdt = date.big_number;
    let get_big_number_btt_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_btt_usdt, get_big_number_btt_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_btt_usdt, get_kirill_btt_usdt); //продажа

//pzm_tdel
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_tdel")).click();
    let price_html_pzm_tdel = date.html;
    let get_html_pzm_tdel = date.html;
    await selectors.trade_buy(driver, price_html_pzm_tdel, get_html_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_html_pzm_tdel, get_html_pzm_tdel); //продажа

    let price_sql_pzm_tdel = date.sql;
    let get_sql_pzm_tdel = date.sql;
    await selectors.trade_buy(driver, price_sql_pzm_tdel, get_sql_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_sql_pzm_tdel, get_sql_pzm_tdel); //продажа

    let price_spezsimbols_pzm_tdel = date.spezsimbols;
    let get_spezsimbols_pzm_tdel = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_pzm_tdel, get_spezsimbols_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_pzm_tdel, get_spezsimbols_pzm_tdel); //продажа

    let price_latin_pzm_tdel = date.latin;
    let get_latin_pzm_tdel = date.latin;
    await selectors.trade_buy(driver, price_latin_pzm_tdel, get_latin_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_latin_pzm_tdel, get_latin_pzm_tdel); //продажа

    let price_kirill_pzm_tdel = date.kirill;
    let get_kirill_pzm_tdel = date.kirill;
    await selectors.trade_buy(driver, price_kirill_pzm_tdel, get_kirill_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_kirill_pzm_tdel, get_kirill_pzm_tdel); //продажа

    let price_big_number_pzm_tdel = date.big_number;
    let get_big_number_pzm_tdel = date.big_number;
    await selectors.trade_buy(driver, price_big_number_pzm_tdel, get_big_number_pzm_tdel); //торговля
    await selectors.trade_sell(driver, price_big_number_pzm_tdel, get_big_number_pzm_tdel); //продажа

//tdel_usdt
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-tdel_usdt")).click();
    let price_html_tdel_usdt = date.html;
    let get_html_tdel_usdt = date.html;
    await selectors.trade_buy(driver, price_html_tdel_usdt, get_html_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_html_tdel_usdt, get_html_tdel_usdt); //продажа

    let price_sql_tdel_usdt = date.sql;
    let get_sql_tdel_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_tdel_usdt, get_sql_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_tdel_usdt, get_sql_tdel_usdt); //продажа

    let price_spezsimbols_tdel_usdt = date.spezsimbols;
    let get_spezsimbols_tdel_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_tdel_usdt, get_spezsimbols_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_tdel_usdt, get_spezsimbols_tdel_usdt); //продажа

    let price_latin_tdel_usdt = date.latin;
    let get_latin_tdel_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_tdel_usdt, get_latin_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_tdel_usdt, get_latin_tdel_usdt); //продажа

    let price_kirill_tdel_usdt = date.kirill;
    let get_kirill_tdel_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_tdel_usdt, get_kirill_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_tdel_usdt, get_kirill_tdel_usdt); //продажа

    let price_big_number_tdel_usdt = date.big_number;
    let get_big_number_tdel_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_tdel_usdt, get_big_number_tdel_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_tdel_usdt, get_big_number_tdel_usdt); //продажа

//pzm_usdt
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-pzm_usdt")).click();
    let price_html_pzm_usdt = date.html;
    let get_html_pzm_usdt = date.html;
    await selectors.trade_buy(driver, price_html_pzm_usdt, get_html_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_html_pzm_usdt, get_html_pzm_usdt); //продажа

    let price_sql_pzm_usdt = date.sql;
    let get_sql_pzm_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_pzm_usdt, get_sql_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_pzm_usdt, get_sql_pzm_usdt); //продажа

    let price_spezsimbols_pzm_usdt = date.spezsimbols;
    let get_spezsimbols_pzm_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_pzm_usdt, get_spezsimbols_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_pzm_usdt, get_spezsimbols_pzm_usdt); //продажа

    let price_latin_pzm_usdt = date.latin;
    let get_latin_pzm_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_pzm_usdt, get_latin_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_pzm_usdt, get_latin_pzm_usdt); //продажа

    let price_kirill_pzm_usdt = date.kirill;
    let get_kirill_pzm_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_pzm_usdt, get_kirill_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_pzm_usdt, get_kirill_pzm_usdt); //продажа

    let price_big_number_pzm_usdt = date.big_number;
    let get_big_number_pzm_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_pzm_usdt, get_big_number_pzm_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_pzm_usdt, get_big_number_pzm_usdt); //продажа

//bnb_tdel
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_tdel")).click();
    let price_html_bnb_tdel = date.html;
    let get_html_bnb_tdel = date.html;
    await selectors.trade_buy(driver, price_html_bnb_tdel, get_html_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_html_bnb_tdel, get_html_bnb_tdel); //продажа

    let price_sql_bnb_tdel = date.sql;
    let get_sql_bnb_tdel= date.sql;
    await selectors.trade_buy(driver, price_sql_bnb_tdel, get_sql_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_sql_bnb_tdel, get_sql_bnb_tdel); //продажа

    let price_spezsimbols_bnb_tdel = date.spezsimbols;
    let get_spezsimbols_bnb_tdel = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_bnb_tdel, get_spezsimbols_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_bnb_tdel, get_spezsimbols_bnb_tdel); //продажа

    let price_latin_bnb_tdel = date.latin;
    let get_latin_bnb_tdel = date.latin;
    await selectors.trade_buy(driver, price_latin_bnb_tdel, get_latin_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_latin_bnb_tdel, get_latin_bnb_tdel); //продажа

    let price_kirill_bnb_tdel = date.kirill;
    let get_kirill_bnb_tdel = date.kirill;
    await selectors.trade_buy(driver, price_kirill_bnb_tdel, get_kirill_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_kirill_bnb_tdel, get_kirill_bnb_tdel); //продажа

    let price_big_number_bnb_tdel = date.big_number;
    let get_big_number_bnb_tdel = date.big_number;
    await selectors.trade_buy(driver, price_big_number_bnb_tdel, get_big_number_bnb_tdel); //торговля
    await selectors.trade_sell(driver, price_big_number_bnb_tdel, get_big_number_bnb_tdel); //продажа

//trx_tdel
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_tdel")).click();
    let price_html_trx_tdel = date.html;
    let get_html_trx_tdel = date.html;
    await selectors.trade_buy(driver, price_html_trx_tdel, get_html_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_html_trx_tdel, get_html_trx_tdel); //продажа

    let price_sql_trx_tdel = date.sql;
    let get_sql_trx_tdel = date.sql;
    await selectors.trade_buy(driver, price_sql_trx_tdel, get_sql_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_sql_trx_tdel, get_sql_trx_tdel); //продажа

    let price_spezsimbols_trx_tdel = date.spezsimbols;
    let get_spezsimbols_trx_tdel = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_trx_tdel, get_spezsimbols_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_trx_tdel, get_spezsimbols_trx_tdel); //продажа

    let price_latin_trx_tdel = date.latin;
    let get_latin_trx_tdel = date.latin;
    await selectors.trade_buy(driver, price_latin_trx_tdel, get_latin_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_latin_trx_tdel, get_latin_trx_tdel); //продажа

    let price_kirill_trx_tdel = date.kirill;
    let get_kirill_trx_tdel = date.kirill;
    await selectors.trade_buy(driver, price_kirill_trx_tdel, get_kirill_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_kirill_trx_tdel, get_kirill_trx_tdel); //продажа

    let price_big_number_trx_tdel = date.big_number;
    let get_big_number_trx_tdel= date.big_number;
    await selectors.trade_buy(driver, price_big_number_trx_tdel, get_big_number_trx_tdel); //торговля
    await selectors.trade_sell(driver, price_big_number_trx_tdel, get_big_number_trx_tdel); //продажа

//ltc_usdt")).click();
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-ltc_usdt")).click();
    let price_html_ltc_usdt = date.html;
    let get_html_ltc_usdt = date.html;
    await selectors.trade_buy(driver, price_html_ltc_usdt, get_html_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_html_ltc_usdt, get_html_ltc_usdt); //продажа

    let price_sql_ltc_usdt = date.sql;
    let get_sql_ltc_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_ltc_usdt, get_sql_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_ltc_usdt, get_sql_ltc_usdt); //продажа

    let price_spezsimbols_ltc_usdt = date.spezsimbols;
    let get_spezsimbols_ltc_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_ltc_usdt, get_spezsimbols_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_ltc_usdt, get_spezsimbols_ltc_usdt); //продажа

    let price_latin_ltc_usdt = date.latin;
    let get_latin_ltc_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_ltc_usdt, get_latin_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_ltc_usdt, get_latin_ltc_usdt); //продажа

    let price_kirill_ltc_usdt = date.kirill;
    let get_kirill_ltc_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_ltc_usdt, get_kirill_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_ltc_usdt, get_kirill_ltc_usdt); //продажа

    let price_big_number_ltc_usdt = date.big_number;
    let get_big_number_ltc_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_ltc_usdt, get_big_number_ltc_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_ltc_usdt, get_big_number_ltc_usdt); //продажа

//trx_usdt
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-trx_usdt")).click();
    let price_html_trx_usdt = date.html;
    let get_html_trx_usdt = date.html;
    await selectors.trade_buy(driver, price_html_trx_usdt, get_html_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_html_trx_usdt, get_html_trx_usdt); //продажа

    let price_sql_trx_usdt = date.sql;
    let get_sql_trx_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_trx_usdt, get_sql_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_trx_usdt, get_sql_trx_usdt); //продажа

    let price_spezsimbols_trx_usdt = date.spezsimbols;
    let get_spezsimbols_trx_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_trx_usdt, get_spezsimbols_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_trx_usdt, get_spezsimbols_trx_usdt); //продажа

    let price_latin_trx_usdt = date.latin;
    let get_latin_trx_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_trx_usdt, get_latin_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_trx_usdt, get_latin_trx_usdt); //продажа

    let price_kirill_trx_usdt = date.kirill;
    let get_kirill_trx_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_trx_usdt, get_kirill_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_trx_usdt, get_kirill_trx_usdt); //продажа

    let price_big_number_trx_usdt = date.big_number;
    let get_big_number_trx_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_trx_usdt, get_big_number_trx_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_trx_usdt, get_big_number_trx_usdt); //продажа

//eth_tdel
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_tdel")).click();
    let price_html_eth_tdel = date.html;
    let get_html_eth_tdel = date.html;
    await selectors.trade_buy(driver, price_html_eth_tdel, get_html_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_html_eth_tdel, get_html_eth_tdel); //продажа

    let price_sql_eth_tdel = date.sql;
    let get_sql_eth_tdel = date.sql;
    await selectors.trade_buy(driver, price_sql_eth_tdel, get_sql_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_sql_eth_tdel, get_sql_eth_tdel); //продажа

    let price_spezsimbols_eth_tdel = date.spezsimbols;
    let get_spezsimbols_eth_tdel = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_eth_tdel, get_spezsimbols_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_eth_tdel, get_spezsimbols_eth_tdel); //продажа

    let price_latin_eth_tdel = date.latin;
    let get_latin_eth_tdel = date.latin;
    await selectors.trade_buy(driver, price_latin_eth_tdel, get_latin_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_latin_eth_tdel, get_latin_eth_tdel); //продажа

    let price_kirill_eth_tdel = date.kirill;
    let get_kirill_eth_tdel = date.kirill;
    await selectors.trade_buy(driver, price_kirill_eth_tdel, get_kirill_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_kirill_eth_tdel, get_kirill_eth_tdel); //продажа

    let price_big_number_eth_tdel = date.big_number;
    let get_big_number_eth_tdel = date.big_number;
    await selectors.trade_buy(driver, price_big_number_eth_tdel, get_big_number_eth_tdel); //торговля
    await selectors.trade_sell(driver, price_big_number_eth_tdel, get_big_number_eth_tdel); //продажа

//
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_usdt")).click();
    let price_html_eth_usdt = date.html;
    let get_html_eth_usdt = date.html;
    await selectors.trade_buy(driver, price_html_eth_usdt, get_html_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_html_eth_usdt, get_html_eth_usdt); //продажа

    let price_sql_eth_usdt = date.sql;
    let get_sql_eth_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_eth_usdt, get_sql_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_eth_usdt, get_sql_eth_usdt); //продажа

    let price_spezsimbols_eth_usdt = date.spezsimbols;
    let get_spezsimbols_eth_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_eth_usdt, get_spezsimbols_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_eth_usdt, get_spezsimbols_eth_usdt); //продажа

    let price_latin_eth_usdt = date.latin;
    let get_latin_eth_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_eth_usdt, get_latin_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_eth_usdt, get_latin_eth_usdt); //продажа

    let price_kirill_eth_usdt = date.kirill;
    let get_kirill_eth_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_eth_usdt, get_kirill_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_eth_usdt, get_kirill_eth_usdt); //продажа

    let price_big_number_eth_usdt = date.big_number;
    let get_big_number_eth_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_eth_usdt, get_big_number_eth_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_eth_usdt, get_big_number_eth_usdt); //продажа

//bnb_usdt
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-bnb_usdt")).click();
    let price_html_bnb_usdt = date.html;
    let get_html_bnb_usdt = date.html;
    await selectors.trade_buy(driver, price_html_bnb_usdt, get_html_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_html_bnb_usdt, get_html_bnb_usdt); //продажа

    let price_sql_bnb_usdt = date.sql;
    let get_sql_bnb_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_bnb_usdt, get_sql_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_bnb_usdt, get_sql_bnb_usdt); //продажа

    let price_spezsimbols_bnb_usdt = date.spezsimbols;
    let get_spezsimbols_bnb_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_bnb_usdt, get_spezsimbols_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_bnb_usdt, get_spezsimbols_bnb_usdt); //продажа

    let price_latin_bnb_usdt = date.latin;
    let get_latin_bnb_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_bnb_usdt, get_latin_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_bnb_usdt, get_latin_bnb_usdt); //продажа

    let price_kirill_bnb_usdt = date.kirill;
    let get_kirill_bnb_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_bnb_usdt, get_kirill_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_bnb_usdt, get_kirill_bnb_usdt); //продажа

    let price_big_number_bnb_usdt = date.big_number;
    let get_big_number_bnb_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_bnb_usdt, get_big_number_bnb_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_bnb_usdt, get_big_number_bnb_usdt); //продажа

//btc_usdt
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
    let price_html_btc_usdt = date.html;
    let get_html_btc_usdt = date.html;
    await selectors.trade_buy(driver, price_html_btc_usdt, get_html_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_html_btc_usdt, get_html_btc_usdt); //продажа

    let price_sql_btc_usdt = date.sql;
    let get_sql_btc_usdt = date.sql;
    await selectors.trade_buy(driver, price_sql_btc_usdt, get_sql_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_sql_btc_usdt, get_sql_btc_usdt); //продажа

    let price_spezsimbols_btc_usdt = date.spezsimbols;
    let get_spezsimbols_btc_usdt = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_btc_usdt, get_spezsimbols_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_btc_usdt, get_spezsimbols_btc_usdt); //продажа

    let price_latin_btc_usdt = date.latin;
    let get_latin_btc_usdt = date.latin;
    await selectors.trade_buy(driver, price_latin_btc_usdt, get_latin_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_latin_btc_usdt, get_latin_btc_usdt); //продажа

    let price_kirill_btc_usdt = date.kirill;
    let get_kirill_btc_usdt = date.kirill;
    await selectors.trade_buy(driver, price_kirill_btc_usdt, get_kirill_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_kirill_btc_usdt, get_kirill_btc_usdt); //продажа

    let price_big_number_btc_usdt = date.big_number;
    let get_big_number_btc_usdt = date.big_number;
    await selectors.trade_buy(driver, price_big_number_btc_usdt, get_big_number_btc_usdt); //торговля
    await selectors.trade_sell(driver, price_big_number_btc_usdt, get_big_number_btc_usdt); //продажа

//eth_btc
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-eth_btc")).click();
    let price_html_eth_btc = date.html;
    let get_html_eth_btc = date.html;
    await selectors.trade_buy(driver, price_html_eth_btc, get_html_eth_btc); //торговля
    await selectors.trade_sell(driver, price_html_eth_btc, get_html_eth_btc); //продажа

    let price_sql_eth_btc = date.sql;
    let get_sql_eth_btc = date.sql;
    await selectors.trade_buy(driver, price_sql_eth_btc, get_sql_eth_btc); //торговля
    await selectors.trade_sell(driver, price_sql_eth_btc, get_sql_eth_btc); //продажа

    let price_spezsimbols_eth_btc = date.spezsimbols;
    let get_spezsimbols_eth_btc = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_eth_btc, get_spezsimbols_eth_btc); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_eth_btc, get_spezsimbols_eth_btc); //продажа

    let price_latin_eth_btc = date.latin;
    let get_latin_eth_btc = date.latin;
    await selectors.trade_buy(driver, price_latin_eth_btc, get_latin_eth_btc); //торговля
    await selectors.trade_sell(driver, price_latin_eth_btc, get_latin_eth_btc); //продажа

    let price_kirill_eth_btc = date.kirill;
    let get_kirill_eth_btc = date.kirill;
    await selectors.trade_buy(driver, price_kirill_eth_btc, get_kirill_eth_btc); //торговля
    await selectors.trade_sell(driver, price_kirill_eth_btc, get_kirill_eth_btc); //продажа

    let price_big_number_eth_btc = date.big_number;
    let get_big_number_eth_btc = date.big_number;
    await selectors.trade_buy(driver, price_big_number_eth_btc, get_big_number_eth_btc); //торговля
    await selectors.trade_sell(driver, price_big_number_eth_btc, get_big_number_eth_btc); //продажа

//btc_tdel
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_tdel")).click();
    let price_html_btc_tdel = date.html;
    let get_html_btc_tdel = date.html;
    await selectors.trade_buy(driver, price_html_btc_tdel, get_html_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_html_btc_tdel, get_html_btc_tdel); //продажа

    let price_sql_btc_tdel = date.sql;
    let get_sql_btc_tdel = date.sql;
    await selectors.trade_buy(driver, price_sql_btc_tdel, get_sql_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_sql_btc_tdel, get_sql_btc_tdel); //продажа

    let price_spezsimbols_btc_tdel = date.spezsimbols;
    let get_spezsimbols_btc_tdel = date.spezsimbols;
    await selectors.trade_buy(driver, price_spezsimbols_btc_tdel, get_spezsimbols_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_spezsimbols_btc_tdel, get_spezsimbols_btc_tdel); //продажа

    let price_latin_btc_tdel = date.latin;
    let get_latin_btc_tdel = date.latin;
    await selectors.trade_buy(driver, price_latin_btc_tdel, get_latin_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_latin_btc_tdel, get_latin_btc_tdel); //продажа

    let price_kirill_btc_tdel = date.kirill;
    let get_kirill_btc_tdel = date.kirill;
    await selectors.trade_buy(driver, price_kirill_btc_tdel, get_kirill_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_kirill_btc_tdel, get_kirill_btc_tdel); //продажа

    let price_big_number_btc_tdel = date.big_number;
    let get_big_number_btc_tdel = date.big_number;
    await selectors.trade_buy(driver, price_big_number_btc_tdel, get_big_number_btc_tdel); //торговля
    await selectors.trade_sell(driver, price_big_number_btc_tdel, get_big_number_btc_tdel); //продажа
    
})();