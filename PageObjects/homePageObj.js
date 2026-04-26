class homeModule {
    constructor(page, expect) {
        this.page = page
        this.expect = expect
        this.email = this.page.getByPlaceholder('you@email.com')
        this.password = this.page.locator('#password')
        this.loginBtn = this.page.locator('#login-btn')
        this.eventHubLink = this.page.locator('.tracking-tight').filter({ hasText: 'EventHub' })
        this.BrowseEventsLink = this.page.locator('.justify-center').filter({ hasText: 'Browse Events →' })
        this.MyBookingLink = this.page.locator('.justify-center').filter({ hasText: 'My Bookings' })
        this.ExploreAllEvents = this.page.locator('.justify-center').filter({ hasText: 'Explore All Events' })
        this.HomeLink = this.page.locator('#nav-home')
        this.countOfButton = this.page.locator('#book-now-btn')
        this.EventLink = this.page.locator('#nav-events')
        this.BookingLink = this.page.locator('#nav-bookings')
        this.APIdocsLink = this.page.locator('.transition-colors').filter({ hasText: 'API Docs' })
    }
    url = 'https://eventhub.rahulshettyacademy.com/login'
    async navigateToUrl() {
        await this.page.goto(this.url)
    }

    async login() {
        await this.email.fill('jayant.prasad.9920@gmail.com')
        await this.password.fill('Hanumanji@1990')
        await this.loginBtn.click()
        await this.page.waitForLoadState('networkidle')
        await this.expect(this.eventHubLink).toBeVisible()
    }

    async verifyheaderLinks() {
        await this.BrowseEventsLink
        await this.MyBookingLink
        await this.ExploreAllEvents
    }
    async countBookButton() {
        let counter = await this.countOfButton.count()
        console.log(counter)
        await this.expect(counter).toBe(4)
        while (counter > 0) {
            await this.countOfButton.nth(counter - 1)
            counter--
        }
    }
    async clickonHeaderLinks() {
        await this.expect(this.HomeLink).toHaveText('Home')
        await this.expect(this.EventLink).toHaveText('Events')
        await this.expect(this.BookingLink).toHaveText('My Bookings')
        await this.APIdocsLink
    }

}
module.exports = { homeModule }
