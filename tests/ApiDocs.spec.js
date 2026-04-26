const { test, expect } = require('@playwright/test')
const {homeModule} = require('../PageObjects/homePageObj.js')
const {apiDocPage} = require('../PageObjects/ApidocsPageobject.js')


test('Navigation to new page through API docs', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    const homeMod = new homeModule(page, expect)
    const apiDoc = new apiDocPage(page, expect, context)
    await homeMod.navigateToUrl()
    await homeMod.login()
    await apiDoc.validatenextpageTitle()

})