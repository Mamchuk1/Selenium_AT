import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
import {urlD, mail, pass} from './datas/data';

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');
require('./datas/data');

export async function enterThree(driver) {
   try {
    //вход 
     await driver.manage().window().maximize();
     await driver.get(urlD);
     await driver.sleep(5000);
    
     await selectors.enter(driver).click();
     await driver.sleep(1000); 

     
     await selectors.prinim1(driver).click();
    

     await selectors.capca(driver).click();    
     await selectors.email(driver).sendKeys(mail);
     await driver.sleep(1000);
     await selectors.password(driver).sendKeys(pass);
     await driver.sleep(1000);
     
     await selectors.enter2(driver).click();
     await selectors.wait_prinim2(driver);
     
     await selectors.prinim2(driver).click();
     }
     catch (err) {
console.log (err)
     }
     finally {
        await driver.sleep(5000); 
        
     }
} 

