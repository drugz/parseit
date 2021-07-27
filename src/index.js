const puppeteer = require('puppeteer');

(async () => {
    var fs = require('fs');
    var dir = './result';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://devconf.ru/');
    await page.emulateMediaType('screen');
    await page.pdf({
        path: dir+'/devconf.pdf',
        printBackground: true
    });
    await browser.close();
})();