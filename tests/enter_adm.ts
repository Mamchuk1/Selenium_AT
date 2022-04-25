import { Builder, By, Key, until } from 'selenium-webdriver';
import ('chromedriver');
import {urlAdmDev, mailAdmDev, passAdmDev} from './datas/data';

//import speakeasy from "@levminer/speakeasy";
const speakeasy = require('speakeasy');

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
var secret = speakeasy.generateSecret();
    let token1 = speakeasy.totp({
    secret: 'IFHHAMJ6HFESGLDPIRAHOUBDNZ6XOQ3SIF4VCYTGIA6DKP3SORAA',
        encoding: 'base32',
        
    })

let selectors = require('./datas/selectors');
let awaity = require('./datas/awaity');

require('./datas/data');

export async function AdmJoin(driver){
       // вход в админку
       await driver.manage().window().maximize();
       await driver.get(urlAdmDev);
       await driver.sleep(5000);

       await driver.findElement(By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[1]/div/input")).sendKeys( 'royihi4866@jasmne.com');
       await driver.findElement(By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[2]/div/input")).sendKeys('qwery123');
       await driver.findElement(By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[2]/div/div[3]/div/input")).sendKeys(token1);
       await driver.findElement(By.xpath("/html/body/div/div/div/div[3]/div/div/div/div/form/div/div[3]/div/div/button")).click();
   
    }