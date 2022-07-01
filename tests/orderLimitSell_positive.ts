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

        //выбор пары
        await driver.findElement(By.className("SELECTOR-CHECK-PAIR-btc_usdt")).click();
        await awaity.market(driver);

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
       




    //ввод 1
    let price = 1;
    let get = 1;
    await selectors.trade_sell(driver, price, get); //торговля
        await driver.sleep(5000);
        let balancBAfterS_1 = await selectors.balancBuy(driver).getText(); //получение balancBAfterS в строке
        balancBAfterS_1 = balancBAfterS_1.slice(0,-4);
        let balancBAfterSStr_1 = balancBAfterS_1.replace(/[\s.]/g, '');
        balancBAfterSStr_1 = balancBAfterSStr_1.replace(/\,/g, '.');
        balancBAfterS_1 = +balancBAfterS_1;

        let balancSAfterS_1 = await selectors.balancSell(driver).getText(); //получение balancBAfterS в строке
        balancSAfterS_1 = balancSAfterS_1.slice(0,-4);
        let balancSAfterSStr_1 = balancSAfterS_1.replace(/[\s.]/g, '');
        balancSAfterSStr_1 = balancSAfterSStr_1.replace(/\,/g, '.');
        balancSAfterS_1 = +balancSAfterS_1;       




    
    let balancBAfterSstr:number;
    let balancSAfterSstr:number;
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
            await console.log('trade_sell posible');
            await selectors.trade_sell(driver, price, get); //торговля
            await driver.sleep(5000);
                let balancBAfterS = await selectors.balancBuy(driver).getText(); //получение balancBAfterS в строке
                balancBAfterS = balancBAfterS.slice(0,-4);
                let balancBAfterSStr = balancBAfterS.replace(/[\s.]/g, '');
                balancBAfterSStr = balancBAfterSStr.replace(/\,/g, '.');
                balancBAfterSstr = +balancBAfterSStr;

                let balancSAfterS = await selectors.balancSell(driver).getText(); //получение balancBAfterS в строке
                balancSAfterS = balancSAfterS.slice(0,-4);
                let balancSAfterSStr = balancSAfterS.replace(/[\s.]/g, '');
                balancSAfterSStr = balancSAfterSStr.replace(/\,/g, '.');
                balancSAfterSstr = +balancSAfterSStr;       

        } 
        else if (balancBStr < totalB)
        {
            await console.log('totalB > balancB; trade_buy imposible');
        }
       
    }

//ввод decimal
    let price_decimal = 0.00000001;
    let get_decimal = 0.00000001;
    await selectors.trade_sell(driver,  price_decimal, get_decimal); //торговля
       let balancBAfterS = await selectors.balancBuy(driver).getText(); //получение balancBAfterS в строке
                balancBAfterS = balancBAfterS.slice(0,-4);
                let balancBAfterSStr = balancBAfterS.replace(/[\s.]/g, '');
                balancBAfterSStr = balancBAfterSStr.replace(/\,/g, '.');
                balancBAfterSstr = +balancBAfterSStr;

                let balancSAfterS = await selectors.balancSell(driver).getText(); //получение balancBAfterS в строке
                balancSAfterS = balancSAfterS.slice(0,-4);
                let balancSAfterSStr = balancSAfterS.replace(/[\s.]/g, '');
                balancSAfterSStr = balancSAfterSStr.replace(/\,/g, '.');
                balancSAfterSstr = +balancSAfterSStr;      

    // логи
    console.log()
   
   
})();