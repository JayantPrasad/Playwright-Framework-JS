class apiDocPage {
    constructor(page, expect,context) {
        this.context=context
        this.page = page
        this.expect = expect
        this.Apidocclicklink = page.locator('.transition-colors').filter({ hasText: 'API Docs' })

    }
    async validatenextpageTitle() {
        await this.page.waitForLoadState('networkidle')
        const [swaggerPage] = await Promise.all([
            this.context.waitForEvent('page'),
            await this.Apidocclicklink.click()])
        await this.expect(swaggerPage).toHaveTitle('EventHub API Docs')
    }
}
module.exports={apiDocPage}