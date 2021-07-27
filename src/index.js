const puppeteer = require('puppeteer');

(async () => {
    var fs = require('fs');
    var resultDir = './result';

    if (!fs.existsSync(resultDir)) {
        fs.mkdirSync(resultDir);
    }
    var dir = resultDir + "/";


    const browser = await puppeteer.launch({
        // headless: false
    });
    const page = await browser.newPage();

    await page.goto('http://devconf.ru/');
    await page.emulateMediaType('screen');
    await page.pdf({
        path: dir + 'devconf.pdf',
        printBackground: true
    });

    await page.screenshot({
        path: dir + 'screenshot.png',
        printBackground: true
    });
    await browser.close();
})();