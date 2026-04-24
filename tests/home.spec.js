const { test, expect, request } = require('@playwright/test')

test('Verify Login is done', async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://eventhub.rahulshettyacademy.com/login')
    await page.getByPlaceholder('you@email.com').fill('jayant.prasad.9920@gmail.com')
    await page.locator('#password').fill('Hanumanji@1990')
    await page.locator('#login-btn').click()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('.tracking-tight').filter({ hasText: 'EventHub' })).toBeVisible()
    await context.close()
});
test('Verify Home Page WebElements', async ({ page }) => {
    await page.goto('https://eventhub.rahulshettyacademy.com/login')
    await page.getByPlaceholder('you@email.com').fill('jayant.prasad.9920@gmail.com')
    await page.locator('#password').fill('Hanumanji@1990')
    await page.locator('#login-btn').click()
    await page.waitForLoadState('networkidle')
    await page.locator('.justify-center').filter({ hasText: 'Browse Events →' })
    await page.locator('.justify-center').filter({ hasText: 'My Bookings' })
    await page.locator('.justify-center').filter({ hasText: 'Explore All Events' })
    //VERIFY ALL BOOK NOW BUTTONS ARE VISIBLE
    let counter= await page.locator('#book-now-btn').count()
    console.log(counter)
    await expect(counter).toBe(4)
    while(counter>0){
        await page.locator('#book-now-btn').nth(counter-1)
        counter--
    }
    await expect(page.locator('#nav-home')).toHaveText('Home')
    await expect(page.locator('#nav-events')).toHaveText('Events')
    await expect(page.locator('#nav-bookings')).toHaveText('My Bookings')
    await page.locator('.transition-colors').filter({ hasText: 'API Docs' })

});