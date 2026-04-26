const { test, expect, request } = require('@playwright/test')
const {homeModule}=require('../PageObjects/homePageObj.js')

test('Verify Login is done', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    const homeMod = new homeModule(page, expect)
    await homeMod.navigateToUrl()
    await homeMod.login()
    await context.close()
});
test('Verify Home Page WebElements', async ({ page }) => {
    const homeMod = new homeModule(page, expect)
    await homeMod.navigateToUrl()
    await homeMod.login()
    await homeMod.verifyheaderLinks()
    //VERIFY ALL BOOK NOW BUTTONS ARE VISIBLE
    await homeMod.countBookButton()
    await homeMod.clickonHeaderLinks()

});