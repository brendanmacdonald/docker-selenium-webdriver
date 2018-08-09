const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    expect = require('chai').expect;

describe('Google Search', () => {

    let driver;

    before( () => {
        driver = new webdriver.Builder()
        .forBrowser('firefox')
        .forBrowser('chrome')
        .usingServer('http://localhost:4444/wd/hub')
        .build();
    });

    it('basic search', async () => {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('cheese');
        await driver.findElement(By.name('q')).sendKeys(webdriver.Key.ESCAPE);
        await driver.findElement(By.name('btnK')).click();
        await driver.getTitle().then((value) => {
            expect(value).to.equal('cheese - Google Search');
        })
    });

    after(() => driver.quit());
});