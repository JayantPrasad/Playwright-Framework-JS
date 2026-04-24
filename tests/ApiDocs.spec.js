const { test, expect} = require('@playwright/test')

test('Navigation to new page through API docs', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://eventhub.rahulshettyacademy.com/login')
    await page.getByPlaceholder('you@email.com').fill('jayant.prasad.9920@gmail.com')
    await page.locator('#password').fill('Hanumanji@1990')
    await page.locator('#login-btn').click()
    await page.waitForLoadState('networkidle')
    const [swaggerPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('.transition-colors').filter({ hasText: 'API Docs' }).click()])
    await expect(swaggerPage).toHaveTitle('EventHub API Docs')
})