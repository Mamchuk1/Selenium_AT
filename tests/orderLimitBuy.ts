import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');

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


    await enterP.enterThree(driver);   
    await awaity.market(driver);
    await console.log('enter success');

    //взятие баланса
    let  balancB = await selectors.balancBuy(driver).getText();
  
    let  balancS = await selectors.balancSell(driver).getText();
   
    //перевод строк в числа
        //перевод balancB
        balancB = balancB.slice(0,-4);
        let balancBStr = balancB.replace(/[\s.]/g, '');
        balancBStr = balancBStr.replace(/\,/g, '.');
        let balancBstr:number = +balancBStr;
       
        //перевод balancS
        balancS  = balancS .slice(0,-4);
        let balancSStr = balancS.replace(/[\s.]/g, '');
        balancSStr = balancSStr.replace(/\,/g, '.');
        let balancSstr:number = +balancSStr;
       

    //выбор пары
    await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
    await awaity.market(driver);


    //ввод 1
    let price = 1;
    let get = 1;
    await selectors.trade_buy(driver, price, get); //торговля
        await driver.sleep(5000);
        let balancBAfterB_1 = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
        balancBAfterB_1 = balancBAfterB_1.slice(0,-4);
        let balancBAfterBStr_1 = balancBAfterB_1.replace(/[\s.]/g, '');
        balancBAfterBStr_1 = balancBAfterBStr_1.replace(/\,/g, '.');
        balancBAfterB_1 = +balancBAfterB_1;

        let balancSAfterB_1 = await selectors.balancSell(driver).getText(); //получение balancBAfterB в строке
        balancSAfterB_1 = balancSAfterB_1.slice(0,-4);
        let balancSAfterBStr_1 = balancSAfterB_1.replace(/[\s.]/g, '');
        balancSAfterBStr_1 = balancSAfterBStr_1.replace(/\,/g, '.');
        balancSAfterB_1 = +balancSAfterB_1;       




    
    let balancBAfterBstr:number;
    let balancSAfterBstr:number;
    //цикл для торговли и сравнения
    const t = 2;
    let arrayData: Iprimer[] = [] 
    for (let i=0; i < t; i++) {
        const min = 0.1; //рандом
        const max = 0.2;
        let price = min - 0.05 + Math.random() * (max - min + 1);
        let get = min - 0.05 + Math.random() * (max - min + 1);

        let  totalB = get * price; //получение total
        await console.log(totalB, 'totalB'); 

        if (balancBstr> totalB) //постановка условий
        {
            await console.log('trade_buy posible');
            await selectors.trade_buy(driver, price, get); //торговля
            await driver.sleep(5000);
                let balancBAfterB = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
                balancBAfterB = balancBAfterB.slice(0,-4);
                let balancBAfterBStr = balancBAfterB.replace(/[\s.]/g, '');
                balancBAfterBStr = balancBAfterBStr.replace(/\,/g, '.');
                balancBAfterBstr = +balancBAfterBStr;

                let balancSAfterB = await selectors.balancSell(driver).getText(); //получение balancBAfterB в строке
                balancSAfterB = balancSAfterB.slice(0,-4);
                let balancSAfterBStr = balancSAfterB.replace(/[\s.]/g, '');
                balancSAfterBStr = balancSAfterBStr.replace(/\,/g, '.');
                balancSAfterBstr = +balancSAfterBStr;       

        } 
        else if (balancBStr < totalB)
        {
            await console.log('totalB > balancB; trade_buy imposible');
        }
       
    }

//ввод decimal
    let price_decimal = 0.00000001;
    let get_decimal = 0.00000001;
    await selectors.trade_buy(driver,  price_decimal, get_decimal); //торговля
        await driver.sleep(5000);
        let balancBAfterB_decimal = await selectors.balancBuy(driver).getText(); //получение balancBAfterB в строке
        balancBAfterB_decimal = balancBAfterB_decimal.slice(0,-4);
        let balancBAfterBStr_decimal = balancBAfterB_decimal.replace(/[\s.]/g, '');
        balancBAfterBStr_decimal = balancBAfterBStr_decimal.replace(/\,/g, '.');
        balancBAfterB_decimal = +balancBAfterB_decimal;

        let balancSAfterB_decimal = await selectors.balancSell(driver).getText(); //получение balancBAfterB в строке
        balancSAfterB_decimal = balancSAfterB_decimal.slice(0,-4);
        let balancSAfterBStr_decimal = balancSAfterB_decimal.replace(/[\s.]/g, '');
        balancSAfterBStr_decimal = balancSAfterBStr_decimal.replace(/\,/g, '.');
        balancSAfterB_decimal = +balancSAfterB_decimal;   

    // логи
    console.log()
   
   
})();