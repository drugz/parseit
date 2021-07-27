const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch() ; 
  const page = await browser.newPage();

  await page.goto('http://devconf.ru/') ; 
  await page.emulateMediaType('screen') ; 
  await page.pdf({
    path: './devconf.pdf', 
    printBackground: true 
  });
await browser.close() ;
})();